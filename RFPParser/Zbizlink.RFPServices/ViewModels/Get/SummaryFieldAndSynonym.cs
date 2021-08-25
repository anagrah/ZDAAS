using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Get
{
   public class SummaryFieldAndSynonym
    {
        public SummaryFieldAndSynonym()
        {
           SummarySynonym = new List<SummarySynonym>();
        }
        public decimal SummaryFieldId { get; set; }
        public string FieldName { get; set; }
        public int? DisplayOrder { get; set; }
        public bool? Mandatory { get; set; }
        public List<SummarySynonym> SummarySynonym { get; set; }
    }

   
}
