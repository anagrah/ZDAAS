using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class Module
    {
        public int Id { get; set; }
        public string ModuleName { get; set; }
        public int FeatureId { get; set; }
        public virtual Feature Feature { get; set; }
        public virtual ICollection<Screen> Screens { get; set; }
    }
}
