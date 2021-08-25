using System;
using System.Collections.Generic;
using System.Text;

namespace RFPStoreProcedureModel
{
  public  class OpportunitySolicitaionNo
    {
        public decimal OpportunityId { get; set; }
        public string SolicitationNo { get; set; }
        public decimal CompanyId { get; set; }

        public decimal ClientId { get; set; }
        public decimal UserId { get; set; }

        public decimal SegmentId { get; set; }
        public bool Published { get; set; }
    }
}
