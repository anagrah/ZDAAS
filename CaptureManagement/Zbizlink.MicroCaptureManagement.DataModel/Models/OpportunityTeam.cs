using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityTeam
    {
        public decimal OpportunityTeamID { get; set; }
        public Nullable<decimal> OpportunityID { get; set; }
        public Nullable<decimal> CompanyGroupID { get; set; }
        public Nullable<short> TeamTypeID { get; set; }
        public virtual Opportunity Opportunity { get; set; }
    }
}
