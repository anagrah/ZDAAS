using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class OpportunityHeading
    {
        public OpportunityHeading()
        {
            InverseParentHeading = new HashSet<OpportunityHeading>();
            OpportunityContent = new HashSet<OpportunityContent>();
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

        public virtual Category Category { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public virtual OpportunityHeading ParentHeading { get; set; }
        public virtual ICollection<OpportunityHeading> InverseParentHeading { get; set; }
        public virtual ICollection<OpportunityContent> OpportunityContent { get; set; }
    }
}
