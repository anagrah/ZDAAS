using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class States
    {
        public States()
        {
            BridgeSynonymStates = new HashSet<BridgeSynonymStates>();
            Opportunity = new HashSet<Opportunity>();
        }

        public int StateId { get; set; }
        public string StateName { get; set; }
        public string Description { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual ICollection<BridgeSynonymStates> BridgeSynonymStates { get; set; }
        public virtual ICollection<Opportunity> Opportunity { get; set; }
    }
}
