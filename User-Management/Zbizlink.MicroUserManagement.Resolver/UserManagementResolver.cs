using System;
using System.Collections.Generic;
using System.Text;
using ZbizWorkerService = Zbizlink.MicroUserManagement.WorkerService;
using ZbizLoggerService = Zbizlink.MicroUserManagement.LoggerService;
using ZbizDataModelService = Zbizlink.MicroUserManagement.DataModel;
using Microsoft.Extensions.DependencyInjection;

namespace Zbizlink.MicroUserManagement.Resolver
{
    public class UserManagementResolver
    {
        public static void AuthorizationStartup(IServiceCollection services)
        {
            ZbizWorkerService.Resolver.Resolve(services);
            ZbizLoggerService.Resolver.Resolve(services);
            ZbizDataModelService.Resolver.Resolve(services);
        }
    }
}
