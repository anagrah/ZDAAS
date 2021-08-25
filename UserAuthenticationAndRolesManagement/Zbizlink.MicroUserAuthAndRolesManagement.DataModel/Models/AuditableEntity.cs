using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models.Contracts;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class AuditableEntity : IAuditableEntity
    {
        [MaxLength(256)]
        public int CreatedBy { get; set; }
        [MaxLength(256)]
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
