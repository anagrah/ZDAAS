using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class RfpCategoryDataEntity
    {
        public decimal RfpcategoryDataId { get; set; }
        public string CategoryData { get; set; }
        public decimal CategoryId { get; set; }

        public string CategoryName { get; set; }
        public decimal? OpportunityId { get; set; }
        public decimal CompanyId { get; set; }
        public decimal? UserId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool? Published { get; set; }
        public CategoryEntity Category { get; set; }
        public RfpdocumentEntity Rfpdocument { get; set; }
    }
}
