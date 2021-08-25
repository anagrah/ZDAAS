using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityResourceHistory
    {

        public decimal OpportunityResourceHistoryID { get; set; }
        public Nullable<decimal> OpportunityResourceID { get; set; }
        public Nullable<int> SelectionStatus { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }

        public virtual OpportunityResource OpportunityResource { get; set; }
    }
}
