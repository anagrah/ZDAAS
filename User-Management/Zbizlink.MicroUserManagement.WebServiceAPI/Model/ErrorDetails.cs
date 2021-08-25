using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Model
{
    public class ErrorDetails
    {
        public int code { get; set; }
        public string message { get; set; }


        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
