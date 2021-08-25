using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPServices.ViewModels.Opportunity
{
   public class RfpDocumentViewModel
    {
        public string OpportunityName { get; set; }
        public IFormFile OrignalFile { get; set; }
        public string FileName { get; set; }
        public string FileNameColor { get; set; }
        public decimal fileRFPDbId { get; set; }
        public string HTMLFile { get; set; }
        public bool SavedSharePoint { get; set; }
        public string FilePathSharePoint { get; set; }
        public bool Saved { get; set; }
        public bool View { get; set; }
        public bool? Parsed { get; set; }
        
    }
}
