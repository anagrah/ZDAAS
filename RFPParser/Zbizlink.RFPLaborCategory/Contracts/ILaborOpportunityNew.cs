using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPLaborCategory.Contracts
{
     public interface ILaborOpportunityNew
    {

        List<JobTitleModel> Get(string laborData,
           List<LaborHeadingEntity> LaborHeadingList, decimal categoryId, JobTitleNewModel jobTitleModel);
    }
}
