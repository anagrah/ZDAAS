using Microsoft.AspNetCore.Http;
using RFPStoreProcedureModel;
using System;
using System.Collections.Generic;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPServices.Models;
using Zdaas.RFPServices.ViewModels;
using Zdaas.RFPServices.ViewModels.Opportunity;

namespace Zdaas.RFPServices.Contracts
{
   public interface IDocumentService
    {
        ClientResponse WholeDocumentParseDataSave(decimal userId, decimal companyId,  decimal documentId, decimal categoryId,
            decimal opportunityId, string categoryData);
        ClientResponse SaveFiles(string fileNameJsonList, decimal opportunityId,
            decimal userId, decimal ClientId, decimal SegmentId, decimal companyID);
        bool HTMLConversion(IFormFile iFormFile, out string htmlFile, out string statusCode, out string statusMessage);
        ClientResponse GetCompanyOppertunityList(decimal companyId);
        ClientResponse GetCategoryNameList();
        ClientResponse CreateHtmlFile(string file, string fileName, decimal documentId);
        ClientResponse CreateHtmlFile(IFormFile iFormFile, decimal documentId);
        ClientResponse DeleteHtmlFile(decimal documentId, bool deleteOnlyfile, decimal opportunityId);
        ClientResponse Save(decimal userId, decimal companyId, decimal opportunityId, decimal categoryId, string categoryData, string summary);

        ClientResponse Save(decimal userId, decimal companyId, decimal opportunityId, string categoriesData, string summary);
        void GetSavedDocInfo(decimal companyId,  decimal userId, out decimal clientId, out decimal segmentId, out string filepath, decimal docId, out decimal documentId, out string documentName, out string document, out List<SummaryModel> summaryModelList, out List<CategoryDataViewModel> categoryDataViewModelList);
        List<RfpdocumentEntity> Get(bool published, int companyId);
        List<DocSolicitaionNo> GetByCompanyId(decimal CompanyId, decimal userid);
    }
}
