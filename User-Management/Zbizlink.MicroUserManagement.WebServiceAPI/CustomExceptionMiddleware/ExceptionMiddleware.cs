using System;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Threading.Tasks;
using Zbizlink.MicroUserManagement.LoggerService.Contracter;
using Zbizlink.MicroUserManagement.WorkerService.ViewModels;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.CustomExceptionMiddleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILoggerManager _logger;

        public ExceptionMiddleware(RequestDelegate next, ILoggerManager logger)
        {
            _logger = logger;
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong: {ex}");
                await HandleExceptionAsync(httpContext, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            return context.Response.WriteAsync(new ClientResponse()
            {
                
                code = Zbizlink.MicroUserManagement.WorkerService.Enum.WebApiResponseCode.ErrorCode,
                message = "Internal Zdaas Web API Error, try later"
            }.ToString());
        }
    }
}
