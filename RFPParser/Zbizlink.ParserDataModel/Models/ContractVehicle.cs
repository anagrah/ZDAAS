using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class ContractVehicle
    {
        public int ContractVehicleId { get; set; }
        public string ContractVehicleName { get; set; }
        public string Description { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
