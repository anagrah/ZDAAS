using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class OpportunityContent
    {
        public decimal DetailId { get; set; }
        public decimal? HeadingId { get; set; }
        public int? IndexNumber { get; set; }
        public string OppContent { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual OpportunityHeading Heading { get; set; }
    }
}
