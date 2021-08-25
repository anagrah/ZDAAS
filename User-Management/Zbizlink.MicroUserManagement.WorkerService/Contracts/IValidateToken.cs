
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroUserManagement.WorkerService.Contracters
{
    public interface IValidateToken
    {
        public bool ValidateJWT(HttpContext context,string token, string secretkey,string issuer,string audience);
    }
}
