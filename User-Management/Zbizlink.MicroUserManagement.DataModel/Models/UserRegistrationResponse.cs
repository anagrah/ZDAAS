using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroUserManagement.DataModel.Models
{
    public class UserRegistrationResponse
    {

        public string message { get; set; }
        public Int32 code { get; set; }
        public Guid ActivationCode { get; set; }
        public UserRegistrationResponse(string _message, Int32 _code, Guid _activationCode)
        {
            this.message = _message;
            this.code = _code;
            this.ActivationCode = _activationCode;
        }
       
    }
}
