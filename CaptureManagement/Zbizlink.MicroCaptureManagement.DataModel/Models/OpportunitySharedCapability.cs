using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunitySharedCapability
    {
        public decimal OpportunitySharedCapabilityID { get; set; }
        public Nullable<decimal> OpportunitySharedID { get; set; }
        public Nullable<decimal> OpportunityCapabilityID { get; set; }
        public int? Rating { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<bool> IsOption { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public virtual OpportunityShared OpportunityShared { get; set; }
        public virtual OpportunityCapability OpportunityCapability { get; set; }
    }
}
