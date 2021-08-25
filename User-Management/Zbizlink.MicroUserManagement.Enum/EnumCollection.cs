using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroUserManagement.Enum
{
   
        public class EnumCollection
        {

            public enum ErrorCode
            {
                Fail = 2,
                //
                // Summary:
                None = 0,
                //
                // Summary:
                Unknown = 1,
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

       
        }
}
