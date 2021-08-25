using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Reflection;
using System.Text;
using Zbizlink.Micro.Enum;
using Zbizlink.MicroEmailBroadCaster.DataModel.Contractor;
using Zbizlink.MicroEmailBroadCaster.DataModel.Models;
using Zbizlink.MicroEmailBroadCaster.LoggerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor;
using Zbizlink.MicroEmailBroadCaster.WorkerService.RMQ;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService
{
    public class EmailService : IEmailService
    {

        private readonly ILoggerManager _loggerManager;

        private readonly IUnitOfWork _unitOfWork;
        public EmailService(ILoggerManager loggerManager, IUnitOfWork unitOfWork)
        {
            _loggerManager = loggerManager;
            _unitOfWork = unitOfWork;

        }

        public void AppointmentRequest(int categoryID, string[] to, params object[] args)
        {
            throw new NotImplementedException();
        }

        public void MeetingRequest(int categoryID, string[] to, params object[] args)
        {
            throw new NotImplementedException();
        }

        public void ReplytoEmail(int categoryID, string[] to, string ReplyEmail, string SenderName, params object[] args)
        {
            throw new NotImplementedException();
        }

        public void Send(string name, string subject, string from, string to, string message, string url, string emailFrom, string host, int port, string password)
        {

            try
            {
                MailMessage mail = new MailMessage();
                mail.To.Add(to);
                mail.From = new MailAddress(emailFrom, "Zbizlink");
                mail.Subject = subject;
                // string body1 = "Hello " + name.Trim();
                StringBuilder body = new StringBuilder();
                body.Append("Hello " + name.Trim());
                body.Append("<br /><br />" + message);
                body.Append("<br />");
                body.Append(url);
                body.Append("<br />Thank you");

                mail.Body = body.ToString();
                mail.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = host;
                smtp.Port = port;
                smtp.UseDefaultCredentials = false;
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Credentials = new System.Net.NetworkCredential
                (emailFrom, password);// Enter seders User name and password

                smtp.EnableSsl = true;
                smtp.Send(mail);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void SendByCategoryId(int categoryID, string password, string supportEmailPassword, string emailFrom, string applicationName, string host, int port, string bCCAdminEmail, dynamic emailTemplate, string[] to, params object[] args)
        {
            MailAddress fromAddress = null;
            string fromPassword = password;
            if (1 == 0 && categoryID == 2005) //problem with smtp.office365.com thats why commented. In future can be fixed
            {
                fromAddress = new MailAddress(args[2].ToString(), "");
                fromPassword = supportEmailPassword;
            }
            else
            {
                fromAddress = new MailAddress(emailFrom, applicationName);
            }
            var toAddress = new MailAddress(to[0], to[1]);
            string subject = string.Empty;
            // EmailTemplate htmlBody = new EmailTemplate();
            // htmlBody = "";// _unitOfWorkAsync.Repository<EmailTemplate>().Queryable().Where(t => t.EmailCategoryID == categoryID).OrderByDescending(t => t.StartDate).Take(1).FirstOrDefault();
            if (categoryID == 2005)
                subject = "Contact Us";
            else
                subject = categoryID == 1005 ? args[2].ToString() : emailTemplate.Subject;//

            emailTemplate.Body = emailTemplate.Body.Replace("<a/>", "</a>");
            string body = string.Empty;
            try
            {
                body = string.Format(emailTemplate.Body, args);
            }
            catch (Exception)
            {
                body = emailTemplate.Body;
                body = body.Replace("{0}", args[0].ToString());//adding  name 
                body = body.Replace("{1}", args[1].ToString());//  company name 
                body = body.Replace("{2}", args[2].ToString()); // url
            }

            var smtp = new SmtpClient
            {
                Host = host,
                Port = port,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(emailFrom, password),
            };

            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true

            })
                try
                {
                    if (categoryID == 2)
                    {
                        var bbcAddress = new MailAddress(bCCAdminEmail);
                        message.Bcc.Add(bbcAddress);
                    }

                    smtp.Send(message);
                }
                catch (SmtpFailedRecipientsException ex)
                {
                    for (int i = 0; i < ex.InnerExceptions.Length; i++)
                    {
                        SmtpStatusCode status = ex.InnerExceptions[i].StatusCode;
                        if (status == SmtpStatusCode.MailboxBusy || status == SmtpStatusCode.MailboxUnavailable)
                        {
                            // Console.WriteLine("Delivery failed - retrying in 5 seconds.");
                        }
                        else
                        {
                            //  Console.WriteLine("Failed to deliver message to {0}", ex.InnerExceptions[i].FailedRecipient);
                            throw ex;
                        }
                    }
                }
                catch (Exception ex)
                {
                    //  Console.WriteLine("Exception caught in RetryIfBusy(): {0}",ex.ToString());
                    throw ex;
                }
        }
        public UserRegistrationResponse SendByCategoryId(int categoryID, string password, string supportEmailPassword, string emailFrom, string applicationName, string host, int port, string bCCAdminEmail, string[] to, params object[] args)
        {
            _loggerManager.LogError("<-----------Begning of SendByCategoryId function----------->>>>");
            _loggerManager.LogError("<-----------Parameters checking----------->>>>" + "categoryID =" + categoryID + "password =" + password + "supportEmailPassword =" + supportEmailPassword + "emailFrom =" + emailFrom + "applicationName =" + applicationName + "host =" + host + "port =" + port + "bCCAdminEmail =" + bCCAdminEmail);// + "to =" + to + "args =" + args);
            MailAddress fromAddress = null;
            string body = string.Empty;
            string subject = string.Empty;
            string fromPassword = password;
            _loggerManager.LogError("<-----------Begning of MailAddress object----------->>>>");
            fromAddress = new MailAddress(emailFrom, applicationName);
            _loggerManager.LogError("<-----------line # 87 toAddress----------->>>>");
            var toAddress = new MailAddress(to[0], to[1]);
            _loggerManager.LogError("<-----------start getting all emailTemplates----------->>>>");
            var emailTemplates = _unitOfWork.emailTemplateRepository.GetAll();
            _loggerManager.LogError("<-----------getting account activation email Template----------->>>>");
            var emailTemplateObj = emailTemplates.Where(s => s.EmailCategoryId == categoryID).OrderByDescending(t => t.StartDate).Take(1).FirstOrDefault();
            _loggerManager.LogError("<-----------got emailTemplateObj, line # 93----------->>>>");
            if (!string.IsNullOrEmpty(emailTemplateObj.Subject) && !string.IsNullOrWhiteSpace(emailTemplateObj.Subject))
                subject = emailTemplateObj.Subject;
            _loggerManager.LogError("<-----------emailTemplateObj.subject is fine----------->>>>");
            emailTemplateObj.Body = emailTemplateObj.Body.Replace("<a/>", "</a>");
            if (emailTemplateObj.Body != null)
                body = string.Format(emailTemplateObj.Body, args);
            _loggerManager.LogError("<-----------emailTemplateObj.Body is fine----------->>>>");
            var smtp = new SmtpClient
            {
                Host = host,
                Port = port,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(emailFrom, password),
            };
            _loggerManager.LogError("<----------- smtp client is fine----------->>>>");
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
                try
                {
                    _loggerManager.LogError("<-----------We reached successfuly at Line # 112 sending email ----------->>>>");
                    var bbcAddress = new MailAddress(bCCAdminEmail);
                    message.Bcc.Add(bbcAddress);
                    _loggerManager.LogError("<-----------sending email ----------->>>>");
                    smtp.Send(message);
                    _loggerManager.LogError("<----------- email sent ----------->>>>");
                    return new UserRegistrationResponse("Email has been sent successfully.", (Int32)EnumCollection.SuccessCode.Success);
                }
                catch (Exception ex)
                {
                    _loggerManager.LogError("sending email function did not worked =" + ex);
                    return new UserRegistrationResponse("Error sending email", (Int32)EnumCollection.ErrorCode.Fail);
                }

        }
        public void SendAttachment(int categoryID, string[] to, string attachmentURL, params object[] args)
        {
            throw new NotImplementedException();
        }

        public void SendAttachmentWithDisplayName(int categoryID, string[] to, string attachmentURL, string displayName = "", params object[] args)
        {
            throw new NotImplementedException();
        }

        public void SendCalendarEvent(string sub, MailAddress fromAdd, MailAddress to, string inputmessage, string eventDateTime, decimal SchedulerID)
        {
            throw new NotImplementedException();
        }

        public void SendEmailMessage(string sub, MailAddress fromAdd, MailAddress to, string ReplyEmail, string SenderName, string inputmessage)
        {
            throw new NotImplementedException();
        }

        public void SendOpportunityCreatedEmail(int categoryID, string to, string username, string subject, string emailMessage)
        {
            throw new NotImplementedException();
        }

        public void SendWithDisplayName(int categoryID, string[] to, string displayName, params object[] args)
        {
            throw new NotImplementedException();
        }

        public bool SendCampaignManagementEmails(CampaignSendModel CMSendModel, int categoryID, string password, string supportEmailPassword, string emailFrom, string applicationName, string host, int port, string bCCAdminEmail)
        {
            _loggerManager.logTransation(CMSendModel.transactionId, this.GetType(), MethodBase.GetCurrentMethod());
            _loggerManager.LogError("<-----------Begning of SendByCategoryId function----------->>>>");
            _loggerManager.LogError("<-----------Parameters checking----------->>>>" + "categoryID =" + categoryID + "password =" + password + "supportEmailPassword =" + supportEmailPassword + "emailFrom =" + emailFrom + "applicationName =" + applicationName + "host =" + host + "port =" + port + "bCCAdminEmail =" + bCCAdminEmail);// + "to =" + to + "args =" + args);
            MailAddress fromAddress = null;
            string body = string.Empty;
            string subject = string.Empty;
            string fromPassword = password;
            //CMSendModel.EmailAddress = CMSendModel.EmailAddress.TrimStart(';');
            _loggerManager.LogError("<-----------Begning of MailAddress object----------->>>>");
            fromAddress = new MailAddress(emailFrom, applicationName);
            _loggerManager.LogError("<-----------line # 87 toAddress----------->>>>");

            _loggerManager.LogError("<-----------start getting all emailTemplates----------->>>>");
            //  var emailTemplates = _unitOfWork.emailTemplateRepository.GetAll();
            _loggerManager.LogError("<-----------getting account activation email Template----------->>>>");
            //  var emailTemplateObj = emailTemplates.Where(s => s.EmailCategoryId == categoryID).OrderByDescending(t => t.StartDate).Take(1).FirstOrDefault();
            _loggerManager.LogError("<-----------got emailTemplateObj, line # 93----------->>>>");
            //if (!string.IsNullOrEmpty(emailTemplateObj.Subject) && !string.IsNullOrWhiteSpace(emailTemplateObj.Subject))
            //    subject = emailTemplateObj.Subject;
            //_loggerManager.LogError("<-----------emailTemplateObj.subject is fine----------->>>>");
            //emailTemplateObj.Body = emailTemplateObj.Body.Replace("<a/>", "</a>");
            //if (emailTemplateObj.Body != null)
            //  body = string.Format(emailTemplateObj.Body);
            body = string.Format(CMSendModel.EmailMessage + " <br> " + CMSendModel.OpportunityURL);
            string[] bccid = CMSendModel.EmailAddress.Split(';');
            if (CMSendModel.EmailAddress != "" && bccid.Length > 0)
            {
                var toAddress = new MailAddress(bccid[0]); // This is temporary address till than new suggestion 
                _loggerManager.LogError("<-----------emailTemplateObj.Body is fine----------->>>>");
                var smtp = new SmtpClient
                {
                    Host = host,
                    Port = port,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(emailFrom, password),
                };
                _loggerManager.LogError("<----------- smtp client is fine----------->>>>");
                using (var message = new MailMessage(fromAddress, toAddress)
                {
                    Subject = CMSendModel.OpportunityName,
                    Body = body,
                    IsBodyHtml = true
                })
                    try
                    {
                        _loggerManager.LogError("<-----------We reached successfuly at Line # 112 sending email ----------->>>>");

                        foreach (string bccEmailId in bccid)
                        {
                            if (bccEmailId != null && bccEmailId != "")
                            {
                                message.Bcc.Add(new MailAddress(bccEmailId)); //Adding Multiple BCC email Id  ""
                            }
                        }
                        _loggerManager.LogError("<-----------sending email ----------->>>>");
                        smtp.Send(message);
                        _loggerManager.LogError("<----------- email sent ----------->>>>");
                        return true;
                    }
                    catch (Exception ex)
                    {
                        _loggerManager.LogError("sending email function did not worked =" + ex);
                        return false;
                    }
            }
            else
            {
                _loggerManager.LogError("Email address can not be null or empty");
                return false;
            }
            return false;
        }

        public bool SendUserSignupEmailConfirm(string password, string emailFrom, string host, int port, string bCCAdminEmail, string urlLink, string emailTo, string userName, string subject, string htmlTemplate)
        {
            MailAddress fromAddress = null;
            string body = string.Empty;

            fromAddress = new MailAddress(emailFrom);
            body = string.Format(htmlTemplate, userName, urlLink);

            var toAddress = new MailAddress(emailTo);
            _loggerManager.LogError("<-----------emailTemplateObj.Body is fine----------->>>>");

            var smtp = new SmtpClient
            {
                Host = host,
                Port = port,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(emailFrom, password),
            };
            _loggerManager.LogError("<----------- smtp client is fine----------->>>>");
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
                try
                {
                    _loggerManager.LogError("<-----------We reached successfuly at Line # 112 sending email ----------->>>>");


                    _loggerManager.LogError("<-----------sending email ----------->>>>");
                    smtp.Send(message);
                    _loggerManager.LogError("<----------- email sent ----------->>>>");
                    return true;
                }
                catch (Exception ex)
                {
                    _loggerManager.LogError("sending email function did not worked =" + ex);
                    return false;
                }

            return false;
        }
        public bool SendForgotPasswordEmail(string password, string emailFrom, string host, int port, string bCCAdminEmail, string urlLink, string emailTo, string userName, string subject, string htmlTemplate)
        {
            MailAddress fromAddress = null;
            string body = string.Empty;

            fromAddress = new MailAddress(emailFrom);
            body = string.Format(htmlTemplate, userName, urlLink);

            var toAddress = new MailAddress(emailTo);
            _loggerManager.LogError("<-----------emailTemplateObj.Body is fine----------->>>>");

            var smtp = new SmtpClient
            {
                Host = host,
                Port = port,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(emailFrom, password),
            };
            _loggerManager.LogError("<----------- smtp client is fine----------->>>>");
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
                try
                {
                    _loggerManager.LogError("<-----------We reached successfuly at Line # 112 sending email ----------->>>>");


                    _loggerManager.LogError("<-----------sending email ----------->>>>");
                    smtp.Send(message);
                    _loggerManager.LogError("<----------- email sent ----------->>>>");
                    return true;
                }
                catch (Exception ex)
                {
                    _loggerManager.LogError("sending email function did not worked =" + ex);
                    return false;
                }

            return false;
        }
    }
}
