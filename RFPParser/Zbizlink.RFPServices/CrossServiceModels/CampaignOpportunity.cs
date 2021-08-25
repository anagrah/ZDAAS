using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.RFPServices.CrossServiceModels
{
   public class CampaignOpportunity
    {
        public decimal OpportunityId { get; set; }
        public string OpportunityName { get; set; }
        public DateTime OpportunityCreatedDate { get; set; }
        public string SentUserList { get; set; }
        public DateTime CampaignSentDate { get; set; }
        public bool CampaignSent { get; set; }
    }
}
