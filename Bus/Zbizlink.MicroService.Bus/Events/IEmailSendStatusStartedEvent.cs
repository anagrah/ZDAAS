using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.Micro.RabbitMessageQueueBus.Events
{
    public interface IEmailSendStatusStartedEvent
    {
        public int EmailCategoryId { set; get; }
        public string Username { get; set; }
        public string EmailAddress { get; set; }
        public string URLLink { get; set; }
    }
}
