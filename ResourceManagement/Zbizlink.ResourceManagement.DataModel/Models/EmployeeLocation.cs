using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeLocation
    {
        public decimal EmployeeLocationID { get; set; }
        public decimal EmployeeID { get; set; }
        public decimal LocationID { get; set; }
        public int IsActiveID { get; set; }
        public virtual Employee Employee { get; set; }
    }

}
