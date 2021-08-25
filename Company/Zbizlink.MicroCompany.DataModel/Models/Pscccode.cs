using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class Pscccode
    {
        public Pscccode()
        {
            CompanyPscccodes = new HashSet<CompanyPscccode>();
        }

        public long Id { get; set; }
        public string PsccodeShortDesc { get; set; }
        public string PsccodeLongDesc { get; set; }

        public virtual ICollection<CompanyPscccode> CompanyPscccodes { get; set; }
    }
}
