using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserManagement.WebServiceAPI.Model;
using Zbizlink.MicroUserManagement.WorkerService.Contracters;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Helpers
{
    public class messages
    {
        public string statuscode { get; set; }
        public string message { get; set; }
    }
    public class AuthenticationMiddleware
    {

        private readonly RequestDelegate _next;
        private readonly AppSettings _appSettings;
        private readonly IValidateToken _ivt;
        private readonly ValidateServiceModel _vsm;
        public AuthenticationMiddleware(RequestDelegate next, IOptions<AppSettings> appSettings, IValidateToken ivt)
        {
            _next = next;
            _appSettings = appSettings.Value;
            _ivt = ivt;
            _vsm = new ValidateServiceModel();
        }

        public async Task Invoke(HttpContext context)
        {
           var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

            if (token != null)
                if (_ivt.ValidateJWT(context,token, _appSettings.Secret, _appSettings.Issuer, _appSettings.Audience) == false)
                {
                    context = ErrorMessage(context);
                }

            await _next(context);

        }
        private HttpContext ErrorMessage(HttpContext context)
        {
            List<messages> _lstMesssage = new List<messages>();
            messages _messages = new messages();
            _messages.message = "Token expired or wrong";
            _messages.statuscode = context.Response.StatusCode.ToString();
            _lstMesssage.Add(_messages);
            _messages = new messages();
            _messages.message = "Sorry your credentials are not valid to access the data.";
            _messages.statuscode = System.Net.HttpStatusCode.Unauthorized.ToString();
            _lstMesssage.Add(_messages);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            var jsonObject = JsonConvert.SerializeObject(_lstMesssage);
            context.Response.WriteAsync(jsonObject, Encoding.UTF8);
            return context;
        }

    }
}
