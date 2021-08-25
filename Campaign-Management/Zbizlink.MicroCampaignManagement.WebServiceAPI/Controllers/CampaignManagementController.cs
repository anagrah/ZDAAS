using DocumentFormat.OpenXml.Office.CustomUI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.CMCommon.Models;
using Zbizlink.MicroCampaignManagement.LoggerService.Contracter;
using Zbizlink.MicroCampaignManagement.WorkerService.Contracts;
using Zbizlink.MicroCampaignManagement.WorkerService.Services;
using Zbizlink.MicroCampaignManagement.WorkerService.ViewModels;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Zbizlink.MicroCampaignManagement.WebServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CampaignManagementController : ControllerBase
    {

        private ICampaignManagementService _campaignManagementService;
        private IRMqService _RMqService;
        private ILoggerManager _logger;
        public CampaignManagementController(ICampaignManagementService campaignManagementService,
            IRMqService RMqService, ILoggerManager logger)
        {
            //logger.LogInfo("ICampaignManagementService");
            _campaignManagementService = campaignManagementService;
            _RMqService = RMqService;
            _logger = logger;
        }
        // GET: api/<CampaignManagementController>
        [HttpGet("getCampaignOpportunityList")]
        public async Task<IActionResult> Get()
        {
            _logger.LogInfo("Start getCampaignOpportunityList");

            var response = await Task<ClientResponse>.Run(() => (_campaignManagementService.GetCampaignOpportunityList()));
            _logger.LogInfo("end getCampaignOpportunityList");
            return Ok(response);
            //return Ok("Akmal2");

        }

        // GET api/<CampaignManagementController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {

            return "value";
        }

        // POST api/<CampaignManagementController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{

        //}

        [HttpPost("saveCampaignOpportunity")]
        public async Task<IActionResult> SaveCampaignOpportunity()
        {


            var response = "";// await Task<ClientResponse>.Run(() => (_campaignManagementService.SaveCampaignOpportunityAsync(null)));

            return Ok(response);
        }

        [HttpPost("LeadsSendToLemlist")]
        public async Task<IActionResult> LeadsSendToLemlist(EmailCampaign emailCampaign)
        {
            AppSettings appSettings = new AppSettings();
            appSettings = Extensions.ServiceExtensions.appSettings;

            bool response = _campaignManagementService.ExecuteLeadsFuntionality(emailCampaign, appSettings);
            string transactionId = Guid.NewGuid().ToString();
            Dictionary<string, object> parms = new Dictionary<string, object>();
            parms.Add("UserId", emailCampaign.UserId);
            parms.Add("OpportunityName", emailCampaign.OpportunityName);
            _logger.logTransation(transactionId, this.GetType(), MethodBase.GetCurrentMethod(), parms);
            //response = true;
            return Ok(response);
        }

        
        [HttpPost("sendOpportunityEmailTest")]
        public async Task<IActionResult> sendOpportunityEmail()
        {
            EmailCampaign emailCampaign = new EmailCampaign()
            {
                OpportunityName = "TestOpportunity",
                Message = "TestMessage",
            };
            //await _RMqService.SendEmailForCampaignAsync(Extensions.ServiceExtensions.appSettings, emailCampaign);

            return Ok(null);
        }


        [AllowAnonymous]
        [HttpGet("GetCompaignList")]
        public async Task<IActionResult> GetCompaignList()
        {
            AppSettings appSettings = new AppSettings();
            appSettings = Extensions.ServiceExtensions.appSettings;
            var response = await Task<ClientResponse>.Run(() => (_campaignManagementService.CampaignList(appSettings)));
            //var response = _campaignManagementService.CampaignList();

            return Ok(response);
        }

        // PUT api/<CampaignManagementController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CampaignManagementController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
