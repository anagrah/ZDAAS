using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Edit
{
   public class ContractVehicle
    {
        public int ContractVehicleId { get; set; }
        public string ContractVehicleName { get; set; }
        public string Description { get; set; }
        public decimal ModifiedBy { get; set; }
    }
}
