using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Insert
{
   public class SummarySynonymBridges
    {
        public decimal UserId { get; set; }
        public decimal SummarySynonymId { get; set; }
        public bool Assign { get; set; }
        public List<BridgeSummarySynonymAgency> BridgeSummarySynonymAgencyList { get; set; }
        public List<BridgeSummarySynonymContractVehicle> BridgeSummarySynonymContractVehicleList { get; set; }
        public List<BridgeSummarySynonymIndustry> BridgeSummarySynonymIndustryList { get; set; }
        public List<BridgeSummarySynonymOpportunityType> BridgeSummarySynonymOpportunityTypeList { get; set; }
        public List<BridgeSummarySynonymStates> BridgeSummarySynonymStatesList { get; set; }
    }
}
