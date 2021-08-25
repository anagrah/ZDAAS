using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPOpportunityRFPNodeTree.Contracts
{
   public interface IOpportunityNodeTree
    {
        bool CreateNodeTree(List<LineDetailModel> lineDetailModel);
        List<TreeNodeModel> Tree { get; }
    }
}
