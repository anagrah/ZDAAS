using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPCommon.Enum;

namespace Zdaas.RFPOpportunityRFPNodeTree.Contracts
{
   internal interface IHierarchyHeadingNumber
    {
        void SetNodeKey(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, List<LineDetailModel> previousLineDetailList, List<LineDetailModel> _previousLineContentList);

    }
}
