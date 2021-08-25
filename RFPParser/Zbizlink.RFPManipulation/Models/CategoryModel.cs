using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPManipulation.Models
{
   public class CategoryModel
    {
        public string CategoryName { get; set; }

        public string Color { get; set; }
        public List<string> categorySynonyms { get; set; }
    }
}
