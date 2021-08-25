using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class Role
    {
        public Role()
        {
            UserRoles = new HashSet<UserRole>();
        }

        public decimal RoleId { get; set; }
        public string RoleName { get; set; }
        public int IsActiveId { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}
