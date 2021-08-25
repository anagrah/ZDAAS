using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroUserManagement.Enum
{
    public static class UserMessages
    {
        public static readonly string UserAuthenticationFail = "Email or password is incorrect";
        public static readonly string UserInValid = "Sorry, system did not recognize you a valid user";
        public static readonly string UserRegistrationFail = "User registration failed";
        public static readonly string UserConfirmationFail = "User confirmation failed,please contact administrator";
        public static readonly string UserNotFound = "User not found";
        public static readonly string UserNoDataFound = "No data found";
        public static readonly string UserSuccessMessage = "success";
        public static readonly string UserVerifiedAndTokenGenerated = "User is verified, Token has been generated";
        public static readonly string UserSuccessFullyRegistered = "User has been successfully registered.";
        public static readonly string UserRegistrationConfirmedForLogin = "Your registration is already confirmed,Please login to continue";
        public static readonly string UserRegistrationConfirmed = "User has been successfully confirmed.";
        public static readonly string UserLinkHasExpired = "Your link has expired,please click on resend email link.";
        public static readonly string UserConfirmationFailedContactAdministrator = "User confirmation failed,please contact administrator.";
    }
}
