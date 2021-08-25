using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI
{
    public class AppSettings
    {
        public string Secret { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        // RMQ Server Credentials 
        public string RMQHostName { get; set; }
        public string RMQUserName { get; set; }
        public string RMQPassword { get; set; }
        public string RMQVirtualHost { get; set; }
        // End of RMQ server Credentials 
        public string SmtpHost { get; set; }
        public int SmtpPort { get; set; }
        public string SmtpUserEmail { get; set; }
        public string SmtpUserPassword { get; set; }
        public string ReplyTo { get; set; }
        public string AdminEmail { get; set; }
        public string EmailFrom { get; set; }
        public string ApplicationName { get; set; }
        public string AccountConfirmationUrl { get; set; }

        public string DBConnectionString { get; set; }

        public string RabbitMQUri { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Queue { get; set; }
        public string CMQueue { get; set; }
        public string CampaignManagementURL { get; set; }
    }
}
