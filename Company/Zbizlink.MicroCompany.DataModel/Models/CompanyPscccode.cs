using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class CompanyPscccode
    {
        public long Id { get; set; }
        public long? PscccodeId { get; set; }
        public long? CompanyId { get; set; }

        public virtual Company Company { get; set; }
        public virtual Pscccode Pscccode { get; set; }
    }
}
