using System.Collections.Generic;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPLaborCategory.Contracts
{
    public interface ILaborHeadingIdentification
    {

        CategoryHeadingModel Get(List<LineDetailModel> lineDetailCollection, List<JobTitleWordEntity> jobTitleWordList,
            List<LaborHeadingEntity> LaborHeadingList, decimal categoryId, JobTitleNewModel jobTitleNewModel);
    }
}
