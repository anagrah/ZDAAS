using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class Rfpsummary
    {
        public decimal RfpsummaryId { get; set; }
        public string FieldName { get; set; }
        public string FieldValue { get; set; }
        public int? FieldTypeId { get; set; }
        public decimal? RfpdocumentId { get; set; }
        public int? DisplayOrder { get; set; }
        public decimal? CompanyId { get; set; }
        public decimal? UserId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public decimal? OpportunityId { get; set; }
        public decimal? RfpsummaryFieldId { get; set; }

        public virtual FieldType FieldType { get; set; }
        public virtual Opportunity Opportunity { get; set; }
    }
}
