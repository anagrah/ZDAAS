using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.Micro.RabbitMessageQueueBus.Events
{
    public interface IEmailJobStatusCancelEvent
    {
        public Guid CampaignOpportunityId { get; set; }
    }
}
