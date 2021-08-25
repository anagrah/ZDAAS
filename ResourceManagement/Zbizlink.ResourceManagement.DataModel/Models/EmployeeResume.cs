using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeResume
    {
        public EmployeeResume()
        {
        }

        public decimal EmployeeResumeID { get; set; }
        public string ResumeName { get; set; }
        public string ResumeHTML { get; set; }
        public string Thumbnail { get; set; }
        public Nullable<decimal> EmployeeID { get; set; }
        public Nullable<int> ResumeTemplateID { get; set; }
        public Nullable<System.DateTime> LastTimeUsed { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual lkptResumeTemplate lkptResumeTemplate { get; set; }
    }

}
