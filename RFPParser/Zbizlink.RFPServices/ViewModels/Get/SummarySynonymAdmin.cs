using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Get
{
  public  class SummarySynonymAdmin
    {
        public List<SummaryFieldAndSynonym> SummaryFieldAndSynonyms { get; set; }
        public List<OpportunityType> OpportunityTypeList { get; set; }
        public List<Agency> AgencyList { get; set; }
        public List<States> StatesList { get; set; }
        public List<ContractVehicle> ContractVehicleList { get; set; }
        public List<Industry> IndustryList { get; set; }
    }
}
