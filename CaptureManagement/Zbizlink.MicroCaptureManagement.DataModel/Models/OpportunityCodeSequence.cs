using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityCodeSequence
    {
        public decimal OpportunityCodeSequenceID { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public string Code { get; set; }
        public Nullable<int> SequenceID { get; set; }
        public Nullable<decimal> CompanyID { get; set; }
        public Nullable<int> IsUsed { get; set; }
    }
}
