using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MassTransit;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;
namespace Zbizlink.MicroUserManagement.WebServiceAPI.Consumer
{
    public class ConsumerSendEmailJobStatus : IConsumer<SendEmailJobStatus>
    {
        public async Task Consume(ConsumeContext<SendEmailJobStatus> context)
        {
            //var message = context.Message.JobStatus;
            //return context.Send(new SendEmailJobStatus(message));
        }
    }
}
