using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSynonymIndustry
    {
        public decimal BridgeSynonymIndustryId { get; set; }
        public decimal SynonymId { get; set; }
        public int IndustryId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
