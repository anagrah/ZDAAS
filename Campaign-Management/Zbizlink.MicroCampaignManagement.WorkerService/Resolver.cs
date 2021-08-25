using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCampaignManagement.WorkerService.Contracts;
using Zbizlink.MicroCampaignManagement.WorkerService.Services;

namespace Zbizlink.MicroCampaignManagement.WorkerService
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddTransient<ICampaignManagementService, CampaignManagementService>();
            services.AddTransient<IRMqService, RMqService>();
        }
        }
}
