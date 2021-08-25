using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Zbizlink.RFPServices.Contracts;
using Zdaas.RFPServices.ViewModels;
using viewModelInsert = Zbizlink.RFPServices.ViewModels.Insert;
using viewModelGet = Zbizlink.RFPServices.ViewModels.Get;
using viewModelEdit = Zbizlink.RFPServices.ViewModels.Edit;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Zbizlink.RFPWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LookupDataController : ControllerBase
    {

        private readonly ILookupDataService _lookupDataService;
        public LookupDataController(ILookupDataService lookupDataService)
        {
            _lookupDataService = lookupDataService;
        }


        #region Category method

        // GET: api/<LookupDataController>
        [HttpGet("getOpportunityCategoryLookupData")]
        public async Task<IActionResult> GetOpportunityCategoryLookupData()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetOpportunityCategoryLookupData()));

            return Ok(response);
        }

        // POST api/<LookupDataController>
        [HttpPost("categoryInsert")]
        public async Task<IActionResult> CategoryInsert([FromBody] viewModelInsert.Category category)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.CategoryInsert(category)));

            return Ok(response);
        }

        [HttpPost("categorySynonymInsert")]
        public async Task<IActionResult> CategorySynonymInsert([FromBody] viewModelInsert.CategorySynonym categorySynonym)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.SynonymInsert(categorySynonym)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpGet("getCategoriesAndSynonym")]
        public async Task<IActionResult> GetCategoriesAndSynonym()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetOpportunityCategoryLookupData()));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpGet("getCategoriesSynonym")]
        public async Task<IActionResult> GetCategoriesSynonym()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetCategoriesAndSynonym()));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("editCategoriesAndSynonym")]
        public async Task<IActionResult> EditCategoriesAndSynonym([FromBody] viewModelEdit.CategorySynonym categorySynonym)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.EditCategoriesAndSynonym(categorySynonym)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("categorySynonymDelete")]
        public async Task<IActionResult> CategorySynonymDelete([FromBody] decimal categorySynonymId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.CategorySynonymDelete(categorySynonymId)));

            return Ok(response);
        }

        #endregion


        #region Summary Method

        // GET: api/<LookupDataController>
        [HttpGet("getOpportunitySummaryLookupData")]
        public async Task<IActionResult> GetOpportunitySummaryLookupData()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetOpportunitySummaryLookupData()));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpGet("getSummaryFieldAndSynonym")]
        public async Task<IActionResult> GetSummaryFieldAndSynonym()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetSummaryFieldAndSynonym()));

            return Ok(response);
        }


        // GET: api/<LookupDataController>
        [HttpGet("getSummaryField")]
        public async Task<IActionResult> GetSummaryField()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetSummaryField()));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("summaryFieldInsert")]
        public async Task<IActionResult> SummaryFieldInsert([FromBody] viewModelInsert.SummaryField summaryField)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.SummaryFieldInsert(summaryField)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("summaryFieldEdit")]
        public async Task<IActionResult> SummaryFieldEdit([FromBody] viewModelEdit.SummaryField summaryField)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.SummaryFieldEdit(summaryField)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("summaryFieldDelete")]
        public async Task<IActionResult> SummaryFieldDelete([FromBody] decimal summaryFieldId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.SummaryFieldDelete(summaryFieldId)));

            return Ok(response);
        }

        [HttpGet("getSummarySynonym")]
        public async Task<IActionResult> GetSummarySynonym()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetSummarySynonym()));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("summarySynonymInsert")]
        public async Task<IActionResult> SummarySynonymInsert([FromBody] viewModelInsert.SummarySynonym summarySynonym)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.SummarySynonymInsert(summarySynonym)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("summarySynonymEdit")]
        public async Task<IActionResult> SummarySynonymEdit([FromBody] viewModelEdit.SummarySynonym summarySynonym)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.SummarySynonymEdit(summarySynonym)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("summarySynonymDelete")]
        public async Task<IActionResult> SummarySynonymDelete([FromBody] decimal summaryFieldId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.SummarySynonymDelete(summaryFieldId)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("movedSummaryFieldSynonymEdit")]
        public async Task<IActionResult> MovedSummaryFieldSynonymEdit([FromBody] List<viewModelEdit.SummarySynonym> summarySynonymList)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.MovedSummaryFieldSynonymEdit(summarySynonymList)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("movedCatorySynonymEdit")]
        public async Task<IActionResult> MovedCatorySynonymEdit([FromBody] List<viewModelEdit.CategorySynonym> categorySynonymList)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.MovedCategorySynonymEdit(categorySynonymList)));

            return Ok(response);
        }

        #endregion


        #region Bridges Methods

        // GET api/<LookupDataController>/5
        [HttpGet("getSynonymBridges")]
        public async Task<IActionResult> GetSynonymBridges(decimal synonymId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetSynonymBridges(synonymId)));

            return Ok(response);
        }

        // POST api/<LookupDataController>
        [HttpPost("saveSynonymBridges")]
        public async Task<IActionResult> SaveSynonymBridges([FromBody] viewModelInsert.SynonymBridges synonymBridges)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.SaveSynonymBridges(synonymBridges)));

            return Ok(response);
        }


        // GET api/<LookupDataController>/5
        [HttpGet("getSummarySynonymBridges")]
        public async Task<IActionResult> GetSummarySynonymBridges(decimal synonymId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetSummarySynonymBridges(synonymId)));

            return Ok(response);
        }

        // POST api/<LookupDataController>
        [HttpPost("saveSummarySynonymBridges")]
        public async Task<IActionResult> SaveSummarySynonymBridges([FromBody] viewModelInsert.SummarySynonymBridges summarySynonymBridges)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.SaveSummarySynonymBridges(summarySynonymBridges)));

            return Ok(response);
        }

        #endregion

        #region Agency Method

        // GET: api/<LookupDataController>
        [HttpGet("getAgencies")]
        public async Task<IActionResult> GetAgencies()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetAgencies()));

            return Ok(response);
        }

        [HttpPost("agencyInsert")]
        public async Task<IActionResult> AgencyInsert([FromBody] viewModelInsert.Agency agency)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.AgencyInsert(agency)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("agencyEdit")]
        public async Task<IActionResult> AgencyEdit([FromBody] viewModelEdit.Agency agency)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.AgencyEdit(agency)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("AgencyDelete")]
        public async Task<IActionResult> AgencyDelete([FromBody] int agencyId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.AgencyDelete(agencyId)));

            return Ok(response);
        }

        #endregion

        #region Industry Method

        // GET: api/<LookupDataController>
        [HttpGet("getIndustry")]
        public async Task<IActionResult> GetIndustry()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetIndustries()));

            return Ok(response);
        }

        [HttpPost("industryInsert")]
        public async Task<IActionResult> IndustryInsert([FromBody] viewModelInsert.Industry industry)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.IndustryInsert(industry)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("industryEdit")]
        public async Task<IActionResult> IndustryEdit([FromBody] viewModelEdit.Industry industry)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.IndustryEdit(industry)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("industryDelete")]
        public async Task<IActionResult> industryDelete([FromBody] int industryId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.IndustryDelete(industryId)));

            return Ok(response);
        }



        #endregion

        #region ContractVehicle

        // GET: api/<LookupDataController>
        [HttpGet("getContractVehicle")]
        public async Task<IActionResult> GetContractVehicle()
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.GetContractVehicles()));

            return Ok(response);
        }

        [HttpPost("contractVehicleInsert")]
        public async Task<IActionResult> ContractVehicleInsert([FromBody] viewModelInsert.ContractVehicle contractVehicle)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.ContractVehicleInsert(contractVehicle)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("contractVehicleEdit")]
        public async Task<IActionResult> ContractVehicleEdit([FromBody] viewModelEdit.ContractVehicle contractVehicle)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.ContractVehicleEdit(contractVehicle)));

            return Ok(response);
        }

        // GET: api/<LookupDataController>
        [HttpPost("contractVehicleDelete")]
        public async Task<IActionResult> ContractVehicleDelete([FromBody] int contractVehicleId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.ContractVehicleDelete(contractVehicleId)));

            return Ok(response);
        }
        #endregion

        #region State

        [HttpPost("stateInsert")]
        public async Task<IActionResult> stateInsert([FromBody] viewModelInsert.States states)
        {

            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.StatesInsert(states)));

            return Ok(response);
        }

        #endregion



       

        // GET: api/<LookupDataController>
        [HttpPost("editContractVehicle")]
        public async Task<IActionResult> EditContractVehicle([FromBody] viewModelEdit.ContractVehicle contractVehicle)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.ContractVehicleEdit(contractVehicle)));

            return Ok(response);
        }


        // GET: api/<LookupDataController>
        [HttpPost("editStates")]
        public async Task<IActionResult> EditStates([FromBody] viewModelEdit.States states)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.EditStates(states)));

            return Ok(response);
        }
         

        #region  
        [HttpPost("BridgeSummarySynonymDelete")]
        public async Task<IActionResult> BridgeSummarySynonymDelete([FromBody] int summarySynonymId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.BridgeSummarySynonymDelete(summarySynonymId)));

            return Ok(response);
        }
        #endregion
         
        #region   
        [HttpPost("BridgeCategorySynonymDelete")]
        public async Task<IActionResult> BridgeCategorySynonymDelete([FromBody] int categorySynonymId)
        {
            var response = await Task<ClientResponse>.Run(() => (_lookupDataService.BridgeCategorySynonymDelete(categorySynonymId)));

            return Ok(response);
        }
        #endregion

        // PUT api/<LookupDataController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LookupDataController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
