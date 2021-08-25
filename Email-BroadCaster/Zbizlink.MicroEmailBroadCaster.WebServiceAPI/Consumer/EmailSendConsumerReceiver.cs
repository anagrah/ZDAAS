using AutoMapper;
using MassTransit;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;
using Zbizlink.Micro.SagaOrchestration;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Consumer
{

    public class EmailSendConsumerReceiver : IConsumer<IEmailSendStatusStartedEvent>
    {

        private IMapper _mapper;
        private readonly IEmailService _emailService;
        private readonly AppSettings _appSettings;
        private ILoggerManager _logger;

        private readonly IEmailTemplateService _emailTemplateService;
        public EmailSendConsumerReceiver(IMapper mapper,
            IEmailService emailService, IOptions<AppSettings> appSettings, ILoggerManager logger, IEmailTemplateService emailTemplateService)
        {
            _mapper = mapper;
            _emailService = emailService;
            _appSettings = appSettings.Value;
            _logger = logger;
            _emailTemplateService = emailTemplateService;
        }
        public async Task Consume(ConsumeContext<IEmailSendStatusStartedEvent> context)
        {
            var message = context.Message;
            string body = "";
            string subject = "";
            dynamic template = null;
            if (message.EmailCategoryId == 2)
            {
                template = _emailTemplateService.GetEmailTemplate(2);
                if (template != null)
                {
                    body = template.Body;
                    subject = template.Subject;
                }

                bool result = _emailService.SendUserSignupEmailConfirm(_appSettings.SmtpUserPassword, _appSettings.SmtpUserEmail, _appSettings.SmtpHost, _appSettings.SmtpPort, _appSettings.AdminEmail, message.URLLink, message.EmailAddress, message.Username, subject, body);

                if (result == true)
                {
                    await context.Publish<IEmailSendStatusDoneEvent>(new { Status = "true" });
                }
                else
                {
                    await context.Publish<IEmailSendStatusDoneEvent>(new { Status = "False" });
                }
            }
            else if (message.EmailCategoryId == 3)
            {
                template = _emailTemplateService.GetEmailTemplate(3);
                if (template != null)
                {
                    body = template.Body;
                    subject = template.Subject;
                }

                bool result = _emailService.SendForgotPasswordEmail(_appSettings.SmtpUserPassword, _appSettings.SmtpUserEmail, _appSettings.SmtpHost, _appSettings.SmtpPort, _appSettings.AdminEmail, message.URLLink, message.EmailAddress, message.Username, subject, body);

                if (result == true)
                {
                    await context.Publish<IEmailSendStatusDoneEvent>(new { Status = "true" });
                }
                else
                {
                    await context.Publish<IEmailSendStatusDoneEvent>(new { Status = "False" });
                }
            }


        }
    }
}