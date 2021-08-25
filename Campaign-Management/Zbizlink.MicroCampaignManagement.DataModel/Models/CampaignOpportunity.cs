using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCampaignManagement.DataModel.Models
{
    public partial class CampaignOpportunity
    {
        public decimal CampaignOpportunityId { get; set; }
        public string SentUserList { get; set; }
        public int? CampaignSentStatus { get; set; }
        public DateTime? CampaignSentDate { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public decimal? OpportunityId { get; set; }
        public string OpportunityName { get; set; }
    }
}
