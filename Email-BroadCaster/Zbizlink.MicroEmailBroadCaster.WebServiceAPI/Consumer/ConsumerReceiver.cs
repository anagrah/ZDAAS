using MassTransit;
using System;
using System.Threading.Tasks;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;
using Zbizlink.Micro.SagaOrchestration;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Consumer
{
    public class ConsumerReceiver :IConsumer<IEmailJobStatusStartedEvent>
    {

        private readonly ISendEndpointProvider _sendEndpointProvider;
        public ConsumerReceiver(ISendEndpointProvider sendEndpointProvider)
        {
            _sendEndpointProvider = sendEndpointProvider;
        }
        public async Task Consume(ConsumeContext<IEmailJobStatusStartedEvent> context)
        {
            var message = context.Message;
            //Now send the message the job is done

            var endPoint = await _sendEndpointProvider.GetSendEndpoint(new Uri("queue:" + "test"));
            await endPoint.Send<IEmailJobStatusDoneEvent>(new
            {
                CampaignOpportunityId = context.Message.CampaignOpportunityId
            });
        }
    }
}