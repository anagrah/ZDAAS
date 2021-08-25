using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class lkptOpportunitySection
    {
        public lkptOpportunitySection()
        {
        }
        public int OpportunitySectionID { get; set; }
        public string OpportunitySectionShortDesc { get; set; }
        public string OpportunitySectionLongDesc { get; set; }
        public virtual ICollection<OpportunitySharedSection> OpportunitySharedSections { get; set; }
        public virtual ICollection<OpportunitySharedSectionItem> OpportunitySharedSectionItems { get; set; }
    }
}
