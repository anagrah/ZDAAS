using Microsoft.AspNetCore.Authorization;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Constants;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Permissions;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Authorization
{
    public class ViewRoleAuthorizationRequirement : IAuthorizationRequirement
    {

    }



    public class ViewRoleAuthorizationHandler : AuthorizationHandler<ViewRoleAuthorizationRequirement, string>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, ViewRoleAuthorizationRequirement requirement, string roleName)
        {
            if (context.User == null)
                return Task.CompletedTask;

            if (context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ViewRoles) || context.User.IsInRole(roleName))
                context.Succeed(requirement);

            return Task.CompletedTask;
        }
    }
}
