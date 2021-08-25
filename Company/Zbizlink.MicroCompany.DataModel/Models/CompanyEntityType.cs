using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class CompanyEntityType
    {
        public long Id { get; set; }
        public long? CompanyId { get; set; }
        public long? EntityTypeId { get; set; }

        public virtual Company Company { get; set; }
        public virtual EntityType EntityType { get; set; }
    }
}
