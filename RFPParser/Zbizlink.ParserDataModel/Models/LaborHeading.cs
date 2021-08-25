using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class LaborHeading
    {
        public LaborHeading()
        {
            LaborHeadingSynonym = new HashSet<LaborHeadingSynonym>();
        }

        public decimal LaborHeadingId { get; set; }
        public string Heading { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }

        public virtual ICollection<LaborHeadingSynonym> LaborHeadingSynonym { get; set; }
    }
}
