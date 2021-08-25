
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCRMDataImport.LoggerService.Contracters;

namespace Zbizlink.MicroCRMDataImport.LoggerService
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
