using Automatonymous;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.Micro.SagaOrchestration
{
    public class SendEmailJobState : SagaStateMachineInstance
    {
        public Guid CorrelationId { get; set; }
        public string CurrentState { get; set; }
    }
}
