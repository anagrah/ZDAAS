using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroEmailBroadCaster.DataModel.Contractor;
using Zbizlink.MicroEmailBroadCaster.DataModel.DBContext;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Services
{
    public class EmailTemplateService : IEmailTemplateService
    {
        private readonly ILoggerManager _loggerManager;

        private readonly IUnitOfWork _unitOfWork;
        public EmailTemplateService(ILoggerManager loggerManager, IUnitOfWork unitOfWork)
        {
            _loggerManager = loggerManager;
            _unitOfWork = unitOfWork;

        }
        public EmailTemplate GetEmailTemplate(int emailCategoryId)
        {
            return _unitOfWork.emailTemplateRepository.Get(x => x.EmailCategoryId == emailCategoryId);
        }
    }
}
