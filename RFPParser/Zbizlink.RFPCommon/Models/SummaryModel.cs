using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Models
{
    public class SummaryModel
    {
        public int Index { get; set; }
        public string FieldDisplayName { get; set; }
        public string FieldText { get; set; }
        public string ControlType { get; set; }
        public int? FiledTypeId { get; set; }
        public int? DisplayOrder { get; set; }
        public string Synonym { get; set; }
        public bool Mandatory { get; set; }
        public decimal RFPSummaryFieldId { get; set; }
        public bool Extracted { get; set; }
    }
}
