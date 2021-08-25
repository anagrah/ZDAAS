using RFPStoreProcedureModel.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace RFPStoreProcedureModel
{
   public class DataBaseParameter
    {
        public string DBParameterName { get; set; }
        public object DBParameterValue { get; set; }
        public DatabaseDataType DBParameterType { get; set; }
    }
}
