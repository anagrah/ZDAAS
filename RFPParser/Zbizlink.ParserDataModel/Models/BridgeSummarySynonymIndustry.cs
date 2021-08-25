using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSummarySynonymIndustry
    {
        public int BridgeSummarySynonymIndustryId { get; set; }
        public decimal RfpsummarySynonymId { get; set; }
        public int IndustryId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
