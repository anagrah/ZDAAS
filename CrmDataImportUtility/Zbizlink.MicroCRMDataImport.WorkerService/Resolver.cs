using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroCRMDataImport.WorkerService.Contracters;

namespace Zbizlink.MicroCRMDataImport.WorkerService
{
    public static class Resolver
    {

        public static void Resolve(IServiceCollection services)
        {
             services.AddTransient<IConnectorService, ConnectorService>();
            services.AddTransient<ISalesForceConnectorService, SalesForceConnectorService>();
            services.AddTransient<ICRMService, CRMService>();
        }
    }
}
