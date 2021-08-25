using RFPStoreProcedureModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPServices.StoreProcedure.Contracts
{
  public  interface IDBProcedure
    {

        public OpportunitySolicitaionNo GetOpportunitySolicitaionNo(decimal opportunityId);
    }
}
