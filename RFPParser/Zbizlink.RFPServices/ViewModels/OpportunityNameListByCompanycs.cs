using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPServices.ViewModels
{
  public class OpportunityNameListByCompanyViewModel
    {
        //public OpportunityNameListByCompanyViewModel()
        //{
        //    Rfpsummary = new List<SummaryByCompanyViewModel>();
        //}
        public decimal OpportunityId { get; set; }

        public string OpportunityName { get; set; }
        public string ClosingDateAndTime { get; set; }
        public string RequestingAgency { get; set; }

        //public List<SummaryByCompanyViewModel> Rfpsummary { get; set; }
    }

    public class SummaryByCompanyViewModel
    {
        public decimal? OpportunityId { get; set; }
        public string ClosingDateAndTime { get; set; }
        public string RequestingAgency { get; set; }
    }
}
