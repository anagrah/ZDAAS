using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Get
{
   public class CategorySynonymAdmin
    {
        public List<CategoryAndSynonym> CategoryAndSynonymList { get; set; }
        public List<OpportunityType> OpportunityTypeList { get; set; }
        public List<Agency> AgencyList { get; set; }
        public List<States> StatesList { get; set; }
        public List<ContractVehicle> ContractVehicleList { get; set; }
        public List<Industry> IndustryList { get; set; }

        //public List<BridgeSynonymAgency> BridgeSynonymAgencyList { get; set; }
        //public List<BridgeSynonymContractVehicle> BridgeSynonymContractVehicleList { get; set; }
        //public List<BridgeSynonymIndustry> BridgeSynonymIndustryList { get; set; }
        //public List<BridgeSynonymOpportunityType> BridgeSynonymOpportunityTypeList { get; set; }
        //public List<BridgeSynonymStates> BridgeSynonymStatesList { get; set; }
    }


}
