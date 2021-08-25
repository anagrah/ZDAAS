using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Models
{
    [Serializable]
    public class HTMLLineModel
    {
        public int LineNumber { get; set; }
        public HtmlNode HtmlLine { get; set; }
        public bool Content { get; set; }
    }
}
