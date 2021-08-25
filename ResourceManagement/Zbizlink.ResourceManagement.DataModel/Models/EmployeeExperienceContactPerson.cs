using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeExperienceContactPerson
    {
        public decimal EmployeeExperienceContactPersonID { get; set; }
        public Nullable<decimal> EmployeeExperienceID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string JobTitle { get; set; }
        public string Email { get; set; }
        public string ContactNo { get; set; }
        public decimal CreatedBy { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public virtual EmployeeExperience EmployeeExperience { get; set; }
    }

}
