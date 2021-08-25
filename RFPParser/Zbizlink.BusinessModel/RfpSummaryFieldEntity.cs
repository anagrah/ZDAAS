using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class RfpSummaryFieldEntity
    {
        public RfpSummaryFieldEntity()
        {
            RfpsummarySynonym = new HashSet<RfpSummarySynonymEntity>();
        }

        public decimal RfpsummaryFieldId { get; set; }
        public string FieldName { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? DisplayOrder { get; set; }
        public bool? Mandatory { get; set; }
        public ICollection<RfpSummarySynonymEntity> RfpsummarySynonym { get; set; }
    }
}
