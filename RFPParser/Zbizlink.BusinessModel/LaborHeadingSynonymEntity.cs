using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
    public class LaborHeadingSynonymEntity
    {
        public decimal LaborHeadingSynonymId { get; set; }
        public string Synonym { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? LaborHeadingId { get; set; }

        public LaborHeadingEntity LaborHeading { get; set; }
    }
}