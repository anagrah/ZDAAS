using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
  public  class OpportunityEntity
    {

        public OpportunityEntity()
        {
            OpportunityHeading = new HashSet<OpportunityHeadingEntity>();

            OpportunityHeading = new HashSet<OpportunityHeadingEntity>();
            RfpcategoryData = new HashSet<RfpCategoryDataEntity>();
            Rfpdocument = new HashSet<RfpdocumentEntity>();
            Rfpsummary = new HashSet<RfpSummaryEntity>();
        }

        //DB Properties
        public decimal OpportunityId { get; set; }
        public string OpportunityName { get; set; }
        public string SolicitationNumber { get; set; }
        public decimal? CompanyId { get; set; }
        public decimal? ClientId { get; set; }
        public decimal? UserId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public decimal? SegmentId { get; set; }

        public bool Published { get; set; }

        //Additional Properties
        public string TitleName { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string FilePath { get; set; }
        public decimal? CompanySegmentID { get; set; }
        public virtual ICollection<OpportunityHeadingEntity> OpportunityHeading { get; set; }
        public virtual ICollection<RfpCategoryDataEntity> RfpcategoryData { get; set; }
        public virtual ICollection<RfpdocumentEntity> Rfpdocument { get; set; }
        public virtual ICollection<RfpSummaryEntity> Rfpsummary { get; set; }
    }
}

