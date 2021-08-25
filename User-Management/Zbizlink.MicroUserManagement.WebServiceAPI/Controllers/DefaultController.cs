using System;
using System.Threading.Tasks;
using MassTransit;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Polly;
using Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Grpc.Protos;
using Zbizlink.PollyResilience;
using System.Collections.Generic;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;
using MassTransit.Courier;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;
using System.Net.Http;
using Grpc.Net.Client.Web;
using Grpc.Net.Client;
using static Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Grpc.Protos.UserRegistrationEmailService;
using static Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.CampaignOpportunityCreationService;
using Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private readonly ISendEndpointProvider _sendEndpointProvider;

        private readonly IAsyncPolicy _circuitBreaker;
        public DefaultController(IOptions<AppSettings> appSettings, ISendEndpointProvider sendEndpointProvider)
        {
            _appSettings = appSettings.Value;
            _sendEndpointProvider = sendEndpointProvider;
            _circuitBreaker = PollyCircuitBreaker.CircuitBreakerGrpcCall(4, 15);
        }
        // GET: api/Default
        [HttpGet]
        public async Task<object> Get()
        {
            //SendEmailJobStatus sendEmail = new SendEmailJobStatus("False");

            #region RMQ Start
            var endPoint = await _sendEndpointProvider.GetSendEndpoint(new Uri("queue:" + "test"));
            //await endPoint.Send<RegistrationSuccessMessageModel>(new
            //{
            //    MessageId = 56465488,
            //    Message = "test123jj test"
            //});
            await endPoint.Send<IEmailJobStatusStartedEvent>(new
            {
                CampaignOpportunityId = Guid.NewGuid()
            });
            return null;
            #endregion  RMQ End


            //var httpHandler = new HttpClientHandler();
            //httpHandler.ServerCertificateCustomValidationCallback = HttpClientHandler.DangerousAcceptAnyServerCertificateValidator;

            //var handler = new GrpcWebHandler(GrpcWebMode.GrpcWebText, httpHandler);
            //var channel = GrpcChannel.ForAddress("https://localhost:5001", new GrpcChannelOptions
            //{
            //    HttpClient = new HttpClient(handler)
            //});
            //var client = new UserRegistrationEmailServiceClient(channel);
            //var request = new UserRegistrationSuccessEmailRequest
            //{
            //    FirstName = "imran",
            //    LastName = "munir alvi",
            //    Email = "mahmood@zd-techsolutions.com",
            //    Message = "Test message",
            //};

            //var response = await _circuitBreaker
            //        .ExecuteAsync(async () => await client.SendUserRegistrationSuccessEmailAsync(request));
            //return response;
            /*

             var client = new CampaignOpportunityCreationServiceClient(channel);
             var input = new Opportunity
             {
                 TransactionId = Guid.NewGuid().ToString(),
                 UserId = "11",
                 OpportunityId = "22",
                 OpportunityName = "ControllerTest"
             };

             var response = await _circuitBreaker
                     .ExecuteAsync(async () => await client.CreateCampaignOpportunityServiceAsync(input));
             return response;

             */
        }

        // GET: api/Default/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Default
        [HttpPost("PostMethod")]
        public IEnumerable<string> Post()
        {
            return new string[] { "value1", "value2" };
        }

        // PUT: api/Default/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}