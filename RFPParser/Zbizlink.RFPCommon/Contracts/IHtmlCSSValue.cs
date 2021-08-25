using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Contracts
{
   public interface IHtmlCSSValue
    {
        string Get(HtmlNode htmlStyleNode, HtmlNode htmlNode, string attributeName);
    }
}
