using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;

namespace Zbizlink.MicroUserManagement.DataModel.Models
{
    public class VerifyUserIdResponse
    {
        public string message { get; set; }
        public string tokem { get; set; }

        public VerifyUserIdResponse(string token , string message)
        {
            this.message = message;
            this.tokem = tokem;
        }
    }
}
