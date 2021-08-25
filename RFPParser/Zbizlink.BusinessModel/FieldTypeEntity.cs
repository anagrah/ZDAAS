using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class FieldTypeEntity
    {
        public FieldTypeEntity()
        {
            Rfpsummary = new HashSet<RfpSummaryEntity>();
        }

        public int FieldTypeId { get; set; }
        public string FieldTypeShortDesc { get; set; }
        public string FieldTypeLongDesc { get; set; }

        public ICollection<RfpSummaryEntity> Rfpsummary { get; set; }
    }
}