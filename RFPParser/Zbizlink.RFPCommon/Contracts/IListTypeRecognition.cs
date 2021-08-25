using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPCommon.Contracts
{
    public interface IListTypeRecognition
    {
        bool RecognizeListType(LineDetailModel line);
    }
}
