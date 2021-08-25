using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroCompany.LoggerService.Contracts;

namespace Zbizlink.MicroCompany.LoggerService
{
    public class Resolver
    {
        public static void Resolve(IServiceCollection service)
        {
            service.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
