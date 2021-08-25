using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPCommon.Contracts
{
  public interface IBold
    {
        bool GetBoldStatus(LineDetailModel lineDetail);
    }
}
