using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class UserTeams
    {
        public int Id { get; set; }
        public int TeamsId { get; set; }
        public Teams Teams { get; set; }

        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
