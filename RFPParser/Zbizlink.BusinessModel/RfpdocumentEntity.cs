using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class RfpdocumentEntity
    {
       

        public decimal RfpdocumentId { get; set; }
        public string DocName { get; set; }
        public string DocContent { get; set; }
        public bool Published { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? CompanyId { get; set; }
        public decimal? UserId { get; set; }
        public string FilePath { get; set; }
        public decimal? ClientId { get; set; }
        public decimal? SegmentId { get; set; }
        public decimal? OpportunityId { get; set; }
        public bool Parsed { get; set; }
        public virtual OpportunityEntity Opportunity { get; set; }
    }
}
