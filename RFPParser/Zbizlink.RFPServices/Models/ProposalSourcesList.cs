using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.RFPDataModel.Models;

namespace Zbizlink.RFPServices.Models
{
   public class ProposalSourcesList
    {
       public List<Agency> AgencyList { set; get; }
        public List<States> StatesList { set; get; }
        public List<ContractVehicle> ContractVehicleList { set; get; }
        public List<Industry> IndustryList { set; get; }
    }
}
