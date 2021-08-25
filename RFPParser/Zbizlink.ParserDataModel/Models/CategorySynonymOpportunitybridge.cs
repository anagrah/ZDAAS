using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class CategorySynonymOpportunitybridge
    {
        public decimal CategorySynonymOpportunitybridgeId { get; set; }
        public int? OpportunityTypeId { get; set; }
        public int? AgencyId { get; set; }
        public int? ContractVehicleId { get; set; }
        public int? IndustryId { get; set; }
        public int? StateId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual Agency Agency { get; set; }
        public virtual ContractVehicle ContractVehicle { get; set; }
        public virtual Industry Industry { get; set; }
        public virtual OpportunityType OpportunityType { get; set; }
        public virtual States State { get; set; }
    }
}
