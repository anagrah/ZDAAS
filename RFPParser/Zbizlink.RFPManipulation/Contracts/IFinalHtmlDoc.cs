using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPManipulation.Contracts
{
  public interface IFinalHtmlDoc
    {
        string CreateFinalDoc(List<CategoryHeadingModel> categoryHeadingCollection, List<HTMLLineModel> htmlLineCollection,
            HtmlDocument htmlDocument, INodeTree nodeTree, List<CategoryData> categoryDataList, List<CategoryEntity> categories,
            List<LineDetailModel> lineDetailCollection, List<JobTitleWordEntity> jobTitleWordList, List<LaborHeadingEntity> LaborHeadingList);



    }
}
