using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroCRMDataImport.DataModel.Contracts;

namespace Zbizlink.MicroCRMDataImport.DataModel
{
    public static class Resolver
    {

        public static void Resolve(IServiceCollection services)
        {
           services.AddTransient<IUnitOfWork, UnitOfWork.UnitOfWork>();
        }
    }
}
