using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class CompanyType
    {
        public long Id { get; set; }
        public string CompanyTypeShortDesc { get; set; }
        public string CompanyTypeLongDesc { get; set; }
    }
}
