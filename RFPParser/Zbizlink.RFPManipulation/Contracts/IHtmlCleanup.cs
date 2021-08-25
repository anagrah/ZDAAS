using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPManipulation.Contracts
{
   public interface IHtmlCleanup
    {
        List<HTMLLineModel> CleanDoc(HtmlDocument htmlDocument, string _width);
    }
}
