using System;
using System.Collections.Generic;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPServices.Models;
using Zdaas.RFPServices.ViewModels.Opportunity;

namespace Zdaas.RFPServices.ViewModels
{
  public  class Publish
    {
        public OpportunityEntity Opportunity { get; set; }
        public List<OpportunitySummaryViewModel> Summary { get; set; }
        public List<CheckListViewModel> CheckList { get; set; }
        public List<CapabilityViewModel> Capability { get; set; }

        public List<JobTitleModel> Labor { get; set; }

        public List<OpportunityDocument> OpportunityDocument { get; set; }
    }
}
