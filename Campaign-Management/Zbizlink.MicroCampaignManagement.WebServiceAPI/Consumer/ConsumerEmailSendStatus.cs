using MassTransit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;
using Zbizlink.MicroCampaignManagement.WorkerService.Contracts;

namespace Zbizlink.MicroCampaignManagement.WebServiceAPI.Consumer
{
    public class ConsumerEmailSendStatus : IConsumer<SendEmailJobStatus>
    {

        private ICampaignManagementService _campaignManagementService;
        public ConsumerEmailSendStatus(ICampaignManagementService campaignManagementService)
        {
            _campaignManagementService = campaignManagementService;
        }
        public async Task Consume(ConsumeContext<SendEmailJobStatus> context)
        {
            SendEmailJobStatus sendEmailJobStatus = context.Message;


            if (sendEmailJobStatus.Status == true)
            {
                _campaignManagementService.UpdateCampaignEmailStatusFalseOrTrue(sendEmailJobStatus.CampaignOpportunityId, sendEmailJobStatus.Status);
            }

        }
    }
}
