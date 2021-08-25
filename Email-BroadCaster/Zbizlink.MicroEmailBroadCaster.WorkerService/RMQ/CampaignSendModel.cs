using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.RMQ
{
   public class CampaignSendModel
    {
        public string transactionId { get; set; }
        public string OpportunityName { get; set; }
        public string EmailMessage { get; set; }
        public string EmailAddress { get; set; }
        public string OpportunityURL { get; set; }
    }
}
