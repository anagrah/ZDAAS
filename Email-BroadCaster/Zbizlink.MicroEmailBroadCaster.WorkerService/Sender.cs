using log4net;
using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.Micro.Enum;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService
{
    public class Sender : ISender
    {
        #region Properties and Variables .
        private readonly ILoggerManager _loggerManager;
        private IConnection connection = null; 
        #endregion
        public Sender(ILoggerManager loggerManager)
        {
            _loggerManager = loggerManager;
        }
        #region Private Methods  
        public bool isConnectedWithRMQServer(string HostName, string UserName, string Password, string VirtualHost)
        {
            bool isConnected = false;
            if (string.IsNullOrWhiteSpace(HostName) || string.IsNullOrWhiteSpace(UserName) || string.IsNullOrWhiteSpace(Password) || string.IsNullOrWhiteSpace(VirtualHost))
            {
                _loggerManager.LogError("Invalid credentials provided"); 
            }
            else
            {
                ConnectionFactory connectionFactory = new ConnectionFactory();
                connectionFactory.HostName = HostName;
                connectionFactory.UserName = UserName;
                connectionFactory.Password = Password;
                connectionFactory.VirtualHost = VirtualHost;
                //connectionFactory.Protocol = Protocols.DefaultProtocol;
                connectionFactory.Port = AmqpTcpEndpoint.UseDefaultPort;
                connection = connectionFactory.CreateConnection();
                isConnected = true;
            }
            return isConnected;
        }
        #endregion

        #region Private Methods
        private void SetupInitialTopicQueue(IModel model, string Exchange, string queue)
        {
            model.QueueDeclare(queue, true, false, false, null);
            model.ExchangeDeclare(Exchange, ExchangeType.Fanout, true);
            model.QueueBind(queue, Exchange, "");
        }
        private void SendDurableMessage(IModel model, string Exchange, string data)
        {
            IBasicProperties basicProperties = model.CreateBasicProperties();
            basicProperties.Persistent = false;
            byte[] payload = Encoding.UTF8.GetBytes(data);
            PublicationAddress address = new PublicationAddress(ExchangeType.Fanout, Exchange, "");
            model.BasicPublish(address, basicProperties, payload);
        }
        private void Send(string Exchange, string queue, string data)
        {
            IModel model = connection.CreateModel();
            SetupInitialTopicQueue(model, Exchange, queue);
            SendDurableMessage(model, Exchange, data);
            Console.WriteLine(" [x] Sent {0}", data);
        }
        #endregion 
        public void SendToFanoutExchange(string source , string Data,string exchangeType)
        {
            exchangeType = Helper.Helper.GetExchangeType(exchangeType); 
            try
            {
                IModel channel = connection.CreateModel();
                StringBuilder logMessage = new StringBuilder();
                //channel.ExchangeDeclare(_exchange, ExchangeType.Direct, true, false, null);
                channel.QueueDeclare(source + "_" + EnumCollection.MQQueues.Zbizlink_Email, true, false, false, null);
                //channel.QueueBind(_queue, _exchange, "*"+_queue + "*"); 
                IBasicProperties properties = channel.CreateBasicProperties();
                properties.Persistent = true;
                properties.ContentType = "text/plain";
                //PublicationAddress address = new PublicationAddress(ExchangeType.Topic, _exchange, "#"+_queue + "#");
                //channel.BasicPublish(address, properties, Encoding.UTF8.GetBytes(message));
                channel.BasicPublish(string.Empty, source + "_" + EnumCollection.MQQueues.Zbizlink_Email, null, Encoding.UTF8.GetBytes(Data));
                channel.Close();
                connection.Close();
                logMessage.Append("{\"Exchange\": \"" + exchangeType + "\", \"Queue\": \"" + source + "_" + EnumCollection.MQQueues.Zbizlink_Email + "\", \"Message\": \"" + Data + "\"}");
                _loggerManager.LogError(logMessage.ToString());
            }
            catch (Exception ex)
            {
                _loggerManager.LogError(ex.StackTrace);
                _loggerManager.LogError(ex.Message);
            }
        }

    }
}
