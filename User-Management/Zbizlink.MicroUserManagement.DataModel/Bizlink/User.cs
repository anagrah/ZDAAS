using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class User
    {
        public User()
        {
            CompanyUsers = new HashSet<CompanyUser>();
            UserEmails = new HashSet<UserEmail>();
            UserRoles = new HashSet<UserRole>();
        }

        public decimal UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string BusinessName { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int IsActiveId { get; set; }
        public Guid? ActivationCode { get; set; }
        public string Image { get; set; }
        public DateTime? LnkExpiryDate { get; set; }
        public DateTime? EmailBlockedDate { get; set; }
        public DateTime? ProviderPopupDate { get; set; }
        public int? EmailProviderId { get; set; }
        public string Ein { get; set; }
        public string PhoneNumber { get; set; }
        public string Source { get; set; }
        public bool? BizlinkLoginIsAllowed { get; set; }

        public virtual ICollection<CompanyUser> CompanyUsers { get; set; }
        public virtual ICollection<UserEmail> UserEmails { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}
