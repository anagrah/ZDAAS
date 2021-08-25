using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor
{
    public interface IEmailReciever
    {
        void ReceiveFanoutMessages(string queueName);
        bool CheckForQueue(string queueName);
    }
}
