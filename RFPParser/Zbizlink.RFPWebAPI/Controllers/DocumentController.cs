using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Zbizlink.RFPServices.Contracts;
using Zdaas.LoggerContracts;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPServices.Contracts;
using Zdaas.RFPServices.ViewModels;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Zdaas.RFPWebAPI.Controllers
{
    [Route("api/document")]
    public class DocumentController : Controller
    {
 
        private IFileManipulationService _fileManipulationService;
        private IDocumentService _DocumentService;
        private ILoggerManager _logger;
        private IFileConversionService _fileConversionService;
        private readonly ILookupDataService _lookupDataService;
        public DocumentController(
            IFileManipulationService fileManipulationService,
            IDocumentService DocumentService, ILoggerManager logger,
            IFileConversionService fileConversionService,
            ILookupDataService lookupDataService
            )
        {

            _fileManipulationService = fileManipulationService;
            _DocumentService = DocumentService;
            _logger = logger;
            _fileConversionService = fileConversionService;
            _lookupDataService = lookupDataService;

        }

        [HttpPost("wholeDocumentParseDataSave")]
        public async Task<IActionResult> WholeDocumentParseDataSave(decimal userId, decimal companyId, decimal documentId, decimal categoryId,
            decimal opportunityId, string categoryData)
        {


            var response = await Task<ClientResponse>.Run(() => (_DocumentService.WholeDocumentParseDataSave(userId, companyId, documentId, categoryId, opportunityId, categoryData)));

            return Ok(response);
        }

        //[HttpPost("upload"), DisableRequestSizeLimit]
        //public async Task<IActionResult> Upload(IFormFile fileList, decimal userId, decimal ClientId, decimal SegmentId,
        //    decimal companyID, string filepath)

        //{
        //    it is real time file reading
        //    var file1 = Request.Form.Files[0];
        //    var file = Request.Form.Files.FirstOrDefault();
        //    it is temp
        //    Microsoft.AspNetCore.Http.IFormFile file = null;
        //    _logger.LogInfo(" DocumentController.Upload() , fileName=" + file.FileName + " : userId=" + userId + " : ClientId=" + ClientId + " : SegmentId=" + SegmentId + " : companyID=" + companyID);
        //    List<CategoryViewModel> categoryList = null;
        //    List<SummaryModel> summaryDetail = null;
        //    List<CategoryDataViewModel> CategoryDataList = null;
        //    decimal docId = 0;
        //    string apiMessage = "";
        //    string apiStatus = "";

        //    string finalDocument = "";


        //    _fileManipulationService.DocxManipulate(fileList,
        //                        companyID, userId, ClientId, SegmentId, filepath, out categoryList,
        //                        out finalDocument, out summaryDetail, out docId, out CategoryDataList,
        //                        out apiMessage, out apiStatus);

        //    _fileManipulationService.TempDocxManipulate();

        //    await Task.Run(() => (_fileManipulationService.DocxManipulate(file,
        //                       companyID, userId, out categoryList, out finalDocument, out summaryDetail, out docId, out CategoryDataList)));
        //    _logger.LogWarn("Document Id: " + docId);
        //    var response = new
        //    {
        //        status = apiStatus,
        //        message = apiMessage,
        //        category = categoryList,
        //        document = finalDocument,
        //        summary = summaryDetail,
        //        documentId = docId,
        //        CategoryData = CategoryDataList
        //    };

        //    _logger.LogInfo(" DocumentController.Upload() , Reponse back to client, status code=" + apiStatus + " : StatusSessage=" + apiMessage);
        //    return Ok(response);
        //}

        [HttpPost("viewDocument"), DisableRequestSizeLimit]
        public async Task<IActionResult> ViewDocument(IFormFile file, decimal documentId)

        {
            _logger.LogInfo(" Method Name = ViewDocument, Parm:  file = " + file.FileName + ": documentId = " + documentId.ToString());
            //it is real time file reading
            //var file1 = Request.Form.Files[0];
            //var file = Request.Form.Files.FirstOrDefault();
            //it is temp    
            //Microsoft.AspNetCore.Http.IFormFile file = null;
            //_logger.LogInfo(" DocumentController.Upload() , fileName=" + file.FileName + " : userId=" + userId + " : ClientId=" + ClientId + " : SegmentId=" + SegmentId + " : companyID=" + companyID);

          var response =  await Task< ClientResponse>.Run(() => (_DocumentService.CreateHtmlFile(file, documentId)));

            return Ok(response);
        }

        [HttpPost("autoParsing")]
        public async Task<IActionResult> AutoParsing(decimal opportunityId, decimal documentId, string categoriesId)
        {
            _logger.LogInfo(" Akmal Method Name = AutoParsing, Parm:  opportunityId = " + opportunityId.ToString() + ": documentId = " + documentId.ToString());
            //string apiMessage = "";
            //string apiStatus = "";
            //List<CategoryDataViewModel> categoryDataViewModelList;
            //List<SummaryModel> summaryDetail;

            var response = await Task<ClientResponse>.Run(() => (_fileManipulationService.AutoParsing(opportunityId, documentId, categoriesId)));
            //var response = new
            //{

            //    apiStatusCode = apiStatus,
            //    apiStatusMessage = apiMessage,
            //    CategoryData = categoryDataViewModelList,
            //    summary = summaryDetail
            //};
            return Ok(response);
        }

        [HttpPost("viewSharePointDocument"), DisableRequestSizeLimit]
        public async Task<IActionResult> ViewDocument(string file, string fileName, decimal documentId)

        {
            _logger.LogInfo(" Method Name = viewSharePointDocument, Parm:  fileName = " + fileName + ": documentId = " + documentId.ToString());
            //it is real time file reading
            //var file1 = Request.Form.Files[0];
            //var file = Request.Form.Files.FirstOrDefault();
            //it is temp    
            //Microsoft.AspNetCore.Http.IFormFile file = null;
            //_logger.LogInfo(" DocumentController.Upload() , fileName=" + file.FileName + " : userId=" + userId + " : ClientId=" + ClientId + " : SegmentId=" + SegmentId + " : companyID=" + companyID);

         


          var response =  await Task<ClientResponse>.Run(() => (_DocumentService.CreateHtmlFile(file, fileName, documentId)));

            return Ok(response);
        }

        [HttpPost("saveFile")]
        public async Task<IActionResult> SaveFiles(string fileNameJsonList, decimal opportunityId,
             decimal userId, decimal ClientId, decimal SegmentId, decimal companyID)
        {
            _logger.LogInfo("controller = " + " DocumentController :" + " Method Name = SaveFiles, Parm:  opportunityId = " + opportunityId.ToString() + ": fileNameOkList = " + fileNameJsonList);
           
            var response = await Task<ClientResponse>.Run(() => (_DocumentService.SaveFiles(fileNameJsonList, opportunityId, userId, ClientId, SegmentId, companyID)));

            return Ok(response);
        }

        [HttpPost("deleteFile")]
        public async Task<IActionResult> DeleteFile(decimal documentId, bool deleteOnlyFile, decimal opportunityId)
        {
            _logger.LogInfo(" Method Name = deleteFile, Parm:  documentId = " + documentId.ToString() + ": opportunityId = " + opportunityId.ToString());
            //string apiMessage = "";
            //string apiStatus = "";

            var response = await Task<ClientResponse>.Run(() => (_DocumentService.DeleteHtmlFile(documentId, deleteOnlyFile, opportunityId)));

            //var response = new
            //{

            //    apiStatusCode = apiStatus,
            //    apiStatusMessage = apiMessage
            //};


            return Ok(response);
        }



        [HttpPost("save"), DisableRequestSizeLimit]
        public async Task<IActionResult> Save(decimal userId, decimal companyId, string opportunityId, string categoryId, string categoryData, string summary)
        {


          var response =  await Task<ClientResponse>.Run(() => (_DocumentService.Save(userId, companyId, Convert.ToDecimal(opportunityId), Convert.ToDecimal(categoryId), categoryData, summary)));
            //await Task.Run(() => (_DocumentService.Save(file, fileName, categoryId, categoryData)));

            //var response = new { status = "success" };
            return Ok(response);

        }

        [HttpPost("saveCategoriesAndSummaryData"), DisableRequestSizeLimit]
        public async Task<IActionResult> SaveCategoriesAndSummaryData(decimal userId, decimal companyId, string opportunityId, string categoriesData, string summary)
        {


            var response = await Task<ClientResponse>.Run(() => (_DocumentService.Save(userId, companyId, Convert.ToDecimal(opportunityId), categoriesData, summary)));
            //await Task.Run(() => (_DocumentService.Save(file, fileName, categoryId, categoryData)));

            //var response = new { status = "success" };
            return Ok(response);

        }




        [HttpPost("GetSavedDocInfo")]
        public async Task<IActionResult> GetSavedDocInfo(decimal companyId, decimal userId, decimal documentId)
        {

            decimal docId;
            string doc;
            string docName;
            decimal clientId;
            decimal segmentId;
            string filepath;
            List<SummaryModel> summaryModelList = null;
            List<CategoryDataViewModel> categoryDataViewModelList = null;

            _DocumentService.GetSavedDocInfo(companyId, userId, out clientId, out segmentId, out filepath, documentId,
                out docId, out docName, out doc, out summaryModelList, out categoryDataViewModelList);
            //await Task.Run(() => (_DocumentService.Save(file, fileName, categoryId, categoryData)));



            var response = new
            {
                status = "success",
                ClientId = clientId,
                SegmentId = segmentId,
                Filepath = filepath,
                documentId = docId,
                documentName = docName,
                document = doc,
                summary = summaryModelList,
                categoryData = categoryDataViewModelList
            };
            return Ok(response);


        }


        //[HttpGet("GetPublishedDocumentList")]
        //public async Task<IActionResult> GetPublishedDocumentList(int companyId)
        //{
        //    var docNameList = _DocumentService.Get(true, companyId);
        //    //await Task.Run(() => (_DocumentService.Get()));

        //    var response = new { status = "success", documentNameList = docNameList };
        //    return Ok(response);
        //}

        //[HttpGet("GetNonePublishedDocumentList")]
        //public async Task<IActionResult> GetNonePublishedDocumentList(int companyId)
        //{
        //    var docNameList = _DocumentService.Get(false, companyId);
        //    //await Task.Run(() => (_DocumentService.Get()));
        //    var response = new { status = "success", documentNameList = docNameList };
        //    return Ok(response);
        //}

        [HttpGet("getCompanyOppertunityList")]
        public async Task<IActionResult> GetCompanyOppertunityList(string companyId)
        {

            //_lookupDataService.GetCategorySynonymList(1, 0, 0, 0, 0);
            var response = await  Task<ClientResponse>.Run(() => (_DocumentService.GetCompanyOppertunityList(Convert.ToDecimal(companyId))));
            
           
            return Ok(response);
        }


        //[HttpGet("getbycompanyid")]
        //public async Task<IActionResult> Get(decimal companyId, decimal userId)
        //{

        //    var documentDetail = _DocumentService.GetByCompanyId(companyId, userId);
        //    //await Task.Run(() => (_DocumentService.Get()));

        //    var response = new { status = "success", documentNameList = documentDetail };
        //    return Ok(response);

        //}

        [HttpGet("getCategoryNameList")]
        public async Task<IActionResult> GetCategoryNameList()
        {
            var response = await Task<ClientResponse>.Run(() => (_DocumentService.GetCategoryNameList()));

            return Ok(response);
           
        }
    }
}
