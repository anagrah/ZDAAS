using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;

namespace Zbizlink.MicroUserManagement.DataModel.Models
{
    public class AdminRegistrationRequestToUser
    {
        public static AdminUser RegistrationRequestToUser(AdminUser user, AdminUserRegistrationRequest model)
        {
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.Email = model.Email;
            user.Password = model.Password;
            user.ActivationCode = model.ActivationCode;
            user.LnkExpiryDate = DateTime.Now.AddDays(1);
            user.IsActiveId = model.IsActiveID;
            user.CreatedBy = model.CreatedBy;
            user.CreatedOn = DateTime.Now;
            user.ApprovedBy = model.ApprovedBy;
            user.ApprovedOn = null;
            user.ForcePasswordChange = model.ForcePasswordChange;
            return user;
        }
    }
}
