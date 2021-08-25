using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserManagement.DataModel.Enum;

namespace Zbizlink.MicroUserManagement.DataModel.StoreProcedure
{
   public class DatabaseParameter
    {
        public string DBParameterName { get; set; }
        public object DBParameterValue { get; set; }
        public DatabaseDataType DBParameterType { get; set; }
    }
}

