using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.LoggerContracts;

namespace Zdaas.LoggerService
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
