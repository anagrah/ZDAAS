using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPDataModel.Contracts;
using ZDUnitOfWork = Zdaas.RFPDataModel.UnitOfWork;

namespace Zdaas.RFPDataModel
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, ZDUnitOfWork.UnitOfWork>();
        }
    }
}
