using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.RMQ
{
    public class EmailReciever : IEmailStart
    {
        private readonly IEmailReciever _reciever;
        private readonly ILoggerManager _loggerManager;
        public EmailReciever(IEmailReciever reciever, ILoggerManager loggerManager)
        { 
            _reciever = reciever;
            _loggerManager = loggerManager;
        }
        public void Start(string QueueName)
        {
            try
            {
                if (_reciever.CheckForQueue(QueueName))
                { 
                    _reciever.ReceiveFanoutMessages(QueueName);
                }
            }
            catch (Exception ex)
            {
                _loggerManager.LogError(ex.ToString());
                throw ex;
            } 
        }
    }
}
