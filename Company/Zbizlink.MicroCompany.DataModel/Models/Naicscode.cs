using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class Naicscode
    {
        public long Id { get; set; }
        public string NaicscodeShortDesc { get; set; }
        public string NaicscodeLongDesc { get; set; }
        public long? ParentId { get; set; }
    }
}
