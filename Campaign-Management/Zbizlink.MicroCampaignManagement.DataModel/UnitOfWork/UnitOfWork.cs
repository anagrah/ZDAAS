using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCampaignManagement.DataModel.Contracts;
using Zbizlink.MicroCampaignManagement.DataModel.DBContext;
using Zbizlink.MicroCampaignManagement.DataModel.GenericRepository;
using Zbizlink.MicroCampaignManagement.DataModel.Models;

namespace Zbizlink.MicroCampaignManagement.DataModel.UnitOfWork
{
  public  class UnitOfWork : IDisposable, IUnitOfWork
    {       
        private CampaignManagementContext _context = null;

        private GenericRepository<CampaignOpportunity> _campaignOpportunityRepository;
         private GenericRepository<GenerateLeads> _GenerateLeadsRepository;


        private bool disposed = false;


       
        public GenericRepository<CampaignOpportunity> CampaignOpportunityRepository
        {
            get
            {
                if (this._campaignOpportunityRepository == null)
                    this._campaignOpportunityRepository = new GenericRepository<CampaignOpportunity>(_context);
                return _campaignOpportunityRepository;
            }
        }

        public GenericRepository<GenerateLeads> GenerateLeadsRepository
        {
            get
            {
                if (this._GenerateLeadsRepository == null)
                    this._GenerateLeadsRepository = new GenericRepository<GenerateLeads>(_context);
                return _GenerateLeadsRepository;
            }
        }


        public UnitOfWork(CampaignManagementContext context)
        {
            _context = context;
        }

      
        public void Save()
        {
            _context.SaveChanges();
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
            

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
