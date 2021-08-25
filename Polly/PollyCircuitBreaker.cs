using Grpc.Core;
using Polly;
using Polly.CircuitBreaker;
using Polly.Extensions.Http;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;

namespace Zbizlink.PollyResilience
{
    public static class PollyCircuitBreaker
    {
        static AsyncCircuitBreakerPolicy<HttpResponseMessage> breakerPolicy;
       
        public static IAsyncPolicy<HttpResponseMessage> GetCircuitBreaker(int exceptionsAllowed,int durationInSeconds)
        {
            return HttpPolicyExtensions
                    .HandleTransientHttpError()
                    .CircuitBreakerAsync(exceptionsAllowed, TimeSpan.FromSeconds(durationInSeconds),
                    (ex, t) =>
                    {
                        Console.WriteLine("Circuit broken .. !");
                    },
                    () =>
                    {
                        Console.WriteLine("Circuit reset .. !");
                    });
        }

        //Grpc retry call using waitandretry async
        public static IAsyncPolicy CircuitBreakerGrpcCall(int exceptionAllowed, int durationInSeconds)
        { 
                return Policy
                        .Handle<RpcException>(rpcException => IsTransient(rpcException.StatusCode))
                        .Or<RpcException>(IsRemoteForcedConnection)
                        .Or<HttpRequestException>()
                         .WaitAndRetryAsync(exceptionAllowed, (input) => TimeSpan.FromSeconds(durationInSeconds + input), (result, timeSpan, retryCount, context) =>
                         {
                             Console.WriteLine($"Request failed. Retry Count - {retryCount} - time {timeSpan}");

                         });
        }
        private static bool IsTransient(StatusCode status)
        {
            if (status == StatusCode.Unavailable)
                return true;
            if (status == StatusCode.DeadlineExceeded)
                return true;
            return false;
        }

        private static bool IsRemoteForcedConnection(RpcException rpcException)
        {
            return rpcException.StatusCode == StatusCode.Internal
                    && rpcException.Message.Contains("System.Net.Sockets.SocketException (10061)");
        }




        //CircuitBreaker Https Retry call
        public static AsyncCircuitBreakerPolicy<HttpResponseMessage> CircuitBreakerHttpCall(int exceptionAllowed, int durationInSeconds)
                {
                    return breakerPolicy = Policy
                                .HandleResult<HttpResponseMessage>(r => !r.IsSuccessStatusCode)
                                .CircuitBreakerAsync(exceptionAllowed, TimeSpan.FromSeconds(durationInSeconds),
                                OnBreak, OnReset, OnHalfOpen);
                }

        private static void OnReset()
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("On Reset");
        }

        private static void OnHalfOpen()
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine("Half Open");
            Console.ResetColor();
            breakerPolicy.Reset();
        }

        private static void OnBreak(DelegateResult<HttpResponseMessage> arg1, TimeSpan arg2)
        {
            Console.WriteLine($"Break - break state {breakerPolicy.CircuitState}");
        }
    }
}
