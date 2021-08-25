using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;
using Zbizlink.MicroUserManagement.DataModel.Models;
using Zbizlink.MicroUserManagement.WorkerService.ViewModels;

namespace Zbizlink.MicroUserManagement.WorkerService.Contracters
{
    public interface IUserService
    {
        //   public AuthenticateResponse Authenticate(AuthenticateRequest model, string secretkey,string issuer, string audience);
        public ClientResponse Authenticate(AuthenticateRequest model, string secretkey, string issuer, string audience); 
        public UserRegistrationResponse UserRegistrtion(UserRegistrationRequest model);
        public IEnumerable<User> GetAll();
        public User GetById(decimal id); 
        public VerifyUserIdResponse VerifyUserId(string userId, string secretkey, string issuer, string audience);
        public AuthenticateResponse UpdateUser(User user);
        public User GetByEmail(Guid activationCode, string email);
        public User GetById(string email);
        public UserRegistrationResponse ActivateUser(User user);
        public UserRegistrationResponse ResetPassword(AuthenticateRequest authenticateRequest);
        public bool isEmailExists(string apikey, string email, string serviceUri);
        public User GetInActiveUserByEmailId(string email);
    }
}
