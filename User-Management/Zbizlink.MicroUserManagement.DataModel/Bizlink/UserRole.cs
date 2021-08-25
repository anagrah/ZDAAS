using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class UserRole
    {
        public decimal UserRoleId { get; set; }
        public decimal UserId { get; set; }
        public decimal RoleId { get; set; }
        public int IsActiveId { get; set; }

        public virtual Role Role { get; set; }
        public virtual User User { get; set; }
    }
}
