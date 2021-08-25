using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeEmailReminder
    {
        public decimal EmployeeEmailReminderID { get; set; }
        public Nullable<decimal> EmployeeInvitationID { get; set; }
        public Nullable<System.DateTime> ReminderDate { get; set; }
        public virtual EmployeeInvitation EmployeeInvitation { get; set; }
    }

}
