using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.RFPServices.Contracts;
using Zdaas.LoggerContracts;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPServices.Contracts;
using Zdaas.RFPServices.Models;

using Zdaas.RFPServices.ViewModels;
using Zdaas.RFPServices.ViewModels.Opportunity;
using Zdaas.RFPWebAPI.Extensions;

namespace Zbizlink.RFPWebAPI.Controllers
{
    [Route("api/ProposalSource")]
    public class ProposalSourceController : Controller
    {
        private IProposalSourceService _proposalSourceService;
        private ILoggerManager _logger;
        public ProposalSourceController(IProposalSourceService proposalSourceService, ILoggerManager logger)
        {
            _proposalSourceService = proposalSourceService;
            _logger = logger;

        }
        // GET: ProposalSourceController
        [HttpGet("GetProposalSourcesSynonymsList")]
        public async Task<IActionResult> GetProposalSourcesSynonymsList()
        {
            _logger.LogInfo("In Class = ProposalSourceController Method Name = GetProposalSourcesSynonymsList, Parm:  = ");

            var response = await Task<ClientResponse>.Run(() => (_proposalSourceService.GetProposalSourcesDataLists()));

            _logger.LogInfo("out Class = ProposalSourceController Method Name = GetProposalSourcesSynonymsList");
            return Ok(response);

        }

    }
}
