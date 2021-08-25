using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.Micro.RabbitMessageQueueBus.Model
{
    public class SendEmailJobStatus
    {
        //Job Status
        public Guid CorrelationId { get; set; }
        public bool Status { get; set; }
        public string CampaignOpportunityId { get; set; }
    }
}
