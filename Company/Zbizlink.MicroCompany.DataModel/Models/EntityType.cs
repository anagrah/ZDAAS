using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class EntityType
    {
        public EntityType()
        {
            CompanyEntityTypes = new HashSet<CompanyEntityType>();
        }

        public long Id { get; set; }
        public string EntityTypeShortDesc { get; set; }
        public string EntityTypeLongDesc { get; set; }

        public virtual ICollection<CompanyEntityType> CompanyEntityTypes { get; set; }
    }
}
