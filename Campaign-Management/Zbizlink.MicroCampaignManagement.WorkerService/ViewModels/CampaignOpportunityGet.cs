using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroCampaignManagement.WorkerService.ViewModels
{
   public class CampaignOpportunityGet
    {
        public decimal CampaignOpportunityID { get; set; }
        public decimal? OpportunityId { get; set; }
        public string OpportunityName { get; set; }
        public string SentUserList { get; set; }
        public int? CampaignSentStatus { get; set; }
        public DateTime CampaignSentDate { get; set; }

        public DateTime? CreatedDate { get; set; }

    }
}
