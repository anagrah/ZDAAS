using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPConversion.Contracts
{
    public interface IZDDocConverterProAuthentication
    {
         bool GetUserToken(string apiURL, string userName, string password, out string token);
    }
}
