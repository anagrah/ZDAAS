using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRMToolkitApi.Models
{
    public class AuthenticationParams
    {
        public string ConsumerKey { set; get; }
        public string ConuserSecret { set; get; }
        public string UserName { set; get; }
        public string SecurityToken { set; get; }
        public string Password { set; get; }
        public string PasswordAndToken { set; get; }
    }
}