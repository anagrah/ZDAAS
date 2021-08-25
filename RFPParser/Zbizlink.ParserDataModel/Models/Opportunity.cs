using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class Opportunity
    {
        public Opportunity()
        {
            CampaignOpportunity = new HashSet<CampaignOpportunity>();
            OpportunityHeading = new HashSet<OpportunityHeading>();
            RfpcategoryData = new HashSet<RfpcategoryData>();
            Rfpdocument = new HashSet<Rfpdocument>();
            Rfpsummary = new HashSet<Rfpsummary>();
        }

        public decimal OpportunityId { get; set; }
        public string SolicitationNumber { get; set; }
        public decimal? CompanyId { get; set; }
        public decimal? ClientId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public decimal? RfpdocumentId { get; set; }
        public decimal? SegmentId { get; set; }
        public bool? OldOpportunity { get; set; }
        public string OpportunityName { get; set; }
        public decimal? UserId { get; set; }
        public int? OpportunityTypeId { get; set; }
        public int? AgencyId { get; set; }
        public int? StateId { get; set; }
        public int? ContractVehicleId { get; set; }
        public int? IndustryId { get; set; }

        public virtual OpportunityType OpportunityType { get; set; }
        public virtual States State { get; set; }
        public virtual ICollection<CampaignOpportunity> CampaignOpportunity { get; set; }
        public virtual ICollection<OpportunityHeading> OpportunityHeading { get; set; }
        public virtual ICollection<RfpcategoryData> RfpcategoryData { get; set; }
        public virtual ICollection<Rfpdocument> Rfpdocument { get; set; }
        public virtual ICollection<Rfpsummary> Rfpsummary { get; set; }
    }
}
