using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Models
{
    public class EmailSenderRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string Message { get; set; }
        public Guid ActivationCode { get; set; }
        public int EmailCategory { get; set; }
        public string Url { get; set; }

    }
}
