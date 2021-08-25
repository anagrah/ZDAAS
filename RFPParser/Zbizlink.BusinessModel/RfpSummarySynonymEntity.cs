using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class RfpSummarySynonymEntity
    {
        public decimal RfpsummarySynonymId { get; set; }
        public string Synonym { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? RfpsummaryFieldId { get; set; }
        public int SynonymNumberOfWord { get; set; }
        public int SynonymLength { get; set; }
        public bool Assign { get; set; }
        public RfpSummaryFieldEntity RfpsummaryField { get; set; }
    }
}
