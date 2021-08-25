using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroUserManagement.LoggerService.Contracter;
namespace Zbizlink.MicroUserManagement.LoggerService
{
    public class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
