using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.CMCommon.Models;
using Zbizlink.MicroCampaignManagement.WorkerService.ViewModels;

namespace Zbizlink.MicroCampaignManagement.WorkerService.Contracts
{
   public interface IRMqService
    {
        System.Threading.Tasks.Task<ClientResponse> SendEmailForCampaignAsync(string transactionId, AppSettings appSettings, EmailCampaign emailCampaign);
    }
}
