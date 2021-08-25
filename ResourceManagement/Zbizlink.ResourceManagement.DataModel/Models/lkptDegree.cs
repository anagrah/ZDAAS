using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class lkptDegree
    {
        public lkptDegree()
        {
        }

        public int DegreeID { get; set; }
        public string DegreeShortDesc { get; set; }
        public string DegreeLongDesc { get; set; }
        public virtual ICollection<EmployeeEducation> EmployeeEducations { get; set; }
    }
}
