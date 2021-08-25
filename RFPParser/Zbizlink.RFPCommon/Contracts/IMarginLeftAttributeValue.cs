using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Contracts
{
   public interface IMarginLeftAttributeValue
    {
        string Get(HtmlNode htmlNode);
    }
}
