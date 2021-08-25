using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public class OpportunityCapability

    {
        public OpportunityCapability()
        {
        }

        public decimal OpportunityCapabilityID { get; set; }
        public string Question { get; set; }
        public string RemarksAnswer { get; set; }

        public int Answer { get; set; }
        public Nullable<decimal> OpportunityID { get; set; }
        public Nullable<bool> IsOption { get; set; }
        public Nullable<bool> IsPrimeSpecific { get; set; }
        public Nullable<bool> IsQuestionValid { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }

        public virtual ICollection<OpportunityCapabilityRemark> OpportunityCapabilityRemarks { get; set; }

        public virtual ICollection<OpportunitySharedCapability> OpportunitySharedCapability { get; set; }


    }
}
