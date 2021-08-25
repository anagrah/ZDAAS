using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class RfpSummaryEntity
    {
        public decimal RfpsummaryId { get; set; }
        public string FieldName { get; set; }
        public string FieldValue { get; set; }
        public int? FieldTypeId { get; set; }
        public decimal? OpportunityId { get; set; }
        public int? DisplayOrder { get; set; }
        public decimal? CompanyId { get; set; }
        public decimal? UserId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual FieldTypeEntity FieldType { get; set; }
        public virtual OpportunityEntity Opportunity { get; set; }
    }
}
