
using Microsoft.Extensions.DependencyInjection;
using CRMDataModel = Zbizlink.MicroCRMDataImport.DataModel;
using CRMWorkerService = Zbizlink.MicroCRMDataImport.WorkerService;
using CRMLoggerService = Zbizlink.MicroCRMDataImport.LoggerService;
namespace Zbizlink.MicroCRMDataImport.Resolver
{
    public class Resolver
    {
        public static void CRMStartup(IServiceCollection services)
        {
            CRMDataModel.Resolver.Resolve(services);
            CRMWorkerService.Resolver.Resolve(services);
            CRMLoggerService.Resolver.Resolve(services);
        }
    }
}
