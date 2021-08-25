using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class Group
    {
        public int Id { get; set; }
        public string GroupName { get; set; }
        public virtual ICollection<UserGroup> UserGroup { get; set; }


    }
}
