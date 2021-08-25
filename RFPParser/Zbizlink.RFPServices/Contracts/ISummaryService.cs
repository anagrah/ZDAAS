using HtmlAgilityPack;
using System.Collections.Generic;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPServices.ViewModels;

namespace Zdaas.RFPServices.Contracts
{
    public interface ISummaryService
    {

        
        List<SummaryModel> GetDocumentSummary(HtmlDocument htmlDocument);
        List<OpportunitySummaryViewModel> GetOpportunitySummary(decimal opportunityId);


    }
}
