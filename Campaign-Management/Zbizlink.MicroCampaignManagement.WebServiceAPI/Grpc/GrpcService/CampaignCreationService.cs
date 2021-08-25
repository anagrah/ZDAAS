using Grpc.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.MicroCampaignManagement.LoggerService.Contracter;
using Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto;

using Zbizlink.MicroCampaignManagement.WorkerService.ViewModels;
using Zbizlink.MicroCampaignManagement.WorkerService.Contracts;
using AutoMapper;
using Zbizlink.CMCommon.ViewModels;
using System.Reflection;

namespace Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcService
{
    public class CampaignCreationService : CampaignOpportunityCreationService.CampaignOpportunityCreationServiceBase
    {

        private readonly ILoggerManager _loggerManager;
        private ICampaignManagementService _campaignManagementService;
        private IMapper _mapper;
        
        public CampaignCreationService(ILoggerManager loggerManager,
            IMapper mapper,
            ICampaignManagementService campaignManagementService)
        {
            _loggerManager = loggerManager;
            _mapper = mapper;
            _campaignManagementService = campaignManagementService;
        }

        public override Task<CampaignCreationResponse> CreateCampaignOpportunityService(Opportunity opportunity, ServerCallContext context)
        {


            _loggerManager.logTransation(opportunity.TransactionId, this.GetType(), MethodBase.GetCurrentMethod());
            decimal OpportunityId;
            decimal userId;

            if (decimal.TryParse(opportunity.UserId, out userId) == false)
            {
                return Task.FromResult(new CampaignCreationResponse
                {
                    Code = false
                });
            }
            if (decimal.TryParse(opportunity.OpportunityId, out OpportunityId) == false)
            {
                return Task.FromResult(new CampaignCreationResponse
                {
                    Code = false
                });
            }

            CampaignOpportunityInsert campaignOpportunityInsert = new CampaignOpportunityInsert();
            campaignOpportunityInsert.OpportunityId = OpportunityId;
            campaignOpportunityInsert.UserId = userId;
            campaignOpportunityInsert.OpportunityName = opportunity.OpportunityName;
            //CampaignOpportunityInsert campaignOpportunityInsert = _mapper.Map<CampaignOpportunityInsert>(opportunity);

            var response = _campaignManagementService.SaveCampaignOpportunity(opportunity.TransactionId, campaignOpportunityInsert);

            if(response.code == WorkerService.Enum.WebApiResponseCode.Success)
            {
                return Task.FromResult(new CampaignCreationResponse
                {
                    Code = true
                });
            }

            return Task.FromResult(new CampaignCreationResponse
            {
                Code = false
            });

        }

        public override Task<CampaignCreationResponse> UpdateCampaignOpportunityService(Opportunity opportunity, ServerCallContext context)
        {

            CampaignOpportunityInsert campaignOpportunityInsert = _mapper.Map<CampaignOpportunityInsert>(opportunity);

            var response = _campaignManagementService.UpdateCampaignOpportunity(campaignOpportunityInsert);

            return Task.FromResult(new CampaignCreationResponse
            {
                Code = false
            });
        }
    }
}
