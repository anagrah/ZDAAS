using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Zbizlink.MicroUserManagement.DataModel.Models
{
    public class UserRegistrationRequest
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string BusinessName { get; set; }
        public string Source { get; set; }
        public string PhoneNumber { get; set; }
        public Guid ActivationCode { get; set; }
        public int IsActiveID { get; set; }
        public string BulkEmailCheckerAPIkey { get; set; }
        public string BulkEmailCheckerServiceUri { get; set; }

        [JsonIgnore]
        public string Password { get; set; }

        public int BizlinkLoginIsAllowed { get; set; }




    }
}
