using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class OpportunityContentEntity
    {
        public decimal DetailId { get; set; }
        public decimal? HeadingId { get; set; }
        public int? IndexNumber { get; set; }
        public string OppContent { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public OpportunityHeadingEntity Heading { get; set; }
    }
}
