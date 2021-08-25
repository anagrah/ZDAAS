using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Repositories;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Repositories.Contracts;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.UnitOfWork.Contracts
{
    public interface IUnitOfWork
    {
        GenericRepository<UserType> userTypeRepository { get; }
        int SaveChanges();
    }
}
