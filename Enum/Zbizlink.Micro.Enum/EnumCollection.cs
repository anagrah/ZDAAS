using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace Zbizlink.Micro.Enum
{
    public class EnumCollection
    {

        public enum ErrorCode
        {
            //
            // Summary:
            None = 0,
            //
            // Summary:
            Unknown = 1,
            //
            // Summary:
            Success = 2,

            //
            // Fail:
            Fail = 3,
            //
            // Summary:            

            ConnectionLost = 100,
            //
            // Summary:
            OutlierReading = 200,
            //
            // Summary:
            Login_Failed = 500,

            //Token Generation Error
            GenerateTokenFailed = 412,

            //Token Validation Error
            ValidateTokenFailed = 502,

            //No data found
            NotFound = 404,

            Wrong_User = 500,

            //Link Expired
            Request_Timeout = 408

        }
        public enum SuccessCode
        {
            Success = 200
        }

        public enum MQExchanges
        {
            [Description("Zbizlink.Local")]
            Zbizlink_TestAlerts = 1,

            [Description("Zbizlink.Dev")]
            Zbizlink_Dev = 2,

            [Description("Zbizlink.Prod")]
            Zbizlink_Prod = 3
        }

        public enum MQQueues
        {
            [Description("Zbizlink.NewOpportunityEmail")]
            Zbizlink_Email = 1,

            [Description("Zbizlink.PartnerAdd")]
            Zbizlink_PartnerAdd = 2,

            [Description("Zbizlink.NewEmployeeSignUp")]
            Zbizlink_NewSignUp = 3,

            [Description("Zbizlink.MessagesEmails")]
            zbizlink_MessagesEmail = 5,

            [Description("Zbizlink.EventsQueue")]
            zbizlink_EventQueue = 6,

            [Description("Zbizlink.ReminderQueue")]
            zbizlink_ReminderQueue = 7

            //[Description("Zbizlink.DemoRequestQueue")]
            //zbizlink_DemoRequestQueue = 8
        }
    }
}
