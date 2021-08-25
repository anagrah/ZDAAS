using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCampaignManagement.DataModel.Contracts;


namespace Zbizlink.MicroCampaignManagement.DataModel
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork.UnitOfWork>();

        }
    }
}

