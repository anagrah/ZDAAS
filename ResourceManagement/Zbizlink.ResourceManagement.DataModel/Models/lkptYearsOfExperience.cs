using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class lkptYearsOfExperience
    {
        public lkptYearsOfExperience()
        {
        }

        public int YearsOfExperienceID { get; set; }
        public string YearsOfExperienceShortDesc { get; set; }
        public string YearsOfExperienceLongDesc { get; set; }
        public virtual ICollection<EmployeeSkill> EmployeeSkills { get; set; }
    }
}
