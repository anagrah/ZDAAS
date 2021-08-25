using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPServices.Contracts
{
   public interface IApiReturn
    {
        public string apiStatusCode { get; set; }
        public string apiStatusMessage { get; set; }
    }
}
