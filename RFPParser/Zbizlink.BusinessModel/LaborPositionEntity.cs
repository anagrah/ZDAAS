using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
  public class LaborPositionEntity
    {
       
        public decimal LaborPositionId { get; set; }
        public string Position { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? CategoryId { get; set; }

        public CategoryEntity Category { get; set; }
        
    }
}
