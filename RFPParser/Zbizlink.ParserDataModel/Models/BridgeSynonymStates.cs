using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSynonymStates
    {
        public decimal BridgeSynonymStatesId { get; set; }
        public decimal SynonymId { get; set; }
        public int StateId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual States State { get; set; }
    }
}
