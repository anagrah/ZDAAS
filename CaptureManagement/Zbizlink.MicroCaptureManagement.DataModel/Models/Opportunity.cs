using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class Opportunity
    {
        public Opportunity()
        {

        }

        public string OpportunityCode { get; set; }
        public string OpportunityName { get; set; }
        public string SolicitationNumber { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<System.DateTime> PreBid { get; set; }
        public Nullable<System.DateTime> QuestionDueDate { get; set; }

        public decimal? CompanyID { get; set; }
        public Nullable<short> OpportunityRating { get; set; }
        public decimal OpportunityID { get; set; }
        public string Description { get; set; }
        public Nullable<decimal> ClientID { get; set; }
        public Nullable<short> OpportunityTypeID { get; set; }
        public Nullable<decimal> CompanySegmentID { get; set; }
        public Nullable<decimal> ReferenceOpportunityID { get; set; }
        public Nullable<decimal> SolicitationID { get; set; }
        public Nullable<short> IsActiveID { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public Nullable<decimal> CompanyLocationID { get; set; }
        public Nullable<decimal> CompanyDepartmentID { get; set; }
        public Nullable<bool> IsSubmitted { get; set; }
        public Nullable<bool> IsRequirementArranged { get; set; }
        public Nullable<bool> IsDocumentParsed { get; set; }
        public virtual lkptOpportunityType lkptOpportunityType { get; set; }
        public virtual ICollection<OpportunityCheckList> OpportunityCheckLists { get; set; }
        public virtual ICollection<OpportunityDocument> OpportunityDocuments { get; set; }
        public virtual ICollection<OpportunityResource> OpportunityResources { get; set; }
        public virtual ICollection<OpportunityRequirementHeading> OpportunityRequirementHeadings { get; set; }
        public virtual ICollection<OpportunityCapability> OpportunityCapabilities { get; set; }
        public virtual ICollection<OpportunityTeam> OpportunityTeams { get; set; }
        public virtual ICollection<OpportunityShared> OpportunityShareds { get; set; }
        public virtual ICollection<OpportunityLaborCategory> OpportunityLaborCategories { get; set; }
        public virtual ICollection<OpportunitySharedSectionItem> OpportunitySharedSectionItems { get; set; }
        public virtual ICollection<OpportunityRequirementShared> OpportunityRequirementShareds { get; set; }


    }

}
