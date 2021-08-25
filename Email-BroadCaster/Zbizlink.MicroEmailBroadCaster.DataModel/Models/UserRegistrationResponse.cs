using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroEmailBroadCaster.DataModel.Models
{
    public class UserRegistrationResponse
    {
        public string message { get; set; }
        public Int32 code { get; set; }
        public UserRegistrationResponse(string _message, Int32 _code)
        {
            this.message = _message;
            this.code = _code;
        }
    }
}
