using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class AdminUser
    {
        public AdminUser()
        {
            AdminUserRoles = new HashSet<AdminUserRole>();
        }

        public decimal AdminUserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Guid? ActivationCode { get; set; }
        public DateTime? LnkExpiryDate { get; set; }
        public int IsActiveId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public decimal? ApprovedBy { get; set; }
        public decimal? ApprovedOn { get; set; }
        public bool? ForcePasswordChange { get; set; }

        public virtual ICollection<AdminUserRole> AdminUserRoles { get; set; }
    }
}
