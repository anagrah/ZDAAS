using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;

namespace Zbizlink.MicroEmailBroadCaster.LoggerService
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection service)
        {
            service.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
