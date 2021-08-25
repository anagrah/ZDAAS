using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public class OpportunitySharedSectionItem
    {
        public decimal OpportunitySharedSectionItemID { get; set; }
        public decimal OpportunitySharedSectionID { get; set; }
        public decimal OpportunityID { get; set; }
        public decimal PartnerID { get; set; }
        public decimal ItemID { get; set; }
        public int OpportunitySectionID { get; set; }

        public virtual OpportunitySharedSection OppotunitySharedSection { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public virtual lkptOpportunitySection OpportunitySection { get; set; }
    }
}
