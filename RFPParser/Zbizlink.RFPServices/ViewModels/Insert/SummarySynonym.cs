﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Insert
{
  public  class SummarySynonym
    {
        public decimal SummarySynonymId { get; set; }
        public string Synonym { get; set; }
        public string Description { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public decimal? SummaryFieldId { get; set; }
        public bool Assign { get; set; }
    }
}
