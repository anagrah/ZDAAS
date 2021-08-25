using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.CampaignManagementStoreProcedureModel.Enum;

namespace Zbizlink.CampaignManagementStoreProcedureModel
{
   public class DataBaseParameter
    {
        public string DBParameterName { get; set; }
        public object DBParameterValue { get; set; }
        public DatabaseDataType DBParameterType { get; set; }
    }
}
