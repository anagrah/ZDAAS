using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Models
{
    public class lkptEmailCategory
    {
        public lkptEmailCategory()
        {
            this.EmailTemplates = new List<EmailTemplate>();
        }
        public int EmailCategoryID { get; set; }
        public string EmailCategoryShortDesc { get; set; }
        public string EmailCategoryLongDesc { get; set; }
        public virtual ICollection<EmailTemplate> EmailTemplates { get; set; }
    }
}
