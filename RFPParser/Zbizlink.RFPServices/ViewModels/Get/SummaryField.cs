﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Get
{
  public  class SummaryField
    {
        public decimal SummaryFieldId { get; set; }
        public string FieldName { get; set; }
        public string Description { get; set; }
        public int? DisplayOrder { get; set; }
        public bool? Mandatory { get; set; }
    }
}
