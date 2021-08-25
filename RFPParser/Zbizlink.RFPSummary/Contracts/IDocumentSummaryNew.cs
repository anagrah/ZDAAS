using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPSummary.Contracts
{
   public interface IDocumentSummaryNew
    {
        List<SummaryModel> Get(List<LineDetailModel> lineDetailModels, List<RfpSummaryFieldEntity> _rfpSummaryFieldList);
    }
}
