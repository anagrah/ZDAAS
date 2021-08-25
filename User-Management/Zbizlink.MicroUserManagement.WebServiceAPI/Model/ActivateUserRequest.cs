using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Model
{
    public class ActivateUserRequest
    {

      

            public string activationCode { get; set; }

        public string emailid { get; set; }
    }
}
