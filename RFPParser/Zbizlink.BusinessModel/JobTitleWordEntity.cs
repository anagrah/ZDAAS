using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class JobTitleWordEntity
    {
        public decimal JobTitleWordId { get; set; }
        public string Word { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
