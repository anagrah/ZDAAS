using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPNodeTree.Contracts
{
   public interface INodeTree
    {
        bool CreateNodeTree(List<LineDetailModel> lineDetailModel);
        List<TreeNodeModel> Tree { get; }
    }
}
