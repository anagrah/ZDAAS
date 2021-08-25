using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPManipulation;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPServices.Contracts;
using AutoMapper;

//using Zdaas.RFPDataModel.Models;
using Zdaas.RFPServices.ViewModels;
using Zdaas.RFPCommon.Models;

using System.Net;

using Zdaas.RFPDataModel.Contracts;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Zdaas.RFPServices.Singleton;

using Zdaas.LoggerContracts;
using Newtonsoft.Json;

using RFPStoreProcedureModel;
using RFPStoreProcedureModel.Enum;
using Zdaas.RFPBusinessModel;
using Zbizlink.RFPDataModel.Models;
using Zbizlink.RFPServices.Contracts;

namespace Zdaas.RFPServices.Services
{
    public class FileManipulationService : IFileManipulationService
    {
        private readonly IUnitOfWork _unitOfWork;
        private IZDDocxToHTMLManipulation _docxToHTMLManipulation;
        private ISummaryService _summaryService;
        private readonly ILoggerManager _logger;
        private IFileConversionService _fileConversionService;
        private JobTitleNewModel _JobTitleModel;
        private ISummaryServiceNew _summaryServiceNew;
        private ILookupDataService _lookupDataService;
        private IMapper _mapper;
        private byte[] serializedObject;

        public FileManipulationService(ISummaryService summaryService,
            IUnitOfWork unitOfWork, ILoggerManager logger,
            IFileConversionService fileConversionService,
            IZDDocxToHTMLManipulation docxToHTMLManipulation,
            ISummaryServiceNew summaryServiceNew,
            IMapper mapper,
            ILookupDataService lookupDataService
            )
        {
            _docxToHTMLManipulation = docxToHTMLManipulation;

            _summaryService = summaryService;
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
            _fileConversionService = fileConversionService;
            _summaryServiceNew = summaryServiceNew;
            _lookupDataService = lookupDataService;
        }

        //public bool TempDocxManipulate()
        //{
        //    List<CategoryData> categoryDataList;
        //    HtmlDocument htmlDocument;
        //    string finalDocString = _docxToHTMLManipulation.ManipulateDocx(LoadHTMLDocument(), out categoryDataList, out htmlDocument);
        //    return false;
        //}

        

        public ClientResponse AutoParsing(decimal opportunityId, decimal documentId, string categoriesId)
        {
            
            AutoParsing autoParsing = new AutoParsing();

            List<CategoryDataViewModel>  categoryDataViewModelList;
            List<SummaryModel> summaryDetail;
         
            //IQueryable<Rfpdocument> rfpdocuments =  _unitOfWork.RfpdocumentRepository.GetQueryable(doc => doc.RfpdocumentId == documentId);

            //Rfpdocument rfpdocument1 = rfpdocuments.FirstOrDefault(d => d.RfpdocumentId == documentId);
            _logger.LogInfo("start AutoParsing get document against rfpdocumentid");
            Rfpdocument rfpdocument = GetRfpDocument(documentId);
            //Rfpdocument rfpdocument = _unitOfWork.RfpdocumentRepository.Get(doc => doc.RfpdocumentId == documentId);
            
            _logger.LogInfo(" end AutoParsing get document against rfpdocumentid");
            if (rfpdocument == null && rfpdocument.DocContent == null && rfpdocument.DocContent.Trim() == "")
            {
                return Utility.GenerateResponse(Enum.WebApiResponseCode.Fail);
            }
            
            Opportunity opportunity = _unitOfWork.opportunityRepository.GetByID(opportunityId);
            int? opportunityTypeId = (opportunity.OpportunityTypeId == null) ? 0 : int.Parse(opportunity.OpportunityTypeId.ToString());
            int? agencyId = (opportunity.AgencyId == null) ? 0 : int.Parse(opportunity.AgencyId.ToString());
            int? contractVehicleId = (opportunity.ContractVehicleId == null) ? 0 : int.Parse(opportunity.ContractVehicleId.ToString());
            int? industryId = (opportunity.IndustryId == null) ? 0 : int.Parse(opportunity.IndustryId.ToString());
            int? stateId = (opportunity.StateId == null) ? 0 : int.Parse(opportunity.StateId.ToString());

            List<CategoryEntity> categoryList = GetCategoryEntityList(categoriesId, opportunityTypeId, agencyId, 
                contractVehicleId, industryId, stateId);

            _JobTitleModel = JobTitleSingletion.GetInstance(_unitOfWork).jobTitleList;

            List<JobTitleWordEntity> jobTitleWordList =
               jobTitleWordSingletion.GetInstance(_unitOfWork, _mapper).jobTitleWordList;

            List<LaborHeadingEntity> LaborHeadingList
                = LaborHeadingSingleton.GetInstance(_unitOfWork).LaborHeadingList;

            List<CategoryData> categoryDataList;
            HtmlDocument htmlDocument;
            List<HTMLLineModel> htmlLineCollection = null;
            List<LineDetailModel> lineDetailCollection = null;

            _logger.LogInfo(" start ManipulateDocForAutoParsing");
            string finalDocString = _docxToHTMLManipulation.ManipulateDocForAutoParsing(rfpdocument.DocContent, documentId, categoryList,
               out categoryDataList, jobTitleWordList, LaborHeadingList, _JobTitleModel,
               htmlLineCollection, out lineDetailCollection);
            _logger.LogInfo(" end ManipulateDocForAutoParsing");
            _logger.LogInfo(" start GetDocumentSummary");
            summaryDetail = _summaryServiceNew.GetDocumentSummary(lineDetailCollection, opportunityTypeId, agencyId, contractVehicleId, industryId, stateId);
            _logger.LogInfo(" end GetDocumentSummary");
            SaveAutoParsing(rfpdocument.CompanyId, rfpdocument.UserId, rfpdocument ,opportunityId, categoryDataList, summaryDetail, out categoryDataViewModelList);

            autoParsing.CategoryData = categoryDataViewModelList;
            autoParsing.summary = summaryDetail;
            
            return Utility.GenerateResponse(Enum.WebApiResponseCode.Success, autoParsing);
        }

        private List<CategoryEntity> GetCategoryEntityList(string categoriesId, int? opportunityTypeId,
            int? agencyId,
            int? contractVehicleId,
            int? industryId,
            int? stateId)
        {
            
            List<CategoryEntity> categoryListFromDb = null;
            List<CategoryEntity> categoryList = new List<CategoryEntity>();
            //not ok

            _logger.LogDebug("GetCategoryEntityList() start" + DateTime.Now);
            categoryListFromDb = _lookupDataService.GetCategorySynonymList(opportunityTypeId,
                agencyId,
                contractVehicleId,
                industryId,
                stateId);
            _logger.LogDebug("GetCategoryEntityList() end" + DateTime.Now);
            //categoryListFromDb = CategorySingleton.GetInstance(_unitOfWork).CategoryList;

            if (categoriesId == "0")
            {
                return categoryListFromDb;
            }
            else
            {
                if(categoriesId.Contains(",")  == false) { 
                decimal categoryId;
                    if (decimal.TryParse(categoriesId, out categoryId))
                    {
                        CategoryEntity categoryEntity = categoryListFromDb.FirstOrDefault(c => c.CategoryId == categoryId);
                        if (categoryEntity != null)
                        {
                            categoryList.Add(categoryEntity);
                        }
                    }
                }
                else
                {
                    string[] categoryIdArray = categoriesId.Split(',');

                    foreach (var catId in categoryIdArray)
                    {
                        decimal categoryId;
                        if (decimal.TryParse(catId, out categoryId))
                        {
                            CategoryEntity categoryEntity = categoryListFromDb.FirstOrDefault(c => c.CategoryId == categoryId);
                            if (categoryEntity != null)
                            {
                                categoryList.Add(categoryEntity);
                            }
                        }
                    }
                }
            }
            return categoryList;
        }

        private decimal SaveAutoParsing(decimal? companyId, decimal? userId, Rfpdocument rfpdocument, decimal opportunityId, List<CategoryData> categoryDataList,
           List<SummaryModel> summaryModelList, out List<CategoryDataViewModel> categoryDataViewModelList)
        {
            categoryDataViewModelList = null;
            categoryDataViewModelList =  InserCategoryDataViewModel(opportunityId, companyId, userId, categoryDataList);
            summaryModelList =  InsertSummary(companyId, userId, opportunityId, summaryModelList);

            rfpdocument.Parsed = true;
           
            _unitOfWork.RfpdocumentRepository.Update(rfpdocument);
            _logger.LogInfo("start db class = FileManipulationService : method = SaveAutoParsing log 1" + DateTime.Now);
            _unitOfWork.Save();
            _logger.LogInfo("end db class = FileManipulationService : method = SaveAutoParsing log 1" + DateTime.Now);


            return 0;

        }


        
        private List<SummaryModel> InsertSummary(decimal? companyId, decimal? userId, decimal opportunityId, List<SummaryModel> summaryModelList)
        {

            Rfpsummary rfpSummary = new Rfpsummary();
            _logger.LogInfo("start db class = OpportunityService : method = InsertSummary log 1" + DateTime.Now);
            var fieldTypeList = _unitOfWork.FieldTypeRepository.GetSelectedColumn(e => new FieldTypeEntity { FieldTypeId = e.FieldTypeId, FieldTypeShortDesc = e.FieldTypeShortDesc });
            _logger.LogInfo("end db class = OpportunityService : method = InsertSummary log 1" + DateTime.Now);
            List<Rfpsummary> rfpsummaryFromDBList = GetGetRFPSummary(opportunityId);
            //List<Rfpsummary> rfpsummaryFromDBList = _unitOfWork.RFPSummaryRepository.GetMany(s => s.OpportunityId == opportunityId).ToList();

            foreach (var summaryModel in summaryModelList)
            {
                
                Rfpsummary rfpsummaryFromDB = rfpsummaryFromDBList.FirstOrDefault(s => s.FieldName == summaryModel.FieldDisplayName);
               
                if (rfpsummaryFromDB == null)
                {
                    Rfpsummary rfpsummary = new Rfpsummary();
                    rfpsummary.OpportunityId = opportunityId;
                    rfpsummary.FieldName = summaryModel.FieldDisplayName;
                    rfpsummary.FieldValue = summaryModel.FieldText;
                    rfpsummary.DisplayOrder = summaryModel.DisplayOrder;
                    rfpsummary.FieldTypeId = summaryModel.FiledTypeId;
                    rfpsummary.CompanyId = companyId;
                    rfpsummary.CreatedBy = userId;
                    rfpsummary.UserId = userId;

                    var fieldType = fieldTypeList.FirstOrDefault(v => v.FieldTypeShortDesc == summaryModel.ControlType);

                    if (fieldType != null)
                    {
                        rfpsummary.FieldTypeId = fieldType.FieldTypeId;
                    }
                    
                    _unitOfWork.RFPSummaryRepository.Insert(rfpsummary);
                    
                }
                else
                {
                    if(rfpsummaryFromDB.FieldValue != null && rfpsummaryFromDB.FieldValue.Trim() != "")
                    {
                        summaryModel.FieldText = rfpsummaryFromDB.FieldValue;
               
                    }
                    else
                    {
                        rfpsummaryFromDB.FieldValue = summaryModel.FieldText;
                        rfpsummaryFromDB.ModifiedBy = userId;
                        rfpsummaryFromDB.ModifiedDate = DateTime.Now;
                        _unitOfWork.RFPSummaryRepository.Update(rfpsummaryFromDB);
                    }
                    
                }
            }
            return summaryModelList;
        }

        private List<CategoryDataViewModel> InserCategoryDataViewModel(decimal opportunityId, decimal? companyId, decimal? userId, List<CategoryData> categoryDataList)
        {

            _logger.LogInfo("Enter InserCategoryDataViewModel");
            // List <RfpcategoryData> rfpcategoryDataListFromDB = _unitOfWork.RfpCategoryDataRepository.GetMany(d => d.OpportunityId == opportunityId).ToList();
            List<RfpcategoryData> rfpcategoryDataListFromDB = GetRFPCategoryData(opportunityId);
              RfpcategoryData RfpcategoryDataInsert = new RfpcategoryData();
            RfpcategoryData RfpcategoryDataUpdate = new RfpcategoryData();
            //List<CategoryDataViewModel> categoryDataViewModelList = new List<CategoryDataViewModel>();
            List<CategoryDataViewModel> categoryDataViewModelList;

            foreach (var categoryData in categoryDataList)
            {

                RfpcategoryData rfpcategoryDataFromDb = rfpcategoryDataListFromDB.FirstOrDefault(d => d.CategoryId == categoryData.CategoryId);

                string categoryDataString = GetCategoryData(categoryData.HTMLNodeList);

                if (rfpcategoryDataFromDb != null)
                {

                    rfpcategoryDataFromDb.CategoryData = rfpcategoryDataFromDb.CategoryData + categoryDataString;
                    _unitOfWork.RfpCategoryDataRepository.Update(rfpcategoryDataFromDb);
                    
                    //CategoryDataViewModel categoryDataViewModel = new CategoryDataViewModel();
                    //categoryDataViewModel.CategoryId = rfpcategoryDataFromDb.CategoryId;
                    //categoryDataViewModel.CategoryData = rfpcategoryDataFromDb.CategoryData;
                    //categoryDataViewModelList.Add(categoryDataViewModel);

                }
                else
                {
                    RfpcategoryData rfpcategoryData = new RfpcategoryData();
                    rfpcategoryData.OpportunityId = opportunityId;
                    rfpcategoryData.CompanyId = companyId;
                    rfpcategoryData.UserId = userId;
                    rfpcategoryData.CategoryId = categoryData.CategoryId;
                    rfpcategoryData.CategoryData = categoryDataString;
                    _unitOfWork.RfpCategoryDataRepository.Insert(rfpcategoryData);
                    _logger.LogInfo(" :OpportunityId = " + rfpcategoryData.OpportunityId  + " :CompanyId = " + rfpcategoryData.CompanyId + " :UserId = " + rfpcategoryData.UserId);
                    rfpcategoryDataListFromDB.Add(rfpcategoryData);
                    //CategoryDataViewModel categoryDataViewModel = new CategoryDataViewModel();
                    //categoryDataViewModel.CategoryId = rfpcategoryData.CategoryId;
                    //categoryDataViewModel.CategoryData = rfpcategoryData.CategoryData;
                    //categoryDataViewModelList.Add(categoryDataViewModel);
                }
            }


            _logger.LogInfo("End InserCategoryDataViewModel");

            categoryDataViewModelList = PopulateCategoryDataViewModel(rfpcategoryDataListFromDB);
            //foreach (var rfpcategoryDataFromDB in rfpcategoryDataListFromDB)
            //{
            //    CategoryDataViewModel categoryDataViewModel = new CategoryDataViewModel();
            //    categoryDataViewModel.CategoryId = rfpcategoryDataFromDB.CategoryId;
            //    categoryDataViewModel.CategoryData = rfpcategoryDataFromDB.CategoryData;
            //    categoryDataViewModel.Name = rfpcategoryDataFromDB.Category.Name;
            //    categoryDataViewModelList.Add(categoryDataViewModel);
            //}
            return categoryDataViewModelList;
        }

        private List<CategoryDataViewModel> PopulateCategoryDataViewModel(List<RfpcategoryData> rfpcategoryDataListFromDB)
        {
            //ok
            List<CategoryEntity> categoryListFromDb = CategorySingleton.GetInstance(_unitOfWork).CategoryList;

            List<CategoryDataViewModel> categoryDataViewModelList = new List<CategoryDataViewModel>();

            foreach (var rfpcategoryDataFromDB in rfpcategoryDataListFromDB)
            {
                CategoryDataViewModel categoryDataViewModel = new CategoryDataViewModel();
                categoryDataViewModel.CategoryId = rfpcategoryDataFromDB.CategoryId;
                categoryDataViewModel.CategoryData = rfpcategoryDataFromDB.CategoryData;
                CategoryEntity categoryEntity = categoryListFromDb.FirstOrDefault(cat => cat.CategoryId == rfpcategoryDataFromDB.CategoryId);
                if(categoryEntity != null)
                {
                    categoryDataViewModel.Name = categoryEntity.Name;
                }               
                categoryDataViewModelList.Add(categoryDataViewModel);
            }

            return categoryDataViewModelList;
        }
        public bool DocxManipulate(IFormFile iFormFile, decimal companyId, decimal userId, decimal clientId,
            decimal segmentId, string filePath, out List<CategoryViewModel> categoryList,
            out string finalDocument, out List<SummaryModel> summaryDetail, out decimal documentId,
            out List<CategoryDataViewModel> categoryDataViewModelList, out string messageToClient,
            out string status, int? opportunityTypeId,
            int? agencyId,
            int? contractVehicleId,
            int? industryId,
            int? stateId)
        {
            if (companyId < 1)
            {
                companyId = 1;
            }
            if (userId < 1)
            {
                userId = 1;
            }
            if (clientId < 1)
            {
                clientId = 1;
            }
            if (segmentId < 1)
            {
                segmentId = 1;
            }

            

            // _logger.LogWarn("SegmentId : " + segmentId);
            string RfpDocument;
            string errorMessage = "";
            categoryList = null;
            finalDocument = null;
            summaryDetail = null;
            documentId = 0;
            categoryDataViewModelList = null;
            messageToClient = "";
            status = "0";
            //local disk
            RfpDocument = LoadHTMLDocument();

            //form third party service
            bool result = _fileConversionService.FileConvert(iFormFile, "", out RfpDocument, out errorMessage);
            //if (result == false)
            //{
            //    status = "0";
            //    return false;
            //}
            //if (errorMessage != "")
            //{
            //    status = DocConverterHandleErrorMessage(errorMessage, out messageToClient).ToString();
            //    return false;
            //}

            categoryDataViewModelList = new List<CategoryDataViewModel>();
            List<CategoryViewModel> catList = new List<CategoryViewModel>();

            var categories = CategorySingleton.GetInstance(_unitOfWork).CategoryList;

            //new
            _JobTitleModel = JobTitleSingletion.GetInstance(_unitOfWork).jobTitleList;

            List<JobTitleWordEntity> jobTitleWordList =
                jobTitleWordSingletion.GetInstance(_unitOfWork, _mapper).jobTitleWordList;
            List<LaborHeadingEntity> LaborHeadingList
                = LaborHeadingSingleton.GetInstance(_unitOfWork).LaborHeadingList;
            //CategorySingleton.GetInstance.GetAllCategory();

            foreach (var cat in categories)
            {
                //catList.Add(Mapper.Map<CategoryViewModel>(cat));
                catList.Add(_mapper.Map<CategoryViewModel>(cat));
            }



            List<CategoryData> categoryDataList;
            HtmlDocument htmlDocument;
            List<LineDetailModel> lineDetailModels;
            //new
            string finalDocString = _docxToHTMLManipulation.ManipulateDoc(RfpDocument,
               out categoryDataList, out htmlDocument, jobTitleWordList, LaborHeadingList, _JobTitleModel,
               out lineDetailModels);

            //HtmlDocument htmlDocumentForSummary = new HtmlDocument();
            //htmlDocumentForSummary.LoadHtml(RfpDocument);//summaryDetail = _summaryService.GetDocumentSummary(htmlDocumentForSummary);

            //summaryDetail = _summaryService.GetSummaryDetail();
            //New summary
            summaryDetail = _summaryServiceNew.GetDocumentSummary(lineDetailModels, opportunityTypeId,
            agencyId,
            contractVehicleId,
            industryId,
            stateId);

            categoryList = catList;
            finalDocument = finalDocString;

            documentId = Save(companyId, userId, clientId, segmentId, filePath,
                iFormFile.FileName, finalDocument, categoryDataList, summaryDetail, categoryDataViewModelList);
            status = "1";
            return true;
        }


        private string LoadHTMLDocument()
        {
            string workingDirectory = Environment.CurrentDirectory;
            HtmlDocument htmlDocument = new HtmlDocument();
            //htmlDocument.Load(workingDirectory + @"\Doc\19-7521_Solicitation.html");
            htmlDocument.Load(workingDirectory + @"\Doc\060b2490023-2016_cats-plus-2016_as-released.html");
            //htmlDocument.Load(workingDirectory + @"\Doc\FINAL_RFP.html");
            //htmlDocument.Load(workingDirectory + @"\Doc\F585491988_20-RFP-005-WM Workforce Ongoing Tempoary Staffing.html");
            HtmlNode documentNodes = htmlDocument.DocumentNode;

            return documentNodes.InnerHtml;

        }

        private decimal Save(decimal companyId, decimal userId, decimal clientId, decimal segmentId,
            string filePath, string rfpDocumentName, string rfpDocument, List<CategoryData> categoryDataList,
            List<SummaryModel> summaryList, List<CategoryDataViewModel> categoryDataViewModelList)
        {

            Rfpdocument mappedresult = null;
            _logger.LogInfo("start db class = OpportunityService : method = Save log 1" + DateTime.Now);
            var fieldTypeList = _unitOfWork.FieldTypeRepository.GetSelectedColumn(e => new FieldTypeEntity { FieldTypeId = e.FieldTypeId, FieldTypeShortDesc = e.FieldTypeShortDesc });
            _logger.LogInfo("end db class = OpportunityService : method = Save log 1" + DateTime.Now);

            var documentEntity = new RfpdocumentEntity()
            {
                DocName = rfpDocumentName,
                CompanyId = companyId,
                UserId = userId,
                SegmentId = segmentId,
                ClientId = clientId,
                CreatedBy = userId,
                DocContent = WebUtility.HtmlEncode(rfpDocument),
                FilePath = filePath
            };




            foreach (var categoryData in categoryDataList)
            {
                RfpCategoryDataEntity rfpCategoryDataEntity = new RfpCategoryDataEntity();
                CategoryDataViewModel categoryDataViewModel = new CategoryDataViewModel();

                rfpCategoryDataEntity.CategoryId = categoryData.CategoryId;
                rfpCategoryDataEntity.CompanyId = companyId;
                rfpCategoryDataEntity.UserId = userId;
                rfpCategoryDataEntity.CreatedBy = userId;

                string categoryDataString = GetCategoryData(categoryData.HTMLNodeList);

                rfpCategoryDataEntity.CategoryData = WebUtility.HtmlEncode(categoryDataString);
                //Multiple file
                // documentEntity.RfpCategoryData.Add(rfpCategoryDataEntity);

                categoryDataViewModel.CategoryId = rfpCategoryDataEntity.CategoryId;
                categoryDataViewModel.CategoryData = categoryDataString;

                categoryDataViewModelList.Add(categoryDataViewModel);
            }

            foreach (var summary in summaryList)
            {
                RfpSummaryEntity rfpSummaryEntity = new RfpSummaryEntity();


                rfpSummaryEntity.FieldName = summary.FieldDisplayName;
                rfpSummaryEntity.FieldValue = summary.FieldText;
                rfpSummaryEntity.DisplayOrder = summary.DisplayOrder;
                rfpSummaryEntity.FieldTypeId = summary.FiledTypeId;
                rfpSummaryEntity.CompanyId = companyId;
                rfpSummaryEntity.UserId = userId;
                rfpSummaryEntity.CreatedBy = userId;



                var fieldType = fieldTypeList.FirstOrDefault(v => v.FieldTypeShortDesc == summary.ControlType);

                if (fieldType != null)
                {
                    rfpSummaryEntity.FieldTypeId = fieldType.FieldTypeId;
                }
                //Multiple file
                //documentEntity.Rfpsummary.Add(rfpSummaryEntity);

            }



            mappedresult = _mapper.Map<Rfpdocument>(documentEntity);

            _unitOfWork.RfpdocumentRepository.Insert(mappedresult);
            _logger.LogInfo("start db class = OpportunityService : method = Save log 2" + DateTime.Now);
            _unitOfWork.Save();
            _logger.LogInfo("end db class = OpportunityService : method = Save log 2" + DateTime.Now);

            return mappedresult.RfpdocumentId;

        }

        private string GetCategoryData(List<HtmlNode> nodeList)
        {
            StringBuilder catDate = new StringBuilder();

            foreach (var node in nodeList)
            {
                catDate.Append(node.OuterHtml);
            }
            return catDate.ToString();
        }

        private int DocConverterHandleErrorMessage(string converterApiMessage, out string messageToClient)
        {
            messageToClient = "";
            int errorCode = 0;
            DocConverterMessage docConverterMessage =
                           (DocConverterMessage)JsonConvert.DeserializeObject(converterApiMessage,
                           typeof(DocConverterMessage));
            string message = docConverterMessage.Message;

            if (message.ToLower().Contains("pdf") &&
                 message.ToLower().Contains("protected") &&
                 message.ToLower().Contains("cannot") &&
                 message.ToLower().Contains("converted"))
            {
                messageToClient = message;
                errorCode = 2;
            }

            return errorCode;
        }


        private Rfpdocument GetRfpDocument(decimal rfpDocumentId)
        {
            //LastRfpDocumentIdByUser lastRfpDocumentIdByUser = new LastRfpDocumentIdByUser();
            Rfpdocument rfpdocument = new Rfpdocument();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbParameterRfpDocumentId = new DataBaseParameter();
            dbParameterRfpDocumentId.DBParameterName = "@RfpDocumentId";
            dbParameterRfpDocumentId.DBParameterType = DatabaseDataType.Decimal;
            dbParameterRfpDocumentId.DBParameterValue = rfpDocumentId;

            dataBaseParameterList.Add(dbParameterRfpDocumentId);

           
            List<Rfpdocument> rfpdocumentList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetRfpDocument]", rfpdocument, dataBaseParameterList);


            if(rfpdocumentList != null && rfpdocumentList.Count> 0)
            {
                return rfpdocumentList[0];
            }
            return null;
        }


        private List<RfpcategoryData> GetRFPCategoryData(decimal opportunityId)
        {
            //LastRfpDocumentIdByUser lastRfpDocumentIdByUser = new LastRfpDocumentIdByUser();
            RfpcategoryData rfpcategoryData = new RfpcategoryData();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbParameterRfpDocumentId = new DataBaseParameter();
            dbParameterRfpDocumentId.DBParameterName = "@OpportunityId";
            dbParameterRfpDocumentId.DBParameterType = DatabaseDataType.Decimal;
            dbParameterRfpDocumentId.DBParameterValue = opportunityId;

            dataBaseParameterList.Add(dbParameterRfpDocumentId);


            List<RfpcategoryData> rfpcategoryDataList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetRFPCategoryData]", rfpcategoryData, dataBaseParameterList);


           
            return rfpcategoryDataList;
        }

        private List<Rfpsummary> GetGetRFPSummary(decimal opportunityId)
        {
            //LastRfpDocumentIdByUser lastRfpDocumentIdByUser = new LastRfpDocumentIdByUser();
            Rfpsummary rfpsummary = new Rfpsummary();
            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbParameterRfpDocumentId = new DataBaseParameter();
            dbParameterRfpDocumentId.DBParameterName = "@OpportunityId";
            dbParameterRfpDocumentId.DBParameterType = DatabaseDataType.Decimal;
            dbParameterRfpDocumentId.DBParameterValue = opportunityId;

            dataBaseParameterList.Add(dbParameterRfpDocumentId);

            _logger.LogInfo("start db class = OpportunityService : method = GetGetRFPSummary log 1" + DateTime.Now);
            List<Rfpsummary> rfpsummaryList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetRFPSummary]", rfpsummary, dataBaseParameterList);
            _logger.LogInfo("end db class = OpportunityService : method = GetGetRFPSummary log 1" + DateTime.Now);


            return rfpsummaryList;
        }

    }
}
