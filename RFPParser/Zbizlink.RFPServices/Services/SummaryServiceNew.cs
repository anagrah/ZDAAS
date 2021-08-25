using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zbizlink.RFPDataModel.Models;
using Zbizlink.RFPServices.Singleton;
using Zdaas.LoggerContracts;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPDataModel.Contracts;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPServices.Contracts;
using Zdaas.RFPServices.ViewModels;
using Zdaas.RFPSummary.Contracts;
using viewModelGet = Zbizlink.RFPServices.ViewModels.Get;

namespace Zdaas.RFPServices.Services
{
    public class SummaryServiceNew : ISummaryServiceNew
    {
        private readonly IUnitOfWork _unitOfWork;
        private IDocumentSummaryNew _documentSummaryNew;
        private List<RfpSummaryFieldEntity> _rfpSummaryFieldList;
        private readonly ILoggerManager _logger;
        public SummaryServiceNew(IUnitOfWork unitOfWork, ILoggerManager logger, IDocumentSummaryNew documentSummaryNew)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _documentSummaryNew = documentSummaryNew;
        }
        public List<SummaryModel> GetDocumentSummary(List<LineDetailModel> lineDetailModels, int? opportunityTypeId,
            int? agencyId,
            int? contractVehicleId,
            int? industryId,
            int? stateId)
        {
            _rfpSummaryFieldList = new List<RfpSummaryFieldEntity>();
            GetSummaryFieldFromDB(opportunityTypeId, agencyId, contractVehicleId, industryId, stateId);

            if (lineDetailModels.Count() > 100)
            {
                lineDetailModels = lineDetailModels.Take(100).ToList();
            }
            List<SummaryModel> summaryModels = _documentSummaryNew.Get(lineDetailModels, _rfpSummaryFieldList);           
            return summaryModels;
        }

        private void GetSummaryFieldFromDB(int? opportunityTypeId,
            int? agencyId,
            int? contractVehicleId,
            int? industryId,
            int? stateId)
        {

            _logger.LogInfo("start db class = SummaryServiceNew : method = GetSummaryFieldFromDB log 1 " + DateTime.Now);

            //_rfpSummaryFieldList = _unitOfWork.RfpSummaryFieldRepository.GetSelectedColumn(sf => new RfpSummaryFieldEntity()
            //{
            //    RfpsummaryFieldId = sf.RfpsummaryFieldId,
            //    FieldName = sf.FieldName,
            //    DisplayOrder = sf.DisplayOrder,
            //    Mandatory = sf.Mandatory,
            //    RfpsummarySynonym = (ICollection<RfpSummarySynonymEntity>)sf.RfpsummarySynonym.Select
            //       (synonym => new RfpSummarySynonymEntity()
            //       {
            //           Synonym = synonym.Synonym.ToLower(),
            //           SynonymLength = synonym.Synonym.Length
            //       }).ToList()
            //}).OrderBy(sf => sf.DisplayOrder).ToList();

            _rfpSummaryFieldList = GetSummarySynonymList(opportunityTypeId, agencyId, contractVehicleId, industryId, stateId);
            _logger.LogInfo("end db class = SummaryServiceNew : method = GetSummaryFieldFromDB log 1" + DateTime.Now);
            _logger.LogInfo("_rfpSummaryFieldList " + _rfpSummaryFieldList.Count());
            foreach (var _rfpSummaryField in _rfpSummaryFieldList)
            {
                _logger.LogInfo("_rfpSummaryField.RfpsummaryFieldId " + _rfpSummaryField.RfpsummaryFieldId);
                _logger.LogInfo("_rfpSummaryField.RfpsummarySynonym " + _rfpSummaryField.RfpsummarySynonym.Count());
                
                foreach (var RfpsummarySynonym in _rfpSummaryField.RfpsummarySynonym)
                {
                    _logger.LogInfo("RfpsummarySynonym " + RfpsummarySynonym.RfpsummarySynonymId);
                    string[] synonymArray = RfpsummarySynonym.Synonym.Split(" ");
                    int numberOfWord = 0;
                    foreach (var synonymWord in synonymArray)
                    {
                        if (synonymWord.Trim() != "")
                        {
                            numberOfWord++;
                        }
                    }

                    RfpsummarySynonym.SynonymNumberOfWord = numberOfWord;
                }
            }

        }

        
        public List<OpportunitySummaryViewModel> GetOpportunitySummary(decimal documentId)
        {
            //mutiple file
            //var opportunitySummary = _unitOfWork.RFPSummaryRepository.GetSelectedColumnWithWhare(summary => summary.RfpdocumentId == documentId,
            //      summary => new OpportunitySummaryViewModel()
            //      {
            //          FieldName = summary.FieldName,
            //          FieldValue = summary.FieldValue,
            //          FieldTypeID = summary.FieldTypeId,
            //          IndexNo = summary.DisplayOrder

            //      }).ToList();


            //return opportunitySummary;

            return null;
        }

        
        public Opportunity OpportunitySummaryParameters(Opportunity opportunity)
        {
            //List<Rfpsummary> rfpsummaries = new List<Rfpsummary> {
            //new Rfpsummary { FieldName = "Agency", FieldValue = opportunity.AgencyId.ToString() , FieldTypeId =  4 , DisplayOrder= null, UserId = opportunity.UserId, CompanyId = opportunity.CompanyId, CreatedBy= opportunity.UserId},
            //new Rfpsummary { FieldName = "State", FieldValue = opportunity.StateId.ToString() , FieldTypeId =   4 , DisplayOrder= null, UserId = opportunity.UserId, CompanyId = opportunity.CompanyId, CreatedBy= opportunity.UserId},
            //new Rfpsummary { FieldName = "Industry", FieldValue = opportunity.IndustryId.ToString(),FieldTypeId =  4 , DisplayOrder= null, UserId = opportunity.UserId, CompanyId = opportunity.CompanyId, CreatedBy= opportunity.UserId},
            //new Rfpsummary { FieldName = "ContractVehicle", FieldValue =  opportunity.ContractVehicleId.ToString() , FieldTypeId =  4 , DisplayOrder= null, UserId = opportunity.UserId, CompanyId = opportunity.CompanyId, CreatedBy= opportunity.UserId}
            //};
            //foreach (var summary in rfpsummaries)
            //{
            //    Rfpsummary rfpSummary = new Rfpsummary();
            //    rfpSummary.FieldName = summary.FieldName;
            //    rfpSummary.FieldValue = summary.FieldValue;
            //    rfpSummary.FieldTypeId = summary.FieldTypeId;
            //    rfpSummary.DisplayOrder = summary.DisplayOrder;
            //    rfpSummary.UserId = summary.UserId;
            //    rfpSummary.CompanyId = summary.CompanyId;
            //    rfpSummary.CreatedBy = summary.CreatedBy;
            //    opportunity.Rfpsummary.Add(rfpSummary);
            //}
            return opportunity;
        }

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

                    rfpSummarySynonymEntity.RfpsummarySynonymId = rfpSummarySynonym.RfpsummarySynonymId;
                    rfpSummarySynonymEntity.Synonym = rfpSummarySynonym.Synonym;
                    rfpSummarySynonymEntity.CreatedBy = rfpSummarySynonym.CreatedBy;
                    rfpSummarySynonymEntity.CreatedDate = rfpSummarySynonym.CreatedDate;
                    rfpSummarySynonymEntity.RfpsummaryFieldId = rfpSummarySynonym.RfpsummaryFieldId;


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

             AddMandatorySummaryField(rfpSummaryFieldEntityListFromDbClone, rfpSummaryFieldEntityList);
            return rfpSummaryFieldEntityList;
        }

        private void AddMandatorySummaryField(List<RfpSummaryFieldEntity> rfpSummaryFieldEntityListFromDbClone, List<RfpSummaryFieldEntity> rfpSummaryFieldEntityList)
        {          
            foreach (var rfpSummaryFieldEntityListFromDb in rfpSummaryFieldEntityListFromDbClone)
            {
                if(rfpSummaryFieldEntityListFromDb.Mandatory == true)
                {
                    RfpSummaryFieldEntity RfpSummaryFieldEntity = rfpSummaryFieldEntityList.FirstOrDefault(f => f.RfpsummaryFieldId == rfpSummaryFieldEntityListFromDb.RfpsummaryFieldId);
                    if(RfpSummaryFieldEntity == null)
                    {
                        rfpSummaryFieldEntityList.Add(RfpSummaryFieldEntity);
                    }                   
                }
            }
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

            rfpSummaryFieldEntityList = FinalSummarySynonymEntity(rfpSummaryFieldEntityListFromDB, commonSynonymIds);

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
    }
}
