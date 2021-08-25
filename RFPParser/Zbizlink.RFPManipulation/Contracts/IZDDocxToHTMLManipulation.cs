using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPManipulation.Contracts
{
    public interface IZDDocxToHTMLManipulation
    {
        
        string ManipulateDoc(string htmlFileContent, out List<CategoryData> categoryDataList, out HtmlDocument htmlDocument,
            List<JobTitleWordEntity> jobTitleWordList, List<LaborHeadingEntity> LaborHeadingList, JobTitleNewModel jobTitleNewModel,
            out List<LineDetailModel> lineDetailModel);

        string ManipulateDocForAutoParsing(string htmlFileContent, decimal documentId, List<CategoryEntity> categoryList, out List<CategoryData> categoryDataList,
              List<JobTitleWordEntity> jobTitleWordList,
            List<LaborHeadingEntity> LaborHeadingList, JobTitleNewModel jobTitleNewModel,
           List<HTMLLineModel> htmlLineCollection, out List<LineDetailModel> lineDetailCollection);
        string CleanUpHtmlFile(string htmlFile);
    }
}
