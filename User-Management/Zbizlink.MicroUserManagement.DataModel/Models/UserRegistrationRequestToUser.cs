using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;

namespace Zbizlink.MicroUserManagement.DataModel.Models
{
    public static class UserRegistrationRequestToUser
    {
        public static User RegistrationRequestToUser(User user, UserRegistrationRequest model)
        {
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.UserName = model.Email;
            user.Email = model.Email;
            user.Password = model.Password;
            user.Source = model.Source;
            user.PhoneNumber = model.PhoneNumber;
            user.CreatedBy = 0;
            user.CreatedOn = DateTime.Now;
            user.IsActiveId = model.IsActiveID;
            user.ActivationCode = model.ActivationCode;
            user.LnkExpiryDate = DateTime.Now.AddDays(1);
            return user;
        }
    }
}
