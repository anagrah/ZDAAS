using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Edit
{
   public class Agency
    {
        public int AgencyID { get; set; }
        public string AgencyName { get; set; }
        public string Description { get; set; }
        public decimal ModifiedBy { get; set; }
    }
}
