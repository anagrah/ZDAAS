using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class Screen
    {
        public int Id { get; set; }
        public string ScreenName { get; set; }
        public int ModuleId { get; set; }
        public virtual Module Module { get; set; }
        public virtual ICollection<ApplicationRoleClaims> RoleClaim { get; set; }
    }
}
