using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityLaborCategory
    {
        public OpportunityLaborCategory()
        {
        }

        public decimal OpportunityLaborCategoryID { get; set; }
        public string LaborCategoryContent { get; set; }
        public string RFRTemplateContents { get; set; }
        public Nullable<decimal> OpportunityID { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public virtual ICollection<OpportunityResource> OpportunityResources { get; set; }
        public Object wmlDoc { get; set; }
    }
}
