using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityResource
    {
        public OpportunityResource()
        {
        }
        public decimal OpportunityResourceID { get; set; }
        public Nullable<decimal> OpportunityID { get; set; }
        public Nullable<decimal> EmployeeID { get; set; }
        public Nullable<decimal> EmployeeResumeID { get; set; }
        public Nullable<bool> IsKeyPerson { get; set; }
        public Nullable<int> RequiredHours { get; set; }
        public Nullable<decimal> OpportunityLaborCategoryID { get; set; }
        public Nullable<decimal> ProposedHourlyRate { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public Nullable<decimal> PrimeProposedHourlyRate { get; set; }
        public Nullable<bool> IsRequiredHoursLocked { get; set; }
        public Nullable<bool> IsPartnerLocked { get; set; }
        public Nullable<int> SelectionStatus { get; set; }
        public string JSONData { get; set; }
        public string HTMLTemplate { get; set; }
        public Nullable<decimal> FileManagerID { get; set; }
        public virtual OpportunityLaborCategory OpportunityLaborCategory { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public virtual ICollection<OpportunityResourceShared> OpportunityResourceShareds { get; set; }
        public virtual ICollection<OpportunityResourceHistory> OpportunityResourceHistory { get; set; }
    }
}
