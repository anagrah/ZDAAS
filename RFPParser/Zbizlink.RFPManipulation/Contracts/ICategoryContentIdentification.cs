using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPManipulation.Contracts
{
    public interface ICategoryContentIdentification
    {
       IEnumerable<TreeNodeModel> GetCategoryContents(List<LineDetailModel> lineDetailCollection,CategoryHeadingModel categoryHeadings, List<HTMLLineModel> htmlLineCollection, INodeTree nodeTree);
    }
}
