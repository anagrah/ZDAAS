using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor
{
    public interface IEmailStart
    {
        void Start(string QueueName);
    }
}
