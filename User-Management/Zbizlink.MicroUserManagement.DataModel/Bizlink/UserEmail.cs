using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class UserEmail
    {
        public decimal UserEmailId { get; set; }
        public decimal UserId { get; set; }
        public string Email { get; set; }
        public int? IsActiveId { get; set; }

        public virtual User User { get; set; }
    }
}
