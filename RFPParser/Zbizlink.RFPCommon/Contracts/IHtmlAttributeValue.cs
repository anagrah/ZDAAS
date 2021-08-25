using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;

namespace Zdaas.RFPCommon.Contracts
{
   public interface IHtmlAttributeValue
    {
        string Get(HtmlNode htmlNode, string attributeName);
       
    }
}
