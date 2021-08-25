using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Text;
using Zbizlink.MicroEmailBroadCaster.DataModel.Models;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor
{
    public interface IEmailService
    {
        void Send(string name, string subject, string from, string to, string message, string url, string emailFrom, string host, int port, string password);

        void ReplytoEmail(int categoryID, string[] to, string ReplyEmail, string SenderName, params object[] args);

        public UserRegistrationResponse SendByCategoryId(int categoryID, string password, string supportEmailPassword, string emailFrom, string applicationName, string host, int port, string bCCAdminEmail, string[] to, params object[] args);
        void SendWithDisplayName(int categoryID, string[] to, string displayName, params object[] args);

        void MeetingRequest(int categoryID, string[] to, params object[] args);
        void AppointmentRequest(int categoryID, string[] to, params object[] args);

        void SendAttachment(int categoryID, string[] to, string attachmentURL, params object[] args);

        void SendAttachmentWithDisplayName(int categoryID, string[] to, string attachmentURL, string displayName = "", params object[] args);

        void SendEmailMessage(string sub, MailAddress fromAdd, MailAddress to, string ReplyEmail, string SenderName, string inputmessage);

        void SendCalendarEvent(string sub, MailAddress fromAdd, MailAddress to, string inputmessage, string eventDateTime, decimal SchedulerID);

        void SendOpportunityCreatedEmail(int categoryID, string to, string username, string subject, string emailMessage);
        bool SendUserSignupEmailConfirm(string password, string emailFrom, string host, int port, string bCCAdminEmail, string urlLink, string emailTo, string userName, string subject, string htmlTemplate);
        bool SendCampaignManagementEmails(RMQ.CampaignSendModel CMSendModel, int categoryID, string password, string supportEmailPassword, string emailFrom, string applicationName, string host, int port, string bCCAdminEmail);
        bool SendForgotPasswordEmail(string password, string emailFrom, string host, int port, string bCCAdminEmail, string urlLink, string emailTo, string userName, string subject, string htmlTemplate);
    }
}
