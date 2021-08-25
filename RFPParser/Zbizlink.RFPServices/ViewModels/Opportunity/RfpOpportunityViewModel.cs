using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPServices.ViewModels.Opportunity
{
   public class RfpOpportunityViewModel
    {
        public RfpOpportunityViewModel()
        {
            RfpSummaryViewModel = new HashSet<RfpSummaryViewModel>();
            RfpCategoryDataViewModel = new HashSet<RfpCategoryDataViewModel>();
            RfpDocumentViewModel = new HashSet<RfpDocumentViewModel>();
        }
        public decimal OpportunityId { get; set; }
        public string OpportunityName { get; set; }
       

        public virtual ICollection<RfpSummaryViewModel> RfpSummaryViewModel { get; set; }
        public virtual ICollection<RfpCategoryDataViewModel> RfpCategoryDataViewModel { get; set; }
        public virtual ICollection<RfpDocumentViewModel> RfpDocumentViewModel { get; set; }
    }
}
