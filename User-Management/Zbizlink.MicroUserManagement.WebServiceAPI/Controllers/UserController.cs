using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MassTransit;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;
using Zbizlink.MicroUserManagement.DataModel.Models;
using Zbizlink.MicroUserManagement.Enum;
using Zbizlink.MicroUserManagement.LoggerService.Contracter;
using Zbizlink.MicroUserManagement.WebServiceAPI.Helpers;
using Zbizlink.MicroUserManagement.WebServiceAPI.Model;
using Zbizlink.MicroUserManagement.WorkerService.Contracters;
using Zbizlink.MicroUserManagement.WorkerService.ViewModels;



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Controllers
{
   // [Microsoft.AspNetCore.Cors.EnableCors("AllowAllHeaders")]
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserService _userService;
        private readonly AppSettings _appSettings;
        private ILoggerManager _logger;
        private readonly ISendEndpointProvider _sendEndpointProvider;
        //private readonly IBusControl _buss;
        public UserController(IUserService userService, IOptions<AppSettings> appSettings, ILoggerManager logger)
        {
            _userService = userService;
            _appSettings = appSettings.Value;
            _logger = logger;
            //_buss = buss;
        }

        // GET: api/<UserController>
        [Authorize]
        [HttpGet]
        public IActionResult Get()
        {
            var response = _userService.GetAll();
            if (response == null)
                return Ok(new { message = UserMessages.UserNoDataFound, code =  EnumCollection.ErrorCode.NotFound });
            return Ok(new { message = "success", code = EnumCollection.SuccessCode.Success, response });
        }

        
        // POST /<UserController>/55465464.0
       //[Authorize]
        [HttpPost("GetById")]
        public IActionResult GetById(decimal id)
        {
            var response = _userService.GetById(id);
            if(response == null)
                return Ok(new { message = UserMessages.UserNoDataFound, code = EnumCollection.ErrorCode.NotFound });
            return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response });
        }
        
        // POST api/<UserController>
        [HttpPost("Authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest model)
        {
            //_logger.LogInfo("Username : " + model.Username + " Parssword : " + model.Password);
            //var tempNamePass = EncryptionOrDecryption.Decrypt(model.Password.Trim());
            //tempNamePass = tempNamePass.Trim() != "" ? tempNamePass : model.Password.Trim();
            //var tempPass = tempNamePass.Trim() != "" ? tempNamePass.Replace(model.Username, "").Trim() : model.Password.Trim();
            //model.Password = EncryptionOrDecryption.Encrypt(model.Username.Trim().ToLower() + tempPass);
           // var response = _userService.Authenticate(model, _appSettings.Secret, _appSettings.Issuer, _appSettings.Audience);
            var response = await Task<ClientResponse>.Run(() => (_userService.Authenticate(model, _appSettings.Secret, _appSettings.Issuer, _appSettings.Audience)));
            // if (response == null)
            //    return Ok(new { message = UserMessages.UserAuthenticationFail, code = EnumCollection.ErrorCode.Login_Failed });

            return Ok(response);
            //  return Ok(new { message =UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response });
        }

        [HttpPost("VerifyUserById")]
        public IActionResult VerifyUserById(string userId)
        {
            var response = _userService.VerifyUserId(userId, _appSettings.Secret, _appSettings.Issuer, _appSettings.Audience);
            if (response == null)
                return Ok(new { message = UserMessages.UserInValid , code = EnumCollection.ErrorCode.Wrong_User });

            return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response });
        }
        [HttpPost("RegisterUser")]
        public async Task<IActionResult> RegisterUser(UserRegistrationRequest userRegistration)
        {
            userRegistration.Password = EncryptionOrDecryption.Encrypt(userRegistration.Email.Trim().ToLower() + userRegistration.Password.Trim());
            userRegistration.BulkEmailCheckerAPIkey = _appSettings.BulkEmailCheckerAPIkey;
            userRegistration.BulkEmailCheckerServiceUri = _appSettings.BulkEmailCheckerServiceUri;
            var response = _userService.UserRegistrtion(userRegistration);
            

            //if (response == null)
            //    return Ok(new { message = "User registration failed", code = EnumCollection.ErrorCode.ConnectionLost });
            //var endPoint = await _sendEndpointProvider.GetSendEndpoint(new Uri("queue:" + _appSettings.RabbitMQUri));
            //await endPoint.Send<RegistrationSuccessMessageModel>(new
            //{
            //    MessageId = new Guid() ,
            //    Message = ""
            //});


            return Ok(new { message = "success", code = EnumCollection.SuccessCode.Success, response });
        }
        // Uncomment below method when RMQ service is ready

        // [HttpPost("RegisterUser")]
        //public async Task<IActionResult> RegisterUser(UserRegistrationRequest userRegistration) 
        //{
        //    userRegistration.Password = EncryptionOrDecryption.Encrypt(userRegistration.Email.Trim().ToLower() + userRegistration.Password.Trim());
        //    var response  = _userService.UserRegistrtion(userRegistration);
        //    if (response == null)
        //        return Ok(new { message = UserMessages.UserRegistrationFail, code = EnumCollection.ErrorCode.ConnectionLost });
        //    var emailStatus = response.code!=500 ? await Zdaas.UserWebAPI.ServiceExtensions.Extensions.SendEmailRequest(_buss, new Uri("rabbitmq://"+_appSettings.RabbitMQ + "/UserRegistrationQueue"), response):false;

        //    if (emailStatus != true)
        //        return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response });
        //    else
        //        return Ok(new { message = UserMessages.UserRegistrationFail, code = EnumCollection.ErrorCode.Wrong_User, response });

        //}

        [HttpPost("ActivateUser")]
        public IActionResult ActivateUser(Guid activationCode, string email)
        {
            User user = _userService.GetByEmail(activationCode, email);
            if (user == null)
            {  
                return Ok(new { message = UserMessages.UserNotFound, code = EnumCollection.ErrorCode.NotFound });
            }
            else
            {
                var response = _userService.ActivateUser(user);
                if (response == null)
                    return Ok(new { message = UserMessages.UserConfirmationFail, code = EnumCollection.ErrorCode.ConnectionLost });
                return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response });
            }
        }

        // PUT api/<ConfirmEmail>/5
        [HttpPost("UpdateUser")]
        public IActionResult UpdateUser(EmailRequest emailRequest)
        {
            User user = _userService.GetById(emailRequest.Email);
            if (user == null)
            {
                return Ok(new { message = UserMessages.UserNotFound, code = EnumCollection.ErrorCode.NotFound });
            }
            else
            {
                var response = _userService.UpdateUser(user);
                if (response == null)
                    return Ok(new { message = UserMessages.UserNotFound, code = EnumCollection.ErrorCode.Wrong_User });
                return Ok(new { message = UserMessages.UserSuccessMessage, code = EnumCollection.SuccessCode.Success, response });
            }
        }

        [HttpGet("GetUserByEmail")]
        public IActionResult GetUserByEmail(string email)
        {
            var response = _userService.GetById(email);
            if (response == null)
                return Ok(new { message = "No data found", code = EnumCollection.ErrorCode.NotFound });
            return Ok(new { message = "success", code = EnumCollection.SuccessCode.Success, response });
        }

        //
        [HttpGet("GetInActiveUser")]
        public IActionResult GetInActiveUser(string email)
        {
            var response = _userService.GetInActiveUserByEmailId(email);
            if (response == null)
                return Ok(new { message = "User not found", code = EnumCollection.ErrorCode.NotFound });
            return Ok(new { message = "success", code = EnumCollection.SuccessCode.Success, response });
        }
        // ResetPassword / Forgot password
        [HttpPost("ResetPassword")]
        public IActionResult ResetPassword(AuthenticateRequest authenticateRequest)
        {
            authenticateRequest.Password = EncryptionOrDecryption.Encrypt(authenticateRequest.Username.Trim().ToLower() + authenticateRequest.Password.Trim());
             var response = _userService.ResetPassword(authenticateRequest);
                if (response == null)
                    return Ok(new { message = "Password reset failed,please contact administrator", code = EnumCollection.ErrorCode.Request_Timeout });
                return Ok(new { message = "success", code = EnumCollection.SuccessCode.Success, response });
        }
    }
}
