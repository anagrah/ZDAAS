using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCaptureManagement.DataModel.Models
{
    public partial class OpportunityDocument
    {
        public OpportunityDocument()
        {
        }
        public decimal OpportunityDocumentID { get; set; }
        public string DocumentName { get; set; }
        public string DocumentPath { get; set; }
        public Nullable<decimal> OpportunityID { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreationDate { get; set; }
        public Nullable<decimal> FileManagerID { get; set; }
        public virtual Opportunity Opportunity { get; set; }
    }
}
