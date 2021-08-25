using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPLaborCategory.Contracts
{
   public interface ILaborContentIdentification
    {
       IEnumerable<TreeNodeModel> GetCategoryContents(CategoryHeadingModel categoryHeadings,
           List<HTMLLineModel> htmlLineCollection, INodeTree nodeTree, List<CategoryEntity> categories, List<LineDetailModel> lineDetailCollection);
    }
}
