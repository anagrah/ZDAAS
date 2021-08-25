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
    [Route("api/SalesForce")]
    [ApiController]
    public class SalesForceController : ControllerBase
    {
        System.Data.DataTable dataTable = new System.Data.DataTable();
        private ISalesForceConnectorService sfcs;
        private IConfiguration configuration;
        string _crmKitBaseUrl;
        string _consumerKey;
        string _conuserSecret;
        ILoggerManager _logger;
        // GET: api/SalesForce

        public SalesForceController(IConfiguration _configuration, ISalesForceConnectorService _sc, ILoggerManager logger)
        {
            configuration = _configuration;
            sfcs = _sc;
            _crmKitBaseUrl = this.configuration.GetSection("AppSetting").GetSection("CRMSDKApiClientBaseUrl").Value;
            _consumerKey = this.configuration.GetSection("AppSetting").GetSection("SalesforceConsumerKey").Value;
            _conuserSecret = this.configuration.GetSection("AppSetting").GetSection("SalesforceConuserSecret").Value;
            _logger = logger;
        }
        [HttpPost]
        [Route("Connect")]
        public async Task<IActionResult> GetAsync(decimal companyId, decimal userId, decimal crmId, [FromBody] SalesForceConnectionDataModel inputParams)
        {
            try
            {
                inputParams.ConsumerKey = _consumerKey;
                inputParams.ConuserSecret = _conuserSecret;
                SalesForceConnectedDataModel model = await sfcs.GetConnectServiceAsync(companyId, userId, crmId, inputParams, _crmKitBaseUrl);
                if (model.Message == "authentication failure")
                {
                    return Ok(new { message = ResponseMessage.AuthFailed, code = EnumCollection.ErrorCode.Login_Failed, result = model });
                }
                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success, result = model });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("SalesForce connection failed error: " + ex.Message);
                _logger.LogInfo("SalesForceConnectionDataModel: " + inputParams);
                return Ok(new { message = ResponseMessage.Fail + ":" + ex.Message, code = EnumCollection.ErrorCode.Unknown });
            }
        }

        [HttpPost]
        [Route("Tables")]
        public async Task<IActionResult> CRMTables([FromBody] SalesForceConnectedDataModel outhToken)
        {
            try
            {
                ICollection<TblCrmCompanyTables> tableNames = await sfcs.GetSalesForceTablesServiceAsync(outhToken, _crmKitBaseUrl);

                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success, result = tableNames });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On CRMTables get : " + ex.Message);
                return Ok(new { message = ResponseMessage.Fail + ":" + ex.Message, code = EnumCollection.ErrorCode.Unknown });
            }
        }
        [HttpPost]
        [Route("TablesFields")]
        public async Task<IActionResult> TablesFields(decimal tableId, [FromBody] SalesForceConnectedDataModel outhToken)
        {
            try
            {
                ICollection<TblCrmCompanyTableFields> _dataTable = await sfcs.GetSalesForceTableFieldsServiceAsync(outhToken, tableId, _crmKitBaseUrl);

                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success, result = _dataTable });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("Error On TablesFields get : " + ex.Message);
                return Ok(new { message = ResponseMessage.Fail + ":" + ex.Message, code = EnumCollection.ErrorCode.Unknown });
            }

        }

        // POST: api/SalesForce
        [HttpPost]
        [Route("TablesFieldsData")]
        public async Task<IActionResult> TablesFieldsData(string search, [FromBody] SalesForceConnectedDataModel outhToken)
        {
            try
            {
                var result = await sfcs.GetSalesForceOpportunitesDataServiceAsync(search, outhToken, _crmKitBaseUrl);
                return Ok(new { message = ResponseMessage.Success, code = EnumCollection.SuccessCode.Success, result });
            }
            catch (Exception ex)
            {
                _logger.LogInfo("TablesFieldsData fetching error: " + ex.Message);
                return Ok(new { message = ResponseMessage.Fail + ":" + ex.Message, code = EnumCollection.ErrorCode.Unknown });
            }

        }

    }
}
