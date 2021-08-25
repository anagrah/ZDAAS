using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPNodeTree
{
    internal class LineSearch : ILineSearch
    {
        public LineDetailModel GetPreviousLineDetail(List<LineDetailModel> lineDetailModel, LineDetailModel currentLineDetail)
        {
           int currentLineIndex = lineDetailModel.IndexOf(currentLineDetail);

            if (currentLineIndex == 0) return null;

           LineDetailModel previousLineDetail = lineDetailModel[currentLineIndex - 1];

            return previousLineDetail;
        }

        public LineDetailModel GetNextLineDetail(List<LineDetailModel> lineDetailModel, LineDetailModel currentLineDetail)
        {
            int currentLineIndex = lineDetailModel.IndexOf(currentLineDetail);

            if (currentLineIndex == lineDetailModel.Count - 1) return null;

            LineDetailModel nextLineDetail = lineDetailModel[currentLineIndex + 1];

            return nextLineDetail;
        }
    }
}
