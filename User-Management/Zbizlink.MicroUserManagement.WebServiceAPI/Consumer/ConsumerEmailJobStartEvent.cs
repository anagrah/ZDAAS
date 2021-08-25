using MassTransit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Consumer
{
    public class ConsumerEmailJobStartEvent : IConsumer<IEmailJobStatusStartedEvent>
    {
        public async Task Consume(ConsumeContext<IEmailJobStatusStartedEvent> context)
        {
            var message = context.Message.CampaignOpportunityId;
        }
    }
}
