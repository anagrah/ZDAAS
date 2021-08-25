using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityCapabilityRemark
    {
        public decimal OpportunityCapabilityRemarksID { get; set; }
        public string Remarks { get; set; }
        public string SelectedAnswer { get; set; }
        public Nullable<decimal> OpportunityCapabilityID { get; set; }
        public Nullable<decimal> CompanyID { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreationDate { get; set; }
        public Nullable<bool> IsAnswer { get; set; }
        public Nullable<bool> IsOption { get; set; }
        public Nullable<int> Rating { get; set; }
        public virtual OpportunityCapability OpportunityCapability { get; set; }
    }
}
