using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroUserManagement.WorkerService.Contracters
{
    public interface IGenerateToken
    {
        public string GenerateJWT(string secretkey, string user, string issuer, string audience);
    }
}
