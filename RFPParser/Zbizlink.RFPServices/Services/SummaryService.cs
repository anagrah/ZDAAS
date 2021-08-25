using AutoMapper;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPDataModel.Contracts;
using Zdaas.RFPServices.Contracts;
using Zdaas.RFPServices.ViewModels;
using Zdaas.RFPSummary.Contracts;
using Zdaas.RFPBusinessModel;

namespace Zdaas.RFPServices.Services
{
    public class SummaryService : ISummaryService
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly IDocumentSummary _documentSummary;
        private readonly IDocumentSummaryNew _documentSummaryNew;
        private List<RfpSummaryFieldEntity> _rfpSummaryFieldList;
        public SummaryService(IUnitOfWork unitOfWork, IDocumentSummary documentSummary, IDocumentSummaryNew documentSummaryNew)
        {
            _unitOfWork = unitOfWork;
            _documentSummary = documentSummary;
            _documentSummaryNew = documentSummaryNew;


        }

        

        public List<SummaryModel> GetDocumentSummary(HtmlDocument htmlDocument)
        {
            _rfpSummaryFieldList = new List<RfpSummaryFieldEntity>();
            GetSummaryFieldFromDB();

            
            List<SummaryModel> summaryList = _documentSummary.Get(htmlDocument, _rfpSummaryFieldList);

           


            return summaryList;
        }

        private void GetSummaryFieldFromDB()
        {

            
            _rfpSummaryFieldList = _unitOfWork.RfpSummaryFieldRepository.GetSelectedColumn(sf => new RfpSummaryFieldEntity()
            {
                RfpsummaryFieldId = sf.RfpsummaryFieldId,
                FieldName = sf.FieldName,
                DisplayOrder = sf.DisplayOrder,
                Mandatory = sf.Mandatory,
                RfpsummarySynonym = (ICollection<RfpSummarySynonymEntity>)sf.RfpsummarySynonym.Select
                   (synonym => new RfpSummarySynonymEntity() { Synonym = synonym.Synonym }).ToList()
            }).OrderBy(sf => sf.DisplayOrder).ToList();


        }

        public List<OpportunitySummaryViewModel> GetOpportunitySummary(decimal opportunityId)
        {
            //mutiple file
            var opportunitySummary = _unitOfWork.RFPSummaryRepository.GetSelectedColumnWithWhare(summary => summary.OpportunityId == opportunityId,
                  summary => new OpportunitySummaryViewModel()
                  {
                      FieldName = summary.FieldName,
                      FieldValue = summary.FieldValue,
                      FieldTypeID = summary.FieldTypeId,
                      IndexNo = summary.DisplayOrder

                  }).ToList();


            return opportunitySummary;

            return null;
        }



    }
}
