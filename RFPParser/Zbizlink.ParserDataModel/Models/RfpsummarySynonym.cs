using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class RfpsummarySynonym
    {
        public decimal RfpsummarySynonymId { get; set; }
        public string Synonym { get; set; }
        public string Description { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public decimal? RfpsummaryFieldId { get; set; }
        public bool Assign { get; set; }

        public virtual RfpsummaryField RfpsummaryField { get; set; }
    }
}
