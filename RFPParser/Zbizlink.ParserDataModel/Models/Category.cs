using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class Category
    {
        public Category()
        {
            CategorySynonym = new HashSet<CategorySynonym>();
            OpportunityHeading = new HashSet<OpportunityHeading>();
            RfpcategoryData = new HashSet<RfpcategoryData>();
        }

        public decimal CategoryId { get; set; }
        public decimal IdForZbizlink { get; set; }
        public string Name { get; set; }
        public string Decription { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string Color { get; set; }
        public decimal CompanyId { get; set; }

        public virtual ICollection<CategorySynonym> CategorySynonym { get; set; }
        public virtual ICollection<OpportunityHeading> OpportunityHeading { get; set; }
        public virtual ICollection<RfpcategoryData> RfpcategoryData { get; set; }
    }
}
