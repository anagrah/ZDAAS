using Grpc.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Grpc.Protos;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Grpc.GrpcService
{
    public class UserRegistrationSuccessEmailService: UserRegistrationEmailService.UserRegistrationEmailServiceBase
    {
        /*private readonly ILoggerManager _logger;
        public UserRegistrationSuccessEmailService(ILoggerManager logger)
        {
            _logger = logger; 
        }*/

        public override Task<UserRegistrationSuccessEmailResponse> SendUserRegistrationSuccessEmail(UserRegistrationSuccessEmailRequest request, ServerCallContext context)
        {

            return Task.FromResult(new UserRegistrationSuccessEmailResponse
            {
                Success = true,
                Error= "No Error"
            });
        
        }
    }
}
