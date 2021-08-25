using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.UnitOfWork.Contracts;

using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.UnitOfWork;


namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Resolver
{
    public class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, HttpUnitOfWork>();
        }
    }
}
