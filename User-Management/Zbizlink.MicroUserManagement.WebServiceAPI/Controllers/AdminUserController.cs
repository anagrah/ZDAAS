using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using Zbizlink.MicroUserManagement.DataModel.Models;
using Zbizlink.MicroUserManagement.Enum;
using Zbizlink.MicroUserManagement.WebServiceAPI.Helpers;
using Zbizlink.MicroUserManagement.WorkerService.Contracters;
using Zbizlink.MicroUserManagement.WorkerService.ViewModels;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AdminUserController : ControllerBase
    {
        private readonly IAdminUserService _adminUserService;
        private readonly AppSettings _appSettings;
  //private readonly IBusControl _buss;
        public AdminUserController(IAdminUserService adminUserService, IOptions<AppSettings> appSettings)//,IBusControl buss)
        {
            _adminUserService = adminUserService;
            _appSettings = appSettings.Value;
            //_buss = buss;
        }
        [HttpPost("Authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest model)
        { 
            //var response = _adminUserService.AdminAuthenticate(model, _appSettings.Secret, _appSettings.Issuer, _appSettings.Audience);

            var response = await Task<ClientResponse>.Run(() => (_adminUserService.AdminAuthenticate(model, _appSettings.Secret, _appSettings.Issuer, _appSettings.Audience)));

            //if (response == null)
            //return Ok(new { message = UserMessages.UserAuthenticationFail, code = EnumCollection.ErrorCode.Login_Failed });

            return Ok(response); //Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response });
        }
        [HttpPost("RegisterUser")]
        public IActionResult RegisterUser(AdminUserVM userRegistration)
        {
            userRegistration.Password = EncryptionOrDecryption.Encrypt(userRegistration.Email.Trim().ToLower() + userRegistration.Password.Trim());
            var response = _adminUserService.UserRegistrtion(userRegistration);
            if (response == null)
                return Ok(new { message = "User registration failed", code = EnumCollection.ErrorCode.ConnectionLost });
            return Ok(new { message = "success", code = EnumCollection.SuccessCode.Success, response });
        }

        [HttpPost("updateUser")]
        public IActionResult UpdateUser(AdminUserVM user)
        {
            user.Password = EncryptionOrDecryption.Encrypt(user.Email.Trim().ToLower() + user.Password.Trim());
            var response = _adminUserService.UpdateUser(user);
            if (response == null)
                return Ok(new { message = "User registration failed", code = EnumCollection.ErrorCode.ConnectionLost });
            return Ok(new { message = "success", code = EnumCollection.SuccessCode.Success, response });
        }

        [HttpGet("getAdminUsersList")]
        public async Task<IActionResult> AdminUsersList()
        {

            var response = await Task<ClientResponse>.Run(() => (_adminUserService.AdminUsersList()));
            return Ok(response);
        }

        [HttpGet("getRoles")]
        public async Task<IActionResult> GetRoles()
        {
            var response = await Task<ClientResponse>.Run(() => (_adminUserService.GetRoles()));
            return Ok(response);
        }

    }
}
