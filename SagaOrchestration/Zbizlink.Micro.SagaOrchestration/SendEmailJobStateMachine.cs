using Automatonymous;
using Zbizlink.Micro.RabbitMessageQueueBus.Events;
using System;
namespace Zbizlink.Micro.SagaOrchestration.StateMachines
{
    public class SendEmailJobStateMachine : MassTransitStateMachine<SendEmailJobState>
    {
        public State SendEmailJobStarted { get; private set; }
        public State SendEmailJobDone { get; private set; }
        public State SendEmailJobFailed { get; private set; }
        public Event<IEmailJobStatusStartedEvent> EmailJobStartedEvent { get; private set; }
        public Event<IEmailJobStatusCancelEvent> EmailJobCancelEvent { get; private set; }
        public Event<IEmailJobStatusDoneEvent> EmailJobDoneEvent { get; private set; }
        public SendEmailJobStateMachine()
        {
            Event(() => EmailJobStartedEvent, x => x.CorrelateById(context => context.Message.CampaignOpportunityId));
            Event(() => EmailJobDoneEvent, x => x.CorrelateById(context => context.Message.CampaignOpportunityId));
            Event(() => EmailJobCancelEvent, x => x.CorrelateById(context => context.Message.CampaignOpportunityId));

            InstanceState(x => x.CurrentState);

            Initially
                (
            When(EmailJobStartedEvent)
                .Then(context =>
                {
                    context.Instance.CorrelationId = context.Data.CampaignOpportunityId;
                })
                .TransitionTo(SendEmailJobStarted)
                .Publish(context => new SendEmailJobValidateEvent(context.Instance))
                .Finalize()
           
                );

            //During(SendEmailJobStarted,
            //    When(EmailJobDoneEvent)
            //     .Then(context =>
            //     {
            //         context.Instance.CorrelationId = context.Data.CampaignOpportunityId;
            //     })
            //    .TransitionTo(SendEmailJobDone)
            //    .Publish(context => new SendEmailJobValidateEvent(context.Instance))
            //    .Finalize()
            //    );

            //During(SendEmailJobStarted,
            //    When(EmailJobCancelEvent)
            //    .Then(context =>
            //    {
            //        context.Instance.CorrelationId = context.Data.CampaignOpportunityId;
            //    })
            //    .TransitionTo(SendEmailJobFailed)
            //    .Publish(context => new SendEmailJobValidateEvent(context.Instance))
            //    .Finalize()
            //    );

            SetCompletedWhenFinalized();

        }

    }
}
