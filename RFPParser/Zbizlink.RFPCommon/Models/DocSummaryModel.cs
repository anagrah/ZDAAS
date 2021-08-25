using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;

namespace Zdaas.RFPCommon.Models
{
    public class DocSummaryModel
    {
        public int Index { get; set; }
        public string FieldDisplayName { get; set; }

        public string SummaryfieldFromDocument { get; set; }
        public string FieldHeading { get; set; }
        public string FieldContent { get; set; }

        public RfpSummaryFieldEntity RfpSummaryFieldEntity { get; set; }
        public string ControlType { get; set; }
        public int? FiledTypeId { get; set; }
        public int? DisplayOrder { get; set; }
        public string Synonym { get; set; }
        public bool Extracted { get; set; }
        public bool Mandatory { get; set; }
        public decimal RFPSummaryFieldId { get; set; }
        public List<LineDetailModel> TableTDList;
        public LineDetailModel lineDetailModel;
    }
}
