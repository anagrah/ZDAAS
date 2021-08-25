using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeSkill
    {
        public decimal SkillID { get; set; }
        public Nullable<decimal> EmployeeID { get; set; }
        public string SkillName { get; set; }
        public string SkillDescription { get; set; }
        public Nullable<System.DateTime> SkillLastUsed { get; set; }
        public Nullable<int> YearsOfExperienceID { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual lkptYearsOfExperience lkptYearsOfExperience { get; set; }
    }
}
