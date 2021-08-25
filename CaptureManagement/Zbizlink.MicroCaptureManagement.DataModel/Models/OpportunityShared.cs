using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityShared
    {
        public OpportunityShared()
        {
        }

        public decimal OpportunitySharedID { get; set; }
        public Nullable<decimal> OpportunityID { get; set; }
        public Nullable<decimal> PartnerID { get; set; }
        public string Email { get; set; }
        public Nullable<bool> CanDuplicate { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public Nullable<int> CopyCount { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public virtual ICollection<OpportunitySharedSection> OpportunitySharedSections { get; set; }
        public virtual ICollection<OpportunitySharedRemark> OpportunitySharedRemarks { get; set; }
        public virtual ICollection<OpportunitySharedCapability> OpportunitySharedCapability { get; set; }
    }

}
