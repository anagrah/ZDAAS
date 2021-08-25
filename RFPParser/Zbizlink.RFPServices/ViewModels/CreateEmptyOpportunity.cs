using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPServices.ViewModels
{
   public class CreateEmptyOpportunity
    {
        public decimal opportunityId { get; set; }
        public string opportunityName { get; set; }
        public List<FileNameModel> fileNameList { get; set; }
        public List<SummaryModel> summary { get; set; }
    }
}
