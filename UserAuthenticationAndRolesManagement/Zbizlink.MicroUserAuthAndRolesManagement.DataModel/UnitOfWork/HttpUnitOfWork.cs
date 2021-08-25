using System;
using Microsoft.AspNetCore.Http;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Constants;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Database.Context;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.UnitOfWork
{
    public class HttpUnitOfWork : UnitOfWork
    {
        public HttpUnitOfWork(ApplicationDbContext context, IHttpContextAccessor httpAccessor) : base(context)
        {
            context.CurrentUserId = Convert.ToInt32(httpAccessor.HttpContext?.User.FindFirst(ClaimConstants.Subject)?.Value?.Trim());
        }
    }
}
