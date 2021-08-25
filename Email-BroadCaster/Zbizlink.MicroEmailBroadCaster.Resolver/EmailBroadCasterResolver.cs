using Microsoft.Extensions.DependencyInjection;
using ZbizlinkLoggerService = Zbizlink.MicroEmailBroadCaster.LoggerService;
using ZbizlinkWorkerService = Zbizlink.MicroEmailBroadCaster.WorkerService;
using ZbizlinkDataModel = Zbizlink.MicroEmailBroadCaster.DataModel;
namespace Zbizlink.MicroEmailBroadCaster.Resolver
{
    public static class EmailBroadCasterResolver
    {
        public static void EmailServiceStartup(IServiceCollection service)
        {
            ZbizlinkLoggerService.Resolver.Resolve(service);
            ZbizlinkWorkerService.Resolver.Resolve(service);
            ZbizlinkDataModel.Resolver.Resolve(service);
        }
    }
}
