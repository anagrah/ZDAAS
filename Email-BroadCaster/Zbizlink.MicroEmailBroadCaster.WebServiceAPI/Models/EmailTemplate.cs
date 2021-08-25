using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Models
{
    public class EmailTemplate
    {
        public int EmailTemplateID { get; set; }
        public Nullable<int> EmailCategoryID { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public virtual lkptEmailCategory lkptEmailCategory { get; set; }
    }
}
