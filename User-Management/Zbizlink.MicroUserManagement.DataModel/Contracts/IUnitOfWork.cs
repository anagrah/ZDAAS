using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;
using Zbizlink.MicroUserManagement.DataModel.Repositories;

namespace Zbizlink.MicroUserManagement.DataModel.Contracts
{
    public interface IUnitOfWork    
    {
        GenericRepository<User> userRepository { get; }
        GenericRepository<CompanyUser> companyUserRepository { get; }
        GenericRepository<AdminUser> adminUserRepository { get; }
        GenericRepository<AdminRole> AdminRoleRepository { get; }
        GenericRepository<AdminUserRole> AdminUserRoleRepository { get; }
        GenericRepository<Company> companyRepository { get;}
        GenericRepository<Client> ClientRepository { get; }
        void Save();
    }
}
