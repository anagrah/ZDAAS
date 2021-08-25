using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPLaborCategory.Contracts;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPLaborCategory
{
    public class LaborOpportunityNew : ILaborOpportunityNew
    {
        private List<HTMLLineModel> _htmlLineList;
        private List<LineDetailModel> _lineDetailList;
        private ILineCleanup _lineCleanup;

        private ILaborHeadingIdentification _laborHeadingIdentification;
        private ILaborContentIdentificationNew _laborContentIdentification;

        private List<JobTitleModel> _jobTitleModelList;
        private INodeTree _nodeTree;
        public LaborOpportunityNew(ILaborHeadingIdentification laborHeadingIdentification, 
            ILaborContentIdentificationNew laborContentIdentification, ILineCleanup lineCleanup, INodeTree nodeTree)
        {
            _laborHeadingIdentification = laborHeadingIdentification;
            _laborContentIdentification = laborContentIdentification;
            _lineCleanup = lineCleanup;
            _nodeTree = nodeTree;
        }
        public List<JobTitleModel> Get(string laborData, List<LaborHeadingEntity> LaborHeadingList, decimal categoryId, JobTitleNewModel jobTitleModel)
        {


            _htmlLineList = RFPCommon.Utility.GetDocHtmlLineCollection(laborData);
            _lineDetailList = _lineCleanup.GetCleanLineDetailCollection(_htmlLineList);

            _nodeTree.CreateNodeTree(_lineDetailList);
            CategoryHeadingModel categoryHeading =  _laborHeadingIdentification.Get(_lineDetailList, null, LaborHeadingList, categoryId, jobTitleModel);

            _jobTitleModelList = _laborContentIdentification.GetCategoryContents(categoryHeading, _htmlLineList, null, null, _lineDetailList, LaborHeadingList);

            return _jobTitleModelList;
        }



        
    }
}
