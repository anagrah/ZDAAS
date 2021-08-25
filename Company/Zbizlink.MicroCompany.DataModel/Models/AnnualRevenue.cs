using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class AnnualRevenue
    {
        public long Id { get; set; }
        public string AnnualRevenueShortDesc { get; set; }
        public string AnnualRevenueLongDesc { get; set; }
    }
}
