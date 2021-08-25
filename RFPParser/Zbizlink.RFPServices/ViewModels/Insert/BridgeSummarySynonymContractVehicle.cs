using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Insert
{

   public class BridgeSummarySynonymContractVehicle
    {
        public int BridgeSummarySynonymContractVehicleId { get; set; }
        public decimal RfpsummarySynonymId { get; set; }
        public int ContractVehicleId { get; set; }

        /// <summary>
        ///  [1] for insert record,
        ///  [2] for delete record
        /// </summary>
        public int DBTransactionType { get; set; }
    }
}
