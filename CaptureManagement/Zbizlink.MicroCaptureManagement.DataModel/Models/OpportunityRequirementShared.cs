using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityRequirementShared
    {
        public decimal OpportunityRequirementSharedID { get; set; }
        public decimal OpportunityID { get; set; }
        public decimal PartnerID { get; set; }
        public decimal OpportunityRequirementHeadingID { get; set; }
        public decimal? OpportunityRequirementDetailID { get; set; }
        public bool IsShared { get; set; }
        public decimal CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public virtual OpportunityRequirementDetail OpportunityRequirementDetail { get; set; }
        public virtual OpportunityRequirementHeading OpportunityRequirementHeading { get; set; }
    }
}
