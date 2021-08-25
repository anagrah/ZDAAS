using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class lkptOpportunityType
    {
        public lkptOpportunityType()
        {
        }

        public short OpportunityTypeID { get; set; }
        public string OpportunityTypeShortDesc { get; set; }
        public string OpportunityTypeLongDesc { get; set; }
        public virtual ICollection<Opportunity> Opportunities { get; set; }
    }
}
