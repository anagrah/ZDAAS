using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class OpportunityDetail
    {
        public int DetailId { get; set; }
        public string Detail { get; set; }
        public int? IndexNumber { get; set; }
        public int HeadingId { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public OpportunityHeading Heading { get; set; }
    }
}
