using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.RFPCommon.Models
{
   public class ZdaasAppSettings
    {
        public string DBConnectionString { get; set; }
        public string SpecificCorsOriginsUrls { get; set; }
        public string gRPCCampaignManagementUrl { get; set; }
        
    }
}
