using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSummarySynonymContractVehicle
    {
        public int BridgeSummarySynonymContractVehicleId { get; set; }
        public decimal RfpsummarySynonymId { get; set; }
        public int ContractVehicleId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
