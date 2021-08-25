using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPNodeTree.Contracts
{
   internal interface IAlphabetRomanAmbiguity
    {
        bool Resolve(List<LineDetailModel> lineDetailList, List<LineDetailModel> previousLineHeadingList, LineDetailModel currentLineDetail);
 
    }
}
