using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroCompany.DataModel.Contracts;
namespace Zbizlink.MicroCompany.DataModel
{
    public class Resolver
    {
        public static void Resolve(IServiceCollection service)
        {
            service.AddTransient<IUnitOfWork, UnitOfWork>();
        }
    }
}
