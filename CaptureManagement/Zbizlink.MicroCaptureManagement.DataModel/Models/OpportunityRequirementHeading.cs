using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityRequirementHeading
    {
        public OpportunityRequirementHeading()
        {
        }
        public virtual OpportunityRequirementHeading ParentHeading { get; set; }
        public virtual ICollection<OpportunityRequirementHeading> ChildHeadings { get; set; }
        public decimal OpportunityRequirementHeadingID { get; set; }
        public string RequirementHeading { get; set; }
        public Nullable<short> OpportunityRequirementTypeID { get; set; }
        public Nullable<int> SrNumber { get; set; }
        public Nullable<decimal> ParentRequirementHeadingID { get; set; }
        public Nullable<decimal> OpportunityID { get; set; }
        public Nullable<decimal> CompanyID { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public Nullable<decimal> ResponseCreatedBy { get; set; }
        public Nullable<System.DateTime> ResponseCreatedOn { get; set; }
        public Nullable<decimal> ResponseModifiedBy { get; set; }
        public Nullable<System.DateTime> ResponseModifiedOn { get; set; }
        public string RequirementResponse { get; set; }
        public Nullable<decimal> RequirementContentStatusID { get; set; }
        public string RequirementContentStatusValue { get; set; }
        public virtual lkptOpportunityRequirementType lkptOpportunityRequirementType { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public virtual ICollection<OpportunityRequirementDetail> OpportunityRequirementDetails { get; set; }
        public virtual ICollection<OpportunityRequirementShared> OpportunityRequirementShareds { get; set; }

        public Object wmlHeader { get; set; }
    }
}
