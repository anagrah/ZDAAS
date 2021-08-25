using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPOpportunityRFPNodeTree.Contracts
{
   internal interface IHierarchyOnlyNumber
    {
        void SetNodeKey(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, List<LineDetailModel> _previousLineHeadingList, List<LineDetailModel> _previousLineContentList);
    }
}
