using AutoMapper;
using MassTransit;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor;
using workerService = Zbizlink.MicroEmailBroadCaster.WorkerService.RMQ;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Consumer
{
    public class CMConsumerReceiver : IConsumer<CampaignSendModel>
    {

        private IMapper _mapper;
        private ICampaignManagementService _campaignManagementService;
        private readonly IEmailService _emailService;
        private readonly AppSettings _appSettings;
        private ILoggerManager _logger;
       

         public CMConsumerReceiver(IMapper mapper, ICampaignManagementService campaignManagementService,
             IEmailService emailService, IOptions<AppSettings> appSettings, ILoggerManager logger)
         {
             _mapper = mapper;
             _campaignManagementService = campaignManagementService;
             _emailService = emailService;
             _appSettings = appSettings.Value;
            _logger = logger;

        }
        public async Task Consume(ConsumeContext<CampaignSendModel> context)
        {         
            CampaignSendModel campaignSendModel = context.Message;
            _logger.logTransation(campaignSendModel.transactionId, this.GetType(), MethodBase.GetCurrentMethod());
            workerService.CampaignSendModel CMSendModel = _mapper.Map<workerService.CampaignSendModel>(campaignSendModel);

            bool result = _emailService.SendCampaignManagementEmails(CMSendModel, 1, _appSettings.SmtpUserPassword, _appSettings.SmtpUserPassword, _appSettings.SmtpUserEmail, _appSettings.ApplicationName, _appSettings.SmtpHost, _appSettings.SmtpPort, _appSettings.AdminEmail);
            
            if (result == true)
            {
                await context.Publish<SendEmailJobStatus>(new { CampaignOpportunityId = campaignSendModel.CampaignOpportunityId, Status = "true" });
            }
            else
            {
                await context.Publish<SendEmailJobStatus>(new { CampaignOpportunityId = campaignSendModel.CampaignOpportunityId, Status = "False" });
            }

         }
    }
}

    