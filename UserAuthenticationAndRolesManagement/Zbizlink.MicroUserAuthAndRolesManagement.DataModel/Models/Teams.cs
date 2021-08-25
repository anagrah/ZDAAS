using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class Teams
    {
        public int Id { get; set; }
        public string TeamName { get; set; }
        public ICollection<UserTeams> UserTeams { get; set; }
    }
}
