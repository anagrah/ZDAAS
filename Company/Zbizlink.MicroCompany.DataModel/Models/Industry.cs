using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class Industry
    {
        public long Id { get; set; }
        public string IndustryShortDesc { get; set; }
        public string IndustryLongDesc { get; set; }
    }
}
