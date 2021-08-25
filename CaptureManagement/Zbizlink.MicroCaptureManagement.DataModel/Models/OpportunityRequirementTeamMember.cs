using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityRequirementTeamMember
    {
        public decimal OpportunityRequirementTeamMemberID { get; set; }
        public decimal OpportunityRequirementHeadingID { get; set; }
        public decimal? OpportunityRequirementDetailID { get; set; }
        public decimal EmployeeID { get; set; }
        public Nullable<System.DateTime> FinishDate { get; set; }
        public Nullable<decimal> EstimatedHours { get; set; }

        public virtual OpportunityRequirementHeading OpportunityRequirementHeading { get; set; }
        public virtual OpportunityRequirementDetail OpportunityRequirementDetail { get; set; }
    }
}
