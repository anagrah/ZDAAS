using System;
using System.Collections.Generic;
using MassTransit;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Zbizlink.Micro.Enum;
using Zbizlink.MicroEmailBroadCaster.DataModel.Bizlink;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Models;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor; 


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailSenderController : ControllerBase
    {
        private readonly IEmailService _emailService;
        private readonly AppSettings _appSettings;
        private readonly ISender _sender;
        private readonly ILoggerManager _log;
        public EmailSenderController(IEmailService emailService, IOptions<AppSettings> appSettings, ISender sender, ILoggerManager log)
        {
            _emailService = emailService;
            _appSettings = appSettings.Value;
            _sender = sender;
            _log = log;
        }

        // GET: api/<EmailSenderController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<EmailSenderController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<EmailSenderController>
        [HttpPost]
        public IActionResult Post(UserRequest userRequest)
        {
            _log.LogInfo("api hit success");
            userRequest.Url = _appSettings.AccountConfirmationUrl + userRequest.Url + "?activationCode=" + userRequest.ActivationCode + "&email=" + userRequest.Email;
            // After sign up , send confirmation email 
            string Name = userRequest.FirstName + " " + userRequest.LastName;
            string[] toAddress = { userRequest.Email, Name };
            var response = _emailService.SendByCategoryId(userRequest.EmailCategory, _appSettings.SmtpUserPassword, _appSettings.SmtpUserPassword, _appSettings.SmtpUserEmail, _appSettings.ApplicationName, _appSettings.SmtpHost, _appSettings.SmtpPort, _appSettings.AdminEmail, toAddress, Name, userRequest.Url);
            if (response == null)
                return Ok(new { message = "Email sending failed.", code = EnumCollection.ErrorCode.Fail });
            return Ok(new { message = "Email has been sent successfully.", code = EnumCollection.SuccessCode.Success, response });
        }

        // PUT api/<EmailSenderController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EmailSenderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
