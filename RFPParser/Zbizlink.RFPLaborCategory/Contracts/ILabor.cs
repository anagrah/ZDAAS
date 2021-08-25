using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPLaborCategory.Contracts
{
   public interface ILabor
    {
        List<JobTitleModel> Get(string laborData, List<JobTitleWordEntity> JobTitleWord, List<LaborHeadingEntity> laborHeadingEntityList);
    }
}
