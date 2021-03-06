using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Get
{
   public class SynonymBridges
    {
        public List<BridgeSynonymAgency> BridgeSynonymAgencyList { get; set; }
        public List<BridgeSynonymContractVehicle> BridgeSynonymContractVehicleList { get; set; }
        public List<BridgeSynonymIndustry> BridgeSynonymIndustryList { get; set; }
        public List<BridgeSynonymOpportunityType> BridgeSynonymOpportunityTypeList { get; set; }
        public List<BridgeSynonymStates> BridgeSynonymStatesList { get; set; }
    }
}
