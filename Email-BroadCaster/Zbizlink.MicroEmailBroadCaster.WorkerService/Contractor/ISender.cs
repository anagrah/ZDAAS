using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor
{
    public interface ISender
    {
        bool isConnectedWithRMQServer(string HostName, string UserName, string Password, string VirtualHost);
        void SendToFanoutExchange(string source , string Data, string exchangeType);
    }
}
