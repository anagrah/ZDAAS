using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSynonymOpportunityType
    {
        public int BridgeSynonymOpportunityTypeId { get; set; }
        public decimal SynonymId { get; set; }
        public int OpportunityTypeId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual OpportunityType OpportunityType { get; set; }
    }
}
