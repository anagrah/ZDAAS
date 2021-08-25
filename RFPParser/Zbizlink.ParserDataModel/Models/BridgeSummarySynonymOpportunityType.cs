using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSummarySynonymOpportunityType
    {
        public int BridgeSummarySynonymOpportunityTypeId { get; set; }
        public decimal RfpsummarySynonymId { get; set; }
        public int OpportunityTypeId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual OpportunityType OpportunityType { get; set; }
    }
}
