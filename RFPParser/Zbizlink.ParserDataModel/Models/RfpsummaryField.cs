using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class RfpsummaryField
    {
        public RfpsummaryField()
        {
            RfpsummarySynonym = new HashSet<RfpsummarySynonym>();
        }

        public decimal RfpsummaryFieldId { get; set; }
        public string FieldName { get; set; }
        public string Description { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public int? DisplayOrder { get; set; }
        public bool? Mandatory { get; set; }

        public virtual ICollection<RfpsummarySynonym> RfpsummarySynonym { get; set; }
    }
}
