using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class CompanyUser
    {
        public decimal CompanyUserId { get; set; }
        public decimal? CompanyId { get; set; }
        public decimal? UserId { get; set; }

        public virtual Company Company { get; set; }
        public virtual User User { get; set; }
    }
}
