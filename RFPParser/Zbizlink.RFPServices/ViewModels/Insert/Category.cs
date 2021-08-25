using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Insert
{
   public class Category
    {
        public decimal CategoryId { get; set; }
        public string Name { get; set; }
        public decimal CreatedBy { get; set; }
        public decimal ModifiedBy { get; set; }
    }
}
