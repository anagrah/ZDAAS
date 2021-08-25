using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPNodeTree.Contracts
{
    public interface INodeKeyCreation
    {
        void CreateNodeKey(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, LineDetailModel previousLineDetail,
            List<LineDetailModel> previousLineHeadingList, List<LineDetailModel> previousLineContentList, List<LineDetailModel> ambiguousAlphabetWithRomanList,
           List<LineDetailModel> unclearLineHeadingList);

    }
}
