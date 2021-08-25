using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroUserAuthAndRolesManagement.LoggerService.Contracter;

namespace Zbizlink.MicroUserAuthAndRolesManagement.LoggerService
{
    public class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
