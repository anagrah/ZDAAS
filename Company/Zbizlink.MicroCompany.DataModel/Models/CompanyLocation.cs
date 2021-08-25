using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class CompanyLocation
    {
        public long Id { get; set; }
        public long? CompanyId { get; set; }
        public long? LocationId { get; set; }
        public int? IsActiveId { get; set; }
    }
}
