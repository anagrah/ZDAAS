using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserManagement.DataModel.Models
{
    public class AdminUserRegistrationRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public Guid ActivationCode { get; set; }
        public int IsActiveID { get; set; }
        public decimal? CreatedBy { get; set; }
        public string CreatedOn { get; set; }
        public decimal? ApprovedBy { get; set; }
        public string ApprovedOn { get; set; }
        public bool ForcePasswordChange { get; set; }

        [JsonIgnore]
        public string Password { get; set; }
    }
}
