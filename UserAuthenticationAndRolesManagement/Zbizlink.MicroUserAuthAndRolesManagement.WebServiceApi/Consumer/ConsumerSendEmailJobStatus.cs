using MassTransit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi.Consumer
{
    public class ConsumerSendEmailJobStatus : IConsumer<IEmailSendStatusStartedEvent>
    {
        public Task Consume(ConsumeContext<IEmailSendStatusStartedEvent> context)
        {
            throw new NotImplementedException();
        }
    }
}
