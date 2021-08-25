using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class AdminUserRole
    {
        public decimal AdminUserRoleId { get; set; }
        public decimal? AdminRoleId { get; set; }
        public decimal? AdminUserId { get; set; }

        public virtual AdminRole AdminRole { get; set; }
        public virtual AdminUser AdminUser { get; set; }
    }
}
