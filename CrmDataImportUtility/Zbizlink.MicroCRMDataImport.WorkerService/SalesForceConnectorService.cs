using System;
using System.Collections.Generic;
using System.Text;
using System.Data.CData.Salesforce;
using System.Data;
using Zbizlink.MicroCRMDataImport.WorkerService.Contracters;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using System.Dynamic;
using System.Text.RegularExpressions;
using Zbizlink.MicroCRMDataImport.LoggerService.Contracters;
using Zbizlink.MicroCRMDataImport.DataModel.Models;
using Zbizlink.MicroCRMDataImport.DataModel.Contracts;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;

namespace Zbizlink.MicroCRMDataImport.WorkerService
{
    public class SalesForceConnectorService : ISalesForceConnectorService
    {
        ILoggerManager _logger;
        SalesForceConnectionDataModel sfcDM = new SalesForceConnectionDataModel();
        CDataDriversConnectionStrings.CDataDriversConnectionStrings cddCS = new CDataDriversConnectionStrings.CDataDriversConnectionStrings();
        private IUnitOfWork _iunitOfWork;
        public SalesForceConnectorService(IUnitOfWork iunitOfWork, ILoggerManager logger)
        {
            _iunitOfWork = iunitOfWork;
            _logger = logger;
        }
        public async Task<SalesForceConnectedDataModel> GetConnectServiceAsync(decimal companyId, decimal userId, decimal crmId, SalesForceConnectionDataModel inputParams, string baseUrl)
        {
            _logger.LogInfo("SalesForce GetConnectServiceAsync >>> called");
            SalesForceConnectedDataModel _salesForceConnectedDataModel = new SalesForceConnectedDataModel();
            TblCrmImportDataOwner _owner = _iunitOfWork.CRMImportDataOwner.GetFirst(x => x.CompanyId == companyId);
            TblCrmImportDataUser _importUser = _iunitOfWork.CRMImportDataUser.GetFirst(x => x.UserId == userId && x.OwnerId == _owner.Id);

            using (var httpClient = new HttpClient())
            {
                StringContent content = new StringContent(JsonConvert.SerializeObject(inputParams), Encoding.UTF8, "application/json");
                httpClient.BaseAddress = new Uri(baseUrl);
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                _logger.LogInfo("SalesForce connection bridge >>> connection iniating");
                using (var response = await httpClient.PostAsync("api/Salesforce/GetAccessTokenAsync", content))
                {
                    _logger.LogInfo("SalesForce connection bridge >>> response.Content.ReadAsStringAsync()");
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    _salesForceConnectedDataModel = JsonConvert.DeserializeObject<SalesForceConnectedDataModel>(apiResponse);
                }
            }
            _logger.LogInfo("SalesForce connection bridge >>> connected successfully");
            _salesForceConnectedDataModel.CrmId = crmId;
            _salesForceConnectedDataModel.CrmOwnerId = _owner.Id;
            _salesForceConnectedDataModel.CrmImportUserId = _importUser.Id;
            _salesForceConnectedDataModel.CompanyId = companyId;
            _salesForceConnectedDataModel.UserId = userId;
            return _salesForceConnectedDataModel;
        }

        public async Task<ICollection<TblCrmCompanyTables>> GetSalesForceTablesServiceAsync(SalesForceConnectedDataModel oAuthParam, string baseUrl)
        {
            List<MapTable> _tables = new List<MapTable>();
            using (var httpClient = new HttpClient())
            {
                StringContent content = new StringContent(JsonConvert.SerializeObject(oAuthParam), Encoding.UTF8, "application/json");
                httpClient.BaseAddress = new Uri(baseUrl);
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                using (var response = await httpClient.PostAsync("api/Salesforce/GetObjectsNamesAsync", content))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    _tables = JsonConvert.DeserializeObject<List<MapTable>>(apiResponse);
                }
            }

            ICollection<TblCrmCompanyTables> tablesList = _iunitOfWork.CRMCompanyTables.GetSelectedColumnWithWhere<TblCrmCompanyTables>(x => x.CrmOwnerId == oAuthParam.CrmOwnerId && x.CrmId == oAuthParam.CrmId, (TblCrmCompanyTables TblCrmCompanyTables) => TblCrmCompanyTables);
            List<TblCrmCompanyTables> _DBTablesList = tablesList.ToList();
            foreach (MapTable tblName in _tables)
            {
                TblCrmCompanyTables found = _DBTablesList.Find(x => x.CrmTableName.ToLower().Equals(tblName.Name.ToLower()));
                //Now this fix to only opportunity table, if needed more tables then remove this filter
                if (found == null && tblName.Name.Trim().ToLower() == "Opportunity".ToLower())
                {
                    tablesList.Add(new TblCrmCompanyTables()
                    {
                        CrmTableName = tblName.Name,
                        CrmId = oAuthParam.CrmId,
                        Status = false
                    });
                }

            }
            return tablesList;

        }

        public async Task<ICollection<TblCrmCompanyTableFields>> GetSalesForceTableFieldsServiceAsync(SalesForceConnectedDataModel oAuthParam, decimal tableId, string baseUrl)
        {
            List<string> _tableFields = new List<string>();
            string tableName = _iunitOfWork.CRMCompanyTables.GetByID(Convert.ToDecimal(tableId)).CrmTableName;
            using (var httpClient = new HttpClient())
            {
                StringContent content = new StringContent(JsonConvert.SerializeObject(oAuthParam), Encoding.UTF8, "application/json");
                httpClient.BaseAddress = new Uri(baseUrl);
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                using (var response = await httpClient.PostAsync("api/Salesforce/GetObjectFieldsAsync?ObjectName=" + tableName, content))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    _tableFields = JsonConvert.DeserializeObject<List<string>>(apiResponse);
                }
            }
            ICollection<TblCrmCompanyTableFields> fieldsList = _iunitOfWork.CRMCompanyTableFields.GetSelectedColumnWithWhere<TblCrmCompanyTableFields>(x => x.CrmCompanyTableId == tableId, (TblCrmCompanyTableFields TblCrmCompanyTableFields) => TblCrmCompanyTableFields);
            List<TblCrmCompanyTableFields> _dbFieldsList = fieldsList.ToList();
            foreach (string fieldName in _tableFields)
            {
                TblCrmCompanyTableFields found = _dbFieldsList.Find(x => x.TableFieldName.ToLower().Equals(fieldName.ToLower()));
                bool _status = false;
                if (fieldName == "Id" || fieldName == "CreatedDate" || fieldName == "CloseDate")
                    _status = true;
                if (found == null)
                {   
                    fieldsList.Add(new TblCrmCompanyTableFields()
                    {
                        TableFieldName = fieldName,
                        Status = _status
                    });
                }
                else
                {
                    fieldsList.Where(x => x.TableFieldName.ToLower().Equals(found.TableFieldName.ToLower())).FirstOrDefault().Status = true;
                }

            }


            return fieldsList;

        }
        public async Task<dynamic> GetSalesForceTablesDataServiceAsync(string search, SalesForceConnectedDataModel oAuthParam, string baseUrl)
        {

            ICollection<TblCrmCompanyTables> _tablesList = _iunitOfWork.CRMCompanyTables.GetSelectedColumnWithWhere<TblCrmCompanyTables>(x => x.CrmOwnerId == oAuthParam.CrmOwnerId && x.CrmId == oAuthParam.CrmId && x.Status == true, (TblCrmCompanyTables TblCrmCompanyTables) => TblCrmCompanyTables);
            dynamic _dynamicList = new List<dynamic>();
            foreach (TblCrmCompanyTables _table in _tablesList)
            {
                dynamic _row = new ExpandoObject();
                _row.TableName = _table.CrmTableName;
                _row.TableId = _table.Id;

                ICollection<TblCrmCompanyTableFields> _tablesFieldsList = _iunitOfWork.CRMCompanyTableFields.GetSelectedColumnWithWhere<TblCrmCompanyTableFields>(x => x.CrmCompanyTableId == _table.Id && x.Status == true, (TblCrmCompanyTableFields TblCrmCompanyTables) => TblCrmCompanyTables);
                List<string> _fieldsNames = _tablesFieldsList.Select(x => x.TableFieldName).ToList();
                decimal[] _fieldsIds = _tablesFieldsList.Select(x => x.Id).ToArray();
                var _fieldsIdsWithNames = _tablesFieldsList.Select(t => new { t.Id, t.TableFieldName }).ToArray();
                if (_fieldsNames.Count > 0)
                {
                    var _fields = String.Join(",", _fieldsNames);
                    string[] strArry = _fields.Split(",");
                    _row.TableFields = strArry;
                    _row.FieldsIdWithName = _fieldsIdsWithNames;
                    string _query = $"Select {_fields} From {_table.CrmTableName}";

                    oAuthParam.SqlQuery = _query;
                    // Fetch table data from sales force crm through sdk kit.
                    using (var httpClient = new HttpClient())
                    {
                        StringContent content = new StringContent(JsonConvert.SerializeObject(oAuthParam), Encoding.UTF8, "application/json");

                        httpClient.BaseAddress = new Uri(baseUrl);
                        httpClient.DefaultRequestHeaders.Accept.Clear();
                        httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                        using (var response = await httpClient.PostAsync("api/Salesforce/GetObjectsFieldsDataAsync", content))
                        {
                            string apiResponse = await response.Content.ReadAsStringAsync();
                            dynamic _result = JsonConvert.DeserializeObject<List<JObject>>(apiResponse);

                            _row.TableFieldsData = _result;
                            _dynamicList.Add(_row);
                        }

                    }
                }
                else
                {
                    _row.TableFields = null;
                    _row.TableFieldsIds = null;
                    _row.TableFieldsData = null;
                    _dynamicList.Add(_row);
                }


            }

            return _dynamicList;
        }
        public async Task<dynamic> GetSalesForceOpportunitesDataServiceAsync(string search, SalesForceConnectedDataModel oAuthParam, string baseUrl)
        {

            TblCrmCompanyTables _table = _iunitOfWork.CRMCompanyTables.GetFirst(x => x.CrmOwnerId == oAuthParam.CrmOwnerId && x.CrmId == oAuthParam.CrmId && x.CrmTableName == "Opportunity" && x.Status == true);
            if (_table == null)
            {
                return null;
            }
            _table.TblCrmCompanyTableFields = _iunitOfWork.CRMCompanyTableFields.GetSelectedColumnWithWhere<TblCrmCompanyTableFields>(x => x.CrmCompanyTableId == _table.Id && x.Status == true, (TblCrmCompanyTableFields TblCrmCompanyTables) => TblCrmCompanyTables);

            IQueryable<TblCrmCompanyTableFields> _tblCrmCompanyTableFields = _iunitOfWork.CRMCompanyTableFields.GetSelectedColumnWithWhereQ<TblCrmCompanyTableFields>(x => x.CrmCompanyTableId == _table.Id && x.TableFieldName == "Id" && x.Status == true, (TblCrmCompanyTableFields TblCrmCompanyTableFields) => TblCrmCompanyTableFields);
            IQueryable<TblCrmImportActivityFields> _tblCrmImportActivityFields = _iunitOfWork.CRMImportActivityFields.GetSelectedColumnWithWhereQ<TblCrmImportActivityFields>(x => x.Status == true, (TblCrmImportActivityFields TblCrmImportActivityFields) => TblCrmImportActivityFields);

            var _queryResult = (from cf in _tblCrmCompanyTableFields
                                join af in _tblCrmImportActivityFields on cf.Id equals af.CrmCompanyTableFieldsId
                                select new { af.FieldValue }).ToList();


            dynamic _dynamic_Object = new ExpandoObject();
            _dynamic_Object.TableName = _table.CrmTableName;
            _dynamic_Object.TableId = _table.Id;

            List<string> _fieldsNames = _table.TblCrmCompanyTableFields.Select(x => x.TableFieldName).ToList();
            var _fieldsIdsWithNames = _table.TblCrmCompanyTableFields.Select(t => new { t.Id, t.TableFieldName }).ToArray();
            if (_fieldsNames.Count > 0)
            {
                var _fields = String.Join(",", _fieldsNames);
                string[] strArry = _fields.Split(",");
                _dynamic_Object.TableFields = strArry;
                _dynamic_Object.FieldsIdWithName = _fieldsIdsWithNames;
                string _query = "";
                if (search == "NonExpired")
                {
                    _query = $"Select {_fields} From {_table.CrmTableName} Where IsClosed={false}";
                }
                else if (search == "Expired")
                {
                    _query = $"Select {_fields} From {_table.CrmTableName} Where IsClosed ={true}";
                }
                else
                {
                    _query = $"Select {_fields} From {_table.CrmTableName}";
                }

                oAuthParam.SqlQuery = _query;
                // Fetch table data from sales force crm through sdk kit.
                using (var httpClient = new HttpClient())
                {
                    StringContent content = new StringContent(JsonConvert.SerializeObject(oAuthParam), Encoding.UTF8, "application/json");

                    httpClient.BaseAddress = new Uri(baseUrl);
                    httpClient.DefaultRequestHeaders.Accept.Clear();
                    httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    using (var response = await httpClient.PostAsync("api/Salesforce/GetObjectsFieldsDataAsync", content))
                    {
                        string apiResponse = await response.Content.ReadAsStringAsync();
                        dynamic _result = JsonConvert.DeserializeObject<List<JObject>>(apiResponse);

                        var _rowsList = new List<ExpandoObject>();
                        foreach (dynamic v in (_result as IEnumerable<object>))
                        {

                            foreach (JToken token in v.Children())
                            {
                                if (token is JProperty)
                                {
                                    var prop = token as JProperty;
                                    if (prop.Name == "Id")
                                    {
                                        string val = prop.Value.ToString();
                                        if (_queryResult.Exists(x => x.FieldValue == val))
                                        {
                                            break;
                                        }
                                        else
                                        {
                                            dynamic nrow = new ExpandoObject();
                                            foreach (JToken tok in v.Children())
                                            {
                                                if (tok is JProperty)
                                                {
                                                    var property = tok as JProperty;

                                                    if (property.Name == "attributes")
                                                    {
                                                        (nrow as IDictionary<string, Object>)["isSelected"] = false;
                                                    }
                                                    else
                                                    {
                                                        (nrow as IDictionary<string, Object>)[property.Name] = property.Value;
                                                    }

                                                }
                                            }
                                            _rowsList.Add(nrow);
                                        }
                                    }
                                }
                            }
                        }

                        _dynamic_Object.TableFieldsData = _rowsList;

                    }

                }
            }
            else
            {
                _dynamic_Object.TableFields = null;
                _dynamic_Object.TableFieldsIds = null;
                _dynamic_Object.TableFieldsData = null;

            }



            return _dynamic_Object;
        }

    }

}
