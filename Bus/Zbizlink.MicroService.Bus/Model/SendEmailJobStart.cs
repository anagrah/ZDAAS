using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.Micro.RabbitMessageQueueBus.Model
{
    public class SendEmailJobStart
    {
        public Guid CampaignOpportunityId { get; set; }
    }
}
