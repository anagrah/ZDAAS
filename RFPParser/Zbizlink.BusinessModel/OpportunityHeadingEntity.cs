using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class OpportunityHeadingEntity
    {

        public OpportunityHeadingEntity()
        {
            InverseParentHeading = new HashSet<OpportunityHeadingEntity>();
            OpportunityContent = new HashSet<OpportunityContentEntity>();
        }
        public decimal HeadingId { get; set; }
        public decimal? ParentHeadingId { get; set; }
        public int? IndexNumber { get; set; }
        public string Heading { get; set; }
        public decimal? OpportunityId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public decimal? CategoryId { get; set; }
        public string NodeKey { get; set; }

        public CategoryEntity Category { get; set; }
        public OpportunityEntity Opportunity { get; set; }
        public OpportunityHeadingEntity ParentHeading { get; set; }
        public ICollection<OpportunityHeadingEntity> InverseParentHeading { get; set; }
        public ICollection<OpportunityContentEntity> OpportunityContent { get; set; }
    }
}

