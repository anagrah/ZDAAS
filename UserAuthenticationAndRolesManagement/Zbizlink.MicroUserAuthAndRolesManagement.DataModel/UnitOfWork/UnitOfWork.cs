using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Database.Context;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Repositories;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Repositories.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.UnitOfWork.Contracts;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.UnitOfWork
{
    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        readonly ApplicationDbContext _context;
        private bool disposed = false;
        private GenericRepository<UserType> _userTypeRepository;
        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }
        public GenericRepository<UserType> userTypeRepository
        {
            get
            {
                if (this._userTypeRepository == null)
                    this._userTypeRepository = new GenericRepository<UserType>(_context);
                return _userTypeRepository;
            }
        }
        public int SaveChanges()
        {
            return _context.SaveChanges();
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
