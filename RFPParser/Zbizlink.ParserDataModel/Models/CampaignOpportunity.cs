using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class CampaignOpportunity
    {
        public decimal CampaignOpportunityId { get; set; }
        public string SentUserList { get; set; }
        public bool? CampaignSent { get; set; }
        public DateTime? CampaignSentDate { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public decimal? OpportunityId { get; set; }

        public virtual Opportunity Opportunity { get; set; }
    }
}
