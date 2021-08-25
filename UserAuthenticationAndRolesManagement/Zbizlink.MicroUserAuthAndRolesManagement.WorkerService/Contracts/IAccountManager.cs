using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Contracts
{
    public interface IAccountManager
    {

        Task<(ApplicationUser User, string[] Roles)?> GetUserAndRolesAsync(int userId);
        Task<ApplicationRole> GetRoleByNameAsync(string roleName);
        Task<(bool Succeeded, string[] Errors)> CreateRoleAsync(ApplicationRole role, IEnumerable<string> claims);
        Task<(bool Succeeded, string[] Errors)> CreateUserAsync(ApplicationUser user, IEnumerable<string> roles, string password);
        Task<string> GenerateEmailConfirmationToken(int id);
        Task<(bool Succeeded, string[] Errors)> EmailConfirmation(int id, string token);
        Task<ApplicationUser> GetUserByUserNameAsync(string userName);
        Task<ApplicationUser> GetUserByEmailAsync(string email);
        Task<string> GeneratePasswordResetTokenAsync(ApplicationUser user);
        Task<(bool Succeeded, string[] Errors)> ResetPasswordAsync(ApplicationUser user, string token, string password);
        Task<(bool Succeeded, string[] Errors)> ChangePasswordAsync(ApplicationUser user, string currentPassword, string newPassword);
    }
}
