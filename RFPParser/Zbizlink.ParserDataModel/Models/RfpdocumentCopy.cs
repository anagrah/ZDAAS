using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class RfpdocumentCopy
    {
        public decimal RfpdocumentId { get; set; }
        public string DocName { get; set; }
        public string DocContent { get; set; }
        public bool Published { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? CompanyId { get; set; }
        public decimal? UserId { get; set; }
    }
}
