using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPCommon.ListNumbers.Contracts
{
    public interface IHeading
    {
        string GetChild(string heading);
        string GetSibling(string heading);
        bool GetChild(LineDetailModel previousLineHeading, LineDetailModel currentLineDetail);
        bool GetSibling(LineDetailModel previousLineHeading, LineDetailModel currentLineDetail);


    }
}
