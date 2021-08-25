using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MassTransit;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Consumer
{
    public class ConsumerEmailJobStatusDone : IConsumer<IEmailJobStatusDoneEvent>
    {
        public async Task Consume(ConsumeContext<IEmailJobStatusDoneEvent> context)
        {
            var message = context.Message.CampaignOpportunityId;
        }
    }
}