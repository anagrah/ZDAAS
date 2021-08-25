using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;

namespace Zbizlink.Micro.SagaOrchestration
{
    public class SendEmailJobValidateEvent : IEmailJobStatusValidateEvent
    {
        private readonly SendEmailJobState _sendEmailJobState;
        public SendEmailJobValidateEvent(SendEmailJobState sendEmailJobState)
        {
            _sendEmailJobState = sendEmailJobState;
        }
        public Guid CampaignOpportunityId => _sendEmailJobState.CorrelationId;
    }
}