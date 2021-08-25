using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroEmailBroadCaster.DataModel.Contractor;

namespace Zbizlink.MicroEmailBroadCaster.DataModel
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }
    }
}
