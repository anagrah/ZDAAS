using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeReference
    {
        public decimal EmployeeReferenceID { get; set; }
        public Nullable<decimal> EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string JobTitle { get; set; }
        public string OrganizationName { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string AdditionalInformation { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
