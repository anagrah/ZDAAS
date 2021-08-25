using MassTransit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi.Consumer
{
    public class ConsumerEmailJobStatusDone : IConsumer<IEmailSendStatusDoneEvent>
    {
        
        public async Task Consume(ConsumeContext<IEmailSendStatusDoneEvent> context)
        {
            var message = context.Message.Status;
        }

      
    }
}
