using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class lkptEmployeeHistoryStatus
    {
        public lkptEmployeeHistoryStatus()
        {
        }

        public int EmployeeHistoryStatusID { get; set; }
        public string EmployeeHistoryStatusShortDesc { get; set; }
        public string EmployeeHistoryStatusLongDesc { get; set; }
        public virtual ICollection<EmployeeHistory> EmployeeHistories { get; set; }
    }
}
