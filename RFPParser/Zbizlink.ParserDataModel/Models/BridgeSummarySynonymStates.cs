using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSummarySynonymStates
    {
        public int BridgeSummarySynonymStatesId { get; set; }
        public decimal RfpsummarySynonymId { get; set; }
        public int StateId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
