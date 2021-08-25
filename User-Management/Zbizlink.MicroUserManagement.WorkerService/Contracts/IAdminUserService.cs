using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserManagement.DataModel.Models;
using Zbizlink.MicroUserManagement.WorkerService.ViewModels;

namespace Zbizlink.MicroUserManagement.WorkerService.Contracters
{
    public interface IAdminUserService
    {
        public ClientResponse AdminAuthenticate(AuthenticateRequest model, string secretkey, string issuer, string audience);
        public ClientResponse UserRegistrtion(AdminUserVM model);

        public ClientResponse AdminUsersList();

        public ClientResponse GetRoles();
        public ClientResponse UpdateUser(AdminUserVM user);
    }
}
