using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPNodeTree.Contracts
{
  public  interface IListTypeRecognition
    {
        bool RecognizeListType(LineDetailModel line);
    }
}
