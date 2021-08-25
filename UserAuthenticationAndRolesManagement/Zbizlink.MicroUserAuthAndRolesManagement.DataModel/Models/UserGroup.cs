using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class UserGroup
    {
        public int Id { get; set; }
        public int GroupId { get; set; }
        public int UserId { get; set; }
        public int RolesId { get; set; }
        public virtual Group Group { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ApplicationRole Roles { get; set; }
    }
}
