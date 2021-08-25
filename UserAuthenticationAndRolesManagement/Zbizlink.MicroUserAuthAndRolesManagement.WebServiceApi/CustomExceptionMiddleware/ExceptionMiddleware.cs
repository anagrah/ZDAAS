using System;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.LoggerService.Contracter;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Utility;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Enum;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi.CustomExceptionMiddleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILoggerManager _logger;

        public ExceptionMiddleware(RequestDelegate next, ILoggerManager logger)
        {
            _logger = logger;
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong: {ex}");
                await HandleExceptionAsync(httpContext, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            return context.Response.WriteAsync(new ClientResponse()
            {
                
                code = WebApiResponseCode.ErrorCode,
                message = "Internal Zdaas Web API Error, try later"
            }.ToString());
        }
    }
}
