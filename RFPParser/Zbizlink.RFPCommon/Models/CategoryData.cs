using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Models
{
   public class CategoryData
    {
        public CategoryData()
        {
            HTMLNodeList = new List<HtmlNode>();
        }
        public decimal CategoryId { get; set; }
        public List<HtmlNode> HTMLNodeList { get; set; }
    }
}
