using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPOpportunityRFPNodeTree.Contracts
{
   internal interface ILineSearch
    {
        LineDetailModel GetPreviousLineDetail(List<LineDetailModel> lineDetailModel, LineDetailModel currentLineDetail);
        LineDetailModel GetNextLineDetail(List<LineDetailModel> lineDetailModel, LineDetailModel currentLineDetail);
    }
}
