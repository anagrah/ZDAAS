using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Zbizlink.MicroUserManagement.LoggerService.Contracter;
using Zbizlink.MicroUserManagement.WorkerService.Contracters;

namespace Zbizlink.MicroUserManagement.WorkerService
{
    public class GenerateToken : IGenerateToken
    {
        private ILoggerManager _logger;
        public GenerateToken(ILoggerManager logger)
        {
            _logger = logger;
        }
        public string GenerateJWT(string secretkey, string user, string issuer, string audience)
        {
            try
            {
                var SecurityKey = Encoding.ASCII.GetBytes(secretkey);
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                                new Claim("User", user.ToString()),
                            }),
                    Expires = DateTime.UtcNow.AddMinutes(5),
                    Issuer = issuer,
                    Audience = audience,
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(SecurityKey), SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token).ToString();
            }
            catch (Exception ex)
            {
                _logger.LogError("Error: " + Zbizlink.MicroUserManagement.Enum.EnumCollection.ErrorCode.GenerateTokenFailed);
                _logger.LogError("Class Name: GenerateToken --> FunctionName: GenerateJWT \n Error: " + ex);
                return null;
            }
        }
    }
}
