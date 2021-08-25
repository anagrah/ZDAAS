using System;
using System.Collections.Generic;

namespace Zbizlink.RFPDataModel.Models
{
    public partial class LaborPosition
    {
        public decimal LaborPositionId { get; set; }
        public string Position { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? CategoryId { get; set; }

        public Category Category { get; set; }
    }
}
