using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public class lkptOpportunityRequirementType
    {
        public lkptOpportunityRequirementType()
        {
        }

        public short OpportunityRequirementTypeID { get; set; }
        public string OpportunityRequirementTypeShortDesc { get; set; }
        public string OpportunityRequirementTypeLongDesc { get; set; }
        public virtual ICollection<OpportunityRequirementHeading> OpportunityRequirementHeadings { get; set; }

    }
}
