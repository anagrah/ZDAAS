using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeProject
    {
        public EmployeeProject()
        {
        }

        public decimal EmployeeProjectID { get; set; }
        public Nullable<decimal> EmployeeID { get; set; }
        public string ProjectName { get; set; }
        public string ProjectDescription { get; set; }
        public string Responsibility { get; set; }
        public string Technology { get; set; }
        public string ProjectPositionTitle { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<decimal> ExperienceID { get; set; }
        public Nullable<decimal> ProjectRevenue { get; set; }
        public string Location { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public string EmployeeClientName { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual EmployeeExperience EmployeeExperience { get; set; }
        public virtual ICollection<EmployeeProjectContactPerson> EmployeeProjectContactPersons { get; set; }
    }

}
