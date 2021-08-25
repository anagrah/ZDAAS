using AutoMapper;
using System.Collections.Generic;
using Zbizlink.RFPBusinessModel;
using Zbizlink.RFPServices.Contracts;
using Zbizlink.RFPServices.Singleton;
using viewModelGet = Zbizlink.RFPServices.ViewModels.Get;
using viewModelInsert = Zbizlink.RFPServices.ViewModels.Insert;
using viewModelEdit = Zbizlink.RFPServices.ViewModels.Edit;
using Zdaas.LoggerContracts;
using Zdaas.RFPDataModel.Contracts;
using Zdaas.RFPServices;
using Zdaas.RFPServices.ViewModels;
using dataModel = Zbizlink.RFPDataModel.Models;
using common = Zdaas.RFPCommon;
using Zbizlink.RFPDataModel.Models;
using System.Linq;
using System;
using RFPStoreProcedureModel;
using Zbizlink.RFPStoreProcedureModel;
using RFPStoreProcedureModel.Enum;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPServices.Singleton;
using Newtonsoft.Json;

namespace Zbizlink.RFPServices.Services
{
    public class LookupDataService : ILookupDataService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILoggerManager _loggerManager;
        private readonly IMapper _mapper;

        #region Constructor
        public LookupDataService(IUnitOfWork unitOfWork, ILoggerManager loggerManager, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _loggerManager = loggerManager;
        }

        #endregion


        #region Lookup get methods      
        public ClientResponse GetOpportunityCategoryLookupData()
        {
            viewModelGet.CategorySynonymAdmin categorySynonymAdmin = new viewModelGet.CategorySynonymAdmin();

            List<OpportunityTypeEntity> opportunityTypeEntityList = OpportunityTypeSingleton.GetInstance(_unitOfWork, _mapper).OpportunityTypeList;
            categorySynonymAdmin.OpportunityTypeList = _mapper.Map<List<viewModelGet.OpportunityType>>(opportunityTypeEntityList);


            categorySynonymAdmin.CategoryAndSynonymList = CategoryAndSynonymSingleton.GetInstance(_unitOfWork).CategoryAndSynonymList;
            categorySynonymAdmin.CategoryAndSynonymList.OrderBy(c => c.Name);

            List<AgencyEntity> agencyEntityList = AgencySingleton.GetInstance(_unitOfWork, _mapper).AgencyList;
            categorySynonymAdmin.AgencyList = _mapper.Map<List<viewModelGet.Agency>>(agencyEntityList);

            List<ContractVehicleEntity> contractVehicleEntityList = ContractVehicleSingleton.GetInstance(_unitOfWork, _mapper).ContractVehicleList;
            categorySynonymAdmin.ContractVehicleList = _mapper.Map<List<viewModelGet.ContractVehicle>>(contractVehicleEntityList);

            List<IndustryEntity> industryEntityList = IndustrySingleton.GetInstance(_unitOfWork, _mapper).IndustryList;
            categorySynonymAdmin.IndustryList = _mapper.Map<List<viewModelGet.Industry>>(industryEntityList);

            List<StatesEntity> statesEntityList = StatesSingleton.GetInstance(_unitOfWork, _mapper).StatesList;
            categorySynonymAdmin.StatesList = _mapper.Map<List<viewModelGet.States>>(statesEntityList);


            ClientResponse clientResponse = Utility.GenerateResponse<viewModelGet.CategorySynonymAdmin>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, categorySynonymAdmin);
            return clientResponse;
        }

        public ClientResponse GetOpportunitySummaryLookupData()
        {
            viewModelGet.SummarySynonymAdmin SummarySynonymAdmin = new viewModelGet.SummarySynonymAdmin();

            List<OpportunityTypeEntity> opportunityTypeEntityList = OpportunityTypeSingleton.GetInstance(_unitOfWork, _mapper).OpportunityTypeList;
            SummarySynonymAdmin.OpportunityTypeList = _mapper.Map<List<viewModelGet.OpportunityType>>(opportunityTypeEntityList);

            List<AgencyEntity> agencyEntityList = AgencySingleton.GetInstance(_unitOfWork, _mapper).AgencyList;
            SummarySynonymAdmin.AgencyList = _mapper.Map<List<viewModelGet.Agency>>(agencyEntityList);

            SummarySynonymAdmin.SummaryFieldAndSynonyms = SummaryFieldAndSynonymSingletion.GetInstance(_unitOfWork).SummaryFieldAndSynonymList;
            SummarySynonymAdmin.SummaryFieldAndSynonyms = SummarySynonymAdmin.SummaryFieldAndSynonyms.OrderBy(s => s.FieldName).ToList();
            foreach (var SummaryFieldAndSynonyms in SummarySynonymAdmin.SummaryFieldAndSynonyms)
            {
                SummaryFieldAndSynonyms.SummarySynonym = SummaryFieldAndSynonyms.SummarySynonym.OrderBy(s => s.Synonym).ToList();
            }
            List<ContractVehicleEntity> contractVehicleEntityList = ContractVehicleSingleton.GetInstance(_unitOfWork, _mapper).ContractVehicleList;
            SummarySynonymAdmin.ContractVehicleList = _mapper.Map<List<viewModelGet.ContractVehicle>>(contractVehicleEntityList);

            List<IndustryEntity> industryEntityList = IndustrySingleton.GetInstance(_unitOfWork, _mapper).IndustryList;
            SummarySynonymAdmin.IndustryList = _mapper.Map<List<viewModelGet.Industry>>(industryEntityList);

            List<StatesEntity> statesEntityList = StatesSingleton.GetInstance(_unitOfWork, _mapper).StatesList;
            SummarySynonymAdmin.StatesList = _mapper.Map<List<viewModelGet.States>>(statesEntityList);


            ClientResponse clientResponse = Utility.GenerateResponse<viewModelGet.SummarySynonymAdmin>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, SummarySynonymAdmin);
            return clientResponse;

        }
        
        public ClientResponse GetOpportunityTypes()
        {
            List<OpportunityTypeEntity> opportunityTypeEntityList = OpportunityTypeSingleton.GetInstance(_unitOfWork, _mapper).OpportunityTypeList;
            List<viewModelGet.OpportunityType> opportunityTypeList = _mapper.Map<List<viewModelGet.OpportunityType>>(opportunityTypeEntityList);

            ClientResponse clientResponse = Utility.GenerateResponse<List<viewModelGet.OpportunityType>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, opportunityTypeList);

            return clientResponse;
        }
        
        public ClientResponse GetContractVehicles()
        {
            List<ContractVehicleEntity> contractVehicleEntityList = ContractVehicleSingleton.GetInstance(_unitOfWork, _mapper).ContractVehicleList;
            List<viewModelGet.ContractVehicle> contractVehicleList = _mapper.Map<List<viewModelGet.ContractVehicle>>(contractVehicleEntityList);

            ClientResponse clientResponse = Utility.GenerateResponse<List<viewModelGet.ContractVehicle>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, contractVehicleList);
            return clientResponse;
        }
        
        public ClientResponse GetSynonymBridges(decimal synonymId)
        {

            viewModelGet.SynonymBridges synonymBridges = SynonymBridgesData(synonymId);

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, synonymBridges);
        }
        private viewModelGet.SynonymBridges SynonymBridgesData(decimal synonymId)
        {

            viewModelGet.SynonymBridges synonymBridges = new viewModelGet.SynonymBridges();

            synonymBridges.BridgeSynonymAgencyList = _unitOfWork.BridgeSynonymAgencyRepository.GetSelectedColumnWithWhare(b => b.SynonymId == synonymId,
                b => new viewModelGet.BridgeSynonymAgency()
                {
                    BridgeSynonymAgencyId = b.BridgeSynonymAgencyId,
                    SynonymId = b.SynonymId,
                    AgencyId = b.AgencyId
                }).ToList();

            synonymBridges.BridgeSynonymContractVehicleList = _unitOfWork.BridgeSynonymContractVehicleRepository.GetSelectedColumnWithWhare(b => b.SynonymId == synonymId,
               b => new viewModelGet.BridgeSynonymContractVehicle()
               {
                   BridgeSynonymContractVehicleId = b.BridgeSynonymContractVehicleId,
                   SynonymId = b.SynonymId,
                   ContractVehicleId = b.ContractVehicleId
               }).ToList();

            synonymBridges.BridgeSynonymIndustryList = _unitOfWork.BridgeSynonymIndustryRepository.GetSelectedColumnWithWhare(b => b.SynonymId == synonymId,
              b => new viewModelGet.BridgeSynonymIndustry()
              {
                  BridgeSynonymIndustryId = b.BridgeSynonymIndustryId,
                  SynonymId = b.SynonymId,
                  IndustryId = b.IndustryId
              }).ToList();

            synonymBridges.BridgeSynonymOpportunityTypeList = _unitOfWork.BridgeSynonymOpportunityTypeRepository.GetSelectedColumnWithWhare(b => b.SynonymId == synonymId,
              b => new viewModelGet.BridgeSynonymOpportunityType()
              {
                  BridgeSynonymOpportunityTypeId = b.BridgeSynonymOpportunityTypeId,
                  SynonymId = b.SynonymId,
                  OpportunityTypeId = b.OpportunityTypeId
              }).ToList();

            synonymBridges.BridgeSynonymStatesList = _unitOfWork.BridgeSynonymStatesRepository.GetSelectedColumnWithWhare(b => b.SynonymId == synonymId,
              b => new viewModelGet.BridgeSynonymStates()
              {
                  BridgeSynonymStatesId = b.BridgeSynonymStatesId,
                  SynonymId = b.SynonymId,
                  StateId = b.StateId
              }).ToList();

            return synonymBridges;

        }

        private viewModelGet.SynonymBridges SynonymBridgesData(int? opportunityTypeId, int? stateId, int? agencyId, int? industryId, int? contractVehicleId)
        {

            viewModelGet.SynonymBridges synonymBridges = new viewModelGet.SynonymBridges();

            synonymBridges.BridgeSynonymOpportunityTypeList = _unitOfWork.BridgeSynonymOpportunityTypeRepository.GetSelectedColumnWithWhare(b => b.OpportunityTypeId == opportunityTypeId,
              b => new viewModelGet.BridgeSynonymOpportunityType()
              {
                  BridgeSynonymOpportunityTypeId = b.BridgeSynonymOpportunityTypeId,
                  SynonymId = b.SynonymId,
                  OpportunityTypeId = b.OpportunityTypeId
              }).ToList();


            synonymBridges.BridgeSynonymStatesList = _unitOfWork.BridgeSynonymStatesRepository.GetSelectedColumnWithWhare(b => b.StateId == stateId,
              b => new viewModelGet.BridgeSynonymStates()
              {
                  BridgeSynonymStatesId = b.BridgeSynonymStatesId,
                  SynonymId = b.SynonymId,
                  StateId = b.StateId
              }).ToList();

            synonymBridges.BridgeSynonymAgencyList = _unitOfWork.BridgeSynonymAgencyRepository.GetSelectedColumnWithWhare(b => b.AgencyId == agencyId,
                b => new viewModelGet.BridgeSynonymAgency()
                {
                    BridgeSynonymAgencyId = b.BridgeSynonymAgencyId,
                    SynonymId = b.SynonymId,
                    AgencyId = b.AgencyId
                }).ToList();

            synonymBridges.BridgeSynonymContractVehicleList = _unitOfWork.BridgeSynonymContractVehicleRepository.GetSelectedColumnWithWhare(b => b.ContractVehicleId == contractVehicleId,
               b => new viewModelGet.BridgeSynonymContractVehicle()
               {
                   BridgeSynonymContractVehicleId = b.BridgeSynonymContractVehicleId,
                   SynonymId = b.SynonymId,
                   ContractVehicleId = b.ContractVehicleId
               }).ToList();

            synonymBridges.BridgeSynonymIndustryList = _unitOfWork.BridgeSynonymIndustryRepository.GetSelectedColumnWithWhare(b => b.IndustryId == industryId,
              b => new viewModelGet.BridgeSynonymIndustry()
              {
                  BridgeSynonymIndustryId = b.BridgeSynonymIndustryId,
                  SynonymId = b.SynonymId,
                  IndustryId = b.IndustryId
              }).ToList();





            return synonymBridges;

        }


        #endregion

        #region Bridges insert/delete methods

        public ClientResponse SaveSynonymBridges(viewModelInsert.SynonymBridges synonymBridges)
        {
            bool editRecordExist = false;
            decimal userId = synonymBridges.userId;
            decimal synonymId = synonymBridges.synonymId;
            if (synonymBridges.BridgeSynonymAgencyList != null && synonymBridges.BridgeSynonymAgencyList.Count > 0)
            {
                editRecordExist = SynonymAgencyBridgesInsertDelete(userId, synonymBridges.BridgeSynonymAgencyList);
            }

            if (synonymBridges.BridgeSynonymContractVehicleList != null && synonymBridges.BridgeSynonymContractVehicleList.Count > 0)
            {
                editRecordExist = SynonymContractVehicleBridgesInsertDelete(userId, synonymBridges.BridgeSynonymContractVehicleList);
            }

            if (synonymBridges.BridgeSynonymIndustryList != null && synonymBridges.BridgeSynonymIndustryList.Count > 0)
            {
                editRecordExist =  SynonymIndustryBridgesInsertDelete(userId, synonymBridges.BridgeSynonymIndustryList);
            }

            if (synonymBridges.BridgeSynonymOpportunityTypeList != null && synonymBridges.BridgeSynonymOpportunityTypeList.Count > 0)
            {
                editRecordExist = SynonymOpportunityTypeBridgesInsertDelete(userId, synonymBridges.BridgeSynonymOpportunityTypeList);
            }

            if (synonymBridges.BridgeSynonymStatesList != null && synonymBridges.BridgeSynonymStatesList.Count > 0)
            {
                editRecordExist = SynonymStatesBridgesInsertDelete(userId, synonymBridges.BridgeSynonymStatesList);
            }


            if (editRecordExist == true)
            {

                List<viewModelGet.CategoryAndSynonym> categoryAndSynonym = CategoryAndSynonymSingleton.GetInstance(_unitOfWork).CategoryAndSynonymList;


                if (synonymBridges.Assign == false)
                {
                    CategorySynonym categorySynonym = _unitOfWork.CategorySynonymRepository.GetByID(synonymBridges.synonymId);
                    categorySynonym.Assign = true;
                    _unitOfWork.CategorySynonymRepository.Update(categorySynonym);
                }

            }

            _unitOfWork.Save();
            CategoryAndSynonymSingleton.ReLoad();
            CategorySingleton.ReLoad();
            viewModelGet.SynonymBridges synonymBridgesData = SynonymBridgesData(synonymId);
            return Utility.GenerateResponse<viewModelGet.SynonymBridges>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, synonymBridgesData);
        }

        private bool SynonymStatesBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSynonymStates> bridgeSynonymStatesList)
        {
            bool editRecordExist = false;
            foreach (var bridgeSynonymStates in bridgeSynonymStatesList)
            {
                if (bridgeSynonymStates.DBTransactionType == 1)
                {
                    BridgeSynonymStates bridgeSynonymStatesDataModel = _mapper.Map<BridgeSynonymStates>(bridgeSynonymStates);

                    _unitOfWork.BridgeSynonymStatesRepository.Insert(bridgeSynonymStatesDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSynonymStates.DBTransactionType == 2)
                {
                    BridgeSynonymStates bridgeSynonymStatesDataModel = _mapper.Map<BridgeSynonymStates>(bridgeSynonymStates);

                    _unitOfWork.BridgeSynonymStatesRepository.Delete(bridgeSynonymStatesDataModel);
                    editRecordExist = true;
                }
            }

            return editRecordExist;
        }

        private bool SynonymOpportunityTypeBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSynonymOpportunityType> bridgeSynonymOpportunityTypeList)
        {
            bool editRecordExist = false;
            foreach (var bridgeSynonymOpportunityType in bridgeSynonymOpportunityTypeList)
            {
                if (bridgeSynonymOpportunityType.DBTransactionType == 1)
                {
                    BridgeSynonymOpportunityType bridgeSynonymOpportunityTypeDataModel = _mapper.Map<BridgeSynonymOpportunityType>(bridgeSynonymOpportunityType);

                    _unitOfWork.BridgeSynonymOpportunityTypeRepository.Insert(bridgeSynonymOpportunityTypeDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSynonymOpportunityType.DBTransactionType == 2)
                {
                    BridgeSynonymOpportunityType bridgeSynonymOpportunityTypeDataModel = _mapper.Map<BridgeSynonymOpportunityType>(bridgeSynonymOpportunityType);

                    _unitOfWork.BridgeSynonymOpportunityTypeRepository.Delete(bridgeSynonymOpportunityTypeDataModel);
                    editRecordExist = true;
                }
            }
            return editRecordExist;
        }

        private bool SynonymIndustryBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSynonymIndustry> bridgeSynonymIndustryList)
        {
            bool editRecordExist = false;
            foreach (var bridgeSynonymIndustry in bridgeSynonymIndustryList)
            {
                if (bridgeSynonymIndustry.DBTransactionType == 1)
                {
                    BridgeSynonymIndustry bridgeSynonymIndustryDataModel = _mapper.Map<BridgeSynonymIndustry>(bridgeSynonymIndustry);

                    _unitOfWork.BridgeSynonymIndustryRepository.Insert(bridgeSynonymIndustryDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSynonymIndustry.DBTransactionType == 2)
                {
                    BridgeSynonymIndustry bridgeSynonymIndustryDataModel = _mapper.Map<BridgeSynonymIndustry>(bridgeSynonymIndustry);

                    _unitOfWork.BridgeSynonymIndustryRepository.Delete(bridgeSynonymIndustryDataModel);
                    editRecordExist = true;
                }
            }
            return editRecordExist;
        }

        private bool SynonymContractVehicleBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSynonymContractVehicle> bridgeSynonymContractVehicleList)
        {
            bool editRecordExist = false;
            foreach (var bridgeSynonymContractVehicle in bridgeSynonymContractVehicleList)
            {
                if (bridgeSynonymContractVehicle.DBTransactionType == 1)
                {
                    BridgeSynonymContractVehicle bridgeSynonymContractVehicleDataModel = _mapper.Map<BridgeSynonymContractVehicle>(bridgeSynonymContractVehicle);

                    _unitOfWork.BridgeSynonymContractVehicleRepository.Insert(bridgeSynonymContractVehicleDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSynonymContractVehicle.DBTransactionType == 2)
                {
                    BridgeSynonymContractVehicle bridgeSynonymContractVehicleDataModel = _mapper.Map<BridgeSynonymContractVehicle>(bridgeSynonymContractVehicle);

                    _unitOfWork.BridgeSynonymContractVehicleRepository.Delete(bridgeSynonymContractVehicleDataModel);
                    editRecordExist = true;
                }
            }
            return editRecordExist;
        }

        public bool SynonymAgencyBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSynonymAgency> bridgeSynonymAgencyList)
        {
           bool editRecordExist = false;
            foreach (var bridgeSynonymAgency in bridgeSynonymAgencyList)
            {
                if (bridgeSynonymAgency.DBTransactionType == 1)
                {
                    BridgeSynonymAgency bridgeSynonymAgencyDataModel = _mapper.Map<BridgeSynonymAgency>(bridgeSynonymAgency);

                    _unitOfWork.BridgeSynonymAgencyRepository.Insert(bridgeSynonymAgencyDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSynonymAgency.DBTransactionType == 2)
                {
                    BridgeSynonymAgency bridgeSynonymAgencyDataModel = _mapper.Map<BridgeSynonymAgency>(bridgeSynonymAgency);

                    _unitOfWork.BridgeSynonymAgencyRepository.Delete(bridgeSynonymAgencyDataModel);
                    editRecordExist = true;
                }
            }

            return editRecordExist;
        }


        #endregion

        #region Agency
        public ClientResponse GetAgencies()
        {
            List<AgencyEntity> agencyEntityList = AgencySingleton.GetInstance(_unitOfWork, _mapper).AgencyList;
            List<viewModelGet.Agency> agencyList = _mapper.Map<List<viewModelGet.Agency>>(agencyEntityList);
            ClientResponse clientResponse = Utility.GenerateResponse<List<viewModelGet.Agency>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, agencyList);
            return clientResponse;
        }
        public ClientResponse AgencyInsert(viewModelInsert.Agency agency)
        {
            string agencyName = common.Utility.StringAbsoluteValue(agency.AgencyName);

            if (agencyName == "")
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Empty, "Agency name must not empty");
            }

            dataModel.Agency duplicateAgency = _unitOfWork.AgencyRepository.GetFirst(a => a.AgencyName.ToLower() == agencyName);

            if (duplicateAgency != null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Duplicate, "Agency name already exists");
            }

            dataModel.Agency agencyDataModel = new dataModel.Agency();

            agencyDataModel.AgencyName = agency.AgencyName;
            agencyDataModel.Description = agency.Description;
            agencyDataModel.CreatedBy = agency.CreatedBy;

            _unitOfWork.AgencyRepository.Insert(agencyDataModel);

            _unitOfWork.Save();



            if (agencyDataModel.AgencyId > 0)
            {
                AgencySingleton.ReLoad();
                return Utility.GenerateResponse<decimal>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, agencyDataModel.AgencyId);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }
        public ClientResponse AgencyEdit(viewModelEdit.Agency agency)
        {
            Agency agencyDB = _unitOfWork.AgencyRepository.GetByID(agency.AgencyID);

            if (agency == null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound);
            }

            agencyDB.AgencyName = agency.AgencyName;
            agencyDB.Description = agency.Description;
            agencyDB.ModifiedBy = agency.ModifiedBy;
            agencyDB.ModifiedDate = DateTime.Now;

            _unitOfWork.AgencyRepository.Update(agencyDB);
            _unitOfWork.Save();
            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success);
        }
        public ClientResponse AgencyDelete(int agencyId)
        {
            DeleteStatus deleteStatus =  EexcuteAgencyDeleteProcedure(agencyId);
            //BridgeSynonymAgency bridgeSynonymAgency = _unitOfWork.BridgeSynonymAgencyRepository.GetFirst(s => s.AgencyId == agencyId);
            //BridgeSummarySynonymAgency bridgeSummarySynonymAgency = _unitOfWork.BridgeSummarySynonymAgencyRepository.GetFirst(s => s.AgencyId == agencyId);
            //Opportunity opportunity = _unitOfWork.opportunityRepository.GetFirst(s => s.AgencyId == agencyId);

            //if (bridgeSynonymAgency != null || bridgeSummarySynonymAgency != null || opportunity != null)
            //{ 
            //    return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.ChildRecordExist, "One or more Agency is attached, delete first");
            //}

            //_unitOfWork.AgencyRepository.Delete(agencyId);

            //_unitOfWork.Save();


            // return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, "Record deleted");

            return Utility.MessageDeleteRecordFromDB(deleteStatus);
        }

        private DeleteStatus EexcuteAgencyDeleteProcedure(int agencyID)
        {
            DeleteStatus deleteStatus = new DeleteStatus();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbCategorySynonymId = new DataBaseParameter();
            dbCategorySynonymId.DBParameterName = "@AgencyID";
            dbCategorySynonymId.DBParameterType = DatabaseDataType.Int;
            dbCategorySynonymId.DBParameterValue = agencyID;

            dataBaseParameterList.Add(dbCategorySynonymId);


            List<DeleteStatus> deleteStatusList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spAgencyDelete]", deleteStatus, dataBaseParameterList);

            if (deleteStatusList != null && deleteStatusList.Count > 0)
            {
                return deleteStatusList[0];
            }
            return null;


        }


        #endregion

        #region Industry

        public ClientResponse GetIndustries()
        {
            List<IndustryEntity> industryEntityList = IndustrySingleton.GetInstance(_unitOfWork, _mapper).IndustryList;
            List<viewModelGet.Industry> industryList = _mapper.Map<List<viewModelGet.Industry>>(industryEntityList);

            ClientResponse clientResponse = Utility.GenerateResponse<List<viewModelGet.Industry>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, industryList);
            return clientResponse;
        }
        public ClientResponse IndustryInsert(viewModelInsert.Industry industry)
        {
            string industryName = common.Utility.StringAbsoluteValue(industry.IndustryName);

            if (industryName == "")
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Empty, "Industry name must not empty");
            }

            dataModel.Industry duplicateIndustry = _unitOfWork.IndustryRepository.GetFirst(a => a.IndustryName.ToLower() == industryName);

            if (duplicateIndustry != null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Duplicate, "Industry name already exists");
            }

            dataModel.Industry industryDataModel = new dataModel.Industry();

            industryDataModel.IndustryName = industry.IndustryName;
            industryDataModel.Description = industry.Description;
            industryDataModel.CreatedBy = industry.CreatedBy;

            _unitOfWork.IndustryRepository.Insert(industryDataModel);

            _unitOfWork.Save();

            if (industryDataModel.IndustryId > 0)
            {
                IndustrySingleton.ReLoad();
                return Utility.GenerateResponse<decimal>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, industryDataModel.IndustryId);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }
        public ClientResponse IndustryEdit(viewModelEdit.Industry industry)
        {
            Industry industryDB = _unitOfWork.IndustryRepository.GetByID(industry.IndustryID);

            if (industryDB == null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound);
            }

            industryDB.IndustryName = industry.IndustryName;
            industryDB.Description = industry.Description;
            industryDB.ModifiedBy = industry.ModifiedBy;
            industryDB.ModifiedDate = DateTime.Now;

            _unitOfWork.IndustryRepository.Update(industryDB);
            _unitOfWork.Save();
            IndustrySingleton.ReLoad();
            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success);
        }
        public ClientResponse IndustryDelete(int industryId)
        {

            DeleteStatus deleteStatus =  EexcuteIndustryDeleteProcedure(industryId);
            return Utility.MessageDeleteRecordFromDB(deleteStatus);

            //BridgeSynonymIndustry bridgeSynonymIndustry = _unitOfWork.BridgeSynonymIndustryRepository.GetFirst(s => s.IndustryId == industryId);
            //BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = _unitOfWork.BridgeSummarySynonymIndustryRepository.GetFirst(s => s.IndustryId == industryId);
            //Opportunity opportunity = _unitOfWork.opportunityRepository.GetFirst(s => s.IndustryId == industryId);

            //if (bridgeSynonymIndustry != null || bridgeSummarySynonymIndustry != null || opportunity != null)
            //{
            //    return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.ChildRecordExist, "One or more Industry is attached, delete first");
            //}

            //_unitOfWork.IndustryRepository.Delete(industryId);

            //_unitOfWork.Save();

            //IndustrySingleton.ReLoad();
            //return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, "Record deleted");
        }

        private DeleteStatus EexcuteIndustryDeleteProcedure(int IndustryID)
        {
            DeleteStatus deleteStatus = new DeleteStatus();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbIndustryID = new DataBaseParameter();
            dbIndustryID.DBParameterName = "@IndustryID";
            dbIndustryID.DBParameterType = DatabaseDataType.Int;
            dbIndustryID.DBParameterValue = IndustryID;

            dataBaseParameterList.Add(dbIndustryID);


            List<DeleteStatus> deleteStatusList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spIndustryDelete]", deleteStatus, dataBaseParameterList);

            if (deleteStatusList != null && deleteStatusList.Count > 0)
            {
                return deleteStatusList[0];
            }
            return null;


        }
        #endregion

        #region ContractVehicle

        public ClientResponse GetContractVehicle()
        {
            List<ContractVehicleEntity> contractVehicleList = ContractVehicleSingleton.GetInstance(_unitOfWork, _mapper).ContractVehicleList;
            List<viewModelGet.ContractVehicle> contractVehicle = _mapper.Map<List<viewModelGet.ContractVehicle>>(contractVehicleList);
            ClientResponse clientResponse = Utility.GenerateResponse<List<viewModelGet.ContractVehicle>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, contractVehicle);
            return clientResponse;
        }
        public ClientResponse ContractVehicleInsert(viewModelInsert.ContractVehicle contractVehicle)
        {
            string contractVehicleName = common.Utility.StringAbsoluteValue(contractVehicle.ContractVehicleName);

            if (contractVehicleName == "")
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Empty, "ContractVehicle name must not empty");
            }

            dataModel.ContractVehicle duplicateContractVehicle = _unitOfWork.ContractVehicleRepository.GetFirst(a => a.ContractVehicleName.ToLower() == contractVehicleName);

            if (duplicateContractVehicle != null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Duplicate, "ContractVehicle name already exists");
            }

            dataModel.ContractVehicle contractVehicleDataModel = new dataModel.ContractVehicle();

            contractVehicleDataModel.ContractVehicleName = contractVehicle.ContractVehicleName;
            contractVehicleDataModel.Description = contractVehicle.Description;
            contractVehicleDataModel.CreatedBy = contractVehicle.CreatedBy;

            _unitOfWork.ContractVehicleRepository.Insert(contractVehicleDataModel);

            _unitOfWork.Save();



            if (contractVehicleDataModel.ContractVehicleId > 0)
            {
                ContractVehicleSingleton.ReLoad();
                return Utility.GenerateResponse<decimal>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, contractVehicleDataModel.ContractVehicleId);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }
        public ClientResponse ContractVehicleEdit(viewModelEdit.ContractVehicle contractVehicle)
        {
            ContractVehicle contractVehicleDB = _unitOfWork.ContractVehicleRepository.GetByID(contractVehicle.ContractVehicleId);

            if (contractVehicleDB == null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound);
            }

            contractVehicleDB.ContractVehicleName = contractVehicle.ContractVehicleName;
            contractVehicleDB.Description = contractVehicle.Description;
            contractVehicleDB.ModifiedBy = contractVehicle.ModifiedBy;
            contractVehicleDB.ModifiedDate = DateTime.Now;

            _unitOfWork.ContractVehicleRepository.Update(contractVehicleDB);

            _unitOfWork.Save();
            ContractVehicleSingleton.ReLoad();
            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success);
        }
        public ClientResponse ContractVehicleDelete(int contractVehicleId)
        {
            DeleteStatus deleteStatus = EexcuteContractVehicleDeleteProcedure(contractVehicleId);

            return Utility.MessageDeleteRecordFromDB(deleteStatus);
            //BridgeSynonymContractVehicle bridgeSynonymContractVehicle = _unitOfWork.BridgeSynonymContractVehicleRepository.GetFirst(s => s.ContractVehicleId == contractVehicleId);
            //BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = _unitOfWork.BridgeSummarySynonymContractVehicleRepository.GetFirst(s => s.ContractVehicleId == contractVehicleId);
            //Opportunity opportunity = _unitOfWork.opportunityRepository.GetFirst(s => s.ContractVehicleId == contractVehicleId);

            //if (bridgeSynonymContractVehicle != null || bridgeSummarySynonymContractVehicle != null || opportunity != null)
            //{
            //    return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.ChildRecordExist, "One or more Contract vehicle is attached, delete first");
            //}

            //_unitOfWork.ContractVehicleRepository.Delete(contractVehicleId);

            //_unitOfWork.Save();

            //ContractVehicleSingleton.ReLoad();
            //return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, "Record deleted");
        }

        private DeleteStatus EexcuteContractVehicleDeleteProcedure(decimal contractVehicleId)
        {
            DeleteStatus deleteStatus = new DeleteStatus();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbcontractVehicleId = new DataBaseParameter();
            dbcontractVehicleId.DBParameterName = "@ContractVehicleId";
            dbcontractVehicleId.DBParameterType = DatabaseDataType.Int;
            dbcontractVehicleId.DBParameterValue = contractVehicleId;

            dataBaseParameterList.Add(dbcontractVehicleId);


            List<DeleteStatus> deleteStatusList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spContractVehicleDelete]", deleteStatus, dataBaseParameterList);

            if (deleteStatusList != null && deleteStatusList.Count > 0)
            {
                return deleteStatusList[0];
            }
            return null;


        }

        #endregion

        #region State

        public ClientResponse GetStates()
        {

            List<StatesEntity> StatesEntityList = StatesSingleton.GetInstance(_unitOfWork, _mapper).StatesList;
            List<viewModelGet.States> statesList = _mapper.Map<List<viewModelGet.States>>(StatesEntityList);

            ClientResponse clientResponse = Utility.GenerateResponse<List<viewModelGet.States>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, statesList);
            return clientResponse;
        }
        public ClientResponse StatesInsert(viewModelInsert.States states)
        {
            string stateName = common.Utility.StringAbsoluteValue(states.StateName);

            if (stateName == "")
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Empty, "State name must not empty");
            }

            dataModel.States duplicateStates = _unitOfWork.StatesRepository.GetFirst(a => a.StateName.ToLower() == stateName);

            if (duplicateStates != null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Duplicate, "states name already exists");
            }

            dataModel.States statesDataModel = new dataModel.States();

            statesDataModel.StateName = states.StateName;
            statesDataModel.Description = states.Description;
            statesDataModel.CreatedBy = states.CreatedBy;

            _unitOfWork.StatesRepository.Insert(statesDataModel);

            _unitOfWork.Save();



            if (statesDataModel.StateId > 0)
            {
                StatesSingleton.ReLoad();
                return Utility.GenerateResponse<decimal>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, statesDataModel.StateId);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }
        public ClientResponse EditStates(viewModelEdit.States states)
        {
            States statesDB = _unitOfWork.StatesRepository.GetByID(states.StateId);

            if (statesDB == null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound);
            }

            statesDB.StateName = states.StateName;
            statesDB.Description = states.Description;
            statesDB.ModifiedBy = states.ModifiedBy;
            statesDB.ModifiedDate = DateTime.Now;

            _unitOfWork.StatesRepository.Update(statesDB);
            _unitOfWork.Save();
            StatesSingleton.ReLoad();
            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success);
        }

        #endregion

        #region Lookup Edit methods



        //public ClientResponse ContractVehicleInsert(viewModelInsert.ContractVehicle contractVehicle)
        //{
        //    string contractVehicleShortLongDesc = common.Utility.StringAbsoluteValue(contractVehicle.ContractVehicleName);

        //    if (contractVehicleShortLongDesc == "")
        //    {
        //        return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Empty, "Category name must not empty");
        //    }

        //    dataModel.ContractVehicle duplicateContractVehicle = _unitOfWork.ContractVehicleRepository.GetFirst(a => a.ContractVehicleName.ToLower() == contractVehicleShortLongDesc);

        //    if (duplicateContractVehicle != null)
        //    {
        //        return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Duplicate, "ContractVehicle name already exists");
        //    }

        //    dataModel.ContractVehicle contractVehicleDataModel = new dataModel.ContractVehicle();

        //    contractVehicleDataModel.ContractVehicleName = contractVehicle.ContractVehicleName;
        //    contractVehicleDataModel.Description = contractVehicle.Description;
        //    contractVehicleDataModel.CreatedBy = contractVehicle.CreatedBy;

        //    _unitOfWork.ContractVehicleRepository.Insert(contractVehicleDataModel);

        //    _unitOfWork.Save();



        //    if (contractVehicleDataModel.ContractVehicleId > 0)
        //    {
        //        ContractVehicleSingleton.ReLoad();
        //        return Utility.GenerateResponse<decimal>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, contractVehicleDataModel.ContractVehicleId);
        //    }

        //    return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        //}



        public ClientResponse EditCategoriesAndSynonym(viewModelEdit.CategorySynonym categorySynonym)
        {
            CategorySynonym categorySynonymDB = _unitOfWork.CategorySynonymRepository.GetByID(categorySynonym.SynonymId);

            if (categorySynonymDB == null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound);
            }
            categorySynonymDB.CategoryId = categorySynonym.CategoryId;
            categorySynonymDB.Synonym = categorySynonym.Synonym;
            categorySynonymDB.ModifiedBy = categorySynonym.ModifiedBy;
            categorySynonymDB.ModifiedDate = DateTime.Now;

            _unitOfWork.CategorySynonymRepository.Update(categorySynonymDB);
            _unitOfWork.Save();
            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success);
        }     

        public ClientResponse EditContractVehicle(viewModelEdit.ContractVehicle contractVehicle)
        {
            ContractVehicle contractVehicleDB = _unitOfWork.ContractVehicleRepository.GetByID(contractVehicle.ContractVehicleId);

            if (contractVehicleDB == null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound);
            }

            contractVehicleDB.ContractVehicleName = contractVehicle.ContractVehicleName;
            contractVehicleDB.Description = contractVehicle.Description;
            contractVehicleDB.ModifiedDate = DateTime.Now;

            _unitOfWork.ContractVehicleRepository.Update(contractVehicleDB);

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success);
        }

        

        #endregion

        #region Category methods

        public ClientResponse GetCategoriesAndSynonym()
        {

            List<viewModelGet.CategoryAndSynonym> categoryAndSynonymList = CategoryAndSynonymSingleton.GetInstance(_unitOfWork).CategoryAndSynonymList;
            categoryAndSynonymList.OrderBy(c => c.Name);
            ClientResponse clientResponse = Utility.GenerateResponse<List<viewModelGet.CategoryAndSynonym>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, categoryAndSynonymList);
            return clientResponse;
        }
        public ClientResponse CategoryInsert(viewModelInsert.Category category)
        {
            string categoryName = common.Utility.StringAbsoluteValue(category.Name);

            if (categoryName == "")
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Empty, "Category name must not empty");
            }

            dataModel.Category duplicateCategory = _unitOfWork.CategoryRepository.GetFirst(a => a.Name.ToLower() == categoryName);

            if (duplicateCategory != null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Duplicate, "Category name already exists");
            }

            dataModel.Category categoryDataModel = new dataModel.Category();

            categoryDataModel.Name = category.Name;
            categoryDataModel.CreatedBy = category.CreatedBy;

            _unitOfWork.CategoryRepository.Insert(categoryDataModel);

            _unitOfWork.Save();

            if (categoryDataModel.CategoryId > 0)
            {
                CategoryAndSynonymSingleton.ReLoad();
                return Utility.GenerateResponse<decimal>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, categoryDataModel.CategoryId);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }

        public ClientResponse SynonymInsert(viewModelInsert.CategorySynonym synonym)
        {
            string synonymName = common.Utility.StringAbsoluteValue(synonym.Synonym);

            if (synonymName == "")
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Empty, "Synonym must not empty");
            }

            dataModel.CategorySynonym duplicateSynonym = _unitOfWork.CategorySynonymRepository.GetFirst(a => a.Synonym.ToLower() == synonymName);

            if (duplicateSynonym != null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Duplicate, "Synonym already exists");
            }

            dataModel.CategorySynonym categorySynonymDataModel = new dataModel.CategorySynonym();

            categorySynonymDataModel.Synonym = synonym.Synonym;
            categorySynonymDataModel.CategoryId = synonym.CategoryId;
            categorySynonymDataModel.CreatedBy = synonym.CreatedBy;

            _unitOfWork.CategorySynonymRepository.Insert(categorySynonymDataModel);

            _unitOfWork.Save();

            if (categorySynonymDataModel.SynonymId > 0)
            {
                CategoryAndSynonymSingleton.ReLoad();
                return Utility.GenerateResponse<decimal>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, categorySynonymDataModel.SynonymId);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }
        public ClientResponse CategorySynonymDelete(decimal categorySynonymId)
        {

            DeleteStatus deleteStatus = EexcuteCategorySynonymDeleteProcedure(categorySynonymId);

            return Utility.MessageDeleteRecordFromDB(deleteStatus);
        }

        private DeleteStatus EexcuteCategorySynonymDeleteProcedure(decimal categorySynonymId)
        {
            DeleteStatus deleteStatus = new DeleteStatus();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbCategorySynonymId = new DataBaseParameter();
            dbCategorySynonymId.DBParameterName = "@categorySynonymId";
            dbCategorySynonymId.DBParameterType = DatabaseDataType.Decimal;
            dbCategorySynonymId.DBParameterValue = categorySynonymId;

            dataBaseParameterList.Add(dbCategorySynonymId);


            List<DeleteStatus> deleteStatusList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spCategorySynonymDelete]", deleteStatus, dataBaseParameterList);

            if(deleteStatusList != null && deleteStatusList.Count > 0)
            {
                return deleteStatusList[0];
            }
            return null;


        }

        #endregion

        #region CategoryAndSynonym

        private List<CategoryEntity> PopulateCategorySynonymList()
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();



            return categoryEntityList;
        }
        private List<CategorySynonymByCritaria> EexcuteCategoryStoreProcedure(int OpportunityTypeId, int agencyID, int ContractVehicleId, int IndustryID, int StateID)
        {
            CategorySynonymByCritaria categorySynonymByCritaria = new CategorySynonymByCritaria();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbOpportunityTypeId = new DataBaseParameter();
            dbOpportunityTypeId.DBParameterName = "@OpportunityTypeId";
            dbOpportunityTypeId.DBParameterType = DatabaseDataType.Int;
            dbOpportunityTypeId.DBParameterValue = OpportunityTypeId;

            dataBaseParameterList.Add(dbOpportunityTypeId);

            DataBaseParameter dbAgencyID = new DataBaseParameter();
            dbAgencyID.DBParameterName = "@AgencyID";
            dbAgencyID.DBParameterType = DatabaseDataType.Int;
            dbAgencyID.DBParameterValue = agencyID;

            dataBaseParameterList.Add(dbAgencyID);

            DataBaseParameter dbContractVehicleId = new DataBaseParameter();
            dbContractVehicleId.DBParameterName = "@ContractVehicleId";
            dbContractVehicleId.DBParameterType = DatabaseDataType.Int;
            dbContractVehicleId.DBParameterValue = ContractVehicleId;

            dataBaseParameterList.Add(dbContractVehicleId);

            DataBaseParameter dbIndustryID = new DataBaseParameter();
            dbIndustryID.DBParameterName = "@IndustryID";
            dbIndustryID.DBParameterType = DatabaseDataType.Int;
            dbIndustryID.DBParameterValue = IndustryID;

            dataBaseParameterList.Add(dbIndustryID);

            DataBaseParameter dbStateID = new DataBaseParameter();
            dbStateID.DBParameterName = "@StateID";
            dbStateID.DBParameterType = DatabaseDataType.Int;
            dbStateID.DBParameterValue = StateID;

            dataBaseParameterList.Add(dbStateID);


            List<CategorySynonymByCritaria> categorySynonymByCritariaList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetCategorySynonymByCritaria]", categorySynonymByCritaria, dataBaseParameterList);

            return categorySynonymByCritariaList;


        }
        #endregion

        



        //===============================Summary===============================

        #region Summary Bridges methods



        public ClientResponse GetSummarySynonymBridges(decimal synonymId)
        {


            viewModelGet.SummarySynonymBridges synonymBridges = SummarySynonymBridgesData(synonymId);

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, synonymBridges);
        }
        private viewModelGet.SummarySynonymBridges SummarySynonymBridgesData(decimal synonymId)
        {

            viewModelGet.SummarySynonymBridges synonymBridges = new viewModelGet.SummarySynonymBridges();

            synonymBridges.BridgeSummarySynonymAgencyList = _unitOfWork.BridgeSummarySynonymAgencyRepository.GetSelectedColumnWithWhare(b => b.RfpsummarySynonymId == synonymId,
                b => new viewModelGet.BridgeSummarySynonymAgency()
                {
                    BridgeSummarySynonymAgencyId = b.BridgeSummarySynonymAgencyId,
                    RfpsummarySynonymId = b.RfpsummarySynonymId,
                    AgencyId = b.AgencyId
                }).ToList();

            synonymBridges.BridgeSummarySynonymContractVehicleList = _unitOfWork.BridgeSummarySynonymContractVehicleRepository.GetSelectedColumnWithWhare(b => b.RfpsummarySynonymId == synonymId,
               b => new viewModelGet.BridgeSummarySynonymContractVehicle()
               {
                   BridgeSummarySynonymContractVehicleId = b.BridgeSummarySynonymContractVehicleId,
                   RfpsummarySynonymId = b.RfpsummarySynonymId,
                   ContractVehicleId = b.ContractVehicleId
               }).ToList();

            synonymBridges.BridgeSummarySynonymIndustryList = _unitOfWork.BridgeSummarySynonymIndustryRepository.GetSelectedColumnWithWhare(b => b.RfpsummarySynonymId == synonymId,
              b => new viewModelGet.BridgeSummarySynonymIndustry()
              {
                  BridgeSummarySynonymIndustryId = b.BridgeSummarySynonymIndustryId,
                  RfpsummarySynonymId = b.RfpsummarySynonymId,
                  IndustryId = b.IndustryId
              }).ToList();

            synonymBridges.BridgeSummarySynonymOpportunityTypeList = _unitOfWork.BridgeSummarySynonymOpportunityTypeRepository.GetSelectedColumnWithWhare(b => b.RfpsummarySynonymId == synonymId,
              b => new viewModelGet.BridgeSummarySynonymOpportunityType()
              {
                  BridgeSummarySynonymOpportunityTypeId = b.BridgeSummarySynonymOpportunityTypeId,
                  RfpsummarySynonymId = b.RfpsummarySynonymId,
                  OpportunityTypeId = b.OpportunityTypeId
              }).ToList();

            synonymBridges.BridgeSummarySynonymStatesList = _unitOfWork.BridgeSummarySynonymStatesRepository.GetSelectedColumnWithWhare(b => b.RfpsummarySynonymId == synonymId,
              b => new viewModelGet.BridgeSummarySynonymStates()
              {
                  BridgeSummarySynonymStatesId = b.BridgeSummarySynonymStatesId,
                  RfpsummarySynonymId = b.RfpsummarySynonymId,
                  StateId = b.StateId
              }).ToList();

            return synonymBridges;

        }

        public ClientResponse SaveSummarySynonymBridges(viewModelInsert.SummarySynonymBridges summarySynonymBridges)
        {
            bool editRecordExist = false;
            decimal userId = summarySynonymBridges.UserId;
            decimal synonymId = summarySynonymBridges.SummarySynonymId;
            if (summarySynonymBridges.BridgeSummarySynonymAgencyList != null && summarySynonymBridges.BridgeSummarySynonymAgencyList.Count > 0)
            {
                SummarySynonymAgencyBridgesInsertDelete(userId, summarySynonymBridges.BridgeSummarySynonymAgencyList);
            }

            if (summarySynonymBridges.BridgeSummarySynonymContractVehicleList != null && summarySynonymBridges.BridgeSummarySynonymContractVehicleList.Count > 0)
            {
              editRecordExist =  SummarySynonymContractVehicleBridgesInsertDelete(userId, summarySynonymBridges.BridgeSummarySynonymContractVehicleList);
            }

            if (summarySynonymBridges.BridgeSummarySynonymIndustryList != null && summarySynonymBridges.BridgeSummarySynonymIndustryList.Count > 0)
            {
               editRecordExist = SummarySynonymIndustryBridgesInsertDelete(userId, summarySynonymBridges.BridgeSummarySynonymIndustryList);
            }

            if (summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList != null && summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList.Count > 0)
            {
               editRecordExist = SummarySynonymOpportunityTypeBridgesInsertDelete(userId, summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList);
            }

            if (summarySynonymBridges.BridgeSummarySynonymStatesList != null && summarySynonymBridges.BridgeSummarySynonymStatesList.Count > 0)
            {
               editRecordExist = SummarySynonymStatesBridgesInsertDelete(userId, summarySynonymBridges.BridgeSummarySynonymStatesList);
            }

            if(editRecordExist == true)
            {
                
              //List<viewModelGet.SummaryFieldAndSynonym> summaryFieldAndSynonymList = SummaryFieldAndSynonymSingletion.GetInstance(_unitOfWork).SummaryFieldAndSynonymList;
                
              
                if (summarySynonymBridges.Assign == false)
                {
                    RfpsummarySynonym rfpSummarySynonym = _unitOfWork.RfpsummarySynonymRepository.GetByID(summarySynonymBridges.SummarySynonymId);
                    rfpSummarySynonym.Assign = true;
                    _unitOfWork.RfpsummarySynonymRepository.Update(rfpSummarySynonym);
                }
               
            }
            _unitOfWork.Save();
            SummaryFieldAndSynonymSingletion.ReLoad();
            SummaryFieldSingleton.ReLoad();
            viewModelGet.SummarySynonymBridges summarySynonymBridgesData = SummarySynonymBridgesData(synonymId);
            return Utility.GenerateResponse<viewModelGet.SummarySynonymBridges>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, summarySynonymBridgesData);
        }

        private bool SummarySynonymStatesBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSummarySynonymStates> bridgeSummarySynonymStatesList)
        {
            bool editRecordExist = false;
            foreach (var bridgeSummarySynonymStates in bridgeSummarySynonymStatesList)
            {
                if (bridgeSummarySynonymStates.DBTransactionType == 1)
                {
                    BridgeSummarySynonymStates bridgeSummarySynonymStatesDataModel = _mapper.Map<BridgeSummarySynonymStates>(bridgeSummarySynonymStates);

                    _unitOfWork.BridgeSummarySynonymStatesRepository.Insert(bridgeSummarySynonymStatesDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSummarySynonymStates.DBTransactionType == 2)
                {
                    BridgeSummarySynonymStates bridgeSummarySynonymStatesDataModel = _mapper.Map<BridgeSummarySynonymStates>(bridgeSummarySynonymStates);

                    _unitOfWork.BridgeSummarySynonymStatesRepository.Delete(bridgeSummarySynonymStatesDataModel);
                    editRecordExist = true;
                }
            }
            return editRecordExist;
        }

        private bool SummarySynonymOpportunityTypeBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSummarySynonymOpportunityType> bridgeSummarySynonymOpportunityTypeList)
        {
            bool editRecordExist = false;
            foreach (var bridgeSummarySynonymOpportunityType in bridgeSummarySynonymOpportunityTypeList)
            {
                if (bridgeSummarySynonymOpportunityType.DBTransactionType == 1)
                {
                    BridgeSummarySynonymOpportunityType bridgeSummarySynonymOpportunityTypeDataModel = _mapper.Map<BridgeSummarySynonymOpportunityType>(bridgeSummarySynonymOpportunityType);

                    _unitOfWork.BridgeSummarySynonymOpportunityTypeRepository.Insert(bridgeSummarySynonymOpportunityTypeDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSummarySynonymOpportunityType.DBTransactionType == 2)
                {
                    BridgeSummarySynonymOpportunityType bridgeSummarySynonymOpportunityTypeDataModel = _mapper.Map<BridgeSummarySynonymOpportunityType>(bridgeSummarySynonymOpportunityType);

                    _unitOfWork.BridgeSummarySynonymOpportunityTypeRepository.Delete(bridgeSummarySynonymOpportunityTypeDataModel);
                    editRecordExist = true;
                }
            }
            return editRecordExist;
        }

        private bool SummarySynonymIndustryBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSummarySynonymIndustry> bridgeSummarySynonymIndustryList)
        {
            bool editRecordExist = false;
            foreach (var bridgeSummarySynonymIndustry in bridgeSummarySynonymIndustryList)
            {
                if (bridgeSummarySynonymIndustry.DBTransactionType == 1)
                {
                    BridgeSummarySynonymIndustry bridgeSummarySynonymIndustryDataModel = _mapper.Map<BridgeSummarySynonymIndustry>(bridgeSummarySynonymIndustry);

                    _unitOfWork.BridgeSummarySynonymIndustryRepository.Insert(bridgeSummarySynonymIndustryDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSummarySynonymIndustry.DBTransactionType == 2)
                {
                    BridgeSummarySynonymIndustry bridgeSummarySynonymIndustryDataModel = _mapper.Map<BridgeSummarySynonymIndustry>(bridgeSummarySynonymIndustry);

                    _unitOfWork.BridgeSummarySynonymIndustryRepository.Delete(bridgeSummarySynonymIndustryDataModel);
                    editRecordExist = true;
                }
            }
            return editRecordExist;
        }

        private bool SummarySynonymContractVehicleBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSummarySynonymContractVehicle> bridgeSummarySynonymContractVehicleList)
        {
            bool editRecordExist = false;
            foreach (var bridgeSummarySynonymContractVehicle in bridgeSummarySynonymContractVehicleList)
            {
                if (bridgeSummarySynonymContractVehicle.DBTransactionType == 1)
                {
                    BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicleDataModel = _mapper.Map<BridgeSummarySynonymContractVehicle>(bridgeSummarySynonymContractVehicle);

                    _unitOfWork.BridgeSummarySynonymContractVehicleRepository.Insert(bridgeSummarySynonymContractVehicleDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSummarySynonymContractVehicle.DBTransactionType == 2)
                {
                    BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicleDataModel = _mapper.Map<BridgeSummarySynonymContractVehicle>(bridgeSummarySynonymContractVehicle);

                    _unitOfWork.BridgeSummarySynonymContractVehicleRepository.Delete(bridgeSummarySynonymContractVehicleDataModel);
                    editRecordExist = true;
                }
            }
            return editRecordExist;
        }

        public bool SummarySynonymAgencyBridgesInsertDelete(decimal userId, List<viewModelInsert.BridgeSummarySynonymAgency> bridgeSummarySynonymAgencyList)
        {
            bool editRecordExist = false;
            foreach (var bridgeSummarySynonymAgency in bridgeSummarySynonymAgencyList)
            {
                if (bridgeSummarySynonymAgency.DBTransactionType == 1)
                {
                    BridgeSummarySynonymAgency bridgeSummarySynonymAgencyDataModel = _mapper.Map<BridgeSummarySynonymAgency>(bridgeSummarySynonymAgency);

                    _unitOfWork.BridgeSummarySynonymAgencyRepository.Insert(bridgeSummarySynonymAgencyDataModel);
                    editRecordExist = true;
                }
                else if (bridgeSummarySynonymAgency.DBTransactionType == 2)
                {
                    BridgeSummarySynonymAgency bridgeSummarySynonymAgencyDataModel = _mapper.Map<BridgeSummarySynonymAgency>(bridgeSummarySynonymAgency);

                    _unitOfWork.BridgeSummarySynonymAgencyRepository.Delete(bridgeSummarySynonymAgencyDataModel);
                    editRecordExist = true;
                }
            }
            return editRecordExist;

        }

        #endregion

        #region Summary Methods

        public ClientResponse GetSummaryFieldAndSynonym()
        {
            List<viewModelGet.SummaryFieldAndSynonym> summaryFieldAndSynonymList = SummaryFieldAndSynonymSingletion.GetInstance(_unitOfWork).SummaryFieldAndSynonymList;
        if(summaryFieldAndSynonymList == null || summaryFieldAndSynonymList.Count == 0)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound, "Data not found");
            }
            summaryFieldAndSynonymList.OrderBy(s => s.FieldName);
            foreach (var summaryFieldAndSynonym in summaryFieldAndSynonymList)
            {
                summaryFieldAndSynonym.SummarySynonym.OrderBy(s => s.Synonym);
            }
            return Utility.GenerateResponse<List<viewModelGet.SummaryFieldAndSynonym>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, summaryFieldAndSynonymList);
        }

        public ClientResponse GetSummaryField()
        {

            List<dataModel.RfpsummaryField> summaryFieldListDB = _unitOfWork.RfpSummaryFieldRepository.GetAll().ToList();
            List<viewModelGet.SummaryField> summaryFieldList = new List<viewModelGet.SummaryField>();

            if (summaryFieldListDB == null || summaryFieldListDB.Count < 1)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound, "Data not found");
            }

            foreach (var summaryFieldDB in summaryFieldListDB)
            {
                viewModelGet.SummaryField summaryField = new viewModelGet.SummaryField();

                summaryField.SummaryFieldId = summaryFieldDB.RfpsummaryFieldId;
                summaryField.FieldName = summaryFieldDB.FieldName;
                summaryField.Description = summaryFieldDB.Description;
                summaryField.DisplayOrder = summaryFieldDB.DisplayOrder;
                summaryField.Mandatory = summaryFieldDB.Mandatory;
                summaryFieldList.Add(summaryField);
            }



            if (summaryFieldList != null && summaryFieldList.Count > 0)
            {

                return Utility.GenerateResponse<List<viewModelGet.SummaryField>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, summaryFieldList);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }
        public ClientResponse SummaryFieldInsert(viewModelInsert.SummaryField summaryField)
        {

            string fieldName = common.Utility.StringAbsoluteValue(summaryField.FieldName);

            if (fieldName == "")
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Empty, "Synonym must not empty");
            }

            dataModel.RfpsummaryField duplicateSummaryField = _unitOfWork.RfpSummaryFieldRepository.GetFirst(a => a.FieldName.ToLower() == fieldName);

            if (duplicateSummaryField != null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Duplicate, "Field already exists");
            }

            dataModel.RfpsummaryField rfpSummaryFieldDB = new dataModel.RfpsummaryField();

            rfpSummaryFieldDB.FieldName = summaryField.FieldName;
            rfpSummaryFieldDB.Description = summaryField.Description;
            rfpSummaryFieldDB.DisplayOrder = summaryField.DisplayOrder;
            rfpSummaryFieldDB.Mandatory = summaryField.Mandatory;
            rfpSummaryFieldDB.CreatedBy = summaryField.CreatedBy;
            rfpSummaryFieldDB.CreatedDate = DateTime.Now;

            _unitOfWork.RfpSummaryFieldRepository.Insert(rfpSummaryFieldDB);    

            _unitOfWork.Save();

            if (rfpSummaryFieldDB.RfpsummaryFieldId > 0)
            {
                SummaryFieldSingleton.ReLoad();
                SummaryFieldAndSynonymSingletion.ReLoad();
                return Utility.GenerateResponse<decimal>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, rfpSummaryFieldDB.RfpsummaryFieldId);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }
        public ClientResponse SummaryFieldEdit(viewModelEdit.SummaryField summaryField)
        {

            RfpsummaryField rfpSummaryFieldDB = _unitOfWork.RfpSummaryFieldRepository.GetByID(summaryField.SummaryFieldId);

            if (rfpSummaryFieldDB == null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound);
            }

            rfpSummaryFieldDB.RfpsummaryFieldId = summaryField.SummaryFieldId;
            rfpSummaryFieldDB.FieldName = summaryField.FieldName;
            rfpSummaryFieldDB.DisplayOrder = summaryField.DisplayOrder;
            rfpSummaryFieldDB.Mandatory = summaryField.Mandatory;
            rfpSummaryFieldDB.Description = summaryField.Description;
            rfpSummaryFieldDB.ModifiedBy = summaryField.ModifiedBy;
            rfpSummaryFieldDB.ModifiedDate = DateTime.Now;
            rfpSummaryFieldDB.ModifiedBy = summaryField.ModifiedBy;

            _unitOfWork.RfpSummaryFieldRepository.Update(rfpSummaryFieldDB);
            _unitOfWork.Save();
            SummaryFieldSingleton.ReLoad();
            SummaryFieldAndSynonymSingletion.ReLoad();
            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success);
        }

        public ClientResponse SummaryFieldDelete(decimal summaryFieldId)
        {
            DeleteStatus deleteStatus = EexcuteSummaryFieldDeleteProcedure(summaryFieldId);
            if(deleteStatus.DeletedNumberOfRow > 0)
            {
                SummaryFieldSingleton.ReLoad();
                SummaryFieldAndSynonymSingletion.ReLoad();
            }
            return Utility.MessageDeleteRecordFromDB(deleteStatus);
        }

        private DeleteStatus EexcuteSummaryFieldDeleteProcedure(decimal summaryFieldId)
        {
            DeleteStatus deleteStatus = new DeleteStatus();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbSummaryFieldId = new DataBaseParameter();
            dbSummaryFieldId.DBParameterName = "@RFPSummaryFieldId";
            dbSummaryFieldId.DBParameterType = DatabaseDataType.Decimal;
            dbSummaryFieldId.DBParameterValue = summaryFieldId;

            dataBaseParameterList.Add(dbSummaryFieldId);


            List<DeleteStatus> deleteStatusList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spSummaryFieldDelete]", deleteStatus, dataBaseParameterList);

            if (deleteStatusList != null && deleteStatusList.Count > 0)
            {
                return deleteStatusList[0];
            }
            return null;


        }

        public ClientResponse GetSummarySynonym()
        {

            List<dataModel.RfpsummarySynonym> summarySynonymListDB = _unitOfWork.RfpsummarySynonymRepository.GetAll().ToList();
            List<viewModelGet.SummarySynonym> summarySynonymList = new List<viewModelGet.SummarySynonym>();

            if (summarySynonymListDB == null || summarySynonymListDB.Count < 1)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound, "Data not found");
            }

            foreach (var summarySynonymDB in summarySynonymListDB)
            {
                viewModelGet.SummarySynonym summarySynonym = new viewModelGet.SummarySynonym();

                summarySynonym.SummarySynonymId = summarySynonymDB.RfpsummarySynonymId;
                summarySynonym.Synonym = summarySynonymDB.Synonym;
                summarySynonym.Description = summarySynonymDB.Description;
                summarySynonym.ModifiedBy = summarySynonymDB.ModifiedBy;
                summarySynonym.SummaryFieldId = summarySynonymDB.RfpsummaryFieldId;
                summarySynonymList.Add(summarySynonym);
            }



            if (summarySynonymList != null && summarySynonymList.Count > 0)
            {

                return Utility.GenerateResponse<List<viewModelGet.SummarySynonym>>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, summarySynonymList);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }

        public ClientResponse SummarySynonymInsert(viewModelInsert.SummarySynonym summarySynonym)
        {

            string synonymName = common.Utility.StringAbsoluteValue(summarySynonym.Synonym);

            if (synonymName == "")
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Empty, "Synonym must not empty");
            }

            dataModel.RfpsummarySynonym duplicateSynonym = _unitOfWork.RfpsummarySynonymRepository.GetFirst(a => a.Synonym.ToLower() == synonymName);

            if (duplicateSynonym != null)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Duplicate, "Synonym already exists");
            }

            dataModel.RfpsummarySynonym rfpsummarySynonymDataModel = new dataModel.RfpsummarySynonym();

            rfpsummarySynonymDataModel.Synonym = summarySynonym.Synonym;
            rfpsummarySynonymDataModel.RfpsummaryFieldId = summarySynonym.SummaryFieldId;
            rfpsummarySynonymDataModel.Description = summarySynonym.Description;
            rfpsummarySynonymDataModel.CreatedBy = summarySynonym.CreatedBy;

            _unitOfWork.RfpsummarySynonymRepository.Insert(rfpsummarySynonymDataModel);

            _unitOfWork.Save();

            if (rfpsummarySynonymDataModel.RfpsummarySynonymId > 0)
            {
                SummaryFieldAndSynonymSingletion.ReLoad();
                return Utility.GenerateResponse<decimal>(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, rfpsummarySynonymDataModel.RfpsummarySynonymId);
            }

            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail);
        }

        public ClientResponse SummarySynonymEdit(viewModelEdit.SummarySynonym summarySynonym)
        {

            RfpsummarySynonym rfpSummarySynonymDB = _unitOfWork.RfpsummarySynonymRepository.GetByID(summarySynonym.SummarySynonymId);

            if (rfpSummarySynonymDB == null)
            {
                
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound);
            }

            rfpSummarySynonymDB.RfpsummarySynonymId = summarySynonym.SummarySynonymId;
            rfpSummarySynonymDB.Synonym = summarySynonym.Synonym;
            rfpSummarySynonymDB.Description = summarySynonym.Description;
            rfpSummarySynonymDB.RfpsummaryFieldId = summarySynonym.SummaryFieldId;
            rfpSummarySynonymDB.ModifiedBy = summarySynonym.ModifiedBy;
            rfpSummarySynonymDB.ModifiedDate = DateTime.Now;

            _unitOfWork.RfpsummarySynonymRepository.Update(rfpSummarySynonymDB);
            _unitOfWork.Save();
            SummaryFieldAndSynonymSingletion.ReLoad();
            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success);
        }

        public ClientResponse SummarySynonymDelete(Decimal summarySynonymId)
        {
            DeleteStatus deleteStatus = EexcuteSummarySynonymeProcedure(summarySynonymId);

            if(deleteStatus.DeletedNumberOfRow > 0)
            {
                SummaryFieldAndSynonymSingletion.ReLoad();
            }
            return Utility.MessageDeleteRecordFromDB(deleteStatus);
        }

        private DeleteStatus EexcuteSummarySynonymeProcedure(decimal summarySynonymId)
        {
            DeleteStatus deleteStatus = new DeleteStatus();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbCategorySynonymId = new DataBaseParameter();
            dbCategorySynonymId.DBParameterName = "@RFPSummarySynonymId";
            dbCategorySynonymId.DBParameterType = DatabaseDataType.Decimal;
            dbCategorySynonymId.DBParameterValue = summarySynonymId;

            dataBaseParameterList.Add(dbCategorySynonymId);


            List<DeleteStatus> deleteStatusList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spSummarySynonymDelete]", deleteStatus, dataBaseParameterList);

            if (deleteStatusList != null && deleteStatusList.Count > 0)
            {
                return deleteStatusList[0];
            }
            return null;


        }

        public ClientResponse MovedSummaryFieldSynonymEdit(List<viewModelEdit.SummarySynonym> summarySynonymList) {

           //List<viewModelEdit.SummarySynonym> summarySynonymList =
           //     (List < viewModelEdit.SummarySynonym>)JsonConvert.DeserializeObject(summarySynonymListJson, typeof(List<viewModelEdit.SummarySynonym>));

            if (summarySynonymList == null && summarySynonymList.Count == 0)
            {
                Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound, "");
            }

            List<RfpsummarySynonym> rfpsummarySynonymListDb = _unitOfWork.RfpsummarySynonymRepository.GetAll().ToList();
            
            if (rfpsummarySynonymListDb == null && rfpsummarySynonymListDb.Count == 0)
            {
                Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound, "");
            }

            foreach (var summarySynonym in summarySynonymList)
            {                
                RfpsummarySynonym summarySynonymDB = rfpsummarySynonymListDb.FirstOrDefault(s => s.RfpsummarySynonymId == summarySynonym.SummarySynonymId);

                summarySynonymDB.RfpsummaryFieldId = summarySynonym.SummaryFieldId;

                _unitOfWork.RfpsummarySynonymRepository.Update(summarySynonymDB);
            }

            _unitOfWork.Save();
            SummaryFieldAndSynonymSingletion.ReLoad();
            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, "");
        }

        public ClientResponse MovedCategorySynonymEdit(List<viewModelEdit.CategorySynonym> categorySynonymList)
        {

            //List<viewModelEdit.SummarySynonym> summarySynonymList =
            //     (List<viewModelEdit.SummarySynonym>)JsonConvert.DeserializeObject(summarySynonymListJson, typeof(List<viewModelEdit.SummarySynonym>));

            if (categorySynonymList == null && categorySynonymList.Count == 0)
            {
                Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound, "");
            }

            List<CategorySynonym> categorySynonymListDb = _unitOfWork.CategorySynonymRepository.GetAll().ToList();

            if (categorySynonymListDb == null && categorySynonymListDb.Count == 0)
            {
                Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound, "");
            }

            foreach (var categorySynonym in categorySynonymList)
            {
                CategorySynonym CategorySynonymDB = categorySynonymListDb.FirstOrDefault(s => s.SynonymId == categorySynonym.SynonymId);

                CategorySynonymDB.CategoryId = categorySynonym.CategoryId;

                _unitOfWork.CategorySynonymRepository.Update(CategorySynonymDB);
            }

            _unitOfWork.Save();
            CategoryAndSynonymSingleton.ReLoad();
            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, "");
        }

        #endregion


        #region Get Common Category Synonym for parsing document

        public List<CategoryEntity> GetCategorySynonymList(int? opportunityTypeId, int? agencyID, int? contractVehicleId, int? industryID,
            int? stateID)
        {

            //opportunityTypeId = 1;
            //stateID = 1;
            //agencyID = 0;
            //contractVehicleId = 0;
            //industryID = 0;

            List<CategoryEntity> categoryEntityList = null;

            viewModelGet.SynonymBridges synonymBridges = SynonymBridgesData(opportunityTypeId, stateID, agencyID, industryID, contractVehicleId);

            List<CategoryEntity> categoryEntityListFromDb = CategorySingleton.GetInstance(_unitOfWork).CategoryList;

            List<CategoryEntity> categoryEntityListFromDbClone = new List<CategoryEntity>();

            foreach (var categoryEntityFromDb in categoryEntityListFromDb)
            {
                CategoryEntity categoryEntity = new CategoryEntity();

                categoryEntity.CategoryId = categoryEntityFromDb.CategoryId;
                categoryEntity.Color = categoryEntityFromDb.Color;
                categoryEntity.CompanyId = categoryEntityFromDb.CompanyId;
                categoryEntity.CreatedBy = categoryEntityFromDb.CreatedBy;
                categoryEntity.CreatedDate = categoryEntityFromDb.CreatedDate;
                categoryEntity.Decription = categoryEntityFromDb.Decription;
                categoryEntity.IdForZbizlink = categoryEntityFromDb.IdForZbizlink;
                categoryEntity.Name = categoryEntityFromDb.Name;
                categoryEntity.ModifiedBy = categoryEntityFromDb.ModifiedBy;
                categoryEntity.ModifiedDate = categoryEntityFromDb.ModifiedDate;

                foreach (var CategorySynonym in categoryEntityFromDb.CategorySynonym)
                {
                    CategorySynonymEntity categorySynonymEntity = new CategorySynonymEntity();

                    categorySynonymEntity.SynonymId = CategorySynonym.SynonymId;
                    categorySynonymEntity.Synonym = CategorySynonym.Synonym;
                    categorySynonymEntity.Description = CategorySynonym.Description;
                    categorySynonymEntity.CategoryId = CategorySynonym.CategoryId;
                    categorySynonymEntity.CreatedBy = CategorySynonym.CreatedBy;
                    categorySynonymEntity.CreatedDate = CategorySynonym.CreatedDate;
                    categorySynonymEntity.ModifiedBy = CategorySynonym.ModifiedBy;
                    categorySynonymEntity.ModifiedDate = CategorySynonym.ModifiedDate;

                    categoryEntity.CategorySynonym.Add(categorySynonymEntity);

                }

                categoryEntityListFromDbClone.Add(categoryEntity);

            }

            if (opportunityTypeId > 0 && stateID == 0 && agencyID == 0 && contractVehicleId == 0 && industryID == 0)
            {
                categoryEntityList = opportunityTypeSynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId == 0 && stateID > 0 && agencyID == 0 && contractVehicleId == 0 && industryID == 0)
            {
                categoryEntityList = StateSynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId == 0 && stateID == 0 && agencyID > 0 && contractVehicleId == 0 && industryID == 0)
            {
                categoryEntityList = AgencySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId == 0 && stateID == 0 && agencyID == 0 && contractVehicleId > 0 && industryID == 0)
            {
                categoryEntityList = ContractVehicleSynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId == 0 && stateID == 0 && agencyID == 0 && contractVehicleId == 0 && industryID > 0)
            {
                categoryEntityList = IndustrySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID == 0 && contractVehicleId == 0 && industryID == 0)
            {
                categoryEntityList = OpportunityTypeStateSynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID > 0 && contractVehicleId == 0 && industryID == 0)
            {
                categoryEntityList = OpportunityTypeAgencySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID == 0 && contractVehicleId > 0 && industryID == 0)
            {
                categoryEntityList = OpportunityTypeContractVehicleSynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID == 0 && contractVehicleId == 0 && industryID > 0)
            {
                categoryEntityList = OpportunityTypeIndustrySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID > 0 && contractVehicleId == 0 && industryID == 0)
            {
                categoryEntityList = OpportunityTypeStateAgencySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID == 0 && contractVehicleId > 0 && industryID == 0)
            {
                categoryEntityList = OpportunityTypeStateContractVehicleSynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID == 0 && contractVehicleId == 0 && industryID > 0)
            {
                categoryEntityList = OpportunityTypeStateIndustrySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID > 0 && contractVehicleId > 0 && industryID == 0)
            {
                categoryEntityList = OpportunityTypeAgencyContractVehicleSynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID > 0 && contractVehicleId == 0 && industryID > 0)
            {
                categoryEntityList = OpportunityTypeAgencyIndustrySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID == 0 && contractVehicleId > 0 && industryID > 0)
            {
                categoryEntityList = OpportunityTypeContractVehicleIndustrySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID > 0 && contractVehicleId > 0 && industryID == 0)
            {
                categoryEntityList = OpportunityTypeStateAgencyContractVehicleSynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID > 0 && contractVehicleId == 0 && industryID > 0)
            {
                categoryEntityList = OpportunityTypeStateAgencyIndustrySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID > 0 && contractVehicleId > 0 && industryID > 0)
            {
                categoryEntityList = OpportunityTypeAgencyContractVehicleIdIndustrySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID == 0 && contractVehicleId > 0 && industryID > 0)
            {
                categoryEntityList = OpportunityTypeStateContractVehicleIdIndustrySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID > 0 && contractVehicleId > 0 && industryID > 0)
            {
                categoryEntityList = OpportunityTypeStateAgencyContractVehicleIdIndustrySynonym(categoryEntityListFromDb, synonymBridges);
                //return categoryEntityList;
            }
            else
            {
                categoryEntityList = categoryEntityListFromDb;
            }


            PopulatePublicSynonym(categoryEntityListFromDbClone, categoryEntityList, synonymBridges);

            return categoryEntityList;
        }


        private List<CategoryEntity> OpportunityTypeStateAgencyContractVehicleIdIndustrySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymStates bridgeSynonymStates = synonymBridges.BridgeSynonymStatesList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymStates != null)
                {
                    viewModelGet.BridgeSynonymAgency bridgeSynonymAgency = synonymBridges.BridgeSynonymAgencyList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymAgency != null)
                    {
                        viewModelGet.BridgeSynonymContractVehicle bridgeSynonymContractVehicle = synonymBridges.BridgeSynonymContractVehicleList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                        if (bridgeSynonymContractVehicle != null)
                        {
                            viewModelGet.BridgeSynonymIndustry bridgeSynonymIndustry = synonymBridges.BridgeSynonymIndustryList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                            if (bridgeSynonymIndustry != null)
                            {
                                commonSynonymIds.Add(bridgeSynonymIndustry.SynonymId);
                            }
                        }
                    }
                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeStateContractVehicleIdIndustrySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymStates bridgeSynonymStates = synonymBridges.BridgeSynonymStatesList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymStates != null)
                {
                    viewModelGet.BridgeSynonymContractVehicle bridgeSynonymContractVehicle = synonymBridges.BridgeSynonymContractVehicleList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymContractVehicle != null)
                    {
                        viewModelGet.BridgeSynonymIndustry bridgeSynonymIndustry = synonymBridges.BridgeSynonymIndustryList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                        if (bridgeSynonymIndustry != null)
                        {
                            commonSynonymIds.Add(bridgeSynonymIndustry.SynonymId);
                        }
                    }

                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeAgencyContractVehicleIdIndustrySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymAgency bridgeSynonymAgency = synonymBridges.BridgeSynonymAgencyList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymAgency != null)
                {
                    viewModelGet.BridgeSynonymContractVehicle bridgeSynonymContractVehicle = synonymBridges.BridgeSynonymContractVehicleList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymContractVehicle != null)
                    {
                        viewModelGet.BridgeSynonymIndustry bridgeSynonymIndustry = synonymBridges.BridgeSynonymIndustryList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                        if (bridgeSynonymIndustry != null)
                        {
                            commonSynonymIds.Add(bridgeSynonymIndustry.SynonymId);
                        }
                    }

                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeStateAgencyIndustrySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymStates bridgeSynonymStates = synonymBridges.BridgeSynonymStatesList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymStates != null)
                {
                    viewModelGet.BridgeSynonymAgency bridgeSynonymAgency = synonymBridges.BridgeSynonymAgencyList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymAgency != null)
                    {
                        viewModelGet.BridgeSynonymIndustry bridgeSynonymIndustry = synonymBridges.BridgeSynonymIndustryList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                        if (bridgeSynonymIndustry != null)
                        {
                            commonSynonymIds.Add(bridgeSynonymIndustry.SynonymId);
                        }

                    }
                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeStateAgencyContractVehicleSynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymStates bridgeSynonymStates = synonymBridges.BridgeSynonymStatesList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymStates != null)
                {
                    viewModelGet.BridgeSynonymAgency bridgeSynonymAgency = synonymBridges.BridgeSynonymAgencyList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymAgency != null)
                    {
                        viewModelGet.BridgeSynonymContractVehicle bridgeSynonymContractVehicle = synonymBridges.BridgeSynonymContractVehicleList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                        if (bridgeSynonymContractVehicle != null)
                        {
                            commonSynonymIds.Add(bridgeSynonymContractVehicle.SynonymId);
                        }

                    }
                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeContractVehicleIndustrySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymContractVehicle bridgeSynonymContractVehicle = synonymBridges.BridgeSynonymContractVehicleList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymContractVehicle != null)
                {
                    viewModelGet.BridgeSynonymIndustry bridgeSynonymIndustry = synonymBridges.BridgeSynonymIndustryList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymIndustry != null)
                    {
                        commonSynonymIds.Add(bridgeSynonymIndustry.SynonymId);
                    }
                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeAgencyIndustrySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymAgency bridgeSynonymAgency = synonymBridges.BridgeSynonymAgencyList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymAgency != null)
                {
                    viewModelGet.BridgeSynonymIndustry bridgeSynonymIndustry = synonymBridges.BridgeSynonymIndustryList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymIndustry != null)
                    {
                        commonSynonymIds.Add(bridgeSynonymIndustry.SynonymId);
                    }
                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeAgencyContractVehicleSynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymAgency bridgeSynonymAgency = synonymBridges.BridgeSynonymAgencyList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymAgency != null)
                {
                    viewModelGet.BridgeSynonymContractVehicle bridgeSynonymContractVehicle = synonymBridges.BridgeSynonymContractVehicleList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymContractVehicle != null)
                    {
                        commonSynonymIds.Add(bridgeSynonymContractVehicle.SynonymId);
                    }
                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeStateIndustrySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymStates bridgeSynonymStates = synonymBridges.BridgeSynonymStatesList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymStates != null)
                {
                    viewModelGet.BridgeSynonymIndustry bridgeSynonymIndustry = synonymBridges.BridgeSynonymIndustryList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymIndustry != null)
                    {
                        commonSynonymIds.Add(bridgeSynonymIndustry.SynonymId);
                    }
                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeStateContractVehicleSynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymStates bridgeSynonymStates = synonymBridges.BridgeSynonymStatesList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymStates != null)
                {
                    viewModelGet.BridgeSynonymContractVehicle bridgeSynonymContractVehicle = synonymBridges.BridgeSynonymContractVehicleList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymContractVehicle != null)
                    {
                        commonSynonymIds.Add(bridgeSynonymContractVehicle.SynonymId);
                    }
                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeStateAgencySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymStates bridgeSynonymStates = synonymBridges.BridgeSynonymStatesList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymStates != null)
                {
                    viewModelGet.BridgeSynonymAgency bridgeSynonymAgency = synonymBridges.BridgeSynonymAgencyList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (bridgeSynonymAgency != null)
                    {
                        commonSynonymIds.Add(bridgeSynonymAgency.SynonymId);
                    }
                }
            }

            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeIndustrySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymIndustry bridgeSynonymIndustry = synonymBridges.BridgeSynonymIndustryList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymIndustry != null)
                {
                    commonSynonymIds.Add(bridgeSynonymIndustry.SynonymId);
                }
            }


            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeContractVehicleSynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymContractVehicle bridgeSynonymContractVehicle = synonymBridges.BridgeSynonymContractVehicleList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymContractVehicle != null)
                {
                    commonSynonymIds.Add(bridgeSynonymContractVehicle.SynonymId);
                }
            }


            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeAgencySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymAgency bridgeSynonymAgency = synonymBridges.BridgeSynonymAgencyList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymAgency != null)
                {
                    commonSynonymIds.Add(bridgeSynonymAgency.SynonymId);
                }
            }


            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> OpportunityTypeStateSynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = null;

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSynonymStates bridgeSynonymState = synonymBridges.BridgeSynonymStatesList.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                if (bridgeSynonymState != null)
                {
                    commonSynonymIds.Add(bridgeSynonymState.SynonymId);
                }
            }


            categoryEntityList = FinalCategorySynonymEntity(categoryEntityListFromDb, commonSynonymIds);

            return categoryEntityList;
        }

        private List<CategoryEntity> FinalCategorySynonymEntity(List<CategoryEntity> categoryEntityListFromDb, List<decimal> commonSynonymIds)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();

            foreach (var categoryEntityFromDb in categoryEntityListFromDb)
            {
                List<CategorySynonymEntity> categorySynonymEntityListTemp = categoryEntityFromDb.CategorySynonym.ToList();
                categoryEntityFromDb.CategorySynonym.Clear();
                categoryEntityList.Add(categoryEntityFromDb);

                foreach (var commonSynonymId in commonSynonymIds)
                {
                    CategorySynonymEntity categorySynonymEntity = categorySynonymEntityListTemp.FirstOrDefault(s => s.SynonymId == commonSynonymId);
                    if (categorySynonymEntity != null)
                    {
                        categoryEntityFromDb.CategorySynonym.Add(categorySynonymEntity);
                    }
                }
            }



            return categoryEntityList;
        }

        private List<CategoryEntity> PopulatePublicSynonym(List<CategoryEntity> categoryEntityListFromDb, List<CategoryEntity> categoryEntityList, viewModelGet.SynonymBridges synonymBridges)
        {

            foreach (var categoryEntityFromDb in categoryEntityListFromDb)
            {
                foreach (var synonymFromDb in categoryEntityFromDb.CategorySynonym.ToList())
                {

                    viewModelGet.BridgeSynonymAgency bridgeSynonymAgency = synonymBridges.BridgeSynonymAgencyList.FirstOrDefault(s => s.SynonymId == synonymFromDb.SynonymId);
                    if (bridgeSynonymAgency != null)
                    {
                        continue;
                    }

                    viewModelGet.BridgeSynonymContractVehicle bridgeSynonymContractVehicle = synonymBridges.BridgeSynonymContractVehicleList.FirstOrDefault(s => s.SynonymId == synonymFromDb.SynonymId);
                    if (bridgeSynonymContractVehicle != null)
                    {
                        continue;
                    }

                    viewModelGet.BridgeSynonymIndustry bridgeSynonymIndustry = synonymBridges.BridgeSynonymIndustryList.FirstOrDefault(s => s.SynonymId == synonymFromDb.SynonymId);
                    if (bridgeSynonymIndustry != null)
                    {
                        continue;
                    }

                    viewModelGet.BridgeSynonymOpportunityType bridgeSynonymOpportunityType = synonymBridges.BridgeSynonymOpportunityTypeList.FirstOrDefault(s => s.SynonymId == synonymFromDb.SynonymId);
                    if (bridgeSynonymOpportunityType != null)
                    {
                        continue;
                    }

                    viewModelGet.BridgeSynonymStates bridgeSynonymStates = synonymBridges.BridgeSynonymStatesList.FirstOrDefault(s => s.SynonymId == synonymFromDb.SynonymId);
                    if (bridgeSynonymStates != null)
                    {
                        continue;
                    }

                    CategoryEntity categoryEntity = categoryEntityList.FirstOrDefault(c => c.CategoryId == categoryEntityFromDb.CategoryId);

                    categoryEntity.CategorySynonym.Add(synonymFromDb);

                }
            }
            return categoryEntityList;
        }

        private List<CategoryEntity> IndustrySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();
            foreach (var categoryEntityFromDb in categoryEntityListFromDb)
            {
                List<CategorySynonymEntity> categorySynonymEntityListTemp = categoryEntityFromDb.CategorySynonym.ToList();
                categoryEntityFromDb.CategorySynonym.Clear();

                categoryEntityList.Add(categoryEntityFromDb);

                foreach (var bridgeSynonymIndustry in synonymBridges.BridgeSynonymIndustryList)
                {
                    CategorySynonymEntity categorySynonymEntity = categorySynonymEntityListTemp.FirstOrDefault(s => s.SynonymId == bridgeSynonymIndustry.SynonymId);
                    if (categorySynonymEntity != null)
                    {
                        categoryEntityFromDb.CategorySynonym.Add(categorySynonymEntity);
                    }
                }
            }
            return categoryEntityList;
        }

        private List<CategoryEntity> ContractVehicleSynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();
            foreach (var categoryEntityFromDb in categoryEntityListFromDb)
            {
                List<CategorySynonymEntity> categorySynonymEntityListTemp = categoryEntityFromDb.CategorySynonym.ToList();
                categoryEntityFromDb.CategorySynonym.Clear();

                categoryEntityList.Add(categoryEntityFromDb);

                foreach (var bridgeSynonymContractVehicle in synonymBridges.BridgeSynonymContractVehicleList)
                {
                    CategorySynonymEntity categorySynonymEntity = categorySynonymEntityListTemp.FirstOrDefault(s => s.SynonymId == bridgeSynonymContractVehicle.SynonymId);
                    if (categorySynonymEntity != null)
                    {
                        categoryEntityFromDb.CategorySynonym.Add(categorySynonymEntity);
                    }
                }
            }
            return categoryEntityList;
        }

        private List<CategoryEntity> StateSynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();
            foreach (var categoryEntityFromDb in categoryEntityListFromDb)
            {
                List<CategorySynonymEntity> categorySynonymEntityListTemp = categoryEntityFromDb.CategorySynonym.ToList();
                categoryEntityFromDb.CategorySynonym.Clear();

                categoryEntityList.Add(categoryEntityFromDb);

                foreach (var bridgeSynonymStates in synonymBridges.BridgeSynonymStatesList)
                {
                    CategorySynonymEntity categorySynonymEntity = categorySynonymEntityListTemp.FirstOrDefault(s => s.SynonymId == bridgeSynonymStates.SynonymId);
                    if (categorySynonymEntity != null)
                    {
                        categoryEntityFromDb.CategorySynonym.Add(categorySynonymEntity);
                    }
                }
            }
            return categoryEntityList;
        }

        private List<CategoryEntity> opportunityTypeSynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();
            foreach (var categoryEntityFromDb in categoryEntityListFromDb)
            {
                List<CategorySynonymEntity> categorySynonymEntityListTemp = categoryEntityFromDb.CategorySynonym.ToList();
                categoryEntityFromDb.CategorySynonym.Clear();

                categoryEntityList.Add(categoryEntityFromDb);

                foreach (var bridgeSynonymOpportunityType in synonymBridges.BridgeSynonymOpportunityTypeList)
                {
                    CategorySynonymEntity categorySynonymEntity = categorySynonymEntityListTemp.FirstOrDefault(s => s.SynonymId == bridgeSynonymOpportunityType.SynonymId);
                    if (categorySynonymEntity != null)
                    {
                        categoryEntityFromDb.CategorySynonym.Add(categorySynonymEntity);
                    }
                }
            }
            return categoryEntityList;
        }

        private List<CategoryEntity> AgencySynonym(List<CategoryEntity> categoryEntityListFromDb, viewModelGet.SynonymBridges synonymBridges)
        {
            List<CategoryEntity> categoryEntityList = new List<CategoryEntity>();
            foreach (var categoryEntityFromDb in categoryEntityListFromDb)
            {
                List<CategorySynonymEntity> categorySynonymEntityListTemp = categoryEntityFromDb.CategorySynonym.ToList();
                categoryEntityFromDb.CategorySynonym.Clear();

                categoryEntityList.Add(categoryEntityFromDb);

                foreach (var bridgeSynonymAgency in synonymBridges.BridgeSynonymAgencyList)
                {
                    CategorySynonymEntity categorySynonymEntity = categorySynonymEntityListTemp.FirstOrDefault(s => s.SynonymId == bridgeSynonymAgency.SynonymId);
                    if (categorySynonymEntity != null)
                    {
                        categoryEntityFromDb.CategorySynonym.Add(categorySynonymEntity);
                    }
                }
            }
            return categoryEntityList;
        }
        #endregion


        #region Get Common Summary Synonym for parsing document

        public List<RfpSummaryFieldEntity> GetSummarySynonymList(int? opportunityTypeId, int? agencyID, int? contractVehicleId, int? industryID,
            int? stateID)
        {

            //opportunityTypeId = 1;
            //stateID = 1;
            //agencyID = 0;
            //contractVehicleId = 0;
            //industryID = 0;

            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = null;

            viewModelGet.SummarySynonymBridges summarySynonymBridges = SummarySynonymBridgesData(opportunityTypeId, stateID, agencyID, industryID, contractVehicleId);

            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB = SummaryFieldSingleton.GetInstance(_unitOfWork).SummaryFieldList;

            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDbClone = new List<RfpSummaryFieldEntity>();

            foreach (var rfpSummaryFieldEntityFromDB in rfpSummaryFieldEntityListFromDB)
            {
                RfpSummaryFieldEntity rfpSummaryFieldEntity = new RfpSummaryFieldEntity();

                rfpSummaryFieldEntity.RfpsummaryFieldId = rfpSummaryFieldEntityFromDB.RfpsummaryFieldId;
                rfpSummaryFieldEntity.FieldName = rfpSummaryFieldEntityFromDB.FieldName;
                rfpSummaryFieldEntity.CreatedBy = rfpSummaryFieldEntityFromDB.CreatedBy;
                rfpSummaryFieldEntity.CreatedDate = rfpSummaryFieldEntityFromDB.CreatedDate;
                rfpSummaryFieldEntity.DisplayOrder = rfpSummaryFieldEntityFromDB.DisplayOrder;
                rfpSummaryFieldEntity.Mandatory = rfpSummaryFieldEntityFromDB.Mandatory;

                foreach (var rfpSummarySynonym in rfpSummaryFieldEntityFromDB.RfpsummarySynonym)
                {
                    RfpSummarySynonymEntity rfpSummarySynonymEntity = new RfpSummarySynonymEntity();

                    rfpSummarySynonymEntity.RfpsummarySynonymId = rfpSummarySynonymEntity.RfpsummarySynonymId;
                    rfpSummarySynonymEntity.Synonym = rfpSummarySynonymEntity.Synonym;
                    rfpSummarySynonymEntity.CreatedBy = rfpSummarySynonymEntity.CreatedBy;
                    rfpSummarySynonymEntity.CreatedDate = rfpSummarySynonymEntity.CreatedDate;
                    rfpSummarySynonymEntity.RfpsummaryFieldId = rfpSummarySynonymEntity.RfpsummaryFieldId;


                    rfpSummaryFieldEntity.RfpsummarySynonym.Add(rfpSummarySynonymEntity);

                }

                rfpSummaryFieldEntityListFromDbClone.Add(rfpSummaryFieldEntity);

            }

            if (opportunityTypeId > 0 && stateID == 0 && agencyID == 0 && contractVehicleId == 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = opportunityTypeSummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId == 0 && stateID > 0 && agencyID == 0 && contractVehicleId == 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = StateSummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId == 0 && stateID == 0 && agencyID > 0 && contractVehicleId == 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = AgencySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId == 0 && stateID == 0 && agencyID == 0 && contractVehicleId > 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = ContractVehicleSummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId == 0 && stateID == 0 && agencyID == 0 && contractVehicleId == 0 && industryID > 0)
            {
                rfpSummaryFieldEntityList = IndustrySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID == 0 && contractVehicleId == 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeStateSummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID > 0 && contractVehicleId == 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeAgencySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID == 0 && contractVehicleId > 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeContractVehicleSummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID == 0 && contractVehicleId == 0 && industryID > 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeIndustrySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID > 0 && contractVehicleId == 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeStateAgencySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID == 0 && contractVehicleId > 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeStateContractVehicleSummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID == 0 && contractVehicleId == 0 && industryID > 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeStateIndustrySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID > 0 && contractVehicleId > 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeAgencyContractVehicleSummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID > 0 && contractVehicleId == 0 && industryID > 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeAgencyIndustrySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID == 0 && contractVehicleId > 0 && industryID > 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeContractVehicleIndustrySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID > 0 && contractVehicleId > 0 && industryID == 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeStateAgencyContractVehicleSummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID > 0 && contractVehicleId == 0 && industryID > 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeStateAgencyIndustrySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID == 0 && agencyID > 0 && contractVehicleId > 0 && industryID > 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeAgencyContractVehicleIdIndustrySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID == 0 && contractVehicleId > 0 && industryID > 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeStateContractVehicleIdIndustrySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else if (opportunityTypeId > 0 && stateID > 0 && agencyID > 0 && contractVehicleId > 0 && industryID > 0)
            {
                rfpSummaryFieldEntityList = OpportunityTypeStateAgencyContractVehicleIdIndustrySummarySynonym(rfpSummaryFieldEntityListFromDB, summarySynonymBridges);
                //return categoryEntityList;
            }
            else
            {
                rfpSummaryFieldEntityList = rfpSummaryFieldEntityListFromDB;
            }


            PopulatePublicSummarySynonym(rfpSummaryFieldEntityListFromDbClone, rfpSummaryFieldEntityList, summarySynonymBridges);

            return rfpSummaryFieldEntityList;
        }


        private List<RfpSummaryFieldEntity> OpportunityTypeStateAgencyContractVehicleIdIndustrySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymStates bridgeSummarySynonymStates = summarySynonymBridges.BridgeSummarySynonymStatesList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymStates != null)
                {
                    viewModelGet.BridgeSummarySynonymAgency bridgeSummarySynonymAgency = summarySynonymBridges.BridgeSummarySynonymAgencyList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymAgency != null)
                    {
                        viewModelGet.BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                        if (bridgeSummarySynonymContractVehicle != null)
                        {
                            viewModelGet.BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = summarySynonymBridges.BridgeSummarySynonymIndustryList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                            if (bridgeSummarySynonymIndustry != null)
                            {
                                commonSynonymIds.Add(bridgeSummarySynonymIndustry.RfpsummarySynonymId);
                            }
                        }
                    }
                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeStateContractVehicleIdIndustrySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymStates bridgeSummarySynonymStates = summarySynonymBridges.BridgeSummarySynonymStatesList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymStates != null)
                {
                    viewModelGet.BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymContractVehicle != null)
                    {
                        viewModelGet.BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = summarySynonymBridges.BridgeSummarySynonymIndustryList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                        if (bridgeSummarySynonymIndustry != null)
                        {
                            commonSynonymIds.Add(bridgeSummarySynonymIndustry.RfpsummarySynonymId);
                        }
                    }

                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeAgencyContractVehicleIdIndustrySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymAgency bridgeSummarySynonymAgency = summarySynonymBridges.BridgeSummarySynonymAgencyList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymAgency != null)
                {
                    viewModelGet.BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymContractVehicle != null)
                    {
                        viewModelGet.BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = summarySynonymBridges.BridgeSummarySynonymIndustryList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                        if (bridgeSummarySynonymIndustry != null)
                        {
                            commonSynonymIds.Add(bridgeSummarySynonymIndustry.RfpsummarySynonymId);
                        }
                    }

                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeStateAgencyIndustrySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymStates bridgeSummarySynonymStates = summarySynonymBridges.BridgeSummarySynonymStatesList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymStates != null)
                {
                    viewModelGet.BridgeSummarySynonymAgency bridgeSummarySynonymAgency = summarySynonymBridges.BridgeSummarySynonymAgencyList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymAgency != null)
                    {
                        viewModelGet.BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = summarySynonymBridges.BridgeSummarySynonymIndustryList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                        if (bridgeSummarySynonymIndustry != null)
                        {
                            commonSynonymIds.Add(bridgeSummarySynonymIndustry.RfpsummarySynonymId);
                        }

                    }
                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeStateAgencyContractVehicleSummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDBv, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymStates bridgeSummarySynonymStates = summarySynonymBridges.BridgeSummarySynonymStatesList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymStates != null)
                {
                    viewModelGet.BridgeSummarySynonymAgency bridgeSummarySynonymAgency = summarySynonymBridges.BridgeSummarySynonymAgencyList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymAgency != null)
                    {
                        viewModelGet.BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                        if (bridgeSummarySynonymContractVehicle != null)
                        {
                            commonSynonymIds.Add(bridgeSummarySynonymContractVehicle.RfpsummarySynonymId);
                        }

                    }
                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeContractVehicleIndustrySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymContractVehicle != null)
                {
                    viewModelGet.BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = summarySynonymBridges.BridgeSummarySynonymIndustryList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymIndustry != null)
                    {
                        commonSynonymIds.Add(bridgeSummarySynonymIndustry.RfpsummarySynonymId);
                    }
                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeAgencyIndustrySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymAgency bridgeSummarySynonymAgency = summarySynonymBridges.BridgeSummarySynonymAgencyList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymAgency != null)
                {
                    viewModelGet.BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = summarySynonymBridges.BridgeSummarySynonymIndustryList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymIndustry != null)
                    {
                        commonSynonymIds.Add(bridgeSummarySynonymIndustry.RfpsummarySynonymId);
                    }
                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeAgencyContractVehicleSummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymAgency bridgeSummarySynonymAgency = summarySynonymBridges.BridgeSummarySynonymAgencyList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymAgency != null)
                {
                    viewModelGet.BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymContractVehicle != null)
                    {
                        commonSynonymIds.Add(bridgeSummarySynonymContractVehicle.RfpsummarySynonymId);
                    }
                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeStateIndustrySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymStates bridgeSummarySynonymStates = summarySynonymBridges.BridgeSummarySynonymStatesList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymStates != null)
                {
                    viewModelGet.BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = summarySynonymBridges.BridgeSummarySynonymIndustryList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymIndustry != null)
                    {
                        commonSynonymIds.Add(bridgeSummarySynonymIndustry.RfpsummarySynonymId);
                    }
                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeStateContractVehicleSummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymStates bridgeSummarySynonymStates = summarySynonymBridges.BridgeSummarySynonymStatesList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymStates != null)
                {
                    viewModelGet.BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymContractVehicle != null)
                    {
                        commonSynonymIds.Add(bridgeSummarySynonymContractVehicle.RfpsummarySynonymId);
                    }
                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeStateAgencySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymStates bridgeSummarySynonymStates = summarySynonymBridges.BridgeSummarySynonymStatesList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymStates != null)
                {
                    viewModelGet.BridgeSummarySynonymAgency bridgeSummarySynonymAgency = summarySynonymBridges.BridgeSummarySynonymAgencyList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (bridgeSummarySynonymAgency != null)
                    {
                        commonSynonymIds.Add(bridgeSummarySynonymAgency.RfpsummarySynonymId);
                    }
                }
            }

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeIndustrySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = summarySynonymBridges.BridgeSummarySynonymIndustryList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymIndustry != null)
                {
                    commonSynonymIds.Add(bridgeSummarySynonymIndustry.RfpsummarySynonymId);
                }
            }


            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeContractVehicleSummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymContractVehicle != null)
                {
                    commonSynonymIds.Add(bridgeSummarySynonymContractVehicle.RfpsummarySynonymId);
                }
            }


            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeAgencySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymAgency bridgeSummarySynonymAgency = summarySynonymBridges.BridgeSummarySynonymAgencyList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymAgency != null)
                {
                    commonSynonymIds.Add(bridgeSummarySynonymAgency.RfpsummarySynonymId);
                }
            }


            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> OpportunityTypeStateSummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = null;

            List<decimal> commonSynonymIds = new List<decimal>();

            foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
            {
                viewModelGet.BridgeSummarySynonymStates bridgeSummarySynonymState = summarySynonymBridges.BridgeSummarySynonymStatesList.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                if (bridgeSummarySynonymState != null)
                {
                    commonSynonymIds.Add(bridgeSummarySynonymState.RfpsummarySynonymId);
                }
            }


            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityList, commonSynonymIds);

            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> FinalSummarySynonymEntity(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, List<decimal> commonSynonymIds)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            foreach (var rfpSummaryFieldEntityFromDB in rfpSummaryFieldEntityListFromDB)
            {
                List<RfpSummarySynonymEntity> RfpSummarySynonymEntityListTemp = rfpSummaryFieldEntityFromDB.RfpsummarySynonym.ToList();
                rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Clear();
                rfpSummaryFieldEntityList.Add(rfpSummaryFieldEntityFromDB);

                foreach (var commonSynonymId in commonSynonymIds)
                {
                    RfpSummarySynonymEntity rfpSummarySynonymEntity = RfpSummarySynonymEntityListTemp.FirstOrDefault(s => s.RfpsummarySynonymId == commonSynonymId);
                    if (rfpSummarySynonymEntity != null)
                    {
                        rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Add(rfpSummarySynonymEntity);
                    }
                }
            }



            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> PopulatePublicSummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {

            foreach (var rfpSummaryEntityFromDb in rfpSummaryFieldEntityListFromDB)
            {
                foreach (var synonymFromDb in rfpSummaryEntityFromDb.RfpsummarySynonym.ToList())
                {

                    viewModelGet.BridgeSummarySynonymAgency bridgeSummarySynonymAgency = summarySynonymBridges.BridgeSummarySynonymAgencyList.FirstOrDefault(s => s.RfpsummarySynonymId == synonymFromDb.RfpsummarySynonymId);
                    if (bridgeSummarySynonymAgency != null)
                    {
                        continue;
                    }

                    viewModelGet.BridgeSummarySynonymContractVehicle bridgeSummarySynonymContractVehicle = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.FirstOrDefault(s => s.RfpsummarySynonymId == synonymFromDb.RfpsummarySynonymId);
                    if (bridgeSummarySynonymContractVehicle != null)
                    {
                        continue;
                    }

                    viewModelGet.BridgeSummarySynonymIndustry bridgeSummarySynonymIndustry = summarySynonymBridges.BridgeSummarySynonymIndustryList.FirstOrDefault(s => s.RfpsummarySynonymId == synonymFromDb.RfpsummarySynonymId);
                    if (bridgeSummarySynonymIndustry != null)
                    {
                        continue;
                    }

                    viewModelGet.BridgeSummarySynonymOpportunityType bridgeSummarySynonymOpportunityType = summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList.FirstOrDefault(s => s.RfpsummarySynonymId == synonymFromDb.RfpsummarySynonymId);
                    if (bridgeSummarySynonymOpportunityType != null)
                    {
                        continue;
                    }

                    viewModelGet.BridgeSummarySynonymStates bridgeSummarySynonymStates = summarySynonymBridges.BridgeSummarySynonymStatesList.FirstOrDefault(s => s.RfpsummarySynonymId == synonymFromDb.RfpsummarySynonymId);
                    if (bridgeSummarySynonymStates != null)
                    {
                        continue;
                    }

                    RfpSummaryFieldEntity rfpSummaryField = rfpSummaryFieldEntityList.FirstOrDefault(c => c.RfpsummaryFieldId == rfpSummaryEntityFromDb.RfpsummaryFieldId);

                    rfpSummaryField.RfpsummarySynonym.Add(synonymFromDb);

                }
            }
            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> IndustrySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();

            foreach (var rfpSummaryFieldEntityFromDB in rfpSummaryFieldEntityListFromDB)
            {
                List<RfpSummarySynonymEntity> RfpSummarySynonymEntityListTemp = rfpSummaryFieldEntityFromDB.RfpsummarySynonym.ToList();
                rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Clear();

                rfpSummaryFieldEntityList.Add(rfpSummaryFieldEntityFromDB);

                foreach (var bridgeSummarySynonymIndustry in summarySynonymBridges.BridgeSummarySynonymIndustryList)
                {
                    RfpSummarySynonymEntity rfpSummarySynonymEntity = RfpSummarySynonymEntityListTemp.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymIndustry.RfpsummarySynonymId);
                    if (rfpSummarySynonymEntity != null)
                    {
                        rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Add(rfpSummarySynonymEntity);
                    }
                }
            }
            return rfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> ContractVehicleSummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> RfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();
            foreach (var rfpSummaryFieldEntityFromDB in rfpSummaryFieldEntityListFromDB)
            {
                List<RfpSummarySynonymEntity> RfpSummarySynonymEntityListTemp = rfpSummaryFieldEntityFromDB.RfpsummarySynonym.ToList();
                rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Clear();

                RfpSummaryFieldEntityList.Add(rfpSummaryFieldEntityFromDB);

                foreach (var bridgeSummarySynonymContractVehicle in summarySynonymBridges.BridgeSummarySynonymContractVehicleList)
                {
                    RfpSummarySynonymEntity rfpSummarySynonymEntity = RfpSummarySynonymEntityListTemp.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymContractVehicle.RfpsummarySynonymId);
                    if (rfpSummarySynonymEntity != null)
                    {
                        rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Add(rfpSummarySynonymEntity);
                    }
                }
            }
            return RfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> StateSummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {
            List<RfpSummaryFieldEntity> RfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();
            foreach (var rfpSummaryFieldEntityFromDB in rfpSummaryFieldEntityListFromDB)
            {
                List<RfpSummarySynonymEntity> rfpSummarySynonymEntityListTemp = rfpSummaryFieldEntityFromDB.RfpsummarySynonym.ToList();
                rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Clear();

                RfpSummaryFieldEntityList.Add(rfpSummaryFieldEntityFromDB);

                foreach (var bridgeSummarySynonymStates in summarySynonymBridges.BridgeSummarySynonymStatesList)
                {
                    RfpSummarySynonymEntity rfpSummarySynonymEntity = rfpSummarySynonymEntityListTemp.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymStates.RfpsummarySynonymId);
                    if (rfpSummarySynonymEntity != null)
                    {
                        rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Add(rfpSummarySynonymEntity);
                    }
                }
            }
            return RfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> opportunityTypeSummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {

            List<RfpSummaryFieldEntity> RfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();
            foreach (var rfpSummaryFieldEntityFromDB in rfpSummaryFieldEntityListFromDB)
            {
                List<RfpSummarySynonymEntity> rfpSummarySynonymEntityListTemp = rfpSummaryFieldEntityFromDB.RfpsummarySynonym.ToList();
                rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Clear();

                RfpSummaryFieldEntityList.Add(rfpSummaryFieldEntityFromDB);

                foreach (var bridgeSummarySynonymOpportunityType in summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList)
                {
                    RfpSummarySynonymEntity rfpSummarySynonymEntity = rfpSummarySynonymEntityListTemp.FirstOrDefault(s => s.RfpsummarySynonymId == bridgeSummarySynonymOpportunityType.RfpsummarySynonymId);
                    if (rfpSummarySynonymEntity != null)
                    {
                        rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Add(rfpSummarySynonymEntity);
                    }
                }
            }
            return RfpSummaryFieldEntityList;
        }

        private List<RfpSummaryFieldEntity> AgencySummarySynonym(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDB, viewModelGet.SummarySynonymBridges summarySynonymBridges)
        {

            List<RfpSummaryFieldEntity> RfpSummaryFieldEntityList = new List<RfpSummaryFieldEntity>();
            foreach (var rfpSummaryFieldEntityFromDB in rfpSummaryFieldEntityListFromDB)
            {
                List<RfpSummarySynonymEntity> rfpSummarySynonymEntityListTemp = rfpSummaryFieldEntityFromDB.RfpsummarySynonym.ToList();
                rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Clear();

                RfpSummaryFieldEntityList.Add(rfpSummaryFieldEntityFromDB);

                foreach (var BridgeSummarySynonymAgency in summarySynonymBridges.BridgeSummarySynonymAgencyList)
                {
                    RfpSummarySynonymEntity rfpSummarySynonymEntity = rfpSummarySynonymEntityListTemp.FirstOrDefault(s => s.RfpsummarySynonymId == BridgeSummarySynonymAgency.RfpsummarySynonymId);
                    if (rfpSummarySynonymEntity != null)
                    {
                        rfpSummaryFieldEntityFromDB.RfpsummarySynonym.Add(rfpSummarySynonymEntity);
                    }
                }
            }
            return RfpSummaryFieldEntityList;
        }

        private viewModelGet.SummarySynonymBridges SummarySynonymBridgesData(int? opportunityTypeId, int? stateId, int? agencyId, int? industryId, int? contractVehicleId)
        {

            viewModelGet.SummarySynonymBridges summarySynonymBridges = new viewModelGet.SummarySynonymBridges();

            summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList = _unitOfWork.BridgeSummarySynonymOpportunityTypeRepository.GetSelectedColumnWithWhare(b => b.OpportunityTypeId == opportunityTypeId,
              b => new viewModelGet.BridgeSummarySynonymOpportunityType()
              {
                  BridgeSummarySynonymOpportunityTypeId = b.BridgeSummarySynonymOpportunityTypeId,
                  RfpsummarySynonymId = b.RfpsummarySynonymId,
                  OpportunityTypeId = b.OpportunityTypeId
              }).ToList();


            summarySynonymBridges.BridgeSummarySynonymStatesList = _unitOfWork.BridgeSummarySynonymStatesRepository.GetSelectedColumnWithWhare(b => b.StateId == stateId,
              b => new viewModelGet.BridgeSummarySynonymStates()
              {
                  BridgeSummarySynonymStatesId = b.BridgeSummarySynonymStatesId,
                  RfpsummarySynonymId = b.RfpsummarySynonymId,
                  StateId = b.StateId
              }).ToList();

            summarySynonymBridges.BridgeSummarySynonymAgencyList = _unitOfWork.BridgeSummarySynonymAgencyRepository.GetSelectedColumnWithWhare(b => b.AgencyId == agencyId,
                b => new viewModelGet.BridgeSummarySynonymAgency()
                {
                    BridgeSummarySynonymAgencyId = b.BridgeSummarySynonymAgencyId,
                    RfpsummarySynonymId = b.RfpsummarySynonymId,
                    AgencyId = b.AgencyId
                }).ToList();

            summarySynonymBridges.BridgeSummarySynonymContractVehicleList = _unitOfWork.BridgeSummarySynonymContractVehicleRepository.GetSelectedColumnWithWhare(b => b.ContractVehicleId == contractVehicleId,
               b => new viewModelGet.BridgeSummarySynonymContractVehicle()
               {
                   BridgeSummarySynonymContractVehicleId = b.BridgeSummarySynonymContractVehicleId,
                   RfpsummarySynonymId = b.RfpsummarySynonymId,
                   ContractVehicleId = b.ContractVehicleId
               }).ToList();

            summarySynonymBridges.BridgeSummarySynonymIndustryList = _unitOfWork.BridgeSummarySynonymIndustryRepository.GetSelectedColumnWithWhare(b => b.IndustryId == industryId,
              b => new viewModelGet.BridgeSummarySynonymIndustry()
              {
                  BridgeSummarySynonymIndustryId = b.BridgeSummarySynonymIndustryId,
                  RfpsummarySynonymId = b.RfpsummarySynonymId,
                  IndustryId = b.IndustryId
              }).ToList();


            return summarySynonymBridges;

        }





        #endregion

        #region Delete Bridge Summary Synonym 
        public ClientResponse BridgeSummarySynonymDelete(int summarySynonymId)
        {
            DeleteStatus deleteStatus = EexcuteDeleteBridgeSummarySynonymProcedure(summarySynonymId);
            return Utility.MessageDeleteRecordFromDB(deleteStatus);
        }

        private DeleteStatus EexcuteDeleteBridgeSummarySynonymProcedure(int summarySynonymId)
        {
            DeleteStatus deleteStatus = new DeleteStatus();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbCategorySynonymId = new DataBaseParameter();
            dbCategorySynonymId.DBParameterName = "@SummarySynonymId";
            dbCategorySynonymId.DBParameterType = DatabaseDataType.Int;
            dbCategorySynonymId.DBParameterValue = summarySynonymId;

            dataBaseParameterList.Add(dbCategorySynonymId);


            List<DeleteStatus> deleteStatusList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spDeleteBridgeSummarySynonym]", deleteStatus, dataBaseParameterList);

            if (deleteStatusList != null && deleteStatusList.Count > 0)
            {
                return deleteStatusList[0];
            }
            return null;


        }


        #endregion

        #region Delete Bridge Category Synonym 

        public ClientResponse BridgeCategorySynonymDelete(int categorySynonymId)
        {
            DeleteStatus deleteStatus = EexcuteDeleteBridgeCategorySynonymProcedure(categorySynonymId);
            return Utility.MessageDeleteRecordFromDB(deleteStatus);
        }
        private DeleteStatus EexcuteDeleteBridgeCategorySynonymProcedure(int categorySynonymId)
        {
            DeleteStatus deleteStatus = new DeleteStatus();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbCategorySynonymId = new DataBaseParameter();
            dbCategorySynonymId.DBParameterName = "@CategorySynonymId";
            dbCategorySynonymId.DBParameterType = DatabaseDataType.Int;
            dbCategorySynonymId.DBParameterValue = categorySynonymId;

            dataBaseParameterList.Add(dbCategorySynonymId);


            List<DeleteStatus> deleteStatusList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spDeleteBridgeCategorySynonym]", deleteStatus, dataBaseParameterList);

            if (deleteStatusList != null && deleteStatusList.Count > 0)
            {
                return deleteStatusList[0];
            }
            return null;


        }


        #endregion
        private void Orderby(List<viewModelGet.CategoryAndSynonym> categoryAndSynonymList )
        {
          
            categoryAndSynonymList.OrderBy(c => c.Name);
        }
       
    }
}
