using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class LaborHeadingSynonym
    {
        public decimal LaborHeadingSynonymId { get; set; }
        public string Synonym { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? LaborHeadingId { get; set; }

        public virtual LaborHeading LaborHeading { get; set; }
    }
}
