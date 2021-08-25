using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeExperience
    {
        public EmployeeExperience()
        {
        }
        public decimal ExperienceID { get; set; }
        public Nullable<decimal> EmployeeID { get; set; }
        public string CompanyName { get; set; }
        public string Title { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public string Summary { get; set; }
        public Nullable<bool> IsCurrentlyWorking { get; set; }
        public string ReasonForLeaving { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual ICollection<EmployeeProject> EmployeeProjects { get; set; }
        public virtual ICollection<EmployeeExperienceContactPerson> EmployeeExperienceContactPersons { get; set; }
    }

}
