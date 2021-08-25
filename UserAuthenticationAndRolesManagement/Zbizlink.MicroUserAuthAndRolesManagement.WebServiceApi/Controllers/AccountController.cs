using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.ViewModels;
using AutoMapper;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Authorization;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Helpers;
using Microsoft.AspNetCore.JsonPatch;
using IdentityServer4.AccessTokenValidation;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Authorization.Policies;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Authorization.AccountManagement;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Permissions;
using MassTransit;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;
using Microsoft.Extensions.Options;
using System.Web;
using Zbizlink.MicroUserAuthAndRolesManagement.LoggerService.Contracter;
using Zbizlink.Micro.Enum;
using Microsoft.AspNetCore.WebUtilities;
using System.Text;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi.Controllers
{

    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IAccountManager _accountManager;
        private readonly IAuthorizationService _authorizationService;
        private readonly ILoggerManager _logger;
        private const string GetUserByIdActionName = "GetUserById";
        private readonly AppSettings _appSettings;
        private readonly ISendEndpointProvider _sendEndpointProvider;
        public AccountController(IOptions<AppSettings> appSettings, IMapper mapper, IAccountManager accountManager, IAuthorizationService authorizationService,
            ILoggerManager logger, ISendEndpointProvider sendEndpointProvider)
        {
            _mapper = mapper;
            _accountManager = accountManager;
            _authorizationService = authorizationService;
            _logger = logger;
            _appSettings = appSettings.Value;
            _sendEndpointProvider = sendEndpointProvider;
        }


        [HttpGet("users/me")]
        [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetCurrentUser()
        {
            var response = await GetUserById(Convert.ToInt32(Utilities.GetUserId(this.User)));
            if (response == null)
                return Ok(new { message = UserMessages.UserNoDataFound, code = EnumCollection.ErrorCode.NotFound });
            return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response });
        }


        [HttpGet("users/{id}", Name = GetUserByIdActionName)]
        [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetUserById(int id)
        {
            if (!(await _authorizationService.AuthorizeAsync(this.User, id.ToString(), AccountManagementOperations.Read)).Succeeded)
                return new ChallengeResult();


            UserViewModel userVM = await GetUserViewModelHelper(id);

            if (userVM == null)
                return Ok(new { message = UserMessages.UserNoDataFound, code = EnumCollection.ErrorCode.NotFound });
            return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response = userVM });
        }

        [HttpPost("SignUp")]
        public async Task<IActionResult> Registration([FromBody] UserRegistrationViewModel user)
        {

            if (ModelState.IsValid)
            {
                if (user == null)
                    return Ok(new { message = UserMessages.InvalidRequest, code = EnumCollection.ErrorCode.Fail, response = $"{nameof(user)} cannot be null" });
                string adminRoleName = "administrator";
                string token = null;
                var Roles = new string[] { adminRoleName };
                ApplicationUser appUser = _mapper.Map<ApplicationUser>(user);

                var result = await _accountManager.CreateUserAsync(appUser, Roles, user.Password);
                if (result.Succeeded)
                {
                    UserViewModel userVM = await GetUserViewModelHelper(appUser.Id);
                    token = await _accountManager.GenerateEmailConfirmationToken(userVM.Id);
                    token = Base64Encode(token);
                    #region RMQ Start
                    var endPoint = await _sendEndpointProvider.GetSendEndpoint(new Uri("queue:" + _appSettings.EmailConfirmationQueue.ToString()));

                    await endPoint.Send<IEmailSendStatusStartedEvent>(new
                    {
                        URLLink = $"{_appSettings.ZbinlinkClientURL}/user/authentication?userid={userVM.Id}&token={token}",
                        EmailAddress = user.Email,
                        Username = user.UserName,
                        EmailCategoryId = 2
                    });
                    #endregion  RMQ End


                    return Ok(new { message = UserMessages.UserSuccessFullyRegistered, code = EnumCollection.SuccessCode.Success, response = userVM });
                }

                AddError(result.Errors);
                return Ok(new { message = UserMessages.UserRegistrationFail, code = EnumCollection.ErrorCode.Fail, errors = result.Errors });
            }
            return Ok(new { message = UserMessages.UserRegistrationFail, code = EnumCollection.ErrorCode.Fail, errors = ModelState });

        }

        [HttpPost("EmailConfirmation")]
        public async Task<IActionResult> Confirm([FromBody] ConfirmEmailViewModel model)
        {

            if (ModelState.IsValid)
            {
                model.Token = Base64Decode(model.Token);
                var result = await _accountManager.EmailConfirmation(model.Id, model.Token);
                if (result.Succeeded)
                {
                    return Ok(new { message = UserMessages.UserRegistrationConfirmed, code = EnumCollection.SuccessCode.Success });
                }

                AddError(result.Errors);
                return Ok(new { message = UserMessages.UserConfirmationFail, code = EnumCollection.ErrorCode.Fail, errors = result.Errors });
            }
            return Ok(new { message = UserMessages.UserConfirmationFail, code = EnumCollection.ErrorCode.Fail, errors = ModelState });
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordModel model)
        {
            if (ModelState.IsValid)
            {
                if (model == null)
                    return Ok(new { message = UserMessages.InvalidRequest, code = EnumCollection.ErrorCode.Fail, response = $"{nameof(model)} cannot be null" });

                string token = null;
                var user = await _accountManager.GetUserByUserNameAsync(model.Username);
                if (user == null)
                    return Ok(new { message = UserMessages.InvalidUsernameOREmail, code = EnumCollection.ErrorCode.Fail });
                token = await _accountManager.GeneratePasswordResetTokenAsync(user);
                token = Base64Encode(token);
                #region RMQ Start
                var endPoint = await _sendEndpointProvider.GetSendEndpoint(new Uri("queue:" + _appSettings.EmailConfirmationQueue.ToString()));

                await endPoint.Send<IEmailSendStatusStartedEvent>(new
                {
                    URLLink = $"{_appSettings.ZbinlinkClientURL}/user/reset-password?username={user.UserName}&token={token}",
                    EmailAddress = user.Email,
                    Username = user.UserName,
                    EmailCategoryId = 3
                });
                #endregion  RMQ End


                return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response = new { Email = user.Email, Username = user.UserName } });
            }
            return Ok(new { message = UserMessages.InvalidRequest, code = EnumCollection.ErrorCode.Fail, errors = ModelState });
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordModel model)
        {
            if (ModelState.IsValid)
            {
                if (model == null)
                    return Ok(new { message = UserMessages.InvalidRequest, code = EnumCollection.ErrorCode.Fail, response = $"{nameof(model)} cannot be null" });

                var user = await _accountManager.GetUserByUserNameAsync(model.Username);
                if (user == null)
                    return Ok(new { message = UserMessages.InvalidUsernameOREmail, code = EnumCollection.ErrorCode.Fail });

                var result = await _accountManager.ResetPasswordAsync(user, Base64Decode(model.Token), model.Password);

                if (result.Succeeded)
                {
                    return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success });
                }
                AddError(result.Errors);
                return Ok(new { message = UserMessages.UserInValid, code = EnumCollection.ErrorCode.Fail, errors = result.Errors });
            }
            return Ok(new { message = UserMessages.InvalidRequest, code = EnumCollection.ErrorCode.Fail, errors = ModelState });
        }

        [HttpPost("ChangePassword")]
        [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePassword model)
        {
            if (ModelState.IsValid)
            {
                if (model == null)
                    return Ok(new { message = UserMessages.InvalidRequest, code = EnumCollection.ErrorCode.Fail, response = $"{nameof(model)} cannot be null" });

                var user = await _accountManager.GetUserAndRolesAsync((Convert.ToInt32(Utilities.GetUserId(this.User))));
                if (user == null)
                    return Ok(new { message = UserMessages.UserNoDataFound, code = EnumCollection.ErrorCode.NotFound });

                var result = await _accountManager.ChangePasswordAsync(user.Value.User, model.CurrentPassword, model.Password);

                if (result.Succeeded)
                {
                    return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success });
                }
                AddError(result.Errors);
                return Ok(new { message = UserMessages.UserInValid, code = EnumCollection.ErrorCode.Fail, errors = result.Errors });
            }
            return Ok(new { message = UserMessages.InvalidRequest, code = EnumCollection.ErrorCode.Fail, errors = ModelState });
        }
        private async Task<UserViewModel> GetUserViewModelHelper(int userId)
        {
            var userAndRoles = await _accountManager.GetUserAndRolesAsync(userId);
            if (userAndRoles == null)
                return null;

            var userVM = _mapper.Map<UserViewModel>(userAndRoles.Value.User);
            userVM.Roles = userAndRoles.Value.Roles;

            return userVM;
        }

        private void AddError(IEnumerable<string> errors, string key = "")
        {
            foreach (var error in errors)
            {
                _logger.LogError($"error:{{error}} and key:{{key}}");
                AddError(error, key);
            }
        }

        private void AddError(string error, string key = "")
        {
            ModelState.AddModelError(key, error);
        }
        private string Base64Decode(string base64EncodedData)
        {
            var base64EncodedBytes = WebEncoders.Base64UrlDecode(base64EncodedData);
            return Encoding.UTF8.GetString(base64EncodedBytes);
        }
        private string Base64Encode(string plainText)
        {
            var plainTextBytes = Encoding.UTF8.GetBytes(plainText);
            return WebEncoders.Base64UrlEncode(plainTextBytes);
        }
    }
}
