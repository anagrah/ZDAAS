using AutoMapper;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPManipulation.Models;
using Zdaas.RFPServices.ViewModels;

namespace Zdaas.RFPServices.Contracts
{
   public interface IFileManipulationService
    {
        bool DocxManipulate(IFormFile iFormFile, decimal companyId, decimal userId, decimal ClientId, decimal SegmentId,
            string filePath, out List<CategoryViewModel> categoryList,out string finalDocumentout, 
            out List<SummaryModel> summaryDetail,
            out decimal documentId, out List<CategoryDataViewModel> CategoryDataViewModelList, 
            out string messageToClient, out string status, int? opportunityTypeId,
            int? agencyId,
            int? contractVehicleId,
            int? industryId,
            int? stateId);

        ClientResponse AutoParsing(decimal opportunityId, decimal documentId, string categoriesId);

    }
}
