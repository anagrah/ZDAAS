
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Zbizlink.MicroCRMDataImport.DataModel.Contracts;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;
using Zbizlink.MicroCRMDataImport.DataModel.Models;
using Zbizlink.MicroCRMDataImport.LoggerService.Contracters;
using Zbizlink.MicroCRMDataImport.WorkerService.Contracters;

namespace Zbizlink.MicroCRMDataImport.WorkerService
{
    public class CRMService : ICRMService
    {
        ILoggerManager _logger;
        private IUnitOfWork _iunitOfWork;
        public CRMService(IUnitOfWork iunitOfWork, ILoggerManager logger)
        {
            _iunitOfWork = iunitOfWork;
            _logger = logger;
        }
        public void AddConnectionProperties(decimal companyId, decimal userId, TblCrmConnectionProperties[] entityArray)
        {
            TblCrmImportDataOwner _owner = _iunitOfWork.CRMImportDataOwner.GetFirst(x => x.CompanyId == companyId);
            TblCrmImportDataUser _importUser = _iunitOfWork.CRMImportDataUser.GetFirst(x => x.UserId == userId && x.OwnerId == _owner.Id);
            ICollection<TblCrmConnectionProperties> _connectionProperties = _iunitOfWork.CRMConnectioProperties.GetSelectedColumnWithWhere<TblCrmConnectionProperties>
                (x => x.CrmImportDataUserId == _importUser.Id && x.Status == true && x.CrmId == entityArray[0].CrmId, (TblCrmConnectionProperties tEntity) => tEntity);

            if (_connectionProperties == null || _connectionProperties.Count == 0)
            {
                foreach (TblCrmConnectionProperties entity in entityArray)
                {
                    entity.CrmImportDataUserId = _importUser.Id;
                    entity.CreatedDate = DateTime.Now;
                    entity.Status = true;
                }
                _iunitOfWork.CRMConnectioProperties.InsertRange(entityArray);
            }
            else
            {
                foreach (TblCrmConnectionProperties entity in _connectionProperties)
                {
                    TblCrmConnectionProperties updateEntity = _iunitOfWork.CRMConnectioProperties.GetByID(entity.Id);
                    string newValue = entityArray.Where(x => x.KeyVar.Equals(updateEntity.KeyVar)).Select(x => x.ValueVar).FirstOrDefault();
                    updateEntity.ValueVar = newValue;
                    _iunitOfWork.CRMConnectioProperties.Update(entity);
                }


            }
            _iunitOfWork.Save();

        }
        public ICollection<TblCrmConnectionProperties> GetConnectionProperties(decimal companyId, decimal userId, decimal crmId)
        {
            TblCrmImportDataOwner _owner = _iunitOfWork.CRMImportDataOwner.GetFirst(x => x.CompanyId == companyId);
            if (_owner == null)
            {
                _owner = new TblCrmImportDataOwner() { CompanyId = companyId };
                _iunitOfWork.CRMImportDataOwner.Insert(_owner);
                _iunitOfWork.Save();
                _owner = _iunitOfWork.CRMImportDataOwner.GetFirst(x => x.CompanyId == companyId);
            }

            TblCrmImportDataUser _user = _iunitOfWork.CRMImportDataUser.GetFirst(x => x.UserId == userId && x.OwnerId == _owner.Id);
            if (_user == null)
            {
                _user = new TblCrmImportDataUser() { OwnerId = _owner.Id, UserId = userId, Status = true };
                _iunitOfWork.CRMImportDataUser.Insert(_user);
                _iunitOfWork.Save();
                _user = _iunitOfWork.CRMImportDataUser.GetFirst(x => x.UserId == userId && x.OwnerId == _owner.Id);
            }
            ICollection<TblCrmConnectionProperties> _connectionProperties = _iunitOfWork.CRMConnectioProperties.GetSelectedColumnWithWhere<TblCrmConnectionProperties>(x => x.CrmImportDataUserId == _user.Id && x.Status == true && x.CrmId == crmId, (TblCrmConnectionProperties tEntity) => tEntity);

            return _connectionProperties;
        }
        public void AddCompanyCRMTables(TblCrmCompanyTables[] array, decimal companyId)
        {
            TblCrmImportDataOwner _owner = _iunitOfWork.CRMImportDataOwner.GetFirst(x => x.CompanyId == companyId);
            for (int i = 0; i < array.Length; i++)
            {
                if (array[i].Id > 0)
                {
                    var entity = _iunitOfWork.CRMCompanyTables.GetByID(array[i].Id);
                    entity.Status = array[i].Status;
                    _iunitOfWork.CRMCompanyTables.Update(entity);
                }
                else
                {
                    TblCrmCompanyTables obj = new TblCrmCompanyTables()
                    {
                        CrmOwnerId = _owner.Id,
                        CrmId = array[i].CrmId,
                        CrmTableName = array[i].CrmTableName,
                        CreatedDate = DateTime.Now,
                        Status = array[i].Status
                    };
                    _iunitOfWork.CRMCompanyTables.Insert(obj);
                }
            }
            _iunitOfWork.Save();

        }
        public ICollection<TblCrmCompanyTables> GetCompanyCRMTables(decimal companyId, decimal crmId)
        {

            TblCrmImportDataOwner _owner = _iunitOfWork.CRMImportDataOwner.GetFirst(x => x.CompanyId == companyId);
            ICollection<TblCrmCompanyTables> tablesList = _iunitOfWork.CRMCompanyTables.GetSelectedColumnWithWhere<TblCrmCompanyTables>(x => x.CrmOwnerId == _owner.Id && x.CrmId == crmId && x.Status == true, (TblCrmCompanyTables TblCrmCompanyTables) => TblCrmCompanyTables);

            foreach (TblCrmCompanyTables tbl in tablesList)
            {
                tbl.CrmOwner = null;
                tbl.TblCrmCompanyTableFields = null;
            }

            return tablesList;

        }
        public void AddCompanyCRMTableFields(TblCrmCompanyTableFields[] array, decimal tableId)
        {
            for (int i = 0; i < array.Length; i++)
            {
                if (array[i].Id > 0)
                {
                    var entity = _iunitOfWork.CRMCompanyTableFields.GetByID(array[i].Id);
                    entity.Status = array[i].Status;
                    _iunitOfWork.CRMCompanyTableFields.Update(entity);
                }
                else
                {
                    TblCrmCompanyTableFields obj = new TblCrmCompanyTableFields()
                    {
                        CrmCompanyTableId = tableId,
                        TableFieldName = array[i].TableFieldName,
                        CreatedDate = DateTime.Now,
                        Status = array[i].Status
                    };
                    _iunitOfWork.CRMCompanyTableFields.Insert(obj);
                }
            }
            _iunitOfWork.Save();

        }
        public void SaveTablesData(dynamic[] array, decimal companyId, decimal userId)
        {
            TblCrmImportDataOwner _owner = _iunitOfWork.CRMImportDataOwner.GetFirst(x => x.CompanyId == companyId);
            TblCrmImportDataUser _importDataUser = _iunitOfWork.CRMImportDataUser.GetFirst(x => x.UserId == userId && x.OwnerId == _owner.Id);


            TblCrmImportActivity _TblCrmImportActivity = new TblCrmImportActivity()
            {
                CrmImportDataUserId = _importDataUser.Id,
                ActivityDateTime = DateTime.Now,
                Status = true
            };
            List<TblCrmImportActivityTables> _TblCrmImportActivityTables_Collection = new List<TblCrmImportActivityTables>();
            for (int i = 0; i < array.Length; i++)
            {

                TblCrmImportActivityTables _tblCrmImportActivityTables = new TblCrmImportActivityTables()
                {
                    CrmImportActivityId = _TblCrmImportActivity.Id,
                    CrmCompanyTableId = array[i].TableId,
                    Status = true,
                    CreatedDate = DateTime.Now
                };

                List<TblCrmImportActivityFields> _TblCrmImportActivityFields_Collection = new List<TblCrmImportActivityFields>();

                var _fieldsIdWithName = array[i].FieldsIdWithName;
                IEnumerable<object> collection_fieldsIdWithName = (IEnumerable<object>)_fieldsIdWithName;
                if (collection_fieldsIdWithName == null)
                {
                    continue;
                }

                var _tableFieldsData = array[i].TableFieldsData;
                IEnumerable<object> collection_tableFieldsData = (IEnumerable<object>)_tableFieldsData;

                foreach (object field in collection_fieldsIdWithName)
                {

                    dynamic _dynamicField = field;
                    string _fieldId = _dynamicField.id;
                    string _tableFieldName = _dynamicField.tableFieldName;
                    foreach (JObject item in collection_tableFieldsData)
                    {
                        var value = item.GetValue(_tableFieldName);

                        TblCrmImportActivityFields _tblCrmImportActivityFields = new TblCrmImportActivityFields()
                        {
                            CrmImportActivityTablesId = _tblCrmImportActivityTables.Id,
                            CrmCompanyTableFieldsId = Convert.ToDecimal(_fieldId),
                            FieldValue = Convert.ToString(value),
                            Status = true,
                            CreatedDate = DateTime.Now

                        };

                        _TblCrmImportActivityFields_Collection.Add(_tblCrmImportActivityFields);
                    }

                }

                _tblCrmImportActivityTables.TblCrmImportActivityFields = _TblCrmImportActivityFields_Collection;
                _TblCrmImportActivityTables_Collection.Add(_tblCrmImportActivityTables);
            }
            _TblCrmImportActivity.TblCrmImportActivityTables = _TblCrmImportActivityTables_Collection;
            _iunitOfWork.CRMImportActivity.Insert(_TblCrmImportActivity);
            _iunitOfWork.Save();

        }
        public async Task SaveAndSyncOpportunityDataAsync(dynamic dataobject, SalesForceConnectedDataModel oAuthParam, string crmKitBaseUrl, string bizlinkBaseUrl)
        {

            TblCrmImportActivity _TblCrmImportActivity = new TblCrmImportActivity()
            {
                CrmImportDataUserId = oAuthParam.CrmImportUserId,
                ActivityDateTime = DateTime.Now,
                Status = true
            };
            List<TblCrmImportActivityTables> _TblCrmImportActivityTables_Collection = new List<TblCrmImportActivityTables>();

            TblCrmImportActivityTables _tblCrmImportActivityTables = new TblCrmImportActivityTables()
            {
                CrmImportActivityId = _TblCrmImportActivity.Id,
                CrmCompanyTableId = dataobject.TableId,
                Status = true,
                CreatedDate = DateTime.Now
            };

            List<TblCrmImportActivityFields> _TblCrmImportActivityFields_Collection = new List<TblCrmImportActivityFields>();

            var _fieldsIdWithName = dataobject.FieldsIdWithName;
            IEnumerable<object> collection_fieldsIdWithName = (IEnumerable<object>)_fieldsIdWithName;
            if (collection_fieldsIdWithName == null)
            {
                return;
            }
            #region mapping with Bizlink
            //Sync opportunities data with bizlink.
            _logger.LogInfo("CompanyCRMTables started : ");
            var _opportunities = await MapOpportunityDataAsync(oAuthParam.CrmOwnerId, oAuthParam.CrmId, dataobject.TableFieldsData, oAuthParam, crmKitBaseUrl, bizlinkBaseUrl);
            _logger.LogInfo("CompanyCRMTables end : ");
            using (var httpClient = new HttpClient())
            {
                StringContent content = new StringContent(JsonConvert.SerializeObject(_opportunities), Encoding.UTF8, "application/json");

                httpClient.BaseAddress = new Uri(bizlinkBaseUrl);
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                using (var response = await httpClient.PostAsync($"api/Generic/ImportOpportunitiesFromCRM?companyId={oAuthParam.CompanyId}&userId={oAuthParam.UserId}", content))
                {
                    _logger.LogInfo("api/Generic/ImportOpportunitiesFromCRM called");
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    if (!apiResponse.ToLower().Equals("\"Success\"".ToLower()))
                    {
                        _logger.LogInfo("save opporunity to zbizlink failed");
                        return;
                    }

                }
                _logger.LogInfo("save opporunity to zbizlink Success");
            }

            #endregion

            var _tableFieldsData = dataobject.TableFieldsData;
            IEnumerable<object> collection_tableFieldsData = (IEnumerable<object>)_tableFieldsData;

            foreach (object field in collection_fieldsIdWithName)
            {

                dynamic _dynamicField = field;
                string _fieldId = _dynamicField.id;
                string _tableFieldName = _dynamicField.tableFieldName;
                foreach (JObject item in collection_tableFieldsData)
                {
                    var value = item.GetValue(_tableFieldName);

                    TblCrmImportActivityFields _tblCrmImportActivityFields = new TblCrmImportActivityFields()
                    {
                        CrmImportActivityTablesId = _tblCrmImportActivityTables.Id,
                        CrmCompanyTableFieldsId = Convert.ToDecimal(_fieldId),
                        FieldValue = Convert.ToString(value),
                        Status = true,
                        CreatedDate = DateTime.Now

                    };

                    _TblCrmImportActivityFields_Collection.Add(_tblCrmImportActivityFields);
                }

            }

            _tblCrmImportActivityTables.TblCrmImportActivityFields = _TblCrmImportActivityFields_Collection;
            _TblCrmImportActivityTables_Collection.Add(_tblCrmImportActivityTables);

            _TblCrmImportActivity.TblCrmImportActivityTables = _TblCrmImportActivityTables_Collection;
            _iunitOfWork.CRMImportActivity.Insert(_TblCrmImportActivity);
            _iunitOfWork.Save();
            _logger.LogInfo("import opportunities Success");

        }
        public dynamic GetTablesFieldsMappingService(decimal companyId, decimal crmId)
        {
            TblCrmImportDataOwner _owner = _iunitOfWork.CRMImportDataOwner.GetFirst(x => x.CompanyId == companyId);
            ICollection<TblCrmCompanyTables> _tablesList = _iunitOfWork.CRMCompanyTables.GetSelectedColumnWithWhere<TblCrmCompanyTables>(x => x.CrmOwnerId == _owner.Id && x.CrmId == crmId && x.Status == true, (TblCrmCompanyTables TblCrmCompanyTables) => TblCrmCompanyTables);
            List<TblCrmCompanyTableFields> list_TblCrmCompanyTableFields = new List<TblCrmCompanyTableFields>();
            foreach (TblCrmCompanyTables tbl in _tablesList)
            {
                List<TblCrmCompanyTableFields> _tablesFields = _iunitOfWork.CRMCompanyTableFields.GetSelectedColumnWithWhereQ<TblCrmCompanyTableFields>(x => x.CrmCompanyTableId == tbl.Id && x.Status == true, (TblCrmCompanyTableFields tblCrmCompanyTables) => tblCrmCompanyTables).ToList();
                list_TblCrmCompanyTableFields.AddRange(_tablesFields);
            }
            dynamic _dynamic_Object = new ExpandoObject();

            ICollection<TblBizlinkTableFields> _bizlinkFieldsList = _iunitOfWork.BizlinkTableFields.GetSelectedColumnWithWhere<TblBizlinkTableFields>(x => x.Status == true, (TblBizlinkTableFields tblBizlinkTableFields) => tblBizlinkTableFields);
            IQueryable<TblBizlinkToCrmfieldsMapping> _mappedFieldsQ = _iunitOfWork.BizlinkToCrmfieldsMapping.GetSelectedColumnWithWhereQ<TblBizlinkToCrmfieldsMapping>(x => x.Status == true, (TblBizlinkToCrmfieldsMapping tblBizlinkToCrmfieldsMapping) => tblBizlinkToCrmfieldsMapping);

            var _mappedFieldsList = (from crm in list_TblCrmCompanyTableFields
                                     join mapped in _mappedFieldsQ on crm.Id equals mapped.CrmCompanyTableFieldId
                                     select new { mapped.Id, mapped.BizlinkTableFieldId, mapped.CrmCompanyTableFieldId, mapped.CreatedDate, mapped.Status }).ToList();

            var _fieldsIdsWithNames = list_TblCrmCompanyTableFields.Select(t => new { t.Id, t.TableFieldName }).ToArray();
            var _bizlinkfieldsIdsWithNames = _bizlinkFieldsList.Select(t => new { t.Id, t.BizlinkTableFieldName }).ToArray();

            var query = from bizlink in _bizlinkfieldsIdsWithNames
                        join mapped in _mappedFieldsList on bizlink.Id equals mapped.BizlinkTableFieldId into gj
                        from find in gj.DefaultIfEmpty()
                        select new { bizlink.Id, bizlink.BizlinkTableFieldName, MappedId = find?.CrmCompanyTableFieldId ?? null };

            _dynamic_Object.CRMFieldsIdsWithNames = _fieldsIdsWithNames;
            _dynamic_Object.BizlinkFieldsIdsWithNames = query;
            _dynamic_Object.MappedFields = _mappedFieldsList;
            return _dynamic_Object;
        }

        public void AddMappedFields(TblBizlinkToCrmfieldsMapping[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                if (array[i].CrmCompanyTableFieldId == null)
                {
                    array[i].Status = false;
                }
                if (array[i].Id > 0)
                {
                    var entity = _iunitOfWork.BizlinkToCrmfieldsMapping.GetByID(array[i].Id);
                    entity.Status = array[i].Status;
                    entity.CrmCompanyTableFieldId = array[i].CrmCompanyTableFieldId;
                    _iunitOfWork.BizlinkToCrmfieldsMapping.Update(entity);
                }
                else
                {
                    TblBizlinkToCrmfieldsMapping obj = new TblBizlinkToCrmfieldsMapping()
                    {
                        BizlinkTableFieldId = array[i].BizlinkTableFieldId,
                        CrmCompanyTableFieldId = array[i].CrmCompanyTableFieldId,
                        CreatedDate = DateTime.Now,
                        Status = array[i].Status
                    };
                    _iunitOfWork.BizlinkToCrmfieldsMapping.Insert(obj);
                }
            }
            _iunitOfWork.Save();

        }
        private async Task<dynamic> MapOpportunityDataAsync(decimal _ownerId, decimal _crmId, object _tableFieldsData, SalesForceConnectedDataModel oAuthParam, string crmKitBaseUrl, string bizlinkBaseUrl)
        {
            TblCrmCompanyTables _table = _iunitOfWork.CRMCompanyTables.GetFirst(x => x.CrmOwnerId == _ownerId && x.CrmId == _crmId && x.CrmTableName == "Opportunity" && x.Status == true);
            IQueryable<TblCrmCompanyTableFields> _tblCrmCompanyTableFields = _iunitOfWork.CRMCompanyTableFields.GetSelectedColumnWithWhereQ<TblCrmCompanyTableFields>(x => x.CrmCompanyTableId == _table.Id && x.Status == true, (TblCrmCompanyTableFields TblCrmCompanyTableFields) => TblCrmCompanyTableFields);

            TblBizlinkTables _tblBizlinkTables = _iunitOfWork.BizlinkTables.GetFirst(x => x.BizlnkTableName == "Opportunity" && x.Status == true);
            IQueryable<TblBizlinkTableFields> _tblBizlinkTableFields = _iunitOfWork.BizlinkTableFields.GetSelectedColumnWithWhereQ<TblBizlinkTableFields>(x => x.BizlnkTableId == _tblBizlinkTables.Id && x.Status == true, (TblBizlinkTableFields TblBizlinkTableFields) => TblBizlinkTableFields);

            IQueryable<TblBizlinkToCrmfieldsMapping> _tblBizlinkToCrmfieldsMapping = _iunitOfWork.BizlinkToCrmfieldsMapping.GetSelectedColumnWithWhereQ<TblBizlinkToCrmfieldsMapping>(x => x.Status == true, (TblBizlinkToCrmfieldsMapping TblBizlinkToCrmfieldsMapping) => TblBizlinkToCrmfieldsMapping);
            _logger.LogInfo("_tblBizlinkToCrmfieldsMapping started : ");
            var _queryResult = (from mp in _tblBizlinkToCrmfieldsMapping
                                join bz in _tblBizlinkTableFields on mp.BizlinkTableFieldId equals bz.Id
                                join cf in _tblCrmCompanyTableFields on mp.CrmCompanyTableFieldId equals cf.Id
                                select new { bz.BizlinkTableFieldName, cf.TableFieldName }).ToArray();


            IEnumerable<object> collection_tableFieldsData = (IEnumerable<object>)_tableFieldsData;
            var opportunities_list = new List<ExpandoObject>();
            List<Account> _account_List = new List<Account>();
            LookUps _lookUps_object = new LookUps();

            _logger.LogInfo("collection_tableFieldsData started : ");
            foreach (JObject item in collection_tableFieldsData)
            {
                dynamic nrow = new ExpandoObject();
                nrow.Client = new ExpandoObject();
                nrow.Client = new ExpandoObject();
                nrow.Client.ClientContactPersons = new List<ExpandoObject>();
                nrow.Client.ClientLocations = new List<ExpandoObject>();
                foreach (object field in _queryResult)
                {
                    dynamic _field = field;
                    string _bizlinkTableFieldName = _field.BizlinkTableFieldName;
                    string _tableFieldName = _field.TableFieldName;
                    var fieldValue = item.GetValue(_tableFieldName);
                    if (_bizlinkTableFieldName == "ClientSourceId")
                    {
                        if (_account_List.Count <= 0)
                        {

                            string _query = $"Select Id,Name,Type From Account";
                            oAuthParam.SqlQuery = _query;
                            using (var httpClient = new HttpClient())
                            {
                                StringContent content = new StringContent(JsonConvert.SerializeObject(oAuthParam), Encoding.UTF8, "application/json");

                                httpClient.BaseAddress = new Uri(crmKitBaseUrl);
                                httpClient.DefaultRequestHeaders.Accept.Clear();
                                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                                using (var response = await httpClient.PostAsync("api/Salesforce/GetObjectsFieldsDataAsync", content))
                                {
                                    string apiResponse = await response.Content.ReadAsStringAsync();
                                    _account_List = JsonConvert.DeserializeObject<List<Account>>(apiResponse);
                                }
                            }
                        }
                        Account _account_obj = _account_List.Find(x => x.Id.ToLower().Equals(fieldValue.ToString().ToLower()));
                        if (_account_obj != null)
                        {
                            //Fetch lkptcountries and cities from zbizlink
                            using (var httpClient = new HttpClient())
                            {
                                httpClient.BaseAddress = new Uri(bizlinkBaseUrl);
                                httpClient.DefaultRequestHeaders.Accept.Clear();
                                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                                using (var response = await httpClient.GetAsync("api/Generic/GetlkptCountryAndStates"))
                                {
                                    string apiResponse = await response.Content.ReadAsStringAsync();
                                    _lookUps_object = JsonConvert.DeserializeObject<LookUps>(apiResponse);
                                }
                            }

                            //account info mapped
                            _logger.LogInfo("account info mapped started : ");
                            (nrow.Client as IDictionary<string, Object>)["ClientCompanyName"] = _account_obj.Name;
                            (nrow.Client as IDictionary<string, Object>)["StateID"] = GetCountryStateID(_lookUps_object, "state", _account_obj.BillingState);
                            (nrow.Client as IDictionary<string, Object>)["ClientSourceId"] = _account_obj.Id;

                            //started Fetch Account/Client contacts from salesforce and mapped.
                            _logger.LogInfo("started Fetch Account/Client contacts from salesforce and mapped. ");
                            string _contactsQuery = $"Select Id,AccountId,FirstName,LastName,Department,Description,HomePhone,Email,Name,Birthdate,IsDeleted,MailingAddress,MailingCity,MailingCountry,MailingLatitude,MailingLongitude,MailingPostalCode,MailingState,MailingStreet,MobilePhone,Phone,PhotoUrl,Title From Contact Where AccountId = '{_account_obj.Id}'";
                            oAuthParam.SqlQuery = _contactsQuery;
                            List<Contact> _contact_List = new List<Contact>();
                            using (var httpClient = new HttpClient())
                            {
                                StringContent content = new StringContent(JsonConvert.SerializeObject(oAuthParam), Encoding.UTF8, "application/json");

                                httpClient.BaseAddress = new Uri(crmKitBaseUrl);
                                httpClient.DefaultRequestHeaders.Accept.Clear();
                                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                                using (var response = await httpClient.PostAsync("api/Salesforce/GetObjectsFieldsDataAsync", content))
                                {
                                    string apiResponse = await response.Content.ReadAsStringAsync();
                                    _contact_List = JsonConvert.DeserializeObject<List<Contact>>(apiResponse);

                                    _logger.LogInfo("foreach (Contact contact in _contact_List)");
                                    foreach (Contact contact in _contact_List)
                                    {
                                        dynamic ContactPerson = new ExpandoObject();
                                        dynamic Location = new ExpandoObject();
                                        ContactPerson.ContactPerson = new ExpandoObject();
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["FirstName"] = contact.FirstName;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["LastName"] = contact.LastName;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["Title"] = contact.Title;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["Email"] = contact.Email;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["Address1"] = contact.MailingAddress.street ?? "";
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["City"] = contact.MailingCity;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["Zipcode"] = contact.MailingPostalCode;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["Phone1"] = contact.Phone;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["MobilePhone"] = contact.MobilePhone;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["Description"] = contact.Description;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["Latitude"] = contact.MailingLatitude;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["Longitude"] = contact.MailingLongitude;
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["CountryID"] = GetCountryStateID(_lookUps_object, "country", contact.MailingCountry);
                                        (ContactPerson.ContactPerson as IDictionary<string, Object>)["StateID"] = GetCountryStateID(_lookUps_object, "state", contact.MailingState);

                                        _logger.LogInfo("if (contact.MailingAddress != null)");
                                        if (contact.MailingAddress != null)
                                        {
                                            Location.Location = new ExpandoObject();
                                            (Location.Location as IDictionary<string, Object>)["Latitude"] = contact.MailingAddress.latitude;
                                            (Location.Location as IDictionary<string, Object>)["Longitude"] = contact.MailingAddress.longitude;
                                            (Location.Location as IDictionary<string, Object>)["Description"] = contact.Description;
                                            (Location.Location as IDictionary<string, Object>)["Phone"] = contact.MobilePhone;
                                            (Location.Location as IDictionary<string, Object>)["Address"] = contact.MailingAddress.street ?? "";
                                            (Location.Location as IDictionary<string, Object>)["Zipcode"] = contact.MailingAddress.postalCode;
                                            (Location.Location as IDictionary<string, Object>)["City"] = contact.MailingAddress.city;
                                            (Location.Location as IDictionary<string, Object>)["Address1"] = contact.MailingAddress.street ?? "";
                                            (Location.Location as IDictionary<string, Object>)["CountryID"] = GetCountryStateID(_lookUps_object, "country", contact.MailingAddress.country);
                                            (Location.Location as IDictionary<string, Object>)["StateID"] = GetCountryStateID(_lookUps_object, "state", contact.MailingAddress.state);

                                            _logger.LogInfo("nrow.Client.ClientLocations.Add(Location);");
                                            nrow.Client.ClientLocations.Add(Location);
                                        }

                                        nrow.Client.ClientContactPersons.Add(ContactPerson);
                                    }

                                }
                            }
                            //end Fetch Account/Client contacts from salesforce and mapped.
                        }

                    }
                    (nrow as IDictionary<string, Object>)[_bizlinkTableFieldName] = fieldValue;
                }
                opportunities_list.Add(nrow);

            }
            return opportunities_list;
        }
        private int GetCountryStateID(LookUps _lookUps_object, string _type, string _searchString = null)
        {
            _logger.LogInfo("GetCountryStateID started");
            string _otherState = "Out of USA";
            string _otherCountry = "Other";
            int _SearchResultID = 0;

            _logger.LogInfo("GetCountryStateID params _type: " + _type+ "_searchString :" + _searchString);
            if (_type == "state")
            {
                _logger.LogInfo("if (_type == state)" + _type);
                if (_searchString == null) { _searchString = _otherState; }
                var _SearchResult = _lookUps_object.States.Find(x => x.StateLongDesc.ToLower().Equals(_searchString.ToLower()) || x.StateShortDesc.ToLower().Equals(_searchString.ToLower()));
                _logger.LogInfo("_SearchResult" + _SearchResult);
                if (_SearchResult != null)
                {
                    _SearchResultID = _SearchResult.StateID;
                }
                _logger.LogInfo("GetCountryStateID end line:541");
                return _SearchResultID;
            }

            else if (_type == "country")
            {
                _logger.LogInfo("else if (_type == country)");
                if (_searchString == null) { _searchString = _otherCountry; }
                var _SearchResult = _lookUps_object.Countries.Find(x => x.CountryLongDesc.ToLower().Equals(_searchString.ToLower()) || x.CountryShortDesc.ToLower().Equals(_searchString.ToLower()));
                _logger.LogInfo("_SearchResult" + _SearchResult);
                if (_SearchResult != null)
                {
                    _SearchResultID = _SearchResult.CountryID;
                }
                _logger.LogInfo("GetCountryStateID end line:555");
                return _SearchResultID;
            }
            else
            {
                _logger.LogInfo("GetCountryStateID end line:560");
                return _SearchResultID;
            }
        }
    }
}
