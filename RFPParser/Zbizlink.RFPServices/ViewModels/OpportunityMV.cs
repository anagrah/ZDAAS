using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPServices.ViewModels
{
   public partial class OpportunityMV
    {
        public decimal OpportunityId { get; set; }
        public int? AgencyId { get; set; }
        public int? StateId { get; set; }
        public decimal? ContractVehicleId { get; set; }
        public int? IndustryId { get; set; }
    }
}
