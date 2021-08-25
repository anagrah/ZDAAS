using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class Country
    {
        public long Id { get; set; }
        public string CountryShortDesc { get; set; }
        public string CountryLongDesc { get; set; }
    }
}
