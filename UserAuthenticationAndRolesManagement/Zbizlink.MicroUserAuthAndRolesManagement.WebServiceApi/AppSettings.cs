using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi
{
    public class AppSettings
    {
        public string DefaultConnection { get; set; }
        public string Secret { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public string DBConnectionString { get; set; }
        public string RabbitMQ { get; set; }
        public string BulkEmailCheckerAPIkey { get; set; }
        public string BulkEmailCheckerServiceUri { get; set; }
        public string RabbitMQUri { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Queue { get; set; }
        public string EmailConfirmationQueue { get; set; }
        public string ZbinlinkClientURL { get; set; }
    }
}
