using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;
using Zbizlink.MicroUserManagement.DataModel.Contracts;
using Zbizlink.MicroUserManagement.DataModel.Models;
using Zbizlink.MicroUserManagement.Enum;
using Zbizlink.MicroUserManagement.LoggerService.Contracter;
using Zbizlink.MicroUserManagement.WorkerService.Contracters;
using Zbizlink.MicroUserManagement.WorkerService.Enum;
using Zbizlink.MicroUserManagement.WorkerService.ViewModels;


namespace Zbizlink.MicroUserManagement.WorkerService
{
    public class AdminUserService : IAdminUserService
    {

        private IUnitOfWork _unitOfWork;
        private IGenerateToken _generateTokn;

        private ILoggerManager _logger;
        private IMapper _mapper;
        private AdminUser user = new AdminUser();
        public AdminUserService(IUnitOfWork unitOfWork, IGenerateToken generateToken, ILoggerManager loggerManager, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _generateTokn = generateToken;
            _logger = loggerManager;
            _mapper = mapper;
        }
        public ClientResponse AdminAuthenticate(AuthenticateRequest model, string secretkey, string issuer, string audience)
        {
            
                List<Company> company = null;
                List<Client> clients = null;
                int CompanyId = 0, ClientId = 0;
            _logger.LogDebug("Function Name : Authenticate , Controler : UserService");
                string legalBusinessName = "ZDCampaignManagement";
                string clientCompanyName = "ZDCampaignManagementClient";
                legalBusinessName = legalBusinessName.Replace(" ", string.Empty).ToLower();
            // Encrypt / Decrypt user password
            var tempNamePass = Utility.Decrypt(model.Password.Trim());
            tempNamePass = tempNamePass.Trim() != "" ? tempNamePass : model.Password.Trim();
            var tempPass = tempNamePass.Trim() != "" ? tempNamePass.Replace(model.Username, "").Trim() : model.Password.Trim();
            model.Password = Utility.Encrypt(model.Username.Trim().ToLower() + tempPass);
            //
            //Invoke the function of repository to verify the user
            AdminUser user = _unitOfWork.adminUserRepository.Get(x => x.Email == model.Username && x.Password == model.Password && x.IsActiveId == 1);
               // _logger.LogDebug("Password getting from db table admin user"+ user.Password);

            if(user == null)
            {
              return  Utility.GenerateResponse(WebApiResponseCode.Fail, Zbizlink.MicroUserManagement.Enum.UserMessages.UserAuthenticationFail); // .UserNotFound
            }

                //If user is valid create the authentication token
                var token = user != null ? _generateTokn.GenerateJWT(secretkey, model.Username, issuer, audience) : null;

            if ( string.IsNullOrEmpty(token) || string.IsNullOrWhiteSpace(token))
            {
                return Utility.GenerateResponse(WebApiResponseCode.UserTokenProblem, "");
            }

            company = _unitOfWork.companyRepository.GetSelectedColumnWithWhere(comp => comp.LegalBusinessName == legalBusinessName, comp => new Company()
                {
                    CompanyId = comp.CompanyId
                }).ToList();

                clients = _unitOfWork.ClientRepository.GetSelectedColumnWithWhere(comp => comp.ClientCompanyName == clientCompanyName, client => new Client()
                {
                    ClientId = client.ClientId
                }).ToList();

            //  _logger.LogDebug("feed -->" + new AdminAuthenticateResponse(user, (Int64)company[0].CompanyId, clients[0].ClientId, token));
            // Push the log to verify the process
            //  _logger.LogDebug(UserMessages.UserVerifiedAndTokenGenerated);
            //Return the response with basic user information and token
      
            if (company != null)
            {
                CompanyId = Convert.ToInt32(company[0].CompanyId);
            } 
            if (clients != null)
            {
                ClientId = Convert.ToInt32(clients[0].ClientId);
            } 
            AdminAuthenticateResponse adminAuthenticateResponse = new AdminAuthenticateResponse(user, CompanyId,ClientId, token);

            return Utility.GenerateResponse(WebApiResponseCode.Success, adminAuthenticateResponse); 
            
        }
        public ClientResponse UserRegistrtion(AdminUserVM model)
        {
            AdminUser checkUser = _unitOfWork.adminUserRepository.Get(x => x.Email == model.Email);
            if (checkUser == null)
            {
                AdminUser adminUser = new AdminUser();
                adminUser.FirstName = model.FirstName;
                adminUser.LastName = model.LastName;
                adminUser.Password = model.Password;
                adminUser.Email = model.Email;
                Guid activationCode = Guid.NewGuid();
                adminUser.ActivationCode = activationCode;
                adminUser.IsActiveId = 1;

                adminUser.AdminUserRoles.Add(new AdminUserRole() { AdminRoleId = model.RoleId });

                //user = AdminRegistrationRequestToUser.RegistrationRequestToUser(user, model);
                _unitOfWork.adminUserRepository.Insert(adminUser);
                _unitOfWork.Save();
                return Utility.GenerateResponse(WebApiResponseCode.Success);

            }
            else
            {
                return Utility.GenerateResponse(WebApiResponseCode.Fail, "Alert,this account name is already exist.");
            }
        }

        public ClientResponse AdminUsersList()
        {
            List<AdminUser> adminUsers = _unitOfWork.adminUserRepository.GetAll();
            List<AdminRole> adminRole = _unitOfWork.AdminRoleRepository.GetAll();
            List<AdminUserRole> adminUserRole = _unitOfWork.AdminUserRoleRepository.GetAll();


           
            if (adminUsers == null & adminUsers.Count == 0)
            {
                return Utility.GenerateResponse(WebApiResponseCode.Fail, "No user find");
            }

            List<AdminUserVM> adminUsersVM = new List<AdminUserVM>();

            foreach (var adminUser in adminUsers)
            {
                AdminRole role = null;
                var UserRole = adminUserRole.FirstOrDefault(r => r.AdminUserId == adminUser.AdminUserId);
                if (UserRole != null)
                {
                    role = adminRole.FirstOrDefault(r => r.AdminRoleId == UserRole.AdminRoleId);

                    if(role != null)
                    {
                        AdminUserVM adminUserVM = new AdminUserVM();
                        adminUserVM.FirstName = adminUser.FirstName;
                        adminUserVM.LastName = adminUser.LastName;
                        adminUserVM.Email = adminUser.Email;
                        if (adminUser.Password != null)
                        {
                            adminUserVM.Password = Utility.Decrypt(adminUser.Password.Trim());
                        }
                        adminUserVM.IsActiveID = adminUser.IsActiveId;
                        adminUserVM.RoleId = role.AdminRoleId;
                        adminUserVM.RoleName = role.RoleName;
                        adminUsersVM.Add(adminUserVM);
                    }
                }
            }

            
            return Utility.GenerateResponse(WebApiResponseCode.Success, adminUsersVM);

        }

        public ClientResponse GetRoles()
        {

            List<AdminRole> adminRoles = _unitOfWork.AdminRoleRepository.GetAll();

            List<AdminRoleVM> adminRolesVM = _mapper.Map<List<AdminRoleVM>>(adminRoles);


            return Utility.GenerateResponse(WebApiResponseCode.Success, adminRolesVM);

        }

        public ClientResponse UpdateUser(AdminUserVM user)
        {

            //List<AdminUser> checkUser = _unitOfWork.adminUserRepository.GetSelectedColumnWithWhere(u => u.Email == user.Email,
            //    u => new AdminUser() {
            //        AdminUserId = u.AdminUserId,
            //        FirstName = u.FirstName,
            //        LastName = u.LastName,
            //        Email = u.Email,
            //        Password = u.Password,
            //        ActivationCode = u.ActivationCode,
            //        LnkExpiryDate = u.LnkExpiryDate,
            //        IsActiveId = u.IsActiveId,
            //        CreatedBy = u.CreatedBy,
            //        CreatedOn = u.CreatedOn,
            //        ApprovedBy = u.ApprovedBy,
            //        ApprovedOn = u.ApprovedOn,
            //        ForcePasswordChange = u.ForcePasswordChange,
            //        AdminUserRoles = (ICollection<AdminUserRole>)u.AdminUserRoles.Select(r => new AdminUserRole() {
            //        AdminUserRoleId = r.AdminUserRoleId,
            //            AdminRoleId = r.AdminRoleId,
            //            AdminUserId = r.AdminUserId})
            //    }).ToList();

            //checkUser[0].FirstName = "Akmal";
            //checkUser[0].AdminUserRoles.ToList()[0].AdminRoleId = 2;

            AdminUser adminUser = _unitOfWork.adminUserRepository.Get(x => x.Email == user.Email);

            if (adminUser != null)
            {
                adminUser.FirstName = user.FirstName;
                adminUser.LastName = user.LastName;
                adminUser.Password = Utility.Encrypt(user.Email.Trim().ToLower() + user.Password.Trim());
                adminUser.Email = user.Email;
                adminUser.IsActiveId = user.IsActiveID;

               AdminUserRole adminUserRole = _unitOfWork.AdminUserRoleRepository.Get(x => x.AdminUserId == adminUser.AdminUserId);
                adminUserRole.AdminRoleId = user.RoleId;

                _unitOfWork.adminUserRepository.Update(adminUser);
                _unitOfWork.AdminUserRoleRepository.Update(adminUserRole);
                _unitOfWork.Save();
            }

            return Utility.GenerateResponse(WebApiResponseCode.Success);
        }
    }
}
