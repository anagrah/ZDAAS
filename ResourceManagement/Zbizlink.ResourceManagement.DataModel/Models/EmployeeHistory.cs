using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeHistory
    {

        public EmployeeHistory()
        {
        }
        public decimal EmployeeHistoryID { get; set; }
        public decimal EmployeeID { get; set; }
        public Nullable<int> EmployeeHistoryStatusID { get; set; }
        public Nullable<decimal> DesignationID { get; set; }
        public Nullable<decimal> PreviousDesignationID { get; set; }
        public Nullable<decimal> CompanyDepartmentID { get; set; }
        public Nullable<decimal> PreviousCompanyDepartmentID { get; set; }
        public Nullable<System.DateTime> EffectiveDate { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public string Remarks { get; set; }
        public string Attachment { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual lkptEmployeeHistoryStatus lkptEmployeeHistoryStatus { get; set; }
    }

}
