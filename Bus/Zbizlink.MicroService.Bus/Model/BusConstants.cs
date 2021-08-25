using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.Micro.RabbitMessageQueueBus
{
    public class BusConstants
    {
        public string RabbitMqUri { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string OrderQueue {get;set;}
        public BusConstants(string _RabbitMqUri, string _UserName,string _Password,string _OrderQueue)
        {
            RabbitMqUri = _RabbitMqUri;
            UserName = _UserName;
            Password = _Password;
            OrderQueue = _OrderQueue;
        }

    }
}
