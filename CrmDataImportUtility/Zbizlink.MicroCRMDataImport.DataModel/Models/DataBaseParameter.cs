using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.Micro.Enum;

namespace Zbizlink.MicroCRMDataImport.DataModel.Models
{
    public class DataBaseParameter
    {
        public string DBParameterName { get; set; }
        public object DBParameterValue { get; set; }
        public DatabaseDataTypes DBParameterType { get; set; }
    }
}
