using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.RFPCommon.Models;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPServices.Models;
using Zdaas.RFPServices.ViewModels;
using Zdaas.RFPServices.ViewModels.Opportunity;

namespace Zdaas.RFPServices.Contracts
{
   public interface IOpportunityService
    {
        ClientResponse GetSavedEmptyOpportunity(decimal opportunityId);
        Task<ClientResponse> CreateEmptyOpportunity(string transactionId, string fileNameJsonList, string opportunityName, int? agencyId, int? stateId, int? contractVehicleId, int? industryId, string type, IFormFile iFormFile,
             decimal userId, decimal ClientId, decimal SegmentId, decimal companyID, bool CampaignUser, ZdaasAppSettings zdaasAppSettings);
        ClientResponse Publish(decimal documentId, decimal userId, decimal companyId, decimal clientId, decimal SegmentId//, 
            //out OpportunityEntity opportunityEntity,
            //out List<OpportunitySummaryViewModel> opportunitySummary, 
            //out List<CapabilityViewModel> capabilityVMList,
            //out List<CheckListViewModel> checkListVMList,
            //out List<JobTitleModel> jobTitleModelList,           
            //out List<OpportunityDocument> opportunityDocument
            );
        OpportunityEntity GetOpportunity(decimal RfpdocumentId);
        Task<ClientResponse> UpdataFilePath(OpportunityDocument[] opportunityDocumentList);
    }
}
