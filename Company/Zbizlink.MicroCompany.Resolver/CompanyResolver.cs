using Microsoft.Extensions.DependencyInjection;
using companyLoggerService = Zbizlink.MicroCompany.LoggerService;
using companyDataService = Zbizlink.MicroCompany.DataModel;
using companyWorkerService = Zbizlink.MicroCompany.WorkerService;
namespace Zbizlink.MicroCompany.Resolver
{
    public class CompanyResolver
    {
        public static void CompanyStartup(IServiceCollection service)
        {
            companyLoggerService.Resolver.Resolve(service);
            companyDataService.Resolver.Resolve(service);
            companyWorkerService.Resolver.Resolve(service);
        }
    }
}