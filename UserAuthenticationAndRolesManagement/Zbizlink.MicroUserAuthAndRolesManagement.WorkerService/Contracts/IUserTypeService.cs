using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Utility;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Contracts
{
    public interface IUserTypeService
    {
        ClientResponse AddEntity(UserType _userType);
    }
}
