using System;
using System.Collections.Generic;
using System.Text;

using Zbizlink.MicroEmailBroadCaster.DataModel.Contractor;
using Zbizlink.MicroEmailBroadCaster.DataModel.DBContext;
using Zbizlink.MicroEmailBroadCaster.DataModel.Repository;

namespace Zbizlink.MicroEmailBroadCaster.DataModel
{
    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        private EmailBroadCasterContext _context;
        private bool disposed = false;
        private GenericRepository<EmailTemplate> _emailTemplateRepository;
        private GenericRepository<LkptEmailCategory> _lkptemailCatRepository;
        public UnitOfWork(EmailBroadCasterContext context)
        {
            _context = context;
        }

        public GenericRepository<EmailTemplate> emailTemplateRepository
        {
            get
            {
                if (this._emailTemplateRepository == null)
                    this._emailTemplateRepository = new GenericRepository<EmailTemplate>(_context);
                return _emailTemplateRepository;
            }
        }


        public GenericRepository<LkptEmailCategory> lkptemailCatRepository
        {
            get
            {
                if (this._lkptemailCatRepository == null)
                    this._lkptemailCatRepository = new GenericRepository<LkptEmailCategory>(_context);
                return _lkptemailCatRepository;
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
