using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPServices.Contracts;

namespace Zdaas.RFPServices.ViewModels
{
   public class ApiReturn : IApiReturn
    {
        public string apiStatusCode { get; set; }
        public string apiStatusMessage { get; set; }
    }
}
