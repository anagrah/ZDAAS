using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserManagement.WorkerService.Contracters;

namespace Zbizlink.MicroUserManagement.WorkerService
{
    public class Resolver
    {

        public static void Resolve(IServiceCollection services)
        {
            services.AddTransient<IGenerateToken, GenerateToken>();
            services.AddTransient<IValidateToken, ValidateToken>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IAdminUserService, AdminUserService>();
        }
    }
}
