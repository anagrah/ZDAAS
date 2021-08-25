using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class JobTitleWord
    {
        public decimal JobTitleWordId { get; set; }
        public string Word { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
