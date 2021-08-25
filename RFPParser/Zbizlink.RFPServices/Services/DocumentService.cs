
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using RFPStoreProcedureModel;
using RFPStoreProcedureModel.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using Zdaas.RFPBusinessModel;
using Zdaas.LoggerContracts;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPDataModel.Contracts;
using Zbizlink.RFPDataModel.Models;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPServices.Contracts;
using Zdaas.RFPServices.Enum;
using Zdaas.RFPServices.Singleton;
using Zdaas.RFPServices.ViewModels;

namespace Zdaas.RFPServices.Services
{


    public class DocumentService : IDocumentService
    {

        #region Private Member

        private readonly IUnitOfWork _unitOfWork;
        private readonly ILoggerManager _loggerManager;
        private IFileConversionService _fileConversionService;
        private IZDDocxToHTMLManipulation _docxToHTMLManipulation;
        private IPreviewDocument _previewDocument;
        #endregion

        #region Constructor

        public DocumentService(IUnitOfWork unitOfWork, ILoggerManager loggerManager,
            IFileConversionService fileConversionService, IZDDocxToHTMLManipulation docxToHTMLManipulation,
            IPreviewDocument previewDocument)
        {
            _unitOfWork = unitOfWork;
            _loggerManager = loggerManager;
            _fileConversionService = fileConversionService;
            _docxToHTMLManipulation = docxToHTMLManipulation;
            _previewDocument = previewDocument;
        }

        #endregion

        public ClientResponse WholeDocumentParseDataSave(decimal userId, decimal companyId, decimal documentId, decimal categoryId, 
            decimal opportunityId, string categoryData)
        {         
           // _loggerManager.LogInfo("start db class = DocumentService : method = WholeDocumentParseDataSave from sp log 1 - " + DateTime.Now);
            //log 1
            RfpcategoryData rfpCategoryData =  GetRFPCategoryDataById(categoryId, opportunityId);
          //RfpcategoryData rfpCategoryData =  _unitOfWork.RfpCategoryDataRepository.Get(c => c.CategoryId == categoryId && c.OpportunityId == opportunityId);
           // _loggerManager.LogInfo("end db class = DocumentService : method = WholeDocumentParseDataSave from sp log 1 - " + DateTime.Now);
           // _loggerManager.LogInfo("start db class = DocumentService : method = WholeDocumentParseDataSave from sp log 2 - " + DateTime.Now);
            //log 2
            Rfpdocument rfpdocument = GetRfpDocument(documentId);
            //Rfpdocument rfpdocument = _unitOfWork.RfpdocumentRepository.Get(d => d.RfpdocumentId == documentId);
           // _loggerManager.LogInfo("end db class = DocumentService : method = WholeDocumentParseDataSave from sp log 2 - " + DateTime.Now);

            if (rfpdocument == null)
            {
                return Utility.GenerateResponse(WebApiResponseCode.Fail);
            }

            if(rfpCategoryData != null)
            {
                rfpCategoryData.CategoryData += categoryData;
                rfpCategoryData.ModifiedBy = userId;
                rfpCategoryData.ModifiedDate = DateTime.Now;
                _unitOfWork.RfpCategoryDataRepository.Update(rfpCategoryData);
            }
            else
            {
                rfpCategoryData = new RfpcategoryData();
                rfpCategoryData.OpportunityId = opportunityId;
                rfpCategoryData.CategoryId = categoryId;
                rfpCategoryData.CategoryData += categoryData;
                rfpCategoryData.CompanyId = companyId;
                rfpCategoryData.UserId = userId;
                rfpCategoryData.CreatedBy = userId;
                _unitOfWork.RfpCategoryDataRepository.Insert(rfpCategoryData);
            }

            rfpdocument.Parsed = true;

            _unitOfWork.RfpdocumentRepository.Update(rfpdocument);
            //_loggerManager.LogInfo("start db class = DocumentService : method = WholeDocumentParseDataSave log 3" + DateTime.Now);
            //log 3
            _unitOfWork.Save();
            //_loggerManager.LogInfo("end db class = DocumentService : method = WholeDocumentParseDataSave log 4" + DateTime.Now);
           
            return Utility.GenerateResponse(WebApiResponseCode.Success);
        }

        public ClientResponse SaveFiles(string fileNameJsonList, decimal opportunityId,
            decimal userId, decimal ClientId, decimal SegmentId, decimal companyID)
        {
            
            List<FileNameModel> fileNameList;

            fileNameList =
                (List<FileNameModel>)JsonConvert.DeserializeObject(fileNameJsonList, typeof(List<FileNameModel>));

            if (fileNameList.Count() < 1)
            {          
                return Utility.GenerateResponse(WebApiResponseCode.Fail);
            }


            List<Rfpdocument> rfpdocumentList = new List<Rfpdocument>();
            foreach (var fileName in fileNameList)
            {
                Rfpdocument rfpdocument = new Rfpdocument();
                rfpdocument.OpportunityId = opportunityId;
                rfpdocument.DocName = fileName.Name;
                rfpdocument.FilePath = fileName.Path;
                rfpdocumentList.Add(rfpdocument);
                _unitOfWork.RfpdocumentRepository.Insert(rfpdocument);
            }
           // _loggerManager.LogInfo("start db class = DocumentService : method = SaveFiles log 1" + DateTime.Now);
            //log 1
            _unitOfWork.Save();
           // _loggerManager.LogInfo("start db class = DocumentService : method = SaveFiles log 1" + DateTime.Now);
            

            foreach (var fileName in fileNameList)
            {
                Rfpdocument rfpDocument = rfpdocumentList.FirstOrDefault(doc => doc.DocName == fileName.Name);

                if (rfpDocument != null)
                {

                    fileName.fileRFPDbId = Convert.ToString(rfpDocument.RfpdocumentId);

                }

            }
            
            return Utility.GenerateResponse( WebApiResponseCode.Success, fileNameList) ;
        }
        public ClientResponse DeleteHtmlFile(decimal documentId, bool deleteOnlyfile, decimal opportunityId)
        {
            
           
            
            if (deleteOnlyfile == true)
            {
                Rfpdocument rfpdocument = new Rfpdocument()
                {
                    RfpdocumentId = documentId
                };

                _unitOfWork.RfpdocumentRepository.Delete(documentId);
                //_loggerManager.LogInfo("start db class = DocumentService : method = DeleteHtmlFile log 1" + DateTime.Now);
                //log 1
                _unitOfWork.Save();
               // _loggerManager.LogInfo("end db class = DocumentService : method = DeleteHtmlFile log 1" + DateTime.Now);

                
                return Utility.GenerateResponse(WebApiResponseCode.Success);
            }
            else
            {
               
                return Utility.GenerateResponse(WebApiResponseCode.Fail);
            }
            
        }
        public ClientResponse GetCategoryNameList()
        {
            

            List<CategoryViewModel> categoryNameList = new List<CategoryViewModel>(); ;
           //ok
            List<CategoryEntity> categoryEntityList = CategorySingleton.GetInstance(_unitOfWork).CategoryList;

            foreach (var categoryEntity in categoryEntityList)
            {
                CategoryViewModel categoryViewModel = new CategoryViewModel();
                categoryViewModel.CategoryId = categoryEntity.CategoryId;
                categoryViewModel.Name = categoryEntity.Name;
                categoryNameList.Add(categoryViewModel);

                var cli = new ClientResponse<CategoryViewModel>();

                cli.response = categoryViewModel;

            }

            if (categoryNameList != null && categoryNameList.Count > 0)
            {
                return Utility.GenerateResponse(WebApiResponseCode.Success, categoryNameList);
            }
            else
            {
                
                return Utility.GenerateResponse(WebApiResponseCode.Fail);
            }


           
        }
        public ClientResponse CreateHtmlFile(string file, string fileName, decimal documentId)
        {
            
            string statusCode = "";
            string statusMessage = "";
            List<HTMLLineModel> htmlLineCollection;
            List<LineDetailModel> lineDetailCollection;
            string orignalHtmlFile;
            string finalHtmlFile;



            bool result = HTMLConversion(file, fileName, out orignalHtmlFile, out statusCode, out statusMessage);

            if(statusCode == "3")
            {
                
              return  Utility.GenerateResponse(WebApiResponseCode.PasswordProtected);

            }
           result = _previewDocument.Get(orignalHtmlFile, out finalHtmlFile, out htmlLineCollection, out lineDetailCollection);

            if (result == true && statusCode == "1")
            {
                bool resultFromDb = UpdateHtmlFileInDB(orignalHtmlFile, documentId);
                             
                return Utility.GenerateResponse(WebApiResponseCode.Success, finalHtmlFile);
            }
            else
            {
                
                return Utility.GenerateResponse(WebApiResponseCode.Fail); 
            }

        }
        public ClientResponse CreateHtmlFile(IFormFile iFormFile, decimal documentId)
        {
            
            ViewDocument viewDocument = new ViewDocument();
            string statusCode = "";
            string statusMessage = "";
            string orignalHtmlFile;
            string finalHtmlFile = "";
            List<HTMLLineModel> htmlLineCollection;
            List<LineDetailModel> lineDetailCollection;
            

            bool result = HTMLConversion(iFormFile, out orignalHtmlFile, out statusCode, out statusMessage);

            if (statusCode == "3")
            {

                return Utility.GenerateResponse(WebApiResponseCode.PasswordProtected);
            }

            if (result == true && statusCode == "1")
            {

                result = _previewDocument.Get(orignalHtmlFile, out finalHtmlFile, out htmlLineCollection, out lineDetailCollection);
                //_loggerManager.LogInfo("start db class = DocumentService : method = CreateHtmlFile log 1" + DateTime.Now);
                Rfpdocument rfpDocument = _unitOfWork.RfpdocumentRepository.GetByID(documentId);
                //_loggerManager.LogInfo("end db class = DocumentService : method = CreateHtmlFile log 1" + DateTime.Now);
                rfpDocument.DocContent = orignalHtmlFile;

                _unitOfWork.RfpdocumentRepository.Update(rfpDocument);
                //_loggerManager.LogInfo("start db class = DocumentService : method = CreateHtmlFile log 2" + DateTime.Now);
              
                _unitOfWork.Save();
                //_loggerManager.LogInfo("end db class = DocumentService : method = CreateHtmlFile log 2" + DateTime.Now);

                viewDocument.documentId = documentId;
                viewDocument.htmlFile = finalHtmlFile;

                return Utility.GenerateResponse(WebApiResponseCode.Success, viewDocument);
            }
            else
            {
               
                return Utility.GenerateResponse(WebApiResponseCode.Fail);
            }
        }

        private bool UpdateHtmlFileInDB(string originalHtmlFile, decimal documentId)
        {
           // _loggerManager.LogInfo("start db class = DocumentService : method = UpdateHtmlFileInDB log 1" + DateTime.Now);
            //log 1
            Rfpdocument rfpdocument = _unitOfWork.RfpdocumentRepository.GetByID(documentId);
           // _loggerManager.LogInfo("end db class = DocumentService : method = UpdateHtmlFileInDB log 1" + DateTime.Now);
            
            // Rfpdocument rfpdocument = new Rfpdocument();
            rfpdocument.CompanyId = documentId;
            rfpdocument.DocContent = originalHtmlFile;
            
            _unitOfWork.RfpdocumentRepository.Update(rfpdocument);

           //_loggerManager.LogInfo("start db class = DocumentService : method = UpdateHtmlFileInDB log 2" + DateTime.Now);
            //log 2
            _unitOfWork.Save();
           // _loggerManager.LogInfo("start db class = DocumentService : method = UpdateHtmlFileInDB log 2" + DateTime.Now);
         
            return true;

        }
        public bool HTMLConversion(string file, string fileName, out string orignalHtmlFile, out string statusCode, out string statusMessage)
        {
            string errorMessage = "";
            statusMessage = "";
            byte[] byteArray = Convert.FromBase64String(file);
            bool result = _fileConversionService.FileConvert(byteArray, fileName, out orignalHtmlFile, out errorMessage);

            if (result == false)
            {
                if (errorMessage != "")
                {
                    statusCode = DocConverterHandleErrorMessage(errorMessage, out statusMessage).ToString();
                    return false;
                }
                statusCode = "0";
                return false;
            }
            

            statusCode = "1";

            return true;
        }
        public bool HTMLConversion(IFormFile iFormFile, out string originalHtmlFile, out string statusCode, out string statusMessage)
        {
            statusMessage = "";
            string errorMessage;

            bool result = _fileConversionService.FileConvert(iFormFile, "", out originalHtmlFile, out errorMessage);
            if (result == false)
            {
                if (errorMessage != "")
                {
                    statusCode = DocConverterHandleErrorMessage(errorMessage, out statusMessage).ToString();
                    return false;
                }

                statusCode = "0";
                return false;
            }
            


            statusCode = "1";
            return true;
        }

        public ClientResponse Save(decimal userId, decimal companyId, decimal opportunityId, decimal categoryId, string categoryData, string summary)
        {
            

            if (summary != null && summary != "null")
            {
                List<SummaryViewModel> summaryList =
                (List<SummaryViewModel>)JsonConvert.DeserializeObject(summary, typeof(List<SummaryViewModel>));

                bool status = SaveSummary(userId, companyId, summaryList, opportunityId);
                if (status)
                {
                    _loggerManager.LogInfo("start db class = DocumentService : method = Save log 1" + DateTime.Now);
                    //log 1
                    _unitOfWork.Save();
                    _loggerManager.LogInfo("end db class = DocumentService : method = Save log 1" + DateTime.Now);
                   
                }
            }
            else if (categoryId > 0 && categoryData != null)
            {
                // HtmlNode htmlNode = HtmlNode.CreateNode(categoryData);

                // var temptRowAttribute = htmlNode.Attributes.FirstOrDefault(line => line.Name == "data-temptrow");


                //if(temptRowAttribute != null)
                if (categoryData.Contains("data-temptrow"))
                {
                    DeleteCategory(userId, categoryId, categoryData, opportunityId);
                }
                else
                {
                    UpdateCategoryData(userId, companyId, categoryId, categoryData, opportunityId);
                }
                _loggerManager.LogInfo("start db class = DocumentService : method = Save log 2" + DateTime.Now);
                //log 2
                _unitOfWork.Save();
                _loggerManager.LogInfo("end db class = DocumentService : method = Save log 2" + DateTime.Now);
                
            }

            return Utility.GenerateResponse(WebApiResponseCode.Success);
        }

        public ClientResponse Save(decimal userId,  decimal companyId,  decimal opportunityId, string categoriesData, string summary)
        {
            

            bool statusSummary = false;
            bool statusCategories = false;

            if (summary != null && summary != "null")
            {
                List<SummaryViewModel> summaryList =
                (List<SummaryViewModel>)JsonConvert.DeserializeObject(summary, typeof(List<SummaryViewModel>));

                statusSummary = SaveSummary(userId, companyId, summaryList, opportunityId);

            }

            if (categoriesData != null && categoriesData != "null")
            {
                List<CategoryDataViewModel> categoryDataViewModelList =
               (List<CategoryDataViewModel>)JsonConvert.DeserializeObject(categoriesData, typeof(List<CategoryDataViewModel>));

                foreach (var categoryDataViewModel in categoryDataViewModelList)
                {
                    statusCategories = UpdateCategoryData(userId, companyId, categoryDataViewModel.CategoryId, categoryDataViewModel.CategoryData, opportunityId);
                }
            }

            _loggerManager.LogInfo("start db class = DocumentService : method = Save log 01" + DateTime.Now);
            //log 01
            _unitOfWork.Save();
            _loggerManager.LogInfo("end db class = DocumentService : method = Save log 01" + DateTime.Now);


            return Utility.GenerateResponse(WebApiResponseCode.Success);
        }

        #region Private Method

        private bool SaveSummary(decimal userId, decimal companyId, List<SummaryViewModel> summaryList, decimal opportunityId)
        {
            bool status = false;
            //Multiple file 
            _loggerManager.LogInfo("start db class = DocumentService : method = SaveSummary log 1" + DateTime.Now);
            List<Rfpsummary> rfpSummaryDBList = _unitOfWork.RFPSummaryRepository.GetMany(s => s.OpportunityId == opportunityId).ToList();
            _loggerManager.LogInfo("start db class = DocumentService : method = SaveSummary log 2" + DateTime.Now);

            List<Rfpsummary> uncommonDeletedSummaryField = rfpSummaryDBList.Where(c => !summaryList.Any(d => c.FieldName == d.key)).ToList();

            List<SummaryViewModel> uncommonNewAddSummaryField = summaryList.Where(c => !rfpSummaryDBList.Any(d => c.key == d.FieldName)).ToList();

            if (uncommonDeletedSummaryField.Count > 0 || uncommonNewAddSummaryField.Count > 0)
            {
                foreach (var summaryDB in rfpSummaryDBList)
                {
                    _unitOfWork.RFPSummaryRepository.Delete(summaryDB);
                    status = true;
                }

                foreach (var newSummary in summaryList)
                {
                    Rfpsummary rfpSummary = new Rfpsummary();

                    rfpSummary.FieldName = newSummary.key;
                    rfpSummary.FieldValue = newSummary.value;

                    int displayOrder = 0;
                    int.TryParse(newSummary.DisplayOrder, out displayOrder);
                    rfpSummary.DisplayOrder = displayOrder;

                    int filedTypeId = 0;
                    int.TryParse(newSummary.FiledTypeId, out filedTypeId);
                    rfpSummary.FieldTypeId = int.Parse(newSummary.FiledTypeId);
                    rfpSummary.OpportunityId = opportunityId;
                    rfpSummary.CreatedBy = userId;
                    rfpSummary.CompanyId = companyId;
                    _unitOfWork.RFPSummaryRepository.Insert(rfpSummary);
                    status = true;
                }
            }
            else
            {
                UpdateOpportunityName(userId, opportunityId, summaryList);
                UpdateSummary(summaryList, rfpSummaryDBList, userId);
                return true;
            }

            return status;

        }

        private void UpdateOpportunityName(decimal userId, decimal opportunityId, List<SummaryViewModel> summaryList)
        {
            Opportunity opportunityDB = _unitOfWork.opportunityRepository.GetByID(opportunityId);

            SummaryViewModel summaryViewModel = summaryList.FirstOrDefault(s => s.key == "Solicitation Title");
            if (opportunityDB.OpportunityName != summaryViewModel.value)
            {
                opportunityDB.OpportunityName = summaryViewModel.value;
                opportunityDB.ModifiedBy = userId;
                opportunityDB.ModifiedDate = DateTime.Now;
                _unitOfWork.opportunityRepository.Update(opportunityDB);
            }

        }
        private void UpdateSummary(List<SummaryViewModel> summaryList, List<Rfpsummary> rfpSummaryDBList, decimal userId)
        {
            foreach (var summary in summaryList)
            {
                Rfpsummary summaryDB = rfpSummaryDBList.FirstOrDefault(s => s.FieldName == summary.key);
                if (summaryDB != null)
                {
                    if (summary.value == null)
                    {
                        summaryDB.FieldValue = "";
                    }
                    else
                    {
                        summaryDB.FieldValue = summary.value;
                        summaryDB.DisplayOrder = int.Parse(summary.DisplayOrder);
                    }

                    summaryDB.ModifiedBy = userId;
                    summaryDB.ModifiedDate = DateTime.Now;
                    _unitOfWork.RFPSummaryRepository.Update(summaryDB);

                }
            }
        }





        //private void UpdateSummary(decimal userId, List<SummaryViewModel> summaryList, decimal rfpDocumentId)
        //{
        //    var rfpSummaryDBList = _unitOfWork.RFPSummaryRepository.GetMany(s => s.RfpdocumentId == rfpDocumentId);

        //    var commonSummaryField = summaryList.Where(c => rfpSummaryDBList.Any(d => c.key == d.FieldName)).ToList();
        //    var uncommonSummaryField = summaryList.Where(c => !rfpSummaryDBList.Any(d => c.key == d.FieldName)).ToList();

        //    foreach (var summary in summaryList)
        //    {
        //        var summaryDB = rfpSummaryDBList.FirstOrDefault(s => s.FieldName == summary.key);
        //        if (summaryDB != null)
        //        {
        //            if(summary.value == null)
        //            {
        //                summaryDB.FieldValue = "";
        //            }
        //            else
        //            {
        //                summaryDB.FieldValue = summary.value;
        //                int order = 0;
        //                int.TryParse(summary.DisplayOrder,out order);
        //                if(order > 0)
        //                {
        //                    summaryDB.DisplayOrder = order;
        //                }
        //                else
        //                {
        //                    summaryDB.DisplayOrder = summaryList.Count() + 1;
        //                }

        //            }

        //            summaryDB.ModifiedBy = userId;
        //            summaryDB.ModifiedDate = DateTime.Now;
        //            _unitOfWork.RFPSummaryRepository.Update(summaryDB);
        //        }
        //    }
        //}


        private bool UpdateCategoryData(decimal userId, decimal companyId, decimal categoryId, string categoryData, decimal opportunityId)
        {
            //Multiple file
            _loggerManager.LogInfo("start db class = DocumentService : method = UpdateCategoryData log 1" + DateTime.Now);
            var rfpCategoryData = _unitOfWork.RfpCategoryDataRepository.GetSelectedColumnWithWhare(cat => cat.OpportunityId == opportunityId && cat.CategoryId == categoryId,
                 cat => new RfpcategoryData()
                 {

                     RfpcategoryDataId = cat.RfpcategoryDataId,
                     CategoryData = cat.CategoryData,
                     CategoryId = cat.CategoryId,
                     OpportunityId = cat.OpportunityId,
                     CompanyId = cat.CompanyId,
                     UserId = cat.UserId,
                     CreatedBy = cat.CreatedBy,
                     CreatedDate = cat.CreatedDate,
                     ModifiedBy = cat.ModifiedBy,
                     ModifiedDate = cat.ModifiedDate,
                     Published = cat.Published

                 }).FirstOrDefault();

            _loggerManager.LogInfo("end db class = DocumentService : method = UpdateCategoryData log 1" + DateTime.Now);

            if (rfpCategoryData == null && categoryData.Trim() != "")
            {
                _unitOfWork.RfpCategoryDataRepository.Insert(new RfpcategoryData
                {
                    CategoryId = Convert.ToInt32(categoryId),
                    CategoryData = categoryData,                   
                    UserId = userId,
                    CompanyId = companyId,
                    CreatedBy = userId,
                    OpportunityId = opportunityId

                });
            }
            else
            {
                if (categoryData.Trim() == "")
                {
                    _unitOfWork.RfpCategoryDataRepository.Delete(rfpCategoryData);
                }
                else
                {
                    rfpCategoryData.CategoryData = categoryData;
                    rfpCategoryData.ModifiedBy = userId;
                    rfpCategoryData.ModifiedDate = DateTime.Now;
                    _unitOfWork.RfpCategoryDataRepository.Update(rfpCategoryData);
                }


            }

            return true;

        }

        //    private void UpdateCategoryData(decimal userId, decimal categoryId, string categoryData, decimal rfpDocumentId)
        //{
        //Multiple file
        //var rfpCategoryData = _unitOfWork.RfpCategoryDataRepository.GetSelectedColumnWithWhare(cat => cat.RfpdocumentId == rfpDocumentId && cat.CategoryId == categoryId,
        //     cat => new RfpcategoryData()
        //     {

        //         RfpcategoryDataId = cat.RfpcategoryDataId,
        //         CategoryData = cat.CategoryData,
        //         CategoryId = cat.CategoryId,
        //         RfpdocumentId = cat.RfpdocumentId,
        //         CompanyId = cat.CompanyId,
        //         UserId = cat.UserId,
        //         CreatedBy = cat.CreatedBy,
        //         CreatedDate = cat.CreatedDate,
        //         ModifiedBy = cat.ModifiedBy,
        //         ModifiedDate = cat.ModifiedDate,
        //         Published = cat.Published

        //     }).FirstOrDefault();


        //if (rfpCategoryData == null)
        //{
        //    _unitOfWork.RfpCategoryDataRepository.Insert(new RfpcategoryData
        //    {
        //        CategoryId = Convert.ToInt32(categoryId),
        //        CategoryData = WebUtility.HtmlEncode(categoryData),
        //        ModifiedDate = DateTime.Now,
        //        UserId = userId,
        //        ModifiedBy = userId,
        //        RfpdocumentId = rfpDocumentId

        //    });
        //}
        //else
        //{
        //    rfpCategoryData.CategoryData = WebUtility.HtmlEncode(categoryData);
        //    _unitOfWork.RfpCategoryDataRepository.Update(rfpCategoryData);

        //}


        //}

        #endregion

        private void DeleteCategory(decimal userId, decimal categoryId, string categoryData, decimal opportunityId)
        {
            //mutiple file
            var rfpCategoryData = _unitOfWork.RfpCategoryDataRepository.GetSelectedColumnWithWhare(cat => cat.OpportunityId == opportunityId && cat.CategoryId == categoryId,
                 cat => new RfpcategoryData()
                 {

                     RfpcategoryDataId = cat.RfpcategoryDataId,
                     CategoryData = cat.CategoryData,
                     CategoryId = cat.CategoryId,
                     OpportunityId = cat.OpportunityId,
                     CompanyId = cat.CompanyId,
                     UserId = cat.UserId,
                     CreatedBy = cat.CreatedBy,
                     CreatedDate = cat.CreatedDate,
                     ModifiedBy = cat.ModifiedBy,
                     ModifiedDate = cat.ModifiedDate,
                     Published = cat.Published

                 }).FirstOrDefault();


            if (rfpCategoryData != null)
            {
                
                
                _unitOfWork.RfpCategoryDataRepository.Delete(rfpCategoryData.RfpcategoryDataId);

            }


        }

        //public void GetSavedDocInfo(decimal companyId, decimal userId, out decimal clientId, out decimal segmentId,
        //    out string filepath, decimal docId, out decimal documentId, out string documentName,
        //    out string document, out List<SummaryModel> summaryModelList, out List<CategoryDataViewModel> categoryDataViewModelList)
        //{

        //    documentId = 0;
        //    documentName = "";
        //    document = null;
        //    clientId = 0;
        //    segmentId = 0;
        //    filepath = "";
        //    summaryModelList = new List<SummaryModel>();
        //    categoryDataViewModelList = new List<CategoryDataViewModel>();


        //    RfpdocumentEntity rfpDocumentEntity = GetDocInfoFromDB(companyId, userId, docId);
        //    if (rfpDocumentEntity == null) return;



        //    documentId = rfpDocumentEntity.RfpdocumentId;
        //    documentName = rfpDocumentEntity.DocName;

        //    clientId = (rfpDocumentEntity.ClientId == null) ? 0 : (decimal)rfpDocumentEntity.ClientId;
        //    segmentId = (rfpDocumentEntity.SegmentId == null) ? 0 : (decimal)rfpDocumentEntity.SegmentId;

        //    filepath = rfpDocumentEntity.FilePath;

        //    document = WebUtility.HtmlDecode(rfpDocumentEntity.DocContent);
        //    //Multiple files
        //    //List<RfpSummaryEntity> summaryList = rfpDocumentEntity.Rfpsummary.ToList();

        //    //foreach (var summary in summaryList)
        //    //{
        //    //    SummaryModel summaryModel = new SummaryModel();

        //    //    summaryModel.FieldDisplayName = summary.FieldName;
        //    //    summaryModel.FieldText = summary.FieldValue;
        //    //    summaryModel.ControlType = summary.FieldTypeName;
        //    //    summaryModel.FiledTypeId = summary.FieldTypeId;
        //    //    summaryModel.DisplayOrder = summary.DisplayOrder;
        //    //    summaryModelList.Add(summaryModel);
        //    //}

        //    //var categoryDataList = rfpDocumentEntity.RfpCategoryData;

        //    //foreach (var categoryData in categoryDataList)
        //    //{
        //    //    CategoryDataViewModel categoryDataViewModel = new CategoryDataViewModel();
        //    //    categoryDataViewModel.CategoryId = categoryData.CategoryId;
        //    //    categoryDataViewModel.Name = categoryData.CategoryName;
        //    //    categoryDataViewModel.CategoryData = WebUtility.HtmlDecode(categoryData.CategoryData);

        //    //    categoryDataViewModelList.Add(categoryDataViewModel);
        //    //}

        //    var list = PopulateEmptyCatagories(categoryDataViewModelList);
        //    categoryDataViewModelList.Clear();
        //    categoryDataViewModelList = list;
        //}

        public void GetSavedDocInfo(decimal companyId, decimal userId, out decimal clientId, out decimal segmentId,
           out string filepath, decimal docId, out decimal documentId, out string documentName,
           out string document, out List<SummaryModel> summaryModelList, out List<CategoryDataViewModel> categoryDataViewModelList)
        {

            documentId = 0;
            documentName = "";
            document = null;
            clientId = 0;
            segmentId = 0;
            filepath = "";
            summaryModelList = new List<SummaryModel>();
            categoryDataViewModelList = new List<CategoryDataViewModel>();


            RfpdocumentEntity rfpDocumentEntity = GetDocInfoFromDB(companyId, userId, docId);
            if (rfpDocumentEntity == null) return;



            documentId = rfpDocumentEntity.RfpdocumentId;
            documentName = rfpDocumentEntity.DocName;

            clientId = (rfpDocumentEntity.ClientId == null) ? 0 : (decimal)rfpDocumentEntity.ClientId;
            segmentId = (rfpDocumentEntity.SegmentId == null) ? 0 : (decimal)rfpDocumentEntity.SegmentId;

            filepath = rfpDocumentEntity.FilePath;

            document = WebUtility.HtmlDecode(rfpDocumentEntity.DocContent);
            //Multiple files
            //List<RfpSummaryEntity> summaryList = rfpDocumentEntity.Rfpsummary.ToList();

            //foreach (var summary in summaryList)
            //{
            //    SummaryModel summaryModel = new SummaryModel();

            //    summaryModel.FieldDisplayName = summary.FieldName;
            //    summaryModel.FieldText = summary.FieldValue;
            //    summaryModel.ControlType = summary.FieldTypeName;
            //    summaryModel.FiledTypeId = summary.FieldTypeId;
            //    summaryModel.DisplayOrder = summary.DisplayOrder;
            //    summaryModelList.Add(summaryModel);
            //}

            //var categoryDataList = rfpDocumentEntity.RfpCategoryData;

            //foreach (var categoryData in categoryDataList)
            //{
            //    CategoryDataViewModel categoryDataViewModel = new CategoryDataViewModel();
            //    categoryDataViewModel.CategoryId = categoryData.CategoryId;
            //    categoryDataViewModel.Name = categoryData.CategoryName;
            //    categoryDataViewModel.CategoryData = WebUtility.HtmlDecode(categoryData.CategoryData);

            //    categoryDataViewModelList.Add(categoryDataViewModel);
            //}

            var list = PopulateEmptyCatagories(categoryDataViewModelList);
            categoryDataViewModelList.Clear();
            categoryDataViewModelList = list;
        }

        
        private List<CategoryDataViewModel> PopulateEmptyCatagories(List<CategoryDataViewModel> categoryDataViewModelList)
        {
            CategorySingleton categorySingleton = CategorySingleton.GetInstance(_unitOfWork);
            //Ok
            List<CategoryEntity> categoryList = categorySingleton.CategoryList;

            List<CategoryEntity> catList = categoryList.Where(cat => categoryDataViewModelList.All(cate => cate.CategoryId != cat.CategoryId)).ToList();

            foreach (var item in catList)
            {
                CategoryDataViewModel categoryDataViewModel = new CategoryDataViewModel();
                categoryDataViewModel.CategoryId = item.CategoryId;
                categoryDataViewModel.Name = item.Name;

                categoryDataViewModelList.Add(categoryDataViewModel);
            }

            var list = categoryDataViewModelList.OrderBy(cat => cat.CategoryId).ToList();


            return list;
        }

        private RfpdocumentEntity GetDocInfoFromDB(decimal companyId, decimal userId, decimal docId)
        {

            RfpdocumentEntity rfpDocumentEntity = null;
            //multiple file
            //var DocEntity = _unitOfWork.RfpdocumentRepository.GetSelectedColumnWithWhare(doc => doc.RfpdocumentId == docId,
            //     doc => new RfpdocumentEntity()
            //     {
            //         RfpdocumentId = doc.RfpdocumentId,
            //         DocName = doc.DocName,
            //         DocContent = doc.DocContent,
            //         ClientId = doc.ClientId,
            //         SegmentId = doc.SegmentId,
            //         FilePath = doc.FilePath,
            //         RfpCategoryData = (ICollection<RfpCategoryDataEntity>)doc.RfpcategoryData.Select
            //         (cat => new RfpCategoryDataEntity()
            //         {
            //             CategoryId = cat.CategoryId,
            //             CategoryData = cat.CategoryData,
            //             CategoryName = cat.Category.Name

            //         }
            //         ).ToList(),
            //         Rfpsummary = (ICollection<RfpSummaryEntity>)doc.Rfpsummary.Select
            //         (sum => new RfpSummaryEntity()
            //         {
            //             FieldName = sum.FieldName,
            //             FieldValue = sum.FieldValue,
            //             FieldTypeName = sum.FieldType.FieldTypeShortDesc,
            //             DisplayOrder = sum.DisplayOrder,
            //             FieldTypeId = sum.FieldTypeId

            //         }
            //         ).OrderBy(sum => sum.DisplayOrder).ToList()
            //     });




            //if (DocEntity.Count > 0)
            //    rfpDocumentEntity = DocEntity.ToList()[0];

            return rfpDocumentEntity;
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


            if (rfpdocumentList != null && rfpdocumentList.Count > 0)
            {
                return rfpdocumentList[0];
            }
            return null;
        }

        private RfpcategoryData GetRFPCategoryDataById(decimal categoryId, decimal opportunityId)
        {
            RfpcategoryData rfpcategoryData = new RfpcategoryData();

            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbParameterCompanyId = new DataBaseParameter();
            dbParameterCompanyId.DBParameterName = "@RFPCategoryDataId";
            dbParameterCompanyId.DBParameterType = DatabaseDataType.Decimal;
            dbParameterCompanyId.DBParameterValue = categoryId;

            dataBaseParameterList.Add(dbParameterCompanyId);

            DataBaseParameter dbParameterUserId = new DataBaseParameter();
            dbParameterUserId.DBParameterName = "@OpportunityId";
            dbParameterUserId.DBParameterType = DatabaseDataType.Decimal;
            dbParameterUserId.DBParameterValue = opportunityId;

            dataBaseParameterList.Add(dbParameterUserId);
            _loggerManager.LogInfo("start db class = DocumentService : method = spGetRFPCategoryDataById log 1" + DateTime.Now);
            //log 1
            List<RfpcategoryData> rfpcategoryDataList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetRFPCategoryDataById]", rfpcategoryData, dataBaseParameterList);
            _loggerManager.LogInfo("end db class = DocumentService : method = spGetRFPCategoryDataById log 1" + DateTime.Now);

            if(rfpcategoryDataList != null && rfpcategoryDataList.Count > 0)
            {
                return rfpcategoryDataList[0];
            }
            return null;
        }


        private List<LastRfpDocumentIdByUser> GetLastSevedDocIdFromDBByUser(decimal companyId, decimal userId)
        {
            LastRfpDocumentIdByUser lastRfpDocumentIdByUser = new LastRfpDocumentIdByUser();

            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();

            DataBaseParameter dbParameterCompanyId = new DataBaseParameter();
            dbParameterCompanyId.DBParameterName = "@CompanyId";
            dbParameterCompanyId.DBParameterType = DatabaseDataType.Decimal;
            dbParameterCompanyId.DBParameterValue = companyId;

            dataBaseParameterList.Add(dbParameterCompanyId);

            DataBaseParameter dbParameterUserId = new DataBaseParameter();
            dbParameterUserId.DBParameterName = "@UserId";
            dbParameterUserId.DBParameterType = DatabaseDataType.Decimal;
            dbParameterUserId.DBParameterValue = userId;

            dataBaseParameterList.Add(dbParameterUserId);
            _loggerManager.LogInfo("start db class = DocumentService : method = GetLastSevedDocIdFromDBByUser log 1" + DateTime.Now);
            //log 1
            List<LastRfpDocumentIdByUser> docSolicitaionNoList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[GetLastRfpDocumentIdByUser]", lastRfpDocumentIdByUser, dataBaseParameterList);
            _loggerManager.LogInfo("end db class = DocumentService : method = GetLastSevedDocIdFromDBByUser log 1" + DateTime.Now);
            
            return docSolicitaionNoList;
        }
        public List<RfpdocumentEntity> Get(bool published, int companyId)
        {
            //multiple file
            //List<RfpdocumentEntity> documentNameList = _unitOfWork.RfpdocumentRepository.GetSelectedColumnWithWhare(
            //    v => v.CompanyId == companyId, v => new RfpdocumentEntity()
            //    {

            //        RfpdocumentId = v.RfpdocumentId,
            //        DocName = v.DocName,
            //        Rfpsummary = (ICollection<RfpSummaryEntity>)v.Rfpsummary.Select(y => new RfpSummaryEntity()
            //        {
            //            RfpdocumentId = y.RfpdocumentId,
            //            FieldName = y.FieldName,
            //            FieldValue = y.FieldValue
            //        })
            //    .Where(x => x.FieldName == "Closing Date and Time" | x.FieldName == "Requesting Agency")
            //    .OrderBy(o => o.FieldName).ToList()
            //    }
            //).OrderByDescending(d => d.RfpdocumentId).ToList();

            //return documentNameList;

            return null;
        }

        public ClientResponse GetCompanyOppertunityList(decimal companyId)
        {
            
            
            _loggerManager.LogInfo("start db class = DocumentService : method = GetCompanyOppertunityList log 1" + DateTime.Now);
            //log 1
            List<OpportunityEntity> opportunityEntitieList = _unitOfWork.opportunityRepository.GetSelectedColumnWithWhare(
                   oppor => oppor.CompanyId == companyId, oppor => new OpportunityEntity()
                   {
                       OpportunityId = oppor.OpportunityId,
                       OpportunityName = oppor.OpportunityName,
                       Rfpsummary = (ICollection<RfpSummaryEntity>)oppor.Rfpsummary.Select(rfpsummary => new RfpSummaryEntity()
                       {
                           OpportunityId = rfpsummary.OpportunityId,
                           FieldName = rfpsummary.FieldName,
                           FieldValue = rfpsummary.FieldValue
                       })
                       .Where(x => x.FieldName == "Closing Date and Time" | x.FieldName == "Requesting Agency")
                       //.OrderBy(o => o.FieldName).ToList()
                   }
                   ).OrderByDescending(o => o.OpportunityId).ToList();

            _loggerManager.LogInfo("start db class = DocumentService : method = GetCompanyOppertunityList log 1" + DateTime.Now);

            List<OpportunityNameListByCompanyViewModel> opportunityViewModelList = new List<OpportunityNameListByCompanyViewModel>();

            foreach (var opportunityEntity in opportunityEntitieList)
            {
                OpportunityNameListByCompanyViewModel opportunityViewModel = new OpportunityNameListByCompanyViewModel();
                opportunityViewModel.OpportunityId = opportunityEntity.OpportunityId;
                opportunityViewModel.OpportunityName = opportunityEntity.OpportunityName;


                RfpSummaryEntity rfpSummaryEntity = opportunityEntity.Rfpsummary.FirstOrDefault(summary => summary.FieldName == "Closing Date and Time");
                if (rfpSummaryEntity != null)
                {
                    opportunityViewModel.ClosingDateAndTime = rfpSummaryEntity.FieldValue;
                }


                rfpSummaryEntity = opportunityEntity.Rfpsummary.FirstOrDefault(summary => summary.FieldName == "Requesting Agency");
                if (rfpSummaryEntity != null)
                {
                    opportunityViewModel.RequestingAgency = rfpSummaryEntity.FieldValue;
                }

                opportunityViewModelList.Add(opportunityViewModel);
            }


            //opportunityNameListByCompanyViewModelList = _unitOfWork.opportunityRepository.GetSelectedColumnWithWhare(
            //  oppor => oppor.CompanyId == companyId, oppor => new OpportunityNameListByCompanyViewModel()
            //  {
            //      OpportunityId = oppor.OpportunityId,
            //      OpportunityName = oppor.OpportunityName,
            //      Rfpsummary = oppor.Rfpsummary.Select(rfpsummary => new SummaryByCompanyViewModel()
            //      {
            //          OpportunityId = rfpsummary.OpportunityId,


            //          FieldName = rfpsummary.FieldName,
            //          FieldValue = rfpsummary.FieldValue
            //      })
            //      .Where(x => x.FieldName == "Closing Date and Time" | x.FieldName == "Requesting Agency")
            //      .OrderBy(o => o.FieldName).ToList()
            //  }
            //  ).OrderByDescending(o => o.OpportunityId).ToList();


            if (opportunityViewModelList != null)
            {
                
                return Utility.GenerateResponse(WebApiResponseCode.Success, opportunityViewModelList) ;
            }
            else
            {
                return Utility.GenerateResponse(WebApiResponseCode.Fail);
            }

            
        }
        public List<DocSolicitaionNo> GetByCompanyId(decimal CompanyId, decimal userid)
        {
            DocSolicitaionNo docSolicitaionNo = new DocSolicitaionNo();

            DataBaseParameter dataBaseParameterCompanyId = new DataBaseParameter();
            dataBaseParameterCompanyId.DBParameterName = "@CompanyId";
            dataBaseParameterCompanyId.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameterCompanyId.DBParameterValue = CompanyId;

            DataBaseParameter dataBaseParameterUserId = new DataBaseParameter();
            dataBaseParameterUserId.DBParameterName = "@userId";
            dataBaseParameterUserId.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameterUserId.DBParameterValue = userid;

            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameterCompanyId);
            dataBaseParameterList.Add(dataBaseParameterUserId);

            _loggerManager.LogInfo("start db class = DocumentService : method = GetByCompanyId log 1" + DateTime.Now);
            List<DocSolicitaionNo> docSolicitaionNoList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("spGetDocSolicitaionNo", docSolicitaionNo, dataBaseParameterList);
            _loggerManager.LogInfo("end db class = DocumentService : method = GetByCompanyId log 1 " + DateTime.Now);

            return docSolicitaionNoList;
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

      
    }


}
