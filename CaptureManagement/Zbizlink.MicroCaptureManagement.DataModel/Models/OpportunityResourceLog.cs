using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityResourceLog
    {
        public decimal OpportunityResourceLogID { get; set; }
        public decimal OpportunityResourceID { get; set; }
        public Nullable<decimal> OpportunityID { get; set; }
        public Nullable<decimal> EmployeeID { get; set; }
        public Nullable<decimal> EmployeeResumeID { get; set; }
        public Nullable<bool> IsKeyPerson { get; set; }
        public Nullable<int> RequiredHours { get; set; }
        public Nullable<int> LabourCategoryID { get; set; }
        public Nullable<decimal> ProposedHourlyRate { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public Nullable<decimal> LogCreatedBy { get; set; }
        public Nullable<System.DateTime> LogCreatedOn { get; set; }
    }
}
