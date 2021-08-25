using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models
{
    public class Feature
    {
        public int Id { get; set; }
        public string FeatureName { get; set; }

        public virtual ICollection<CompanyFeaturesMemberShip> CompanyFeaturesMemberShip { get; set; }
        public virtual ICollection<Module> Module { get; set; }
    }
}
