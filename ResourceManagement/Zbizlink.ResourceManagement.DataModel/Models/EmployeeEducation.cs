using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeEducation
    {
        public decimal EducationID { get; set; }
        public Nullable<decimal> EmployeeID { get; set; }
        public string SchoolName { get; set; }
        public string Degree { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<int> DegreeID { get; set; }
        public string FieldOfStudy { get; set; }
        public string EducationLocation { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual lkptDegree lkptDegree { get; set; }
    }

}
