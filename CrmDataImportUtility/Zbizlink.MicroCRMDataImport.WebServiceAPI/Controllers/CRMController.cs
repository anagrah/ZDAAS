using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Zbizlink.Micro.Enum;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;
using Zbizlink.MicroCRMDataImport.DataModel.Models;
using Zbizlink.MicroCRMDataImport.LoggerService.Contracters;
using Zbizlink.MicroCRMDataImport.WorkerService.Contracters;

namespace Zbizlink.MicroCRMDataImport.WebServiceAPI.Controllers
{
    [Route("api/CRM")]
    [ApiController]
    public class CRMController : ControllerBase
    {
        System.Data.DataTable dataTable = new System.Data.DataTable();
        private ICRMService crmService;
        private IConfiguration configuration;
        string _crmKitBaseUrl;
        string _bizlinkBaseUrl;
        ILoggerManager _logger;
        // GET: api/SalesForce

        public CRMController(IConfiguration _configuration, ICRMService _crmService, ILoggerManager logger)
        {
            configuration = _configuration;
            crmService = _crmService;
            _logger = logger;
            _crmKitBaseUrl = this.configuration.GetSection("AppSetting").GetSection("CRMSDKApiClientBaseUrl").Value;
            _bizlinkBaseUrl = this.configuration.GetSection("AppSetting").GetSection("BizlinkBaseUrl").Value;
        }
        [HttpPost]
        [Route("AddConnectionProperties")]
        public IActionResult AddConnectionProperties(decimal companyId, decimal userId, [FromBody] TblCrmConnectionProperties[] modelArray)
        {
            try
            {
                crmService.AddConnectionProperties(companyId, userId, modelArray);
                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On AddConnectionProperties : " + ex.Message);
                return Ok(new { message = ex.Message, code = EnumCollection.ErrorCode.Unknown });
            }
        }
        [HttpGet]
        [Route("ConnectionProperties")]
        public IActionResult GetConnectionProperties(decimal companyId, decimal userId, decimal crmId)
        {
            try
            {
                var result = crmService.GetConnectionProperties(companyId, userId, crmId);
                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success, result });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On AddConnectionProperties : " + ex.Message);
                return Ok(new { message = ResponseMessage.Fail, code = EnumCollection.ErrorCode.Unknown });
            }
        }

        // POST: api/SalesForce
        [HttpPost]
        [Route("CompanyCRMTables")]
        public IActionResult Post(decimal companyId, [FromBody] TblCrmCompanyTables[] list)
        {
            try
            {
                crmService.AddCompanyCRMTables(list, companyId);
                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On CompanyCRMTables get : " + ex.Message);

                return Ok(new { message = ResponseMessage.Fail, code = EnumCollection.ErrorCode.Unknown });
            }
        }
        [HttpGet]
        [Route("GetCompanyCRMTables")]
        public IActionResult GetCompanyCRMTables(decimal companyId, decimal crmId)
        {

            try
            {
                var result = crmService.GetCompanyCRMTables(companyId, crmId);

                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success, result });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On GetCompanyCRMTables : " + ex.Message + "Error Details : " + ex.InnerException);
                return Ok(new { message = ResponseMessage.Fail, code = EnumCollection.ErrorCode.Unknown });
            }
        }
        // POST: api/SalesForce
        [HttpPost]
        [Route("CompanyCRMTablesFields")]
        public IActionResult CompanyCRMTablesFields(decimal tableId, [FromBody] TblCrmCompanyTableFields[] list)
        {

            try
            {
                crmService.AddCompanyCRMTableFields(list, tableId);

                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On CompanyCRMTablesFields : " + ex.Message + "Error Details : " + ex.InnerException);
                return Ok(new { message = ResponseMessage.Fail, code = EnumCollection.ErrorCode.Unknown });
            }

        }
        // Post: api/CRM
        [HttpPost]
        [Route("SaveData")]
        public async Task<IActionResult> SaveDataAsync([FromQuery] SalesForceConnectedDataModel outhToken, [FromBody] dynamic dynamicObj)
        {
            try
            {
                await crmService.SaveAndSyncOpportunityDataAsync(dynamicObj, outhToken, _crmKitBaseUrl, _bizlinkBaseUrl);

                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On SaveDataAsync : " + ex.Message + "Error Details : " + ex.InnerException);

                return Ok(new { message = ResponseMessage.Fail, code = EnumCollection.ErrorCode.Unknown });
            }
        }

        [HttpGet]
        [Route("GetTablesFieldsForMapping")]
        public IActionResult GetTablesFieldsForMapping(decimal companyId, decimal crmId)
        {

            try
            {
                var result = crmService.GetTablesFieldsMappingService(companyId, crmId);
                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success, result });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On GetTablesFieldsForMapping : " + ex.Message);
                return Ok(new { message = ResponseMessage.Fail, code = EnumCollection.ErrorCode.Unknown });
            }
        }

        // Post: api/CRM
        [HttpPost]
        [Route("SaveMappedFields")]
        public IActionResult SaveMappedFields([FromBody] TblBizlinkToCrmfieldsMapping[] dynamicObjList)
        {
            try
            {
                crmService.AddMappedFields(dynamicObjList);

                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On SaveMappedFields : " + ex.Message);
                return Ok(new { message = ResponseMessage.Fail, code = EnumCollection.ErrorCode.Unknown });
            }
        }
    }
}
