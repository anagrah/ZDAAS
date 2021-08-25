using System;
using System.Collections.Generic;
using System.Text;

using Zbizlink.MicroEmailBroadCaster.DataModel.DBContext;
using Zbizlink.MicroEmailBroadCaster.DataModel.Repository;

namespace Zbizlink.MicroEmailBroadCaster.DataModel.Contractor
{
    public interface IUnitOfWork
    {
        GenericRepository<EmailTemplate> emailTemplateRepository { get; }
        GenericRepository<LkptEmailCategory> lkptemailCatRepository { get; }
        void Save();
    }
}
