using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.CMCommon.Models;
using Zbizlink.CMCommon.ViewModels;
using Zbizlink.MicroCampaignManagement.WorkerService.ViewModels;

namespace Zbizlink.MicroCampaignManagement.WorkerService.Contracts
{
   public  interface ICampaignManagementService
    {
        ClientResponse SaveCampaignOpportunity(string TransactionId, CampaignOpportunityInsert opportunity);
        ClientResponse GetCampaignOpportunityList();
        bool UpdateCampaignOpportunity(CampaignOpportunityInsert campaignOpportunityInsert);
        bool UpdateCampaignEmailStatusStarted(decimal CampaignOpportunityId, string EmailAddressList);

        bool UpdateCampaignEmailStatusFalseOrTrue(string CampaignOpportunityId, bool status);
        public bool ExecuteLeadsFuntionality(EmailCampaign emailCampaign, AppSettings appSettings);
        bool IsEmailExists(string apikey, string email, string serviceUri);
        public bool PushToLemList(string firstname, string lastname, string companyName, string body, AppSettings appsetting, string EmailId, string CampaignId);
        public string CampaignList(AppSettings appSettings);
    }
}
