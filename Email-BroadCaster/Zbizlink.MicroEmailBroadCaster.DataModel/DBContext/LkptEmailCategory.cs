using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroEmailBroadCaster.DataModel.DBContext
{
    public partial class LkptEmailCategory
    {
        public LkptEmailCategory()
        {
            EmailTemplates = new HashSet<EmailTemplate>();
        }

        public int EmailCategoryId { get; set; }
        public string EmailCategoryShortDesc { get; set; }
        public string EmailCategoryLongDesc { get; set; }

        public virtual ICollection<EmailTemplate> EmailTemplates { get; set; }
    }
}
