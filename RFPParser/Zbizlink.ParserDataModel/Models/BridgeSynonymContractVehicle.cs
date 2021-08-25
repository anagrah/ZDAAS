using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSynonymContractVehicle
    {
        public decimal BridgeSynonymContractVehicleId { get; set; }
        public decimal SynonymId { get; set; }
        public int ContractVehicleId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
