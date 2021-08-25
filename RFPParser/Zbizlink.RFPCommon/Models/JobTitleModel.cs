using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Models
{
  public  class JobTitleModel
    {
        public JobTitleModel()
        {
            JobDescription = new List<JobDescriptionModel>();
        }
        public string JobTitle { get; set; }
        public int LineNumber { get; set; }
        public string NodeKey { get; set; }
        public bool HeadingContentMix { get; set; }
        public string Text { get; set; }
        public List<JobDescriptionModel> JobDescription { get; set; }
    }
}
