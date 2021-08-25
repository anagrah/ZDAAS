using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCampaignManagement.DataModel.GenericRepository;
using Zbizlink.MicroCampaignManagement.DataModel.Models;

namespace Zbizlink.MicroCampaignManagement.DataModel.Contracts
{
  public  interface IUnitOfWork
    {
        GenericRepository<CampaignOpportunity> CampaignOpportunityRepository { get; }
        GenericRepository<GenerateLeads> GenerateLeadsRepository { get; }

       
        void Save();
    }
}
