using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Insert
{
   public class SummaryField
    {
        public decimal SummaryFieldId { get; set; }
        public string FieldName { get; set; }
        public string Description { get; set; }
        public decimal? CreatedBy { get; set; }
        public int? DisplayOrder { get; set; }
        public bool? Mandatory { get; set; }
    }
}
