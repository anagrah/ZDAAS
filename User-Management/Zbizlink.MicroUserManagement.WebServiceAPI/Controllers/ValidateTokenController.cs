using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Http;
using Zbizlink.MicroUserManagement.WorkerService.Contracters;
using Zbizlink.MicroUserManagement.WebServiceAPI.Model;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValidateTokenController : ControllerBase
    {

        private readonly AppSettings _appSettings;
        private readonly IValidateToken _ivt;
        private readonly HttpContext _context;
        private ValidateServiceModel _vsm;
        public ValidateTokenController(IOptions<AppSettings> appSettings,IValidateToken ivt,HttpContext context)
        {
            _appSettings = appSettings.Value;
            _ivt = ivt;
            _vsm = new ValidateServiceModel();
            _context = context;
        }

        [HttpPost]
        public ValidateServiceModel Post([FromHeader]string token)
        {
            if (_ivt.ValidateJWT(_context,token, _appSettings.Secret, _appSettings.Issuer, _appSettings.Audience) == false)
            {
                _vsm.token = token;
                _vsm.status = false;
                return _vsm;
            }
            else
            {
                _vsm.token = token;
                _vsm.status = true;
                return _vsm;
            }
        }
    }
}
