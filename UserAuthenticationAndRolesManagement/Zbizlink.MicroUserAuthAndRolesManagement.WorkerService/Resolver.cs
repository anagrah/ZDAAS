using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Authorization;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Services;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService
{
    public class Resolver
    {

        public static void Resolve(IServiceCollection services)
        { 
            // Auth Handlers
            services.AddSingleton<IAuthorizationHandler, ViewUserAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, ManageUserAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, ViewRoleAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, AssignRolesAuthorizationHandler>();
            services.AddScoped<IAccountManager, AccountManager>();
            services.AddScoped<IUserTypeService, UserTypeService>();
        }
    }
}
