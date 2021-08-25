using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Helpers;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.ViewModels
{
    public class UserRegistrationViewModel : UserBaseViewModel
    {
        [Required(ErrorMessage = "Password is required")]
        [StringLength(30, ErrorMessage = "Must be between 8 and 30 characters", MinimumLength = 8)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Confirm password is required")]
        [StringLength(30, ErrorMessage = "Must be between 8 and 30 characters", MinimumLength = 8)]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Password doesn't match.")]
        [NotMapped]
        public string ConfirmPassword { get; set; }

    }

    public class UserViewModel : UserBaseViewModel
    {
        public bool IsLockedOut { get; set; }

        [MinimumCount(1, ErrorMessage = "Roles cannot be empty")]
        public string[] Roles { get; set; }
    }



    public class UserEditViewModel : UserBaseViewModel
    {
        public string CurrentPassword { get; set; }

        [MinLength(8, ErrorMessage = "New Password must be at least 8 characters")]
        public string NewPassword { get; set; }

        [MinimumCount(1, ErrorMessage = "Roles cannot be empty")]
        public string[] Roles { get; set; }
    }



    public class UserPatchViewModel
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Configuration { get; set; }
    }



    public abstract class UserBaseViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "First name is required"), StringLength(50, MinimumLength = 3, ErrorMessage = "First name must be between 3 and 50 characters")]
        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        [Required(ErrorMessage = "Last name is required"), StringLength(50, MinimumLength = 3, ErrorMessage = "Username must be between 3 and 50 characters")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Username is required"), StringLength(100, MinimumLength = 3, ErrorMessage = "Username must be between 3 and 100 characters")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Phone number is required"), StringLength(20, MinimumLength = 5, ErrorMessage = "Phone number must be between 5 and 20 digits")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Email is required"), StringLength(100, ErrorMessage = "Email must be at most 100 characters"), EmailAddress(ErrorMessage = "Invalid email address")]
        public string Email { get; set; }


        [Required(ErrorMessage = "Username is required"), StringLength(120, MinimumLength = 3, ErrorMessage = "Business name must be between 3 and 120 characters")]
        public string BusinessName { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "User type is required")]       
        public int UserTypeId { get; set; }
        public bool IsEnabled { get; set; }
    }


}
