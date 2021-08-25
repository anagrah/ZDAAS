using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPServices.Enum;

namespace Zdaas.RFPServices.ViewModels
{
    public class ClientResponse
    {
        public WebApiResponseCode code { get; set; } = WebApiResponseCode.Fail;
        public string message { get; set; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }

    }

    public class ClientResponse<T> : ClientResponse
    {      
        public T response { get; set; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }



}
