using AutoMapper;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using RFPStoreProcedureModel;
using RFPStoreProcedureModel.Enum;
using System;
using System.Collections.Generic;
using System.Linq.Dynamic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection.Metadata;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;

using Zdaas.LoggerContracts;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPDataModel.Contracts;

using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPServices.Common;
using Zdaas.RFPServices.Contracts;
using Zdaas.RFPServices.Models;
using Zdaas.RFPServices.Singleton;
using Zdaas.RFPServices.ViewModels;
using Zdaas.RFPServices.ViewModels.Opportunity;
using Microsoft.CodeAnalysis.Scripting;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using System.Threading.Tasks;
using Zdaas.RFPServices.StoreProcedure;
using Zdaas.RFPServices.StoreProcedure.Contracts;
using Zbizlink.RFPDataModel.Models;
using Zdaas.RFPBusinessModel;
using Grpc.Net.Client;
using Zbizlink.RFPCommon.Models;
using grpcProto = Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto;
using System.Net.Http;
using Grpc.Net.Client.Web;
using Polly;
using Zbizlink.PollyResilience;
using System.Reflection;
using Zbizlink.RFPServices.Singleton;

namespace Zdaas.RFPServices.Services
{
    public class OpportunityService : IOpportunityService
    {
        private readonly IUnitOfWork _unitOfWork;
        private IZDOpportunityPublish _opportunityPublish;
        private ISummaryService _summary;
        private ILaborCategoryService _laborCategoryService;
        private IDocumentService _documentService;
        private List<CategoryEntity> _categoriesList;
        private IMapper _mapper;
        private ILoggerManager _logger;
        private ISummaryServiceNew _summaryServiceNew;
        private IPreviewDocument _previewDocument;
        private IDBProcedure _dBProcedure;
        private ZdaasAppSettings _zdaasAppSettings;
        private readonly IAsyncPolicy _circuitBreaker;
        public OpportunityService(IUnitOfWork unitOfWork, IZDOpportunityPublish opportunityPublish, ISummaryService summary,
            ILaborCategoryService laborCategoryService, ILoggerManager logger, IMapper mapper, IDocumentService documentService,
            ISummaryServiceNew summaryServiceNew, IPreviewDocument previewDocument, IDBProcedure dBProcedure)
        {
            _unitOfWork = unitOfWork; //new UnitOfWork();
            _opportunityPublish = opportunityPublish;
            _summary = summary;
            _laborCategoryService = laborCategoryService;
            _logger = logger;
            _mapper = mapper;
            _documentService = documentService;
            _summaryServiceNew = summaryServiceNew;
            _previewDocument = previewDocument;
            _dBProcedure = dBProcedure;
            _circuitBreaker = PollyCircuitBreaker.CircuitBreakerGrpcCall(5, 30);
        }


        public ClientResponse GetSavedEmptyOpportunity(decimal opportunityId)
        {

            // GetspOpportunityTemp(opportunityId);

            //int con = 1;
            //var filters = new List<Func<Rfpdocument, bool>>();
            //filters.Add(x => x.RfpdocumentId == 2);
            //filters.Add(x => x.RfpdocumentId == 6);
            //var cond = "s2 == \"TEST1\"";
            //var t = _unitOfWork.RfpdocumentRepository.GetMany(d => cond);

            //UpdataFilePath("");

            //Opportunity opportunity = GetspOpportunity(opportunityId);

            //if (opportunity == null)
            //{
            //    return "";
            //}
            //RfpOpportunityViewModel rfpOpportunityViewModel = new RfpOpportunityViewModel();

            //rfpOpportunityViewModel.OpportunityId = opportunity.OpportunityId;
            //rfpOpportunityViewModel.OpportunityName = opportunity.OpportunityName;

            //List<Rfpsummary> rfpsummaryList = GetspRFPSummary(opportunityId);

            //if (rfpsummaryList != null && rfpsummaryList.Count > 0)
            //{
            //    foreach (var rfpsummary in rfpsummaryList)
            //    {
            //        RfpSummaryViewModel rfpSummaryViewModel = new RfpSummaryViewModel();
            //        rfpSummaryViewModel.FieldDisplayName = rfpsummary.FieldName;
            //        rfpSummaryViewModel.FieldText = rfpsummary.FieldValue;
            //        rfpSummaryViewModel.ControlType = rfpsummary.FieldType.FieldTypeShortDesc;
            //        rfpSummaryViewModel.FiledTypeId = rfpsummary.FieldTypeId;
            //        rfpSummaryViewModel.DisplayOrder = rfpsummary.DisplayOrder;

            //        rfpOpportunityViewModel.RfpSummaryViewModel.Add(rfpSummaryViewModel);
            //    }
            //}

            //List<RfpcategoryData> rfpcategoryDataList = GetspRFPCategoryData(opportunityId);

            //if (rfpcategoryDataList != null && rfpcategoryDataList.Count > 0)
            //{
            //    foreach (var rfpcategoryData in rfpcategoryDataList)
            //    {
            //        RfpCategoryDataViewModel rfpCategoryDataViewModel = new RfpCategoryDataViewModel();
            //        rfpCategoryDataViewModel.CategoryId = rfpcategoryData.CategoryId;
            //        rfpCategoryDataViewModel.Name = rfpcategoryData.Category.Name;
            //        rfpCategoryDataViewModel.CategoryData = rfpcategoryData.CategoryData;

            //        rfpOpportunityViewModel.RfpCategoryDataViewModel.Add(rfpCategoryDataViewModel);
            //    }

            //}


            //List<Rfpdocument> rfpdocumentList = GetspRfpDocumentByOpportunityId(opportunityId);

            //if (rfpdocumentList != null && rfpdocumentList.Count > 0)
            //{
            //    foreach (var rfpDocument in rfpdocumentList)
            //    {
            //        RfpDocumentViewModel rfpDocumentViewModel = new RfpDocumentViewModel();

            //        rfpDocumentViewModel.OpportunityName = rfpDocument.DocName;
            //        rfpDocumentViewModel.FileName = rfpDocument.DocName;
            //        rfpDocumentViewModel.FileNameColor = "black";
            //        rfpDocumentViewModel.fileRFPDbId = rfpDocument.RfpdocumentId;
            //        rfpDocumentViewModel.HTMLFile = (opportunity.OldOpportunity == false) ? _previewDocument.Get(rfpDocument.DocContent) : WebUtility.HtmlDecode(rfpDocument.DocContent);
            //        rfpDocumentViewModel.SavedSharePoint = true;
            //        rfpDocumentViewModel.FilePathSharePoint = rfpDocument.FilePath;
            //        rfpDocumentViewModel.Saved = true;
            //        rfpDocumentViewModel.View = rfpDocument.DocContent == null ? false : true;
            //        rfpDocumentViewModel.Parsed = rfpDocument.Parsed;
            //    }
            //}


            //===================================================== old login==============================================
            //_logger.LogInfo("start db class = OpportunityService : method = GetSavedEmptyOpportunity log 1" + DateTime.Now);

            List<RfpOpportunityViewModel> rfpOpportunityList = _unitOfWork.opportunityRepository.GetSelectedColumnWithWhare(
                   oppor => oppor.OpportunityId == opportunityId, oppor => new RfpOpportunityViewModel()
                   {

                       OpportunityId = oppor.OpportunityId,
                       OpportunityName = oppor.OpportunityName,
                       RfpSummaryViewModel = (ICollection<RfpSummaryViewModel>)oppor.Rfpsummary.Select(rfpSum => new RfpSummaryViewModel()
                       {
                           FieldDisplayName = rfpSum.FieldName,
                           FieldText = rfpSum.FieldValue,
                           ControlType = rfpSum.FieldType.FieldTypeShortDesc,
                           FiledTypeId = rfpSum.FieldTypeId,
                           DisplayOrder = rfpSum.DisplayOrder
                       }).OrderBy(o => o.DisplayOrder),

                       RfpCategoryDataViewModel = (ICollection<RfpCategoryDataViewModel>)oppor.RfpcategoryData.Select(rfpcategoryData => new RfpCategoryDataViewModel()
                       {
                           CategoryId = rfpcategoryData.CategoryId,
                           Name = rfpcategoryData.Category.Name,
                           CategoryData = rfpcategoryData.CategoryData
                       }),
                       RfpDocumentViewModel = (ICollection<RfpDocumentViewModel>)oppor.Rfpdocument.Select(rfpDocument => new RfpDocumentViewModel()
                       {
                           OpportunityName = rfpDocument.DocName,
                           FileName = rfpDocument.DocName,
                           FileNameColor = "black",
                           fileRFPDbId = rfpDocument.RfpdocumentId,
                           HTMLFile = (oppor.OldOpportunity == false) ? _previewDocument.Get(rfpDocument.DocContent) : WebUtility.HtmlDecode(rfpDocument.DocContent),
                           SavedSharePoint = true,
                           FilePathSharePoint = rfpDocument.FilePath,
                           Saved = true,
                           View = rfpDocument.DocContent == null ? false : true,
                           Parsed = rfpDocument.Parsed
                       })
                   }
                   ).ToList();

            //_logger.LogInfo("end db class = OpportunityService : method = GetSavedEmptyOpportunity log 1" + DateTime.Now);

            
            if (rfpOpportunityList != null && rfpOpportunityList.Count > 0)
            {
                RfpOpportunityViewModel rfpOpportunity = rfpOpportunityList[0];
                SetMandatoryField(rfpOpportunity);
                return Utility.GenerateResponse(Enum.WebApiResponseCode.Success, rfpOpportunity);
            }

            return Utility.GenerateResponse(Enum.WebApiResponseCode.Fail);
        }

        private void SetMandatoryField(RfpOpportunityViewModel rfpOpportunity)
        {
            if (rfpOpportunity != null && rfpOpportunity.RfpSummaryViewModel != null && rfpOpportunity.RfpSummaryViewModel.Count == 0)
            {
                return;
            }

            List<RfpSummaryFieldEntity> rfpSummaryFieldEntities = SummaryFieldSingleton.GetInstance(_unitOfWork).SummaryFieldList;
            List<RfpSummaryViewModel> rfpSummaryViewModelList = rfpOpportunity.RfpSummaryViewModel.ToList();

            foreach (var RfpSummaryViewModel in rfpSummaryViewModelList)
            {
              RfpSummaryFieldEntity rfpSummaryFieldEntity =  rfpSummaryFieldEntities.FirstOrDefault(f => f.Mandatory == true);
                if (rfpSummaryFieldEntity != null)
                {
                    RfpSummaryViewModel.Mandatory = true;
                }else
                {
                    RfpSummaryViewModel.Mandatory = false;
                }
            }
        }

        public async Task<ClientResponse> CreateEmptyOpportunity(string transactionId, string fileNameJsonList, string opportunityName, 
            int? agencyId, int? stateId, int? contractVehicleId, int? industryId, string type, IFormFile formFile,
             decimal userId, decimal ClientId, decimal SegmentId, decimal companyID, bool CampaignUser, ZdaasAppSettings zdaasAppSettings)
        {
            _logger.logTransation(transactionId, this.GetType(), MethodBase.GetCurrentMethod());
            int opportunityTypeId = 0;
            if (type == "Federal")
            {
                opportunityTypeId = 1;
            }
            else if (type == "State")
            {
                opportunityTypeId = 2;
            }
            else if (type == "Commercial")
            {
                opportunityTypeId = 3;
            }

            _zdaasAppSettings = zdaasAppSettings;
            List<SummaryModel> summaryModelList;
            string statusCode = "";
            string statusMessage = "";
            decimal opportunityId = 0;
            List<FileNameModel> fileNameList;
            string originalHtmlFile = "";
            string finalHtmlFile = "";
            List<HTMLLineModel> htmlLineCollection;
            List<LineDetailModel> lineDetailCollection;
            List<TreeNodeModel> treeNodeList;
            string htmlFileName = "";
            fileNameList =
                    (List<FileNameModel>)JsonConvert.DeserializeObject(fileNameJsonList, typeof(List<FileNameModel>));

            if (fileNameList.Count() < 1)
            {

                return Utility.GenerateResponse(Enum.WebApiResponseCode.Fail);
            }

            bool result = false;

            if (formFile != null)
            {
                htmlFileName = formFile.FileName;
                result = _documentService.HTMLConversion(formFile, out originalHtmlFile, out statusCode, out statusMessage);
                if (result == false)
                {
                    return Utility.GenerateResponse(Enum.WebApiResponseCode.Fail);
                }
                result = _previewDocument.Get(originalHtmlFile, out finalHtmlFile, out htmlLineCollection, out lineDetailCollection);
            }
            else
            {
                result = true;
                statusCode = "1";
            }


            if (result == true && statusCode == "1")
            {
                opportunityId = CreateNewEmptyOpportunity(opportunityName, agencyId, stateId, contractVehicleId,industryId, opportunityTypeId, companyID, userId,
                                                                    ClientId, SegmentId, fileNameList, htmlFileName, originalHtmlFile,
                                                                 finalHtmlFile);
                summaryModelList = EmptySymmary(opportunityName, opportunityTypeId, agencyId, contractVehicleId, industryId, stateId);

                Opportunity opportunity = new Opportunity();
                opportunity.OpportunityName = opportunityName;
                opportunity.CompanyId = companyID;
                opportunity.UserId = userId;
                opportunity.ClientId = ClientId;
                opportunity.SegmentId = SegmentId;
                opportunity.CreatedBy = userId;
                opportunity.AgencyId = agencyId;
                opportunity.StateId = stateId;
                opportunity.IndustryId = industryId;
                opportunity.ContractVehicleId = contractVehicleId;
                //var opportunities = _summaryServiceNew.OpportunitySummaryParameters(opportunity);
                int index = 1;
                //foreach (var opportunityy in opportunities.Rfpsummary)
                //{
                //    SummaryModel summaryModel = new SummaryModel();
                //    summaryModel.FieldDisplayName = opportunityy.FieldName;
                //    summaryModel.FieldText = opportunityy.FieldValue;
                //    summaryModel.FiledTypeId = opportunityy.FieldTypeId;
                //    summaryModel.DisplayOrder = opportunityy.DisplayOrder;
                //    summaryModel.ControlType = "dropdown";
                //    summaryModel.Index = index;
                //    summaryModel.Synonym = null;
                //    summaryModel.Extracted = false;
                //    // summaryModel.
                //    summaryModelList.Add(summaryModel);
                //    index++;
                //}
                foreach (var summary in summaryModelList)
                {
                    if (summary.Index == 0)
                    {
                        summary.Index = index;
                        index++;
                    }
                }
                summaryModelList = summaryModelList.OrderBy(s => s.Index).ToList();//

                if (opportunityId > 0)
                {
                    CreateEmptyOpportunity createEmptyOpportunity = new CreateEmptyOpportunity();
                    createEmptyOpportunity.opportunityId = opportunityId;
                    createEmptyOpportunity.opportunityName = opportunityName;
                    createEmptyOpportunity.fileNameList = fileNameList;                   
                    createEmptyOpportunity.summary = summaryModelList;
                   // _logger.LogInfo("CampaignUser : " + CampaignUser);
                    if (CampaignUser == true)
                    {
                        ClientResponse clientResponse = await PostOpportunityToCampaignManagementAsync(transactionId, userId, createEmptyOpportunity, opportunityName);

                        if (clientResponse.code == Enum.WebApiResponseCode.Success)
                        {
                            return Utility.GenerateResponse(Enum.WebApiResponseCode.Success, createEmptyOpportunity);
                        }
                        else
                        {

                        }
                    }
                    else
                    {
                        return Utility.GenerateResponse(Enum.WebApiResponseCode.Success, createEmptyOpportunity);
                    }

                }

                return Utility.GenerateResponse(Enum.WebApiResponseCode.Fail);
            }


            return Utility.GenerateResponse(Enum.WebApiResponseCode.Fail);
        }

        private bool InsertNewFile(string opportunityId, string opportunityName, decimal companyId, decimal userId,
                    decimal clientId, decimal segmentId, List<FileNameModel> fileNameList)
        {

            List<Rfpdocument> rfpdocumentList = new List<Rfpdocument>();
            foreach (var fileName in fileNameList)
            {
                Rfpdocument rfpdocument = new Rfpdocument();
                rfpdocument.DocName = fileName.Name;
                rfpdocument.FilePath = fileName.Path;
                rfpdocument.OpportunityId = Convert.ToDecimal(opportunityId);
                _unitOfWork.RfpdocumentRepository.Insert(rfpdocument);
                rfpdocumentList.Add(rfpdocument);
            }
            //_logger.LogInfo("start db class = OpportunityService : method = InsertNewFile log 1" + DateTime.Now);
            _unitOfWork.Save();
           // _logger.LogInfo("end db class = OpportunityService : method = InsertNewFile log 1" + DateTime.Now);

            foreach (var fileName in fileNameList)
            {
                Rfpdocument rfpDocument = rfpdocumentList.FirstOrDefault(doc => doc.DocName == fileName.Name);

                if (rfpDocument != null)
                {
                    fileName.fileRFPDbId = Convert.ToString(rfpDocument.RfpdocumentId);
                }

            }



            return true;
        }


        private decimal CreateNewEmptyOpportunity(string opportunityName, int ?agencyId, int ?stateId, int ?contractVehicleId, 
            int ?industryId, int oppTypeId, decimal companyId, decimal userId,
                    decimal clientId, decimal segmentId, List<FileNameModel> fileNameList, string htmlFileName,
                    string orignalHtmlfile, string finalHtmlFile)
        {

            Opportunity opportunity = new Opportunity();
            List<HTMLLineModel> htmlLineCollection;
            List<LineDetailModel> lineDetailCollection;
            opportunity.OpportunityName = opportunityName;
            opportunity.CompanyId = companyId;
            opportunity.UserId = userId;
            opportunity.ClientId = clientId;
            opportunity.SegmentId = segmentId;
            opportunity.CreatedBy = userId;
            opportunity.AgencyId = agencyId;
            opportunity.StateId = stateId;
            opportunity.IndustryId = industryId;
            opportunity.ContractVehicleId = contractVehicleId;
            opportunity.OpportunityTypeId = oppTypeId;
                  

            foreach (var fileName in fileNameList)
            {
                Rfpdocument rfpdocument = new Rfpdocument();
                rfpdocument.DocName = fileName.Name;
                if (fileName.Name == htmlFileName)
                {
                    rfpdocument.DocContent = orignalHtmlfile;
                }
                rfpdocument.FilePath = fileName.Path;
                rfpdocument.UserId = userId;
                rfpdocument.CompanyId = companyId;
                rfpdocument.ClientId = clientId;
                rfpdocument.SegmentId = segmentId;
                rfpdocument.CreatedBy = userId;

                opportunity.Rfpdocument.Add(rfpdocument);
            }

            int? opportunityTypeId = (opportunity.OpportunityTypeId == null) ? 0 : int.Parse(opportunity.OpportunityTypeId.ToString());
            agencyId = (opportunity.AgencyId == null) ? 0 : int.Parse(opportunity.AgencyId.ToString());
            contractVehicleId = (opportunity.ContractVehicleId == null) ? 0 : int.Parse(opportunity.ContractVehicleId.ToString());
            industryId = (opportunity.IndustryId == null) ? 0 : int.Parse(opportunity.IndustryId.ToString());
            stateId = (opportunity.StateId == null) ? 0 : int.Parse(opportunity.StateId.ToString());

            List<SummaryModel> summaryModelList = EmptySymmary(opportunityName, opportunityTypeId,
            agencyId,
            contractVehicleId,
            industryId,
            stateId);  

            foreach (var summaryModel in summaryModelList)
            {
                Rfpsummary rfpSummary = new Rfpsummary();

                rfpSummary.FieldName = summaryModel.FieldDisplayName;


                rfpSummary.FieldValue = summaryModel.FieldText;


                rfpSummary.FieldTypeId = summaryModel.FiledTypeId;
                rfpSummary.DisplayOrder = summaryModel.DisplayOrder;
                rfpSummary.UserId = userId;
                rfpSummary.CompanyId = companyId;
                rfpSummary.CreatedBy = userId;
                rfpSummary.RfpsummaryFieldId = summaryModel.RFPSummaryFieldId;


                opportunity.Rfpsummary.Add(rfpSummary);
            }
            // Basic purpose of OpportunitySummaryParameters method is to send agencyId, stateId, industryId, ContractVehicleId 

            var opportunities = _summaryServiceNew.OpportunitySummaryParameters(opportunity);

            _unitOfWork.opportunityRepository.Insert(opportunities);

            //_logger.LogInfo("start db class = OpportunityService : method = CreateNewEmptyOpportunity log 1" + DateTime.Now);
            _unitOfWork.Save();
            // _logger.LogInfo("end db class = OpportunityService : method = CreateNewEmptyOpportunity log 1" + DateTime.Now);

            foreach (var fileName in fileNameList)
            {
                Rfpdocument rfpDocument = opportunity.Rfpdocument.FirstOrDefault(doc => doc.DocName == fileName.Name);

                if (rfpDocument != null)
                {

                    fileName.fileRFPDbId = Convert.ToString(rfpDocument.RfpdocumentId);
                    if (rfpDocument.DocName == htmlFileName)
                    {
                        fileName.HtmlFile = finalHtmlFile;
                    }
                }

            }

            return opportunity.OpportunityId;
        }  

        public ClientResponse Publish(decimal opportunityId,
            decimal userId, decimal companyId, decimal clientId, decimal SegmentId//,
                                                                                  //out OpportunityEntity opportunity,
                                                                                  //out List<OpportunitySummaryViewModel> opportunitySummaryList,
                                                                                  //out List<CapabilityViewModel> capabilityVMList,
                                                                                  //out List<CheckListViewModel> checkListVMList,
                                                                                  //out List<JobTitleModel> jobTitleModelList,
                                                                                  //out List<OpportunityDocument> opportunityDocumentList
            )
        {


            Publish publish = new Publish();
            Opportunity opportunityDB = _unitOfWork.opportunityRepository.GetByID(opportunityId);
            OpportunityEntity opportunity = _mapper.Map<OpportunityEntity>(opportunityDB);

            List<OpportunitySummaryViewModel> opportunitySummaryList = _summary.GetOpportunitySummary(opportunityId);
            //opportunity = null;
            List<CapabilityViewModel> capabilityVMList = null;
            LaborModel Labor = null;
            List<JobTitleModel> jobTitleModelList = null;
            List<CheckListViewModel> checkListVMList = null;

            List<OpportunityDocument> opportunityDocumentList = null;

            List<Rfpdocument> rfpdocumentPathList;

            //List<DocSolicitaionNo> docSolicitaionNo = GetdocumentInfoById(opportunityId);
            OpportunitySolicitaionNo opportunitySolicitaionNo = _dBProcedure.GetOpportunitySolicitaionNo(opportunityId);
            //Opportunity opportunitySolicitationNo = _unitOfWork.opportunityRepository.GetByID(opportunityId);
            //if (opportunitySolicitationNo == null)
            //{
            //    return MessageStatus.Error;
            //}

            //_logger.LogInfo("start db class = OpportunityService : method = Publish log 1" + DateTime.Now);
            rfpdocumentPathList = _unitOfWork.RfpdocumentRepository.GetSelectedColumnWithWhare(d => d.OpportunityId == opportunityId,
                d => new Rfpdocument
                {
                    RfpdocumentId = d.RfpdocumentId,
                    DocName = d.DocName,
                    FilePath = d.FilePath
                }).ToList();
            //_logger.LogInfo("end db class = OpportunityService : method = Publish log 1" + DateTime.Now);
            List<RfpcategoryData> categoryDataList = GetCategoryData(opportunityId);

            //IEnumerable<RfpcategoryData> categoryDataList = _unitOfWork.RfpCategoryDataRepository.GetManyQueryable(cat => cat.RfpdocumentId == documentId);



            //_categoriesList = _categoryService.GetAll();
            _categoriesList = CategorySingleton.GetInstance(_unitOfWork).CategoryList;
            string laborData = GetCategoryData(categoryDataList, "Labor");
            if (laborData != "")
            {
                jobTitleModelList = _laborCategoryService.GetForOpportunity(laborData);
            }



            // if (categoryDataList != null && categoryDataList.Count() > 0)
            // {
            OpportunityEntity opportunityPublished;

            OpportunityEntity opportunityEntity = _opportunityPublish.Publish(_categoriesList, categoryDataList, opportunitySolicitaionNo.SolicitationNo,
               opportunitySolicitaionNo.CompanyId, opportunitySolicitaionNo.ClientId, opportunitySolicitaionNo.SegmentId, rfpdocumentPathList, opportunity,
               out opportunityPublished);


            //OpportunityEntity opportunityEntity = _opportunityPublish.Publish(_categoriesList, categoryDataList, docSolicitaionNo.SolicitationNo,
            //    docSolicitaionNo.CompanyId, docSolicitaionNo.ClientId, docSolicitaionNo.SegmentId, docSolicitaionNo.FilePath, docSolicitaionNo.RFPDocumentId, out opportunityPublished);



            var opp = _mapper.Map<Opportunity>(opportunityEntity);
            var opportunityHeadingList = _mapper.Map<ICollection<OpportunityHeading>>(opportunityEntity.OpportunityHeading);

            //opportunityDB.OpportunityHeading = opportunityHeading;

            // var testopp1 = _mapper.Map<TestOpportunity>(opportunityEntity);

            //opportunityDB.Published = true;

            //var opp = _mapper.Map<Opportunity>(opportunityEntity);
            //opp.Published = true;

            opportunityDB.ModifiedDate = DateTime.Now;
            opportunityDB.UserId = userId;
            opportunityDB.ClientId = clientId;
            opportunityDB.CompanyId = companyId;
            opportunityDB.SegmentId = SegmentId;
            _unitOfWork.opportunityRepository.Update(opportunityDB);
            //_unitOfWork.opportunityRepository.Insert(opp);

            //_unitOfWork.Save();




            // opportunity = Mapper.Map<OpportunityEntity>(opp);
            // var opp1 = Mapper.Map<OpportunityMV>(opp);
            //var opp1 = Mapper.Map<OpportunityEntity>(opp);

            //foreach (var categoryData in categoryDataList)
            //{
            //    categoryData.Published = true;
            //    _unitOfWork.RfpCategoryDataRepository.Update(categoryData);
            //}
            //}


            //Rfpdocument rfpDocument = _unitOfWork.RfpdocumentRepository.GetQueryable(doc => doc.RfpdocumentId == documentId).SingleOrDefault();
            //disable update status by order of Mr. Amjid.
            //multiple file upload
            //UpdateDocumentPubliStatus(documentId);
            //GetdocumentInfoById(documentId);


            // if (rfpDocument == null) return MessageStatus.Error;

            // rfpDocument.Published = true;
            //_unitOfWork.RfpdocumentRepository.Update(rfpDocument);


           // _logger.LogInfo("start db class = OpportunityService : method = Publish log 2" + DateTime.Now);
            _unitOfWork.Save();
           // _logger.LogInfo("end db class = OpportunityService : method = Publish log 2" + DateTime.Now);
            //opportunity = GetOpportunity(documentId);
            opportunity = opportunityPublished;
            capabilityVMList = PopulateCapability(opportunity);
            checkListVMList = CheckListCapability(opportunity);

            //foreach (var Published in opportunityPublished.OpportunityHeading)
            //{
            //    var result = opportunity.OpportunityHeading.Where(l => l.Heading == Published.Heading);
            //}

            //if (opportunity == null) return MessageStatus.Error;

            PopulateOpportunityFieldForBizLink(opportunitySummaryList, opportunity);
            ChangeFieldNameForBizLink(opportunitySummaryList);

           // _logger.LogInfo("start db class = OpportunityService : method = Publish log 3" + DateTime.Now);
            opportunityDocumentList = _unitOfWork.RfpdocumentRepository.GetSelectedColumnWithWhare(d => d.OpportunityId == opportunityId,
                d => new OpportunityDocument()
                {
                    OpportunityDocumentID = d.RfpdocumentId,
                    DocumentName = d.DocName,
                    DocumentPath = d.FilePath
                }).ToList();

            //_logger.LogInfo("end db class = OpportunityService : method = Publish log 3" + DateTime.Now);
            publish.Opportunity = opportunity;
            publish.Summary = opportunitySummaryList;
            publish.CheckList = checkListVMList;
            publish.Capability = capabilityVMList;
            publish.Labor = jobTitleModelList;
            publish.OpportunityDocument = opportunityDocumentList;

            opportunity.CompanySegmentID = SegmentId;
            opportunity.CompanyId = companyId;
            opportunity.ClientId = clientId;
            //_logger.LogInfo("class = OpportunityService : method = Publish log 4 SegmentId = " + SegmentId + " " + DateTime.Now);

            return Utility.GenerateResponse(Enum.WebApiResponseCode.Success, publish);
        }




        public OpportunityEntity GetOpportunity(decimal RfpdocumentId)
        {
            //Multiple file
            //var opportunityList = _unitOfWork.opportunityRepository.GetSelectedColumnWithWhare(opp => opp.RfpdocumentId == RfpdocumentId,
            //     opp => new OpportunityEntity
            //     {
            //         OpportunityId = opp.OpportunityId,
            //         SolicitationNumber = opp.SolicitationNumber,
            //         OpportunityHeading = (ICollection<OpportunityHeadingEntity>)opp.OpportunityHeading.Select
            //         (heading => new OpportunityHeadingEntity()
            //         {
            //             HeadingId = heading.HeadingId,
            //             ParentHeadingId = heading.ParentHeadingId,
            //             Heading = heading.Heading,
            //             CategoryId = heading.CategoryId,
            //             OpportunityContent = (ICollection<OpportunityContentEntity>)heading.OpportunityContent.Select
            //             (content => new OpportunityContentEntity()
            //             {
            //                 HeadingId = content.HeadingId,
            //                 IndexNumber = content.IndexNumber,
            //                 OppContent = content.OppContent

            //             }).ToList(),
            //         }).ToList()
            //     }).ToList();

            //if (opportunityList == null || opportunityList.Count == 0) return new OpportunityEntity();

            //return opportunityList[0];
            return null;
        }



        //    private OpportunitySolicitaionNo GetOpportunitySolicitaionNo(decimal documentId)
        //{
        //    OpportunitySolicitaionNo opportunitySolicitaionNo = new OpportunitySolicitaionNo();

        //    DataBaseParameter dataBaseParameter = new DataBaseParameter();

        //    dataBaseParameter.DBParameterName = "@OpportunityId";
        //    dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
        //    dataBaseParameter.DBParameterValue = documentId;


        //    List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
        //    dataBaseParameterList.Add(dataBaseParameter);
        //    List<OpportunitySolicitaionNo> OpportunitySolicitaionNoList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("spGetDocInfo", opportunitySolicitaionNo, dataBaseParameterList);

        //    if (OpportunitySolicitaionNoList != null && OpportunitySolicitaionNoList.Count > 0)
        //    {
        //        return OpportunitySolicitaionNoList[0];
        //    }
        //    return null;


        //}


        //private OpportunitySolicitaionNo GetOpportunitySolicitaionNo(decimal opportunityId)
        //{
        //    OpportunitySolicitaionNo opportunitySolicitaionNo = new OpportunitySolicitaionNo();

        //    DataBaseParameter dataBaseParameter = new DataBaseParameter();

        //    dataBaseParameter.DBParameterName = "@OpportunityId";
        //    dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
        //    dataBaseParameter.DBParameterValue = opportunityId;


        //    List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
        //    dataBaseParameterList.Add(dataBaseParameter);

        //    _logger.LogInfo("start db class = OpportunityService : method = GetOpportunitySolicitaionNo log 1" + DateTime.Now);
        //    List<OpportunitySolicitaionNo> OpportunitySolicitaionNoList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetDocInfoByOpportunityNo]", opportunitySolicitaionNo, dataBaseParameterList);
        //    _logger.LogInfo("end db class = OpportunityService : method = GetOpportunitySolicitaionNo log 1" + DateTime.Now);

        //    if (OpportunitySolicitaionNoList != null && OpportunitySolicitaionNoList.Count > 0)
        //    {
        //        return OpportunitySolicitaionNoList[0];
        //    }
        //    return null;


        //}

        private List<DocSolicitaionNo> GetdocumentInfoById(decimal documentId)
        {
            DocSolicitaionNo docSolicitaionNo = new DocSolicitaionNo();

            DataBaseParameter dataBaseParameter = new DataBaseParameter();

            dataBaseParameter.DBParameterName = "@OpportunityId";
            dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameter.DBParameterValue = documentId;


            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameter);
            //_logger.LogInfo("start db class = OpportunityService : method = GetdocumentInfoById log 1" + DateTime.Now);
            List<DocSolicitaionNo> docSolicitaionNoList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("spGetDocInfo", docSolicitaionNo, dataBaseParameterList);
            //_logger.LogInfo("end db class = OpportunityService : method = GetdocumentInfoById log 1" + DateTime.Now);
            if (docSolicitaionNoList != null && docSolicitaionNoList.Count > 0)
            {
                return docSolicitaionNoList;
            }
            return null;


        }

        private DocSolicitaionNo UpdateDocumentPubliStatus(decimal documentId)
        {
            DocSolicitaionNo docSolicitaionNo = new DocSolicitaionNo();

            DataBaseParameter dataBaseParameter = new DataBaseParameter();

            dataBaseParameter.DBParameterName = "@DocumentId";
            dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameter.DBParameterValue = documentId;


            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameter);
            //_logger.LogInfo("start db class = OpportunityService : method = UpdateDocumentPubliStatus log 1" + DateTime.Now);
            List<DocSolicitaionNo> docSolicitaionNoList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("spUpdatePublishStatus", docSolicitaionNo, dataBaseParameterList);
            //_logger.LogInfo("end db class = OpportunityService : method = UpdateDocumentPubliStatus log 1" + DateTime.Now);
            if (docSolicitaionNoList.Count > 0)
            {
                return docSolicitaionNoList[0];
            }
            return null;


        }

        private Opportunity GetspOpportunityTemp(decimal documentId)
        {
            Opportunity opportunity = new Opportunity();

            DataBaseParameter dataBaseParameter = new DataBaseParameter();

            dataBaseParameter.DBParameterName = "@OpportunityId";
            dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameter.DBParameterValue = documentId;


            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameter);
            //_logger.LogInfo("start db class = OpportunityService : method = GetspOpportunity log 1" + DateTime.Now);
            List<Opportunity> opportunityList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetEmptyOpportunity]", opportunity, dataBaseParameterList);
            //_logger.LogInfo("end db class = OpportunityService : method = GetspOpportunity log 1" + DateTime.Now);
            if (opportunityList != null && opportunityList.Count > 0)
            {
                return opportunityList[0];
            }
            return null;


        }
        private List<RfpcategoryData> GetCategoryData(decimal opportunityId)
        {
            RfpcategoryData rfpCategoryData = new RfpcategoryData();

            DataBaseParameter dataBaseParameter = new DataBaseParameter();

            dataBaseParameter.DBParameterName = "@opportunityId";
            dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameter.DBParameterValue = opportunityId;


            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameter);
            //_logger.LogInfo("start db class = OpportunityService : method = GetCategoryData log 1" + DateTime.Now);
            List<RfpcategoryData> rfpCategoryDataList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("spGetCategoryData", rfpCategoryData, dataBaseParameterList);
           // _logger.LogInfo("end db class = OpportunityService : method = GetCategoryData log 1" + DateTime.Now);
            rfpCategoryDataList = rfpCategoryDataList.Where(cat => cat.CategoryData != null && cat.CategoryData.Trim() != "").ToList();


            return rfpCategoryDataList;


        }

        private Opportunity GetspOpportunity(decimal documentId)
        {
            Opportunity opportunity = new Opportunity();

            DataBaseParameter dataBaseParameter = new DataBaseParameter();

            dataBaseParameter.DBParameterName = "@OpportunityId";
            dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameter.DBParameterValue = documentId;


            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameter);
            //_logger.LogInfo("start db class = OpportunityService : method = GetspOpportunity log 1" + DateTime.Now);
            List<Opportunity> opportunityList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetOpportunity]", opportunity, dataBaseParameterList);
            //_logger.LogInfo("end db class = OpportunityService : method = GetspOpportunity log 1" + DateTime.Now);
            if (opportunityList != null && opportunityList.Count > 0)
            {
                return opportunityList[0];
            }
            return null;


        }

        private List<Rfpdocument> GetspRfpDocumentByOpportunityId(decimal documentId)
        {
            Rfpdocument rfpdocument = new Rfpdocument();

            DataBaseParameter dataBaseParameter = new DataBaseParameter();

            dataBaseParameter.DBParameterName = "@OpportunityId";
            dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameter.DBParameterValue = documentId;


            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameter);
            //_logger.LogInfo("start db class = OpportunityService : method = GetspRfpDocumentByOpportunityId log 1" + DateTime.Now);
            List<Rfpdocument> rfpdocumentList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetRfpDocumentByOpportunityId]", rfpdocument, dataBaseParameterList);
            //_logger.LogInfo("end db class = OpportunityService : method = GetspRfpDocumentByOpportunityId log 1" + DateTime.Now);
            if (rfpdocumentList != null && rfpdocumentList.Count > 0)
            {
                return rfpdocumentList;
            }
            return null;


        }

        private List<RfpcategoryData> GetspRFPCategoryData(decimal documentId)
        {
            RfpcategoryData rfpcategoryData = new RfpcategoryData();

            DataBaseParameter dataBaseParameter = new DataBaseParameter();

            dataBaseParameter.DBParameterName = "@OpportunityId";
            dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameter.DBParameterValue = documentId;

            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameter);
           // _logger.LogInfo("start db class = OpportunityService : method = GetspRFPCategoryData log 1" + DateTime.Now);
            List<RfpcategoryData> rfpcategoryDataList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetRFPCategoryData]", rfpcategoryData, dataBaseParameterList);
           // _logger.LogInfo("end db class = OpportunityService : method = GetspRFPCategoryData log 1" + DateTime.Now);
            if (rfpcategoryDataList != null && rfpcategoryDataList.Count > 0)
            {
                return rfpcategoryDataList;
            }
            return null;


        }

        private List<Rfpsummary> GetspRFPSummary(decimal documentId)
        {
            Rfpsummary rfpsummary = new Rfpsummary();

            DataBaseParameter dataBaseParameter = new DataBaseParameter();

            dataBaseParameter.DBParameterName = "@OpportunityId";
            dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameter.DBParameterValue = documentId;


            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameter);
           // _logger.LogInfo("start db class = OpportunityService : method = GetspRFPSummary log 1" + DateTime.Now);
            List<Rfpsummary> rfpsummaryList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetRFPSummary]", rfpsummary, dataBaseParameterList);
            //_logger.LogInfo("start db class = OpportunityService : method = GetspRFPSummary log 1" + DateTime.Now);
            if (rfpsummaryList != null && rfpsummaryList.Count > 0)
            {
                return rfpsummaryList;
            }
            return null;


        }

        private void PopulateOpportunityFieldForBizLink(List<OpportunitySummaryViewModel> opportunitySummaryList, OpportunityEntity opportunity)
        {
            if (opportunity == null) opportunity = new OpportunityEntity();


            //foreach (var item in opportunitySummaryList)
            //{
            //    _logger.LogWarn("FieldName : " + item.FieldName + " - FieldValue : " + item.FieldValue);
            //}
            OpportunitySummaryViewModel opportunitySummaryVM = opportunitySummaryList.FirstOrDefault(value => value.FieldName == "Solicitation Title");

            if (opportunitySummaryVM != null)
            {
                opportunity.TitleName = opportunitySummaryVM.FieldValue;
            }

            opportunitySummaryVM = opportunitySummaryList.FirstOrDefault(value => value.FieldName == "Original Posted Date");
            if (opportunitySummaryVM != null)
            {
                opportunity.StartDate = opportunitySummaryVM.FieldValue;
            }

            opportunitySummaryVM = opportunitySummaryList.FirstOrDefault(value => value.FieldName == "Closing Date and Time");
            if (opportunitySummaryVM != null)
            {
                opportunity.EndDate = opportunitySummaryVM.FieldValue;
            }


        }


        private void ChangeFieldNameForBizLink(List<OpportunitySummaryViewModel> opportunitySummaryList)
        {
            var opportunitySummaryVM = opportunitySummaryList.FirstOrDefault(value => value.FieldName == "Solicitation Title");
            if (opportunitySummaryVM != null)
            {
                opportunitySummaryVM.FieldName = "Opportunity Name";
            }

            opportunitySummaryVM = opportunitySummaryList.FirstOrDefault(value => value.FieldName == "Original Posted Date");
            if (opportunitySummaryVM != null)
            {
                opportunitySummaryVM.FieldName = "Start Date";
            }

            opportunitySummaryVM = opportunitySummaryList.FirstOrDefault(value => value.FieldName == "Closing Date and Time");
            if (opportunitySummaryVM != null)
            {
                opportunitySummaryVM.FieldName = "Due Date&Time";
            }

            opportunitySummaryVM = opportunitySummaryList.FirstOrDefault(value => value.FieldName == "Pre-bid Date");
            if (opportunitySummaryVM != null)
            {
                opportunitySummaryVM.FieldName = "Pre Bid Date";
            }

            opportunitySummaryVM = opportunitySummaryList.FirstOrDefault(value => value.FieldName == "Question Due Date");
            if (opportunitySummaryVM != null)
            {
                opportunitySummaryVM.FieldName = "Q&A Date";
            }
        }

        public List<CapabilityViewModel> PopulateCapability(OpportunityEntity opportunity)
        {
            if (opportunity == null) return null;

            List<CapabilityViewModel> capabilityVMList = new List<CapabilityViewModel>();
            List<OpportunityHeadingEntity> capabilityHeadingList = opportunity.OpportunityHeading.Where(heading => heading.CategoryId == 7).ToList();

            if (capabilityHeadingList == null || capabilityHeadingList.Count == 0)
            {
                return null;
            }

            foreach (var capabilityHeading in capabilityHeadingList)
            {
                CapabilityViewModel capabilityVMHeading = new CapabilityViewModel();

                capabilityVMHeading.Question = capabilityHeading.Heading;
                capabilityVMList.Add(capabilityVMHeading);

                List<OpportunityContentEntity> opportunityContentList = capabilityHeading.OpportunityContent.ToList();

                if (opportunityContentList == null || opportunityContentList.Count == 0)
                {
                    continue;
                }

                foreach (var opportunityContent in opportunityContentList)
                {
                    CapabilityViewModel capabilityVMContent = new CapabilityViewModel();

                    capabilityVMContent.Question = opportunityContent.OppContent;
                    capabilityVMList.Add(capabilityVMContent);
                }

            }

            foreach (var capabilityHeading in capabilityHeadingList)
            {
                opportunity.OpportunityHeading.Remove(capabilityHeading);
            }

            return capabilityVMList;
        }

        public List<CheckListViewModel> CheckListCapability(OpportunityEntity opportunity)
        {
            if (opportunity == null) return null;

            List<CheckListViewModel> checkListVMList = new List<CheckListViewModel>();
            List<OpportunityHeadingEntity> checkListHeadingList = opportunity.OpportunityHeading.Where(heading => heading.CategoryId == 3).ToList();

            if (checkListHeadingList == null || checkListHeadingList.Count == 0)
            {
                return null;
            }

            foreach (var checkListHeading in checkListHeadingList)
            {
                CheckListViewModel checkListVMHeading = new CheckListViewModel();

                checkListVMHeading.Question = checkListHeading.Heading;
                checkListVMList.Add(checkListVMHeading);

                List<OpportunityContentEntity> opportunityContentList = checkListHeading.OpportunityContent.ToList();

                if (opportunityContentList == null || opportunityContentList.Count == 0)
                {
                    continue;
                }

                foreach (var opportunityContent in opportunityContentList)
                {
                    CheckListViewModel checkListVMContent = new CheckListViewModel();

                    checkListVMContent.Question = opportunityContent.OppContent;
                    checkListVMList.Add(checkListVMContent);
                }

            }

            foreach (var checkListHeading in checkListHeadingList)
            {
                opportunity.OpportunityHeading.Remove(checkListHeading);
            }

            return checkListVMList;
        }


        private string GetCategoryData(List<RfpcategoryData> categoryDataList, string categoryName)
        {
            decimal categoryId = 0;

            //.FirstOrDefault(cat => cat.Name == categoryName);

            CategoryEntity categories = _categoriesList.FirstOrDefault(cat => cat.Name == categoryName);

            if (categories != null)
            {
                categoryId = categories.CategoryId;

                RfpcategoryData rfpCategoryData = categoryDataList.FirstOrDefault(cat => cat.CategoryId == categoryId);

                if (rfpCategoryData != null && rfpCategoryData.CategoryData != null)
                {
                    return WebUtility.HtmlDecode(rfpCategoryData.CategoryData.Trim());
                }
            }
            return "";
        }

        private List<SummaryModel> EmptySymmary(string SolicitationTitle, int? opportunityTypeId,
            int? agencyId,
            int? contractVehicleId,
            int? industryId,
            int? stateId)
        {
            string htmlString = "< !DOCTYPE html >" +
                                     "< html lang = \"en -US\" >" +
       "< head >" +
       "< meta charset = \"utf -8\" />" +
        "< title >" +
        "</ title >" +
        "</ head >" +
        "< body >" +
        "< p style = \"margin -top:0pt; margin-bottom:8pt; line-height:108%; font-size:11pt\" >" +
         "< strong >< span style = \"font -family:Calibri; \" > Solicitation Title:</ span ></ strong >< span style = \"font-family:Calibri\" > TestTitle </ span >" +
                     "</ p >" +
                     "</ body >" +
                     "</ html >";

            List<LineDetailModel> lineDetailModelList = new List<LineDetailModel>();
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = htmlString;
            lineDetailModelList.Add(lineDetailModel);
            

            List<SummaryModel> summaryModelList = _summaryServiceNew.GetDocumentSummary(lineDetailModelList, opportunityTypeId,
            agencyId,
            contractVehicleId,
            industryId,
            stateId);

           
            SummaryModel summaryModel = summaryModelList.FirstOrDefault(s => s.FieldDisplayName == "Solicitation Title");

            summaryModel.FieldText = SolicitationTitle;
            return summaryModelList;
        }

        public async Task<ClientResponse> UpdataFilePath(OpportunityDocument[] opportunityDocumentList)
        {

            ApiReturn apiReturn = new ApiReturn();
            apiReturn.apiStatusCode = "-1";
            apiReturn.apiStatusMessage = "";

            //List<OpportunityDocument> documentList =
            //    (List<OpportunityDocument>)JsonConvert.DeserializeObject(opportunityDocumentList, typeof(List<OpportunityDocument>));
            List<OpportunityDocument> documentList = opportunityDocumentList.ToList();
            Func<Rfpdocument, bool> rfpDocumentFuncExpresion = await RfpDocumentFuncExpresion(documentList);
            //_logger.LogInfo("start db class = OpportunityService : method = UpdataFilePath log 1" + DateTime.Now);
            List<Rfpdocument> rfpdocumentList = _unitOfWork.RfpdocumentRepository.GetMany(rfpDocumentFuncExpresion).ToList();
            //_logger.LogInfo("end db class = OpportunityService : method = UpdataFilePath log 1" + DateTime.Now);

            foreach (var doc in documentList)
            {
                Rfpdocument rfpdocument = rfpdocumentList.FirstOrDefault(d => d.RfpdocumentId == doc.OpportunityDocumentID);

                if (rfpdocument != null)
                {
                    rfpdocument.FilePath = doc.DocumentPath;
                }
                _unitOfWork.RfpdocumentRepository.Update(rfpdocument);
            }

            //_logger.LogInfo("start db class = OpportunityService : method = UpdataFilePath log 2" + DateTime.Now);
            _unitOfWork.Save();
            //_logger.LogInfo("end db class = OpportunityService : method = UpdataFilePath log 2" + DateTime.Now);

            return Utility.GenerateResponse(Enum.WebApiResponseCode.Success);
        }

        private async Task<Func<Rfpdocument, bool>> RfpDocumentFuncExpresion(List<OpportunityDocument> OpportunityDocumentList)
        {
            string opportunityDocFilter = "";
            bool firstFile = true;
            foreach (var opportunityDocument in OpportunityDocumentList)
            {

                string docId = opportunityDocument.OpportunityDocumentID.ToString().Split('.')[0];


                decimal documentID;
                bool result = decimal.TryParse(docId, out documentID);


                if (result == true)
                {
                    if (firstFile == true)
                    {
                        opportunityDocFilter = "d => d.RfpdocumentId == " + documentID;
                        firstFile = false;
                    }
                    else
                    {
                        opportunityDocFilter += " |  d.RfpdocumentId == " + documentID;
                    }
                }

            }

            var options = ScriptOptions.Default.AddReferences(typeof(Rfpdocument).Assembly);

            Func<Rfpdocument, bool> rfpDocumentFilterExpression = await CSharpScript.EvaluateAsync<Func<Rfpdocument, bool>>(opportunityDocFilter, options);

            return rfpDocumentFilterExpression;
        }

        private async Task<ClientResponse> PostOpportunityToCampaignManagementAsync(string transactionId, decimal userId, CreateEmptyOpportunity opportunity,
            string opportunityName)
        {
            //_logger.LogInfo(transactionId + " : changed implementation" + "Grpc Server: " + _zdaasAppSettings.gRPCCampaignManagementUrl);
            //_logger.logTransation(transactionId, this.GetType(), MethodBase.GetCurrentMethod() );

            //using var channel = GrpcChannel.ForAddress(_zdaasAppSettings.gRPCCampaignManagementUrl);

            //var client = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.CampaignOpportunityCreationService.CampaignOpportunityCreationServiceClient(channel);
            //var input = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.Opportunity
            //{
            //    TransactionId = transactionId,
            //    UserId = userId.ToString(),
            //    OpportunityId = opportunity.opportunityId.ToString(),
            //    OpportunityName = opportunity.opportunityName
            //};

            //grpcProto.CampaignCreationResponse campaignCreationResponse = await _circuitBreaker
            //        .ExecuteAsync(async () => await client.CreateCampaignOpportunityServiceAsync(input));

            //if (campaignCreationResponse.Code == true)
            //{
            //    _logger.LogInfo(transactionId + " : changed implementation + grpc return true");
            //    return Utility.GenerateResponse(Enum.WebApiResponseCode.Success);
            //}



            //============================================================
            //var channel = GrpcChannel.ForAddress(_zdaasAppSettings.gRPCCampaignManagementUrl);
            //var client = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.CampaignOpportunityCreationService.CampaignOpportunityCreationServiceClient(channel);

            //var input = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.Opportunity
            //{
            //    UserId = userId.ToString(),
            //    OpportunityId = opportunity.OpportunityId.ToString(),
            //    OpportunityName = opportunity.OpportunityName
            //};

            //grpcProto.CampaignCreationResponse campaignCreationResponse = await _circuitBreaker
            //        .ExecuteAsync(async () => await client.CreateCampaignOpportunityServiceAsync(input));

            //if (campaignCreationResponse.Code == true)
            //{
            //    Utility.GenerateResponse(Enum.WebApiResponseCode.Success);
            //}
            //var reply = await client.CreateCampaignOpportunityServiceAsync(input);

            //==================================================================================================

            var httpHandler = new HttpClientHandler();
            httpHandler.ServerCertificateCustomValidationCallback = HttpClientHandler.DangerousAcceptAnyServerCertificateValidator;


            var handler = new GrpcWebHandler(GrpcWebMode.GrpcWebText, httpHandler);
            var channel = GrpcChannel.ForAddress(_zdaasAppSettings.gRPCCampaignManagementUrl, new GrpcChannelOptions
            {
                HttpClient = new HttpClient(handler)
            });


            var client = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.CampaignOpportunityCreationService.CampaignOpportunityCreationServiceClient(channel);


            var input = new Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto.Opportunity
            {
                TransactionId = transactionId,
                UserId = userId.ToString(),
                OpportunityId = opportunity.opportunityId.ToString(),
                OpportunityName = opportunity.opportunityName
            };

            _logger.LogInfo(transactionId + " : send to grpc server " + _zdaasAppSettings.gRPCCampaignManagementUrl);

            grpcProto.CampaignCreationResponse campaignCreationResponse = await _circuitBreaker
                    .ExecuteAsync(async () => await client.CreateCampaignOpportunityServiceAsync(input));

            _logger.LogInfo(transactionId + " : after to grpc server");

            if (campaignCreationResponse.Code == true)
            {
                _logger.LogInfo(transactionId + " campaignCreationResponse.Code : " + campaignCreationResponse.Code);
                return Utility.GenerateResponse(Enum.WebApiResponseCode.Success);
            }

            return Utility.GenerateResponse(Enum.WebApiResponseCode.Fail);
        }

    }
}
