using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunitySharedSection
    {
        public decimal OpportunitySharedSectionID { get; set; }
        public Nullable<int> OpportunitySectionID { get; set; }
        public Nullable<decimal> OpportunitySharedID { get; set; }
        public Nullable<decimal> ItemID { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public Nullable<int> ActiveStatus { get; set; }

        public virtual lkptOpportunitySection lkptOpportunitySection { get; set; }
        public virtual OpportunityShared OpportunityShared { get; set; }
        public virtual ICollection<OpportunitySharedSectionItem> OpportunitySharedSectionItems { get; set; }
    }
}
