using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using Zbizlink.MicroUserManagement.LoggerService.Contracter;
using Zbizlink.MicroUserManagement.WorkerService.Contracters;

namespace Zbizlink.MicroUserManagement.WorkerService
{
    public class ValidateToken : IValidateToken
    {
        private readonly ILoggerManager _logger;
        public ValidateToken(ILoggerManager logger)
        {
            _logger = logger;
        }
        public bool ValidateJWT(HttpContext context, string token, string secretkey, string issuer, string audience)
        {

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secretkey);
            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidIssuer = issuer,
                    ValidAudience = audience,
                    ValidateLifetime = false,
                    ClockSkew = TimeSpan.Zero,
                    IssuerSigningKey = new SymmetricSecurityKey(key),

                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var userId = jwtToken.Claims.First(x => x.Type == "User").Value;
                context.Items["User"] = userId;
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error: " + Zbizlink.MicroUserManagement.Enum.EnumCollection.ErrorCode.ValidateTokenFailed);
                _logger.LogError("Class Name: ValidateToken --> FunctionName: ValidateJWT \n Error: " + ex);
                return false;
            }

        }
    }
}
