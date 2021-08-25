using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroEmailBroadCaster.DataModel.DBContext
{
    public partial class EmailTemplate
    {
        public int EmailTemplateId { get; set; }
        public int? EmailCategoryId { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool? IsCurrent { get; set; }

        public virtual LkptEmailCategory EmailCategory { get; set; }
    }
}
