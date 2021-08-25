using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityRequirementDetail
    {
        public OpportunityRequirementDetail()
        {
        }
        public decimal OpportunityRequirementDetailID { get; set; }
        public string RequirementDetail { get; set; }
        public string RequirementResponse { get; set; }
        public Nullable<decimal> OpportunityRequirementHeadingID { get; set; }
        public Nullable<int> IndexNo { get; set; }
        public Nullable<decimal> PartnerID { get; set; }
        public Nullable<decimal> ContentCreatedBy { get; set; }
        public Nullable<System.DateTime> ContentCreatedOn { get; set; }
        public Nullable<decimal> ContentModifiedBy { get; set; }
        public Nullable<System.DateTime> ContentModifiedOn { get; set; }
        public Nullable<decimal> ResponseCreatedBy { get; set; }
        public Nullable<System.DateTime> ResponseCreatedOn { get; set; }
        public Nullable<decimal> ResponseModifiedBy { get; set; }
        public Nullable<System.DateTime> ResponseModifiedOn { get; set; }
        public virtual OpportunityRequirementHeading OpportunityRequirementHeading { get; set; }
        public Nullable<decimal> RequirementContentStatusID { get; set; }
        public string RequirementContentStatusValue { get; set; }
        public virtual ICollection<OpportunityRequirementShared> OpportunityRequirementShareds { get; set; }
        public virtual ICollection<OpportunityRequirementDetailLog> OpportunityRequirementDetailLogs { get; set; }
    }
}
