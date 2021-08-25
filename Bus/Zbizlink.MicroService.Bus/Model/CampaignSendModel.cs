using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.Micro.RabbitMessageQueueBus.Model
{
   public class CampaignSendModel
    {
        public string transactionId { get; set; }
        public decimal CampaignOpportunityId { get; set; }
        public string OpportunityName { get; set; }
        public string EmailMessage { get; set; }
        public string EmailAddress { get; set; }
        public string OpportunityURL { get; set; }
    }
}
