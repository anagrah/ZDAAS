using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityCheckList
    {
        public OpportunityCheckList()
        {
        }

        public decimal OpportunityCheckListID { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public bool? IsOption { get; set; }
        public Nullable<decimal> OpportunityID { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public virtual ICollection<OpportunityCheckListRemark> OpportunityCheckListRemarks { get; set; }
        public Nullable<short> OpportunityTypeID { get; set; }

    }
}
