using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Constants;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Database.Context;

using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models;
using Zbizlink.MicroUserAuthAndRolesManagement.LoggerService.Contracter;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Permissions;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Services
{
    public class AccountManager : IAccountManager
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly ILoggerManager _logger;

        public AccountManager(
            ApplicationDbContext context,
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager, 
            ILoggerManager logger,
            IHttpContextAccessor httpAccessor)
        {
            _context = context;
            _context.CurrentUserId = Convert.ToInt32(httpAccessor.HttpContext?.User.FindFirst(ClaimConstants.Subject)?.Value?.Trim());
            _logger = logger;
            _userManager = userManager;
            _roleManager = roleManager;

        }




        public async Task<(ApplicationUser User, string[] Roles)?> GetUserAndRolesAsync(int userId)
        {
            var user = await _context.Users
                .Include(u => u.Roles)
                .Where(u => u.Id == userId)
                .SingleOrDefaultAsync();

            if (user == null)
                return null;

            var userRoleIds = user.Roles.Select(r => r.RoleId).ToList();

            var roles = await _context.Roles
                .Where(r => userRoleIds.Contains(r.Id))
                .Select(r => r.Name)
                .ToArrayAsync();

            return (user, roles);
        }

        public async Task<(bool Succeeded, string[] Errors)> CreateUserAsync(ApplicationUser user, IEnumerable<string> roles, string password)
        {
            var result = await _userManager.CreateAsync(user, password);
            if (!result.Succeeded)
                return (false, result.Errors.Select(e => e.Description).ToArray());


            user = await _userManager.FindByNameAsync(user.UserName);

            try
            {
                result = await this._userManager.AddToRolesAsync(user, roles.Distinct());
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }

            return (true, new string[] { });
        }
        public async Task<ApplicationRole> GetRoleByNameAsync(string roleName)
        {
            return await _roleManager.FindByNameAsync(roleName);
        }
        public async Task<(bool Succeeded, string[] Errors)> CreateRoleAsync(ApplicationRole role, IEnumerable<string> claims)
        {
            if (claims == null)
                claims = new string[] { };

            string[] invalidClaims = claims.Where(c => ApplicationPermissions.GetPermissionByValue(c) == null).ToArray();
            if (invalidClaims.Any())
                return (false, new[] { "The following claim types are invalid: " + string.Join(", ", invalidClaims) });


            var result = await _roleManager.CreateAsync(role);
            if (!result.Succeeded)
                return (false, result.Errors.Select(e => e.Description).ToArray());


            role = await _roleManager.FindByNameAsync(role.Name);

            foreach (string claim in claims.Distinct())
            {
                result = await this._roleManager.AddClaimAsync(role, new Claim(ClaimConstants.Permission, ApplicationPermissions.GetPermissionByValue(claim)));

                if (!result.Succeeded)
                {
                    return (false, result.Errors.Select(e => e.Description).ToArray());
                }
            }

            return (true, new string[] { });
        }

        public async Task<string> GenerateEmailConfirmationToken(int id)
        {
            var user = await _context.Users.Include(u => u.Roles).Where(u => u.Id == id).SingleOrDefaultAsync();
            string token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            return token;
        }
        public async Task<string> GeneratePasswordResetTokenAsync(ApplicationUser user)
        {
            string token = await _userManager.GeneratePasswordResetTokenAsync(user);
            return token;
        }
        public async Task<(bool Succeeded, string[] Errors)> EmailConfirmation(int id, string token)
        {
            var user = await _context.Users.Include(u => u.Roles).Where(u => u.Id == id).SingleOrDefaultAsync();
            var result = _userManager.ConfirmEmailAsync(user, token);

            if (!result.Result.Succeeded)
            {
                return (false, result.Result.Errors.Select(e => e.Description).ToArray());
            }
            return (true, new string[] { });
        }

        public async Task<(bool Succeeded, string[] Errors)> ResetPasswordAsync(ApplicationUser user, string newPassword)
        {
            string resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);

            var result = await _userManager.ResetPasswordAsync(user, resetToken, newPassword);
            if (!result.Succeeded)
                return (false, result.Errors.Select(e => e.Description).ToArray());

            return (true, new string[] { });
        }

        public async Task<(bool Succeeded, string[] Errors)> ChangePasswordAsync(ApplicationUser user, string currentPassword, string newPassword)
        {
            var result = await _userManager.ChangePasswordAsync(user, currentPassword, newPassword);
            if (!result.Succeeded)
                return (false, result.Errors.Select(e => e.Description).ToArray());

            return (true, new string[] { });
        }

        public async Task<ApplicationUser> GetUserByUserNameAsync(string userName)
        {
            return await _userManager.FindByNameAsync(userName);
        }

        public async Task<ApplicationUser> GetUserByEmailAsync(string email)
        {
            return await _userManager.FindByEmailAsync(email);
        }

        public async Task<(bool Succeeded, string[] Errors)> ResetPasswordAsync(ApplicationUser user, string token, string password)
        {
            var result = await _userManager.ResetPasswordAsync(user, token, password);
            if (!result.Succeeded)
                return (false, result.Errors.Select(e => e.Description).ToArray());
            return (true, new string[] { });
        }
      

    }
}
