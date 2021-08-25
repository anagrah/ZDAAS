using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;
using Zbizlink.MicroUserManagement.DataModel.Contracts;
using Zbizlink.MicroUserManagement.DataModel.Repositories;

namespace Zbizlink.MicroUserManagement.DataModel.UnitOfWork
{
    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        private Bizlink_TestContext _context;
        private bool disposed = false;
        private GenericRepository<User> _userRepository;
        private GenericRepository<CompanyUser> _companyUserRepository;
        public GenericRepository<AdminUser> _adminUserRepository;
        public GenericRepository<AdminRole> _adminRoleRepository;
        public GenericRepository<AdminUserRole> _adminUserRoleRepository;
        public GenericRepository<Company> _companyRepository;
        public GenericRepository<Client> _clientRepository;
        public UnitOfWork(Bizlink_TestContext context)
        {
            _context = context;
        }


        public GenericRepository<AdminUserRole> AdminUserRoleRepository
        {
            get
            {
                if (this._adminUserRoleRepository == null)
                    this._adminUserRoleRepository = new GenericRepository<AdminUserRole>(_context);
                return _adminUserRoleRepository;
            }
        }

        public GenericRepository<User> userRepository
        {
            get 
            {
                if (this._userRepository == null)
                    this._userRepository = new GenericRepository<User>(_context);
                return _userRepository;
            }
        }

        public GenericRepository<CompanyUser> companyUserRepository
        {
            get
            {
                if (this._companyUserRepository == null)
                    this._companyUserRepository = new GenericRepository<CompanyUser>(_context);
                return _companyUserRepository;
            }
        }

        public GenericRepository<AdminRole> AdminRoleRepository
        {
            get
            {
                if (this._adminRoleRepository == null)
                    this._adminRoleRepository = new GenericRepository<AdminRole>(_context);
                return _adminRoleRepository;
            }
        }
        public GenericRepository<AdminUser> adminUserRepository
        {
            get
            {
                if (this._adminUserRepository == null)
                    this._adminUserRepository = new GenericRepository<AdminUser>(_context);
                return _adminUserRepository;
            }
        }

        public GenericRepository<Company> companyRepository
        {
            get
            {
                if (this._companyRepository == null)
                    this._companyRepository = new GenericRepository<Company>(_context);
                return _companyRepository;
            }
        }

        public GenericRepository<Client> ClientRepository
        {
            get
            {
                if (this._clientRepository == null)
                    this._clientRepository = new GenericRepository<Client>(_context);
                return _clientRepository;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
    }
}
