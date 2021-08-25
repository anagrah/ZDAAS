using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Enum;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.ViewModels
{
  public  class ClientResponse
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

