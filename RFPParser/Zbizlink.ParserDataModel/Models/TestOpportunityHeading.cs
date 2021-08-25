using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.RFPDataModel.Models
{
   public class TestOpportunityHeading
    {
        public TestOpportunityHeading()
        {
            //InverseParentHeading = new HashSet<OpportunityHeading>();
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

        public string NodeKey { get; set; }
        public Category Category { get; set; }
        public Opportunity Opportunity { get; set; }
        public OpportunityHeading ParentHeading { get; set; }
        //public ICollection<OpportunityHeading> InverseParentHeading { get; set; }
        public ICollection<OpportunityContent> OpportunityContent { get; set; }
    }
}
