using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models.Contracts;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class ApplicationUser : IdentityUser<int>, IAuditableEntity
    {
        public string BusinessName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }        
        public bool IsEnabled { get; set; }
        public bool IsLockedOut => this.LockoutEnabled && this.LockoutEnd >= DateTimeOffset.UtcNow;
        public int? CompanyId { get; set; }
        public int UserTypeId { get; set; }
        public UserType UserType { get; set; }
        public int CreatedBy { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

       


        public virtual ICollection<IdentityUserRole<int>> Roles { get; set; }
        public virtual ICollection<IdentityUserClaim<int>> Claims { get; set; }
        public virtual ICollection<CompanyFeaturesMemberShip> CompanyFeaturesMemberShip { get; set; }
        public virtual ICollection<UserTeams> UserTeams { get; set; }

        public virtual ICollection<UserGroup> UserGroup { get; set; }

    }
}
