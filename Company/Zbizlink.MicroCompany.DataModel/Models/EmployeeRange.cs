using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class EmployeeRange
    {
        public long Id { get; set; }
        public string EmployeeRangeShortDesc { get; set; }
        public string EmployeeRangeLongDesc { get; set; }
    }
}
