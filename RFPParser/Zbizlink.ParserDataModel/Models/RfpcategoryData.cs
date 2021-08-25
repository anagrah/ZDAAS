using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class RfpcategoryData
    {
        public decimal RfpcategoryDataId { get; set; }
        public string CategoryData { get; set; }
        public decimal CategoryId { get; set; }
        public decimal? RfpdocumentId { get; set; }
        public decimal? CompanyId { get; set; }
        public decimal? UserId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool? Published { get; set; }
        public decimal? OpportunityId { get; set; }

        public virtual Category Category { get; set; }
        public virtual Opportunity Opportunity { get; set; }
    }
}
