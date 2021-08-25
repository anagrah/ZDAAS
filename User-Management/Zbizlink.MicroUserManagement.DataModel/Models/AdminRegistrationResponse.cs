using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserManagement.DataModel.Models
{
    public class AdminRegistrationResponse
    {
        public string message { get; set; }
        public Int32 code { get; set; }
        public AdminRegistrationResponse(string _message, Int32 _code)
        {
            this.message = _message;
            this.code = _code;
        }
    }
}
