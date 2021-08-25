using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Models
{
    public class JobTitleNewModel
    {
        public JobTitleNewModel()
        {
            JobTitleList = new List<string>();
            JobTitleAddOnList = new List<string>();
        }
        public List<string> JobTitleList { get; set; }
        public List<string> JobTitleAddOnList { get; set; }

       
    }
}
