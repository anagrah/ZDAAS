using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPSummary.Contracts
{
   public interface IDocumentSummary
    {
        List<SummaryModel> Get(HtmlDocument htmlDocument, List<RfpSummaryFieldEntity> _rfpSummaryFieldList);
    }
}
