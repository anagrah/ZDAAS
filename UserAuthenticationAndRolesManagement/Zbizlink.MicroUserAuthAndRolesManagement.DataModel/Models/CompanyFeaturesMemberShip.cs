using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class CompanyFeaturesMemberShip
    {
        [Key]
        public int Id { get; set; }
        public int CompanyId { set; get; }
        public int MemberShipTypeId { get; set; }
        public int FeatureId { get; set; }

        public Feature Feature { get; set; }
        public int UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
