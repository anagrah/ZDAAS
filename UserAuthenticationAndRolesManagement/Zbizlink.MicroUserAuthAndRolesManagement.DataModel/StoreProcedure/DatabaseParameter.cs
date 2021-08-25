using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Enum;

namespace Zbizlink.MicroUserAuthAndRolesManagement.DataModel.StoreProcedure
{
   public class DatabaseParameter
    {
        public string DBParameterName { get; set; }
        public object DBParameterValue { get; set; }
        public DatabaseDataType DBParameterType { get; set; }
    }
}

