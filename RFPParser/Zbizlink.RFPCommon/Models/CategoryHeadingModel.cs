using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Models
{
   public class CategoryHeadingModel
    {

        public decimal CategoryId { get; set; }
        public string CategoryName { get; set; }

        public string Color { get; set; }

        public List<LineDetailModel> LineDetails;
    }
}
