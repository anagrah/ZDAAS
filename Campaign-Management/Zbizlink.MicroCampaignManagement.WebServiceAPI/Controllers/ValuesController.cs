using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.MicroCampaignManagement.WorkerService.Contracts;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Zbizlink.MicroCampaignManagement.WebServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private ICampaignManagementService _campaignManagementService;
        private IRMqService _RMqService;
        public ValuesController(ICampaignManagementService campaignManagementService, IRMqService RMqService)
        {
            _campaignManagementService = campaignManagementService;
            _RMqService = RMqService;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<IEnumerable<string>> Get()
        {
            //await _RMqService.SendEmailForCampaignAsync(Extensions.ServiceExtensions.appSettings);
            
            return new string[] { "CampaignManagement" };
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost("SendMessage")]
        public async Task<IActionResult> PostAsync()
        {
            //await _RMqService.SendEmailForCampaignAsync(Extensions.ServiceExtensions.appSettings);
            return Ok(null);
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
