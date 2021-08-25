using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models.Contracts;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class ApplicationRole : IdentityRole<int>, IAuditableEntity
    {

        public ApplicationRole()
        {

        }

        public ApplicationRole(string roleName) : base(roleName)
        {

        }



        public ApplicationRole(string roleName, string description) : base(roleName)
        {
            Description = description;
        }



        public string Description { get; set; }
        public int CreatedBy { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }




        public virtual ICollection<IdentityUserRole<int>> Users { get; set; }


        public virtual ICollection<IdentityRoleClaim<int>> Claims { get; set; }
    }
}
