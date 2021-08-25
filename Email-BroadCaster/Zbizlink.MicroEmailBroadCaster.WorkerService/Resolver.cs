using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Services;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection service)
        {
            service.AddTransient<IEmailService, EmailService>();
            service.AddTransient<ISender, Sender>();

            service.AddTransient<ICampaignManagementService, CampaignManagementService>();
            service.AddTransient<IEmailTemplateService, EmailTemplateService>();
        }
    }
}
