using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using Grpc.Net.Client;
using Grpc.Net.Client.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Polly;
using Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto;
using Zbizlink.PollyResilience;
using Zbizlink.RFPCommon.Models;
using Zbizlink.RFPServices.Contracts;
using Zdaas.LoggerContracts;

using Zdaas.RFPServices.Contracts;
using Zdaas.RFPServices.Models;

using Zdaas.RFPServices.ViewModels;
using Zdaas.RFPWebAPI.Extensions;
using static Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.CampaignOpportunityCreationService;
using grpcProto = Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Zdaas.RFPWebAPI.Controllers
{
    [Route("api/Opportunity")]
    public class OpportunityController : Controller
    {

        private IOpportunityService _opportunityService;
        private ILoggerManager _logger;
        private ZdaasAppSettings _zdaasAppSettings;
        private readonly IAsyncPolicy _circuitBreaker;
        
        public OpportunityController(IOpportunityService opportunityService, ILoggerManager logger)
        {
            _opportunityService = opportunityService;
            _logger = logger;
            _circuitBreaker = PollyCircuitBreaker.CircuitBreakerGrpcCall(5, 30);
            

        }

        [HttpPost("CreateEmptyOpportunity"), DisableRequestSizeLimit]
/*        string fileNameJsonList, string opportunityName, int? agencyId,
            int? stateId, int? contractVehicleId, int? industryId, string type, IFormFile file,
            decimal companyID, decimal userId, decimal ClientId, decimal SegmentId*/
        public async Task<IActionResult> CreateEmptyOpportunity(string fileNameJsonList, string opportunityName, int? agencyId,
            int? stateId, int? contractVehicleId, int? industryId, string type, IFormFile file,
            decimal companyID, decimal userId, decimal ClientId, decimal SegmentId, bool CampaignUser)
        {
            

            string transactionId = Guid.NewGuid().ToString();
            Dictionary<string, object> parms = new Dictionary<string, object>();
            parms.Add("File", file.FileName);
            parms.Add("companyID", companyID);
            parms.Add("userId", userId);
            _logger.logTransation(transactionId, this.GetType(), MethodBase.GetCurrentMethod(), parms);

            var response = await Task<ClientResponse>.Run(() => (_opportunityService.CreateEmptyOpportunity(transactionId, fileNameJsonList, opportunityName, agencyId, stateId, contractVehicleId, industryId, type, file,
                 userId, ClientId, SegmentId, companyID, CampaignUser , ServiceExtensions.ZdaasAppSettings)));


            //============================================
            //var httpHandler = new HttpClientHandler();
            //httpHandler.ServerCertificateCustomValidationCallback = HttpClientHandler.DangerousAcceptAnyServerCertificateValidator;


            //var handler = new GrpcWebHandler(GrpcWebMode.GrpcWebText, httpHandler);
            //var channel = GrpcChannel.ForAddress("https://tcampaign.zbizlink.com:5005", new GrpcChannelOptions
            //{
            //    HttpClient = new HttpClient(handler)
            //});


            //var client = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.CampaignOpportunityCreationService.CampaignOpportunityCreationServiceClient(channel);


            //var input = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.Opportunity
            //{
            //    TransactionId = transactionId,
            //    UserId = "11",
            //    OpportunityId = "22",
            //    OpportunityName = "ControllerTest"
            //};

            //_logger.LogInfo(transactionId + " : send to grpc server https://tcampaign.zbizlink.com:5005");

            //grpcProto.CampaignCreationResponse campaignCreationResponse = await _circuitBreaker
            //        .ExecuteAsync(async () => await client.CreateCampaignOpportunityServiceAsync(input));
            //_logger.LogInfo(transactionId + " : out to grpc server");
            //if (campaignCreationResponse.Code == true)
            //{
            //    _logger.LogInfo("campaignCreationResponse.Code : " + campaignCreationResponse.Code);
            //    //return Utility.GenerateResponse(Enum.WebApiResponseCode.Success);
            //}

            //============================================

            //============================================
            //var httpHandler = new HttpClientHandler();
            //httpHandler.ServerCertificateCustomValidationCallback = HttpClientHandler.DangerousAcceptAnyServerCertificateValidator;

            //var handler = new GrpcWebHandler(GrpcWebMode.GrpcWebText, httpHandler);
            //var channel = GrpcChannel.ForAddress("https://localhost:5001", new GrpcChannelOptions
            //{
            //    HttpClient = new HttpClient(handler)
            //});

            //var client = new CampaignOpportunityCreationServiceClient(channel);
            //var input = new Opportunity
            //{
            //    TransactionId = transactionId,
            //    UserId = "11",
            //    OpportunityId = "22",
            //    OpportunityName = "ControllerTest"
            //};

            //_logger.LogInfo(transactionId + " : send to grpc server https://localhost:5001");
            //grpcProto.CampaignCreationResponse campaignCreationResponse = await _circuitBreaker
            //        .ExecuteAsync(async () => await client.CreateCampaignOpportunityServiceAsync(input));

            //_logger.LogInfo(transactionId + " : end to grpc server");
            //if (campaignCreationResponse.Code == true)
            //{
            //    _logger.LogInfo("campaignCreationResponse.Code : " + campaignCreationResponse.Code);
            //    //return Utility.GenerateResponse(Enum.WebApiResponseCode.Success);
            //}

            //============================================

            //using var channel = GrpcChannel.ForAddress("https://localhost:5001");

            //var client = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.CampaignOpportunityCreationService.CampaignOpportunityCreationServiceClient(channel);
            //var input = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.Opportunity
            //{
            //    TransactionId = transactionId,
            //    UserId = "11",
            //    OpportunityId = "22",
            //    OpportunityName = "ControllerTest"
            //};

            //grpcProto.CampaignCreationResponse campaignCreationResponse = await _circuitBreaker
            //        .ExecuteAsync(async () => await client.CreateCampaignOpportunityServiceAsync(input));

            //if (campaignCreationResponse.Code == true)
            //{
            //    //return Utility.GenerateResponse(Enum.WebApiResponseCode.Success);
            //}

            return Json(response);
        }

        [HttpPost("publish"), DisableRequestSizeLimit]
        public async Task<IActionResult> Publish(decimal OpportunityId, decimal userId, decimal companyId, decimal clientId, decimal SegmentId)
        {
            _logger.LogInfo("In db class = OpportunityController : method = Publish log 1 , OpportunityId " + OpportunityId + ":" + DateTime.Now);

            var response = await Task<ClientResponse>.Run(() => (_opportunityService.Publish(OpportunityId, userId, companyId, clientId, SegmentId)));

            _logger.LogInfo("end db class = OpportunityController : method = Publish log 2 " + DateTime.Now);


            return Json(response);

        }

        [HttpPost("updateFilePath")]
        public async Task<IActionResult> UpdataFilePath([FromBody] OpportunityDocument[] opportunityDocumentList)
        {

            var response = await Task.Run(() => (_opportunityService.UpdataFilePath(opportunityDocumentList)));

            return Json(response);
        }


        [HttpGet("getSavedEmptyOpportunity")]
        public async Task<IActionResult> GetSavedEmptyOpportunity(decimal opportunityId)
        {
            _logger.LogInfo("In Class = OpportunityController Method Name = GetSavedEmptyOpportunity, Parm:  opportunityId = " + opportunityId.ToString());

            var response = await Task<ClientResponse>.Run(() => (_opportunityService.GetSavedEmptyOpportunity(opportunityId)));

            _logger.LogInfo("out Class = OpportunityController Method Name = GetSavedEmptyOpportunity");
            return Ok(response);


        }
    }

}
