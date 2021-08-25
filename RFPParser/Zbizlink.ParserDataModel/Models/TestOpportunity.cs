using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.RFPDataModel.Models
{
   public class TestOpportunity
    {

        public TestOpportunity()
        {
            OpportunityHeading = new HashSet<TestOpportunityHeading>();
        }
        public decimal OpportunityId { get; set; }
        public string SolicitationNumber { get; set; }
        public decimal? CompanyId { get; set; }
        public decimal? ClientId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public decimal? RfpdocumentId { get; set; }
        public decimal? SegmentId { get; set; }

        public virtual ICollection<TestOpportunityHeading> OpportunityHeading { get; set; }
    }
}
