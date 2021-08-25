using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.CMCommon.Models
{
    public class AppSettings
    {
        public string DBConnectionString { get; set; }
        public string SpecificCorsOriginsUrls { get; set; }
      
        public string RabbitMQ { get; set; }
        public string RabbitMqUri { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Queue { get; set; }

        public string BulkEmailCheckerAPIkey { get; set; } 
        public string BulkEmailCheckerServiceUri { get; set; }

        public string LemlistHeader { get; set; }




    }
}
