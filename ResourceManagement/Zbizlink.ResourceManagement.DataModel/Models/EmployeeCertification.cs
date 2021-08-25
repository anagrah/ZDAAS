using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class EmployeeCertification
    {
        public decimal CertificationID { get; set; }
        public Nullable<decimal> EmployeeID { get; set; }
        public string CertificationName { get; set; }
        public string CertificationAuthority { get; set; }
        public string LicenseNumber { get; set; }
        public string CertificationURL { get; set; }
        public Nullable<System.DateTime> CertificationDate { get; set; }
        public virtual Employee Employee { get; set; }
    }

}
