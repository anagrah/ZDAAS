using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCampaignManagement.LoggerService.Contracter;

namespace Zbizlink.MicroCampaignManagement.LoggerService
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
