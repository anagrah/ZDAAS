using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPNodeTree.Contracts
{
   internal interface IHierarchyOnlyHeading
    {
        void SetNodeKey(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, List<LineDetailModel> previousLineHeadingList, List<LineDetailModel> _previousLineContentList);
    }
}
