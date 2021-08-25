using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.Micro.RabbitMessageQueueBus.Events
{
    public interface IEmailSendStatusDoneEvent
    {
        public bool Status { get; set; }

        public string ErrorMessage { get; set; }

    }
}
