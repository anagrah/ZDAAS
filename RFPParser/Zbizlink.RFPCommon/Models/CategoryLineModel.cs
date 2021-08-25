using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Models
{
    public class CategoryLineModel
    {
        public string Category { get; set; }

        public string Color { get; set; }

        public List<LineDetailModel> LineDetails;

        //public List<Synonym> SynonymsCollection;

    }
}
