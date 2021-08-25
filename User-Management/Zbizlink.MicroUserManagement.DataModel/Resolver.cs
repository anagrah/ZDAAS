using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroUserManagement.DataModel.Contracts;
using ZbizlinkUOW = Zbizlink.MicroUserManagement.DataModel.UnitOfWork;
namespace Zbizlink.MicroUserManagement.DataModel
{
    public class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, ZbizlinkUOW.UnitOfWork>();
        }
    }
}
