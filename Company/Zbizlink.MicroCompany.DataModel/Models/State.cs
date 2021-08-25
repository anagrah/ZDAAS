using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class State
    {
        public long Id { get; set; }
        public string StateShortDesc { get; set; }
        public string StateLongDesc { get; set; }
    }
}
