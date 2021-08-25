using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class LaborHeadingEntity
    {
        public LaborHeadingEntity()
        {
            LaborHeadingSynonymEntity = new HashSet<LaborHeadingSynonymEntity>();
        }

        public decimal LaborHeadingId { get; set; }
        public string Heading { get; set; }
        public int SynonymMaximumLength { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }

        public ICollection<LaborHeadingSynonymEntity> LaborHeadingSynonymEntity { get; set; }
    }
}
