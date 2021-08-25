using Microsoft.Extensions.DependencyInjection;
using ZbizWorkerService = Zbizlink.MicroUserAuthAndRolesManagement.WorkerService;
using ZbizDataModelService = Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Resolver;
using ZbizLoggerService = Zbizlink.MicroUserAuthAndRolesManagement.LoggerService;
namespace Zbizlink.MicroUserAuthAndRolesManagement.Resolver
{
    public static class UserAuthAndRolesManagementResolver
    {
        public static void AuthorizationStartup(IServiceCollection services)
        {
            ZbizWorkerService.Resolver.Resolve(services);
            ZbizLoggerService.Resolver.Resolve(services);
            ZbizDataModelService.Resolver.Resolve(services);
        }

    }
}
