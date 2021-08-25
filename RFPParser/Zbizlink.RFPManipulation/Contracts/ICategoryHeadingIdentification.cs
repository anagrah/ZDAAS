using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPManipulation.Models;

namespace Zdaas.RFPManipulation.Contracts
{
   public interface ICategoryHeadingIdentification
    {

        List<CategoryHeadingModel> CategoryHeadingIdentify(List<CategoryEntity> categoryCollection,
                                                                List<LineDetailModel> LineDetailCollection,
                                                                List<JobTitleWordEntity> jobTitleWordList, List<LaborHeadingEntity> LaborHeadingList,
                                                                JobTitleNewModel jobTitleNewModel);
       
    }
}
