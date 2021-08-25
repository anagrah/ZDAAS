using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroEmailBroadCaster.DataModel.Enum;

namespace Zbizlink.MicroEmailBroadCaster.DataModel.StoreProcedure
{
    public class DatabaseParameter
    {
        public string DBParameterName { get; set; }
        public object DBParameterValue { get; set; }
        public DatabaseDataType DBParameterType { get; set; }
    }
}
