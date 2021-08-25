using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroUserManagement.DataModel.Models
{ 
    public class BulkEmailCheckerAPIResponse
    {
        public string status { get; set; }
        public string @event { get; set; } // event is invalid token,that's why used @event
        public string details { get; set; }
        public string email { get; set; }
        public string emailSuggested { get; set; }
        public string mailbox { get; set; }
        public string domain { get; set; }
        public string mxIp { get; set; }
        public string mxLocation { get; set; }
        public bool isComplainer { get; set; }
        public bool isDisposable { get; set; }
        public bool isFreeService { get; set; }
        public bool isOffensive { get; set; }
        public bool isRoleAccount { get; set; }
        public int validationsRemaining { get; set; }
        public int hourlyQuotaRemaining { get; set; }
        public string execution { get; set; }
    }
}
