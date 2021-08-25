using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPServices.ViewModels.Opportunity
{
 public   class RfpSummaryViewModel
    {

        public string FieldDisplayName { get; set; }
        public string FieldText { get; set; }
        public string ControlType { get; set; }
        public int? DisplayOrder { get; set; }
        public int? FiledTypeId { get; set; }
        public bool Mandatory { get; set; }

    }
}
