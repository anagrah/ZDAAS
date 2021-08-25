
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Database.Context;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Repositories.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Initializers.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Permissions;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Initializers
{
    public class DatabaseInitializer : IDatabaseInitializer
    {
        private readonly ApplicationDbContext _context;
        private readonly IAccountManager _accountManager;
        private readonly ILogger _logger;
        private readonly IUserTypeService _userType;
        public DatabaseInitializer(ApplicationDbContext context, IAccountManager accountManager, IUserTypeService userType, ILogger<DatabaseInitializer> logger)
        {
            _accountManager = accountManager;
            _userType = userType;
            _context = context;
            _logger = logger;
            
        }

        public virtual async Task SeedAsync()
        {
            await _context.Database.MigrateAsync().ConfigureAwait(false);

            if (!await _context.Users.AnyAsync())
            {
                _logger.LogInformation("Generating inbuilt accounts");

                const string adminRoleName = "administrator";

                await EnsureRoleAsync(adminRoleName, "Default administrator", ApplicationPermissions.GetAllPermissionValues());
                UserType _userType = CreateUserType("Company");

                await CreateUserAsync("admin", "admin", "admin", "admin", "Test123@", "admin@gmail.com", _userType.Id, "+92 (304) 571-6076", new string[] { adminRoleName });

                _logger.LogInformation("Inbuilt account generation completed");
            }




            _logger.LogInformation("Seeding initial data");
            await _context.SaveChangesAsync();
            _logger.LogInformation("Seeding initial data completed");

        }



        private async Task EnsureRoleAsync(string roleName, string description, string[] claims)
        {
            if ((await _accountManager.GetRoleByNameAsync(roleName)) == null)
            {
                ApplicationRole applicationRole = new ApplicationRole(roleName, description);

                var result = await this._accountManager.CreateRoleAsync(applicationRole, claims);

                if (!result.Succeeded)
                    throw new Exception($"Seeding \"{description}\" role failed. Errors: {string.Join(Environment.NewLine, result.Errors)}");
            }
        }

        private UserType CreateUserType(string type)
        {
            UserType userType = new UserType
            {
                Type = type
            };

            var result = _userType.AddEntity(userType);


            return userType;
        }
        private async Task<ApplicationUser> CreateUserAsync(string userName, string firstName, string middleName, string lastName, string password, string email, int typeId, string phoneNumber, string[] roles)
        {
            ApplicationUser applicationUser = new ApplicationUser
            {
                FirstName = firstName,
                MiddleName = middleName,
                LastName = lastName,
                UserName = userName,
                UserTypeId = typeId,
                Email = email,
                PhoneNumber = phoneNumber,
                EmailConfirmed = true,
                IsEnabled = true
            };

            var result = await _accountManager.CreateUserAsync(applicationUser, roles, password);

            if (!result.Succeeded)
                throw new Exception($"Seeding \"{firstName}\" user failed. Errors: {string.Join(Environment.NewLine, result.Errors)}");


            return applicationUser;
        }
    }
}
