using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class FieldType
    {
        public FieldType()
        {
            Rfpsummary = new HashSet<Rfpsummary>();
        }

        public int FieldTypeId { get; set; }
        public string FieldTypeShortDesc { get; set; }
        public string FieldTypeLongDesc { get; set; }

        public virtual ICollection<Rfpsummary> Rfpsummary { get; set; }
    }
}
