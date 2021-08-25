using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeInvitation
    {
        public decimal EmployeeInvitationID { get; set; }
        public Nullable<decimal> CompanyID { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Nullable<decimal> RegionID { get; set; }
        public Nullable<int> EmailStatusID { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> DesignationID { get; set; }
        public Nullable<decimal> CompanyDepartmentID { get; set; }
        public Nullable<bool> IsCandidate { get; set; }
        public virtual ICollection<EmployeeEmailReminder> EmployeeEmailReminders { get; set; }

    }

}
