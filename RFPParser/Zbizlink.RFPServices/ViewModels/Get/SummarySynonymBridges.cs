using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Get
{
   public class SummarySynonymBridges
    {
        public List<BridgeSummarySynonymAgency> BridgeSummarySynonymAgencyList { get; set; }
        public List<BridgeSummarySynonymContractVehicle> BridgeSummarySynonymContractVehicleList { get; set; }
        public List<BridgeSummarySynonymIndustry> BridgeSummarySynonymIndustryList { get; set; }
        public List<BridgeSummarySynonymOpportunityType> BridgeSummarySynonymOpportunityTypeList { get; set; }
        public List<BridgeSummarySynonymStates> BridgeSummarySynonymStatesList { get; set; }
    }
}
