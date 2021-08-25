using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class lkptResumeTemplate
    {
        public lkptResumeTemplate()
        {
        }

        public int ResumeTemplateID { get; set; }
        public string ResumeTemplateName { get; set; }
        public string ResumeTemplateHTML { get; set; }
        public bool? DefaultTemplate { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string Thumbnail { get; set; }
        public Nullable<bool> IsEmployeeTemplate { get; set; }
        public virtual ICollection<EmployeeResume> EmployeeResumes { get; set; }
    }

}
