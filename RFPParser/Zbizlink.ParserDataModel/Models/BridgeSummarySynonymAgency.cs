using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class BridgeSummarySynonymAgency
    {
        public int BridgeSummarySynonymAgencyId { get; set; }
        public decimal RfpsummarySynonymId { get; set; }
        public int AgencyId { get; set; }
        public decimal CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
