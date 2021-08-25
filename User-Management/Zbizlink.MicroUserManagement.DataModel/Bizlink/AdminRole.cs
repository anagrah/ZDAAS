using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class AdminRole
    {
        public AdminRole()
        {
            AdminUserRoles = new HashSet<AdminUserRole>();
        }

        public decimal AdminRoleId { get; set; }
        public string RoleName { get; set; }
        public string RoleDescription { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }

        public virtual ICollection<AdminUserRole> AdminUserRoles { get; set; }
    }
}
