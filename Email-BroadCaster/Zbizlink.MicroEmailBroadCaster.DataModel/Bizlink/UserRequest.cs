using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroEmailBroadCaster.DataModel.Bizlink
{
    public partial class UserRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ActivationCode { get; set; }
        public string Url { get; set; }
        public int EmailCategory { get; set; }
    }
}
