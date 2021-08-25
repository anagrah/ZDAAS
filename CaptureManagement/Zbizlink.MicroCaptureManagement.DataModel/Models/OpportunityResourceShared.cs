using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityResourceShared
    {
        public decimal OpportunityResourceSharedID { get; set; }
        public decimal OpportunityResourceID { get; set; }
        public decimal PartnerID { get; set; }
        public bool IsShared { get; set; }
        public decimal CreatedBy { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public virtual OpportunityResource OpportunityResource { get; set; }
    }
}
