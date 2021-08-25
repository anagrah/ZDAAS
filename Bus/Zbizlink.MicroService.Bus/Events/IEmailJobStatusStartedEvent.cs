using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.Micro.RabbitMessageQueueBus.Events
{
    public interface IEmailJobStatusStartedEvent
    {
        public Guid CampaignOpportunityId { get; set; }
    }
}
