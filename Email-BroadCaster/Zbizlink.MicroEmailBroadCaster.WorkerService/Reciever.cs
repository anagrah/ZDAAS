using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Helper;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService
{
    public class Reciever : IEmailReciever
    {
        private IConnection connection = null;
        private Thread  _thread;
        private string baseURl;
        private readonly ILoggerManager _loggerManager;
        public Reciever(ILoggerManager loggerManager)
        {
            _loggerManager = loggerManager;
        }
        public bool CheckForQueue(string queueName)
        {
            StringBuilder logText = new StringBuilder();
            try
            {
                IModel channel = connection.CreateModel();
                channel.BasicQos(0, 1, false);
                EventingBasicConsumer eventingBasicConsumer = new EventingBasicConsumer(channel); 
                eventingBasicConsumer.Received += (sender, basicDeliveryEventArgs) =>
                {
                    try
                    {
                        var client = new WebClient();
                        string releases = string.Empty;
                        IBasicProperties basicProperties = basicDeliveryEventArgs.BasicProperties;
                        logText.Append(string.Concat(" [*] Message received from the exchange ", (string.IsNullOrWhiteSpace(basicDeliveryEventArgs.Exchange) ? "N/A" : basicDeliveryEventArgs.Exchange)));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Message received from the queue ", queueName));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Content type  : ", basicProperties.ContentType));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Consumer tag  : ", basicDeliveryEventArgs.ConsumerTag));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Delivery tag  : ", basicDeliveryEventArgs.DeliveryTag));
                        logText.Append("\n");
                        string data = Encoding.UTF8.GetString(basicDeliveryEventArgs.Body.ToArray());
                        logText.Append(string.Concat(" [*] Message       : ", Encoding.UTF8.GetString(basicDeliveryEventArgs.Body.ToArray())));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Message received by the accounting consumer: ", data));
                        logText.Append("\n");
                        dynamic EmailMQ = Newtonsoft.Json.JsonConvert.DeserializeObject(data);
                        string MessageType = EmailMQ.MessageType;
                        dynamic emailMessage = (dynamic)EmailMQ.MessageObject;
                        switch (MessageType)
                        {
                            case "DIRECT_EMAIL_MESSAGE":
                                #region . Direct Email Message Body .
                                string compID = Convert.ToString(emailMessage.CompanyID);
                                string CompanyID = EncryptionOrDecryption.Encrypt(compID);
                                string emailIds = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.EmailIDs));
                                string ReplyTo = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                string SenderName = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                string LegalBusinessName = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.LegalBusinessName));
                                string subject = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.Subject));
                                string message = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.Message));
                                string attachmentFileName = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.AttachmentFileName));
                                string DownloadPath = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.DownloadPath));
                                // Creating webclient to hit the webapi for the processing.
                                new Task(() =>
                                {
                                    // Adding parameters.
                                    try
                                    {
                                        client = new WebClient() { UseDefaultCredentials = true };
                                        var reqparm = new System.Collections.Specialized.NameValueCollection();
                                        client.QueryString.Add("CompanyID", CompanyID);
                                        client.QueryString.Add("emailIds", emailIds);
                                        client.QueryString.Add("ReplyTo", ReplyTo);
                                        client.QueryString.Add("SenderName", SenderName);
                                        client.QueryString.Add("LegalBusinessName", LegalBusinessName);
                                        client.QueryString.Add("subject", subject);
                                        client.QueryString.Add("message", message);
                                        client.QueryString.Add("attachmentFileName", attachmentFileName);
                                        client.QueryString.Add("DownloadPath", DownloadPath);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/PostDirectEmail", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception iex)
                                    {
                                        _loggerManager.LogError(iex.ToString()); 
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "SEND_MESSAGE_TASK":
                                #region . Direct Email Message Body .
                                string toAddress = Convert.ToString(emailMessage.toAddress);
                                string toName = Convert.ToString(emailMessage.toName);
                                string toReply = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                string toSenderNme = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                string BusinessName = Convert.ToString(emailMessage.LegalBusinessName);
                                string Subject = Convert.ToString(Convert.ToString(emailMessage.subject));
                                string Message = Convert.ToString(Convert.ToString(emailMessage.Message));
                                // Encrypt the data
                                toAddress = EncryptionOrDecryption.Encrypt(toAddress);
                                toName = EncryptionOrDecryption.Encrypt(toName);
                                BusinessName = EncryptionOrDecryption.Encrypt(BusinessName);
                                Subject = EncryptionOrDecryption.Encrypt(Subject);
                                Message = EncryptionOrDecryption.Encrypt(Message);
                                // Creating webclient to hit the webapi for the processing.
                                new Task(() =>
                                {
                                    // Adding parameters.
                                    try
                                    {
                                        client = new WebClient() { UseDefaultCredentials = true };
                                        var reqparm = new System.Collections.Specialized.NameValueCollection();
                                        client.QueryString.Add("toAddress", toAddress);
                                        client.QueryString.Add("toName", toName);
                                        client.QueryString.Add("ReplyTo", toReply);
                                        client.QueryString.Add("SenderName", toSenderNme);
                                        client.QueryString.Add("BusinessName", BusinessName);
                                        client.QueryString.Add("Message", Message);
                                        client.QueryString.Add("Subject", Subject);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/TaskMessageMail", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception iex)
                                    {
                                        _loggerManager.LogError(iex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "EMPLOYEE_INVITATION":
                                #region . Direct Email Message Body .
                                string to = Convert.ToString(emailMessage.toAddress);
                                string Name = Convert.ToString(emailMessage.Name);
                                string companyName = Convert.ToString(emailMessage.companyName);
                                string url = Convert.ToString(Convert.ToString(emailMessage.url));
                                // Encrypt the data
                                to = EncryptionOrDecryption.Encrypt(to);
                                string toReplyinvitation = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                string toSenderNmeinvitation = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                Name = EncryptionOrDecryption.Encrypt(Name);
                                companyName = EncryptionOrDecryption.Encrypt(companyName);
                                url = EncryptionOrDecryption.Encrypt(url);
                                // Creating webclient to hit the webapi for the processing.
                                new Task(() =>
                                {
                                    // Adding parameters.
                                    try
                                    {
                                        client = new WebClient() { UseDefaultCredentials = true };
                                        var reqparm = new System.Collections.Specialized.NameValueCollection();
                                        client.QueryString.Add("to", to);
                                        client.QueryString.Add("ReplyTo", toReplyinvitation);
                                        client.QueryString.Add("SenderName", toSenderNmeinvitation);
                                        client.QueryString.Add("Name", Name);
                                        client.QueryString.Add("companyName", companyName);
                                        client.QueryString.Add("url", url);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/EmployeeEmail", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception iex)
                                    {
                                        _loggerManager.LogError(iex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "OPPORTUNITY_CREATED":
                                #region . Opportunity Created Body .
                                decimal opportunityID = Convert.ToDecimal(emailMessage.OpportunityID);
                                string testurl = "";
                                new Task(() =>
                                {
                                    try
                                    {
                                        string cryptID = EncryptionOrDecryption.Encrypt(opportunityID.ToString());
                                        string toReplyoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSenderNmeoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("OpportunityID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyoppertunity);
                                        client.QueryString.Add("SenderName", toSenderNmeoppertunity);
                                        // Calling the webapi.
                                        testurl = baseURl + "Email/OpportunityCreated?OpportunityID=" + cryptID + "&ReplyTo=" + toReplyoppertunity + "&SenderName=" + toSenderNmeoppertunity;
                                        byte[] response = client.DownloadData(baseURl + "Email/OpportunityCreated?OpportunityID=" + cryptID + "&ReplyTo=" + toReplyoppertunity + "&SenderName=" + toSenderNmeoppertunity);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception ex)
                                    {
                                        Exception newExp = new Exception(ex + ",Exception in CheckForQueue function line#712::" + ex.Message + "apiurl=" + testurl);
                                        _loggerManager.LogError(newExp.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "OPPORTUNITY_UPDATED":
                                #region . Opportunity Created Body .

                                decimal oPid = Convert.ToDecimal(emailMessage.OpportunityID);
                                new Task(() =>
                                {
                                    try
                                    {
                                        //string cryptID = EncryptionOrDecryption.Encrypt(oPid.ToString());
                                        //client.QueryString.Add("OpportunityID", cryptID);

                                        string cryptID = EncryptionOrDecryption.Encrypt(oPid.ToString());
                                        string toReplyemail = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSender = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("OpportunityID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyemail);
                                        client.QueryString.Add("SenderName", toSender);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/OpportunityUpdated?OpportunityID=" + cryptID, "PUT", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception ex)
                                    {
                                        _loggerManager.LogError(ex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();

                                #endregion
                                break;
                            case "OPPORTUNITY_TO_PROPOSAL":
                                #region . Opportunity To Proposal Body .
                                decimal OppID = Convert.ToDecimal(emailMessage);
                                new Task(() =>
                                {
                                    try
                                    {
                                        //TODO: Send the message to the company's user 
                                        //      Send the messages to the partners.
                                        string cryptID = EncryptionOrDecryption.Encrypt(OppID.ToString());
                                        string toReplyoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSenderNmeoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("OpportunityID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyoppertunity);
                                        client.QueryString.Add("SenderName", toSenderNmeoppertunity);
                                        // Calling the webapi.
                                        // byte[] response = client.DownloadData(baseURl + "Email/OpportunityConverted?OpportunityID=" + cryptID + "&isActive=true");
                                        byte[] response = client.UploadValues(baseURl + "Email/OpportunityUpdated?OpportunityID=" + cryptID + "&isActive=true", "PUT", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception ex)
                                    {
                                        _loggerManager.LogError(ex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "OPPORTUNITY_COMPLETED":
                                #region . Opportunity To Proposal Body .
                                decimal PropID = Convert.ToDecimal(emailMessage.OpportunityID);
                                new Task(() =>
                                {
                                    try
                                    {
                                        string cryptID = EncryptionOrDecryption.Encrypt(PropID.ToString());
                                        string toReplyoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSenderNmeoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("ProposalID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyoppertunity);
                                        client.QueryString.Add("SenderName", toSenderNmeoppertunity);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/ProposalCompleted", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception ex)
                                    {
                                        _loggerManager.LogError(ex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "REMINDER_EMAIL":
                                #region . Opportunity To Proposal Body .
                                decimal SchedulerID = Convert.ToDecimal(emailMessage.SchedulerID);
                                new Task(() =>
                                {
                                    try
                                    {
                                        //baseURl = ConfigManager.QuartzApiURL;
                                        string cryptID = EncryptionOrDecryption.Encrypt(SchedulerID.ToString());
                                        string toReplyReminder = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSenderNmeReminder = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("SchedulerID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyReminder);
                                        client.QueryString.Add("SenderName", toSenderNmeReminder);
                                        client.QueryString.Add("PassCode", "tre46546");
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/SendReminderEmail", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                        _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                    }
                                    catch (Exception ex)
                                    {
                                        _loggerManager.LogError(ex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;                            
                            default:
                                channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                break;
                        }
                    }
                    catch (Exception ex)
                    {
                        channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                        _loggerManager.LogError(ex.ToString());
                    }
                };

                // If the consumer shutdowns reconnect to rabbit and begin reading from the queue again.
                eventingBasicConsumer.Shutdown += (o, e) =>
                {
                    // bool isConnectedToRMQ = isConnectedWithRMQServer(string HostName, string UserName, string Password, string VirtualHost)
                    ReceiveFanoutMessages(queueName);
                };

                channel.BasicConsume(queueName, false, eventingBasicConsumer);

                LaunchThread(queueName);
                return false;
            }
            catch (Exception ex)
            {
                try
                {
                    //Logger.InfoFormat("Running as {0}", WindowsIdentity.GetCurrent().Name);
                    IModel channel = connection.CreateModel();
                    channel.QueueDeclare(queueName, true, false, false, null);
                    IBasicProperties properties = channel.CreateBasicProperties();
                    properties.Persistent = true;
                    properties.ContentType = "text/plain";
                    dynamic emailMessage = new ExpandoObject();
                    dynamic EmailMQ = new ExpandoObject();
                    EmailMQ.MessageType = "Testing";
                    EmailMQ.MessageObject = emailMessage;
                    string json = Newtonsoft.Json.JsonConvert.SerializeObject(EmailMQ);
                    channel.BasicPublish(string.Empty, queueName, null, Encoding.UTF8.GetBytes(json));
                    var consumer = new EventingBasicConsumer(channel);
                    consumer.Received += (model, ea) =>
                    {
                        var body = ea.Body.ToArray(); 
                        var message = Encoding.UTF8.GetString(body);
                        Console.WriteLine(" [x] {0}", message);
                    };
                    channel.BasicConsume(queue: queueName, autoAck: true, consumer: consumer);
                    channel.Close();
                    connection.Close();
                }
                catch (Exception iex) { }
                CheckForQueue(queueName);
                //LaunchThread(queueName);
                return true;
            }
        }
         
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
        internal void LaunchThread(string queueName)
        {
            var thread = _thread;
            //Prevent optimization from not using the local variable
            Thread.MemoryBarrier();
            if (thread == null || thread.ThreadState == ThreadState.Stopped)
            {
                Thread newThread = new Thread(() => Thread_ContinuousChecker(queueName));
                newThread.IsBackground = true;
                newThread.Name = "ZBizlink " + queueName + " Queue Checker";
                newThread.Start();
                //Prevent optimization from setting the field before calling Start
                Thread.MemoryBarrier();
                _thread = newThread;
            }
        }

        internal void Thread_ContinuousChecker(string queueName)
        {
            while (true)
            {
                try
                {

                    var client = new WebClient();
                    var baseURl = ""; //ConfigManager.WebAPIURL;
                    //ServicePointManager.SecurityProtocol = SecurityProtocolType.Ssl3;
                    client = new WebClient();
                    // Calling the webapi.
                    byte[] response = client.DownloadData(baseURl + "Values");
                    // Formatting response.
                    var releases = Encoding.UTF8.GetString(response);
                }
                catch (Exception ex) { }
                Thread.Sleep(30 * 1000);

            }
        }


        public void ReceiveFanoutMessages(string queueName)
        {
            StringBuilder logText = new StringBuilder();
            try
            {
                IModel channel = connection.CreateModel();
                channel.BasicQos(0, 1, false);
                EventingBasicConsumer eventingBasicConsumer = new EventingBasicConsumer(channel);
                // This will create a subscriber which will keep listening to the RMQ.
                eventingBasicConsumer.Received += (sender, basicDeliveryEventArgs) =>
                {
                    try
                    {
                        var client = new WebClient();
                        //var baseURl = ConfigManager.WebAPIURL;
                        string releases = string.Empty;
                        IBasicProperties basicProperties = basicDeliveryEventArgs.BasicProperties;
                        logText.Append(string.Concat(" [*] Message received from the exchange ", (string.IsNullOrWhiteSpace(basicDeliveryEventArgs.Exchange) ? "N/A" : basicDeliveryEventArgs.Exchange)));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Message received from the queue ", queueName));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Content type  : ", basicProperties.ContentType));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Consumer tag  : ", basicDeliveryEventArgs.ConsumerTag));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Delivery tag  : ", basicDeliveryEventArgs.DeliveryTag));
                        logText.Append("\n");
                        string data = Encoding.UTF8.GetString(basicDeliveryEventArgs.Body.ToArray());
                        logText.Append(string.Concat(" [*] Message       : ", Encoding.UTF8.GetString(basicDeliveryEventArgs.Body.ToArray())));
                        logText.Append("\n");
                        logText.Append(string.Concat(" [*] Message received by the accounting consumer: ", data));
                        logText.Append("\n");
                        dynamic EmailMQ = Newtonsoft.Json.JsonConvert.DeserializeObject(data);
                        string MessageType = EmailMQ.MessageType;
                        dynamic emailMessage = (dynamic)EmailMQ.MessageObject;
                        switch (MessageType)
                        {
                            case "DIRECT_EMAIL_MESSAGE":
                                #region . Direct Email Message Body .
                                string compID = Convert.ToString(emailMessage.CompanyID);
                                string CompanyID = EncryptionOrDecryption.Encrypt(compID);
                                string emailIds = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.EmailIDs));
                                // Also Add ReplyEmail  and SenderName
                                string ReplyTo = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                string SenderName = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                string LegalBusinessName = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.LegalBusinessName));
                                string subject = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.Subject));
                                string message = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.Message));
                                string attachmentFileName = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.AttachmentFileName));
                                string DownloadPath = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.DownloadPath));

                                // Creating webclient to hit the webapi for the processing.
                                new Task(() =>
                                {
                                    // Adding parameters.
                                    try
                                    {
                                        client = new WebClient() { UseDefaultCredentials = true };
                                        var reqparm = new System.Collections.Specialized.NameValueCollection();
                                        client.QueryString.Add("CompanyID", CompanyID);
                                        client.QueryString.Add("emailIds", emailIds);
                                        client.QueryString.Add("ReplyTo", ReplyTo);
                                        client.QueryString.Add("SenderName", SenderName);
                                        client.QueryString.Add("LegalBusinessName", LegalBusinessName);
                                        client.QueryString.Add("subject", subject);
                                        client.QueryString.Add("message", message);
                                        client.QueryString.Add("attachmentFileName", attachmentFileName);
                                        client.QueryString.Add("DownloadPath", DownloadPath);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/PostDirectEmail", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception iex)
                                    {
                                        _loggerManager.LogError(iex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "SEND_MESSAGE_TASK":
                                #region . Direct Email Message Body .
                                string toAddress = Convert.ToString(emailMessage.toAddress);
                                string toName = Convert.ToString(emailMessage.toName);
                                string toReply = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                string toSenderNme = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                string BusinessName = EncryptionOrDecryption.Encrypt(emailMessage.LegalBusinessName);
                                string Subject = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.subject));
                                string Message = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.Message));
                                // Creating webclient to hit the webapi for the processing.
                                new Task(() =>
                                {
                                    // Adding parameters.
                                    try
                                    {
                                        client = new WebClient() { UseDefaultCredentials = true };
                                        var reqparm = new System.Collections.Specialized.NameValueCollection();
                                        client.QueryString.Add("toAddress", toAddress);
                                        client.QueryString.Add("toName", toName);
                                        client.QueryString.Add("ReplyTo", toReply);
                                        client.QueryString.Add("SenderName", toSenderNme);
                                        client.QueryString.Add("BusinessName", BusinessName);
                                        client.QueryString.Add("Message", Message);
                                        client.QueryString.Add("Subject", Subject);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/TaskMessageMail", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception iex)
                                    {
                                        _loggerManager.LogError(iex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "EMPLOYEE_INVITATION":
                                #region . Direct Email Message Body .
                                string to = Convert.ToString(emailMessage.toAddress);
                                string Name = Convert.ToString(emailMessage.Name);
                                string companyName = Convert.ToString(emailMessage.companyName);
                                string url = Convert.ToString(Convert.ToString(emailMessage.url));

                                // Encrypt the data
                                to = EncryptionOrDecryption.Encrypt(to);
                                Name = EncryptionOrDecryption.Encrypt(Name);
                                companyName = EncryptionOrDecryption.Encrypt(companyName);
                                url = EncryptionOrDecryption.Encrypt(url);
                                string toReplyinvitation = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                string toSenderNmeinvitation = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                // Creating webclient to hit the webapi for the processing.
                                new Task(() =>
                                {
                                    // Adding parameters.
                                    try
                                    {
                                        client = new WebClient() { UseDefaultCredentials = true };
                                        var reqparm = new System.Collections.Specialized.NameValueCollection();
                                        client.QueryString.Add("to", to);
                                        client.QueryString.Add("ReplyTo", toReplyinvitation);
                                        client.QueryString.Add("SenderName", toSenderNmeinvitation);
                                        client.QueryString.Add("Name", Name);
                                        client.QueryString.Add("companyName", companyName);
                                        client.QueryString.Add("url", url);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/EmployeeEmail", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception iex)
                                    {
                                        _loggerManager.LogError(iex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "OPPORTUNITY_CREATED":
                                #region . Opportunity Created Body .
                                decimal opportunityID = Convert.ToDecimal(emailMessage.OpportunityID);
                                new Task(() =>
                                {
                                    try
                                    {
                                        string cryptID = EncryptionOrDecryption.Encrypt(opportunityID.ToString());
                                        string toReplyoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSenderNmeoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("OpportunityID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyoppertunity);
                                        client.QueryString.Add("SenderName", toSenderNmeoppertunity);
                                        // Calling the webapi.
                                        byte[] response = client.DownloadData(baseURl + "Email/OpportunityCreated?OpportunityID=" + cryptID + "&ReplyTo=" + toReplyoppertunity + "&SenderName=" + toSenderNmeoppertunity);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception ex)
                                    {
                                        _loggerManager.LogError(ex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "OPPORTUNITY_UPDATED":
                                #region . Opportunity Created Body .

                                decimal oPid = Convert.ToDecimal(emailMessage.OpportunityID);

                                new Task(() =>
                                {
                                    try
                                    {
                                        string cryptID = EncryptionOrDecryption.Encrypt(oPid.ToString());
                                        string toReplyemail = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSender = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("OpportunityID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyemail);
                                        client.QueryString.Add("SenderName", toSender);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/OpportunityUpdated?OpportunityID=" + cryptID, "PUT", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception ex)
                                    {
                                        _loggerManager.LogError(ex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();

                                #endregion
                                break;
                            case "OPPORTUNITY_TO_PROPOSAL":
                                #region . Opportunity To Proposal Body .
                                decimal OppID = Convert.ToDecimal(emailMessage.OpportunityID);
                                new Task(() =>
                                {
                                    try
                                    {
                                        //TODO: Send the message to the company's user 
                                        //      Send the messages to the partners.
                                        string cryptID = EncryptionOrDecryption.Encrypt(OppID.ToString());
                                        string toReplyoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSenderNmeoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("OpportunityID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyoppertunity);
                                        client.QueryString.Add("SenderName", toSenderNmeoppertunity);
                                        // Calling the webapi.
                                        //   byte[] response = client.DownloadData(baseURl + "Email/OpportunityConverted?OpportunityID=" + cryptID + "&isActive=true");
                                        byte[] response = client.UploadValues(baseURl + "Email/OpportunityUpdated?OpportunityID=" + cryptID + "&isActive=true", "PUT", client.QueryString);

                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception ex)
                                    {
                                        _loggerManager.LogError(ex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "OPPORTUNITY_COMPLETED":
                                #region . Opportunity To Proposal Body .
                                decimal PropID = Convert.ToDecimal(emailMessage.OpportunityID);
                                new Task(() =>
                                {
                                    try
                                    {
                                        string cryptID = EncryptionOrDecryption.Encrypt(PropID.ToString());
                                        string toReplyoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSenderNmeoppertunity = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("ProposalID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyoppertunity);
                                        client.QueryString.Add("SenderName", toSenderNmeoppertunity);
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/ProposalCompleted", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                    }
                                    catch (Exception ex)
                                    {
                                        _loggerManager.LogError(ex.ToString());
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                    _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;
                            case "REMINDER_EMAIL":
                                #region . Opportunity To Proposal Body .
                                decimal SchedulerID = Convert.ToDecimal(emailMessage.SchedulerID);
                                new Task(() =>
                                {
                                    try
                                    {
                                        //baseURl = ConfigManager.QuartzApiURL;
                                        string cryptID = EncryptionOrDecryption.Encrypt(SchedulerID.ToString());
                                        string toReplyReminder = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.ReplyTo));
                                        string toSenderNmeReminder = EncryptionOrDecryption.Encrypt(Convert.ToString(emailMessage.SenderName));
                                        client.QueryString.Add("SchedulerID", cryptID);
                                        client.QueryString.Add("ReplyTo", toReplyReminder);
                                        client.QueryString.Add("SenderName", toSenderNmeReminder);
                                        client.QueryString.Add("PassCode", "tre46546");
                                        // Calling the webapi.
                                        byte[] response = client.UploadValues(baseURl + "Email/SendReminderEmail", "POST", client.QueryString);
                                        // Formatting response.
                                        releases = Encoding.UTF8.GetString(response);
                                        _loggerManager.LogInfo(logText.ToString() + ". Message from the webapi : '" + Convert.ToString(releases) + "'");
                                    }
                                    catch (Exception ex)
                                    {
                                        _loggerManager.LogError(ex.ToString()); 
                                    }
                                    channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                }, TaskCreationOptions.LongRunning).Start();
                                #endregion
                                break;                            
                            default:
                                channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                                break;
                        }
                    }
                    catch (Exception ex)
                    {
                        channel.BasicAck(basicDeliveryEventArgs.DeliveryTag, false);
                        _loggerManager.LogError(ex.ToString()); 
                    }
                };

                // If the consumer shutdowns reconnect to rabbit and begin reading from the queue again.
                eventingBasicConsumer.Shutdown += (o, e) =>
                {
                  // bool isConnectedToRMQ = isConnectedWithRMQServer(string HostName, string UserName, string Password, string VirtualHost)
                    ReceiveFanoutMessages(queueName);
                };
                channel.BasicConsume(queueName, false, eventingBasicConsumer);
            }
            catch (Exception ex)
            {
                try
                {
                    //Logger.InfoFormat("Running as {0}", WindowsIdentity.GetCurrent().Name);
                    IModel channel = connection.CreateModel();
                    channel.QueueDeclare(queueName, true, false, false, null);
                    IBasicProperties properties = channel.CreateBasicProperties();
                    properties.Persistent = true;
                    properties.ContentType = "text/plain";
                    dynamic emailMessage = new ExpandoObject();
                    dynamic EmailMQ = new ExpandoObject();
                    EmailMQ.MessageType = "Testing";
                    EmailMQ.MessageObject = emailMessage;
                    string json = Newtonsoft.Json.JsonConvert.SerializeObject(EmailMQ);
                    channel.BasicPublish(string.Empty, queueName, null, Encoding.UTF8.GetBytes(json));
                    var consumer = new EventingBasicConsumer(channel);
                    consumer.Received += (model, ea) =>
                    {
                        var body = ea.Body.ToArray();
                        var message = Encoding.UTF8.GetString(body);
                        Console.WriteLine(" [x] {0}", message);
                    };
                    channel.BasicConsume(queue: queueName, autoAck: true, consumer: consumer);
                    channel.Close();
                    connection.Close();
                }
                catch (Exception iex) 
                { 
                }

                _loggerManager.LogError(ex.ToString()); 

                //ReceiveFanoutMessages(queueName);
            }
            LaunchThread(queueName);
        }
    }
}
