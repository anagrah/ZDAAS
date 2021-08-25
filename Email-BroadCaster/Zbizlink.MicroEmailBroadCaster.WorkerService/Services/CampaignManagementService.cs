using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroEmailBroadCaster.DataModel.Contractor;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.RMQ;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Services
{
    public class CampaignManagementService : ICampaignManagementService
    {
        private readonly ILoggerManager _loggerManager;

        private readonly IUnitOfWork _unitOfWork;
        public CampaignManagementService(ILoggerManager loggerManager, IUnitOfWork unitOfWork)
        {
            _loggerManager = loggerManager;
            _unitOfWork = unitOfWork;

        }
        public void SendEmail(CampaignSendModel campaignSendModel)
        {
            var t = campaignSendModel;
        }
    }
}
