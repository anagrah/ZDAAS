using Grpc.Core;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.MicroEmailBroadcaster.Grpc.Protos;

namespace Zbizlink.MicroEmailBroadcaster.Grpc
{
    public class UserRegistrationSuccessEmailService : UserRegistrationEmailService.UserRegistrationEmailServiceBase
    {
      

        public override Task<UserRegistrationSuccessEmailResponse> SendUserRegistrationSuccessEmail(UserRegistrationSuccessEmailRequest request, ServerCallContext context)
        {

            return Task.FromResult(new UserRegistrationSuccessEmailResponse
            {
                Success = true,
                Error = "No Error"
            });

        }
    }
}
