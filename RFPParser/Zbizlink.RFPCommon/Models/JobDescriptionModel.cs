using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Models
{
  public  class JobDescriptionModel
    {
        public string Heading { get; set; }
        public string Detail { get; set; }

        public List<DetailCollection> DetailList { get; set; }
        public int HeadingLineNumber { get; set; }
        public int DetailLineNumber { get; set; }
        public string NodeKey { get; set; }
        public bool HeadingContentMix { get; set; }
        public string Text { get; set; }

    }
}
