using System;

namespace RFPStoreProcedureModel
{
    public class DocSolicitaionNo
    {
        public decimal RFPDocumentId { get; set; }
        public string DocName { get; set; }
        public string SolicitationNo { get; set; }
        public decimal CompanyId { get; set; }
        public decimal UserId { get; set; }
        public decimal ClientId { get; set; }
        public decimal SegmentId { get; set; }

        public string FilePath { get; set; }
    }
}
