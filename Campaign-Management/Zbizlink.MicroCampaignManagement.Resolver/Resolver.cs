using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCampaignManagement.WorkerService.Services;
using CMWorkerService = Zbizlink.MicroCampaignManagement.WorkerService;
using CMDataModel = Zbizlink.MicroCampaignManagement.DataModel;
using CMDLoggerService = Zbizlink.MicroCampaignManagement.LoggerService;
namespace Zbizlink.MicroCampaignManagement.Resolver
{
   public static class Resolver
    {
        public static void CMStartup(IServiceCollection services)
        {
            CMDataModel.Resolver.Resolve(services);
            CMWorkerService.Resolver.Resolve(services);
            CMDLoggerService.Resolver.Resolve(services);

        }

    }
}
