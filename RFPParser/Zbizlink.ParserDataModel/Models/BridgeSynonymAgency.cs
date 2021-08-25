using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSynonymAgency
    {
        public decimal BridgeSynonymAgencyId { get; set; }
        public decimal SynonymId { get; set; }
        public int AgencyId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
