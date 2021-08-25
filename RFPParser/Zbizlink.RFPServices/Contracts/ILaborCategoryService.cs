using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPServices.Contracts
{
  public  interface ILaborCategoryService
    {
        List<JobTitleModel> GetForOpportunity(string categoryData);

    }
}
