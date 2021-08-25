using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class OpportunityType
    {
        public OpportunityType()
        {
            BridgeSummarySynonymOpportunityType = new HashSet<BridgeSummarySynonymOpportunityType>();
            BridgeSynonymOpportunityType = new HashSet<BridgeSynonymOpportunityType>();
            Opportunity = new HashSet<Opportunity>();
        }

        public int OpportunityTypeId { get; set; }
        public string OpportunityTypeName { get; set; }
        public int? OpportunityTypeCode { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual ICollection<BridgeSummarySynonymOpportunityType> BridgeSummarySynonymOpportunityType { get; set; }
        public virtual ICollection<BridgeSynonymOpportunityType> BridgeSynonymOpportunityType { get; set; }
        public virtual ICollection<Opportunity> Opportunity { get; set; }
    }
}
