using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
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
    public class UserService : IUserService
    {
        private IUnitOfWork _unitOfWork;
        private IGenerateToken _generateTokn;

        private ILoggerManager _logger;

        private User user = new User();
        public UserService(IUnitOfWork unitOfWork, IGenerateToken generateToken, ILoggerManager loggerManager)
        {
            _unitOfWork = unitOfWork;
            _generateTokn = generateToken;
            _logger = loggerManager;
        }

        public ClientResponse Authenticate(AuthenticateRequest model, string secretkey, string issuer, string audience)
        { 
                List<Client> clients = null;
                List<CompanyUser> _companyUser = null;
                List<Company> _company = null;        

            _logger.LogDebug("Function Name : Authenticate , Controler : UserService");
            string legalBusinessName = "ZDCampaignManagement";
            string clientCompanyName = "ZDCampaignManagementClient";
            legalBusinessName = legalBusinessName.Replace(" ", string.Empty).ToLower();

            // Encrypt / Decrypt user password
            _logger.LogInfo("Username : " + model.Username + " Parssword : " + model.Password);
            var tempNamePass = Utility.Decrypt(model.Password.Trim());
            tempNamePass = tempNamePass.Trim() != "" ? tempNamePass : model.Password.Trim();
            var tempPass = tempNamePass.Trim() != "" ? tempNamePass.Replace(model.Username, "").Trim() : model.Password.Trim();
            model.Password = Utility.Encrypt(model.Username.Trim().ToLower() + tempPass);
            _logger.LogInfo("Log after Encrypt method Parssword : " + model.Password);
            //Invoke the function of repository to verify the user
            var user = _unitOfWork.userRepository.Get(x => x.Email == model.Username && x.Password == model.Password && x.IsActiveId == 1);
            if (user == null)
            {
                _logger.LogInfo("Log added by dev within if user == null condition, === > Username : " + user.UserName + " Parssword : " + user.Password);
                return Utility.GenerateResponse(WebApiResponseCode.Fail, Zbizlink.MicroUserManagement.Enum.UserMessages.UserAuthenticationFail); // .UserNotFound
            }
            _logger.LogInfo("Log added by dev outside if  condition, === > Username : " + user.UserName + " Parssword : " + user.Password);
            //If user is valid create the authentication token
            var token = user != null ? _generateTokn.GenerateJWT(secretkey, model.Username, issuer, audience) : null;
            if (string.IsNullOrEmpty(token) || string.IsNullOrWhiteSpace(token))
            {
                return Utility.GenerateResponse(WebApiResponseCode.UserTokenProblem, "Something went wrong,Please contact administrator");
            }

            _logger.LogDebug("get companyid -> User object is: " + System.Text.Json.JsonSerializer.Serialize(user));

                switch (user.Source)
                {
                    case "zbizlink":
                        _companyUser = user != null && user.Source == "zbizlink" ? _unitOfWork.companyUserRepository.GetSelectedColumnWithWhere(comp => comp.UserId == user.UserId, comp => new CompanyUser()
                        {
                            CompanyId = comp.CompanyId,
                            Company = comp.Company,
                            CompanyUserId = comp.CompanyUserId
                        }).ToList() : null;
                        break;
                    case "RFPParser":
                        _company = user != null && user.Source == "RFPParser" ? _unitOfWork.companyRepository.GetSelectedColumnWithWhere(comp => comp.LegalBusinessName == legalBusinessName , comp => new Company() 
                        {
                            CompanyId = comp.CompanyId
                        }).ToList():null;
                        break;


                }
            clients = _unitOfWork.ClientRepository.GetSelectedColumnWithWhere(comp => comp.ClientCompanyName == clientCompanyName, client => new Client()
            {
                ClientId = client.ClientId
            }).ToList();

            if (_companyUser != null || _company!=null)
                        _logger.LogDebug("feed -->" + new AuthenticateResponse(user, _companyUser != null ? (Int64)_companyUser[0].CompanyId :(Int64) _company[0].CompanyId, clients[0].ClientId, token));
                
                // Push the log to verify the process
                _logger.LogDebug(UserMessages.UserVerifiedAndTokenGenerated);
                _logger.LogDebug("Client id =" + clients[0].ClientId);          
             // AdminAuthenticateResponse adminAuthenticateResponse = new AdminAuthenticateResponse(user, (Int64)company[0].CompanyId, clients[0].ClientId, token);
            AuthenticateResponse authenticateResponse = new AuthenticateResponse(user, _companyUser != null ? (Int64)_companyUser[0].CompanyId : (Int64)_company[0].CompanyId, clients[0].ClientId, token);
            return Utility.GenerateResponse(WebApiResponseCode.Success, authenticateResponse);
           
        }
        public IEnumerable<User> GetAll()
        {
            return _unitOfWork.userRepository.GetAll().ToList();
        }

        public UserRegistrationResponse UserRegistrtion(UserRegistrationRequest model)
        {
            User checkUser = _unitOfWork.userRepository.Get(x => x.Email == model.Email);
            if (checkUser == null)
            {
                bool isvalid = isEmailExists(model.BulkEmailCheckerAPIkey, model.Email, model.BulkEmailCheckerServiceUri);
                if (isvalid)
                {
                    Guid activationCode = Guid.NewGuid();
                    model.ActivationCode = activationCode;
                    model.Source = "RFPParser";
                    model.BizlinkLoginIsAllowed = 0;
                    model.IsActiveID = 0;
                    user = UserRegistrationRequestToUser.RegistrationRequestToUser(user, model);
                    _unitOfWork.userRepository.Insert(user);
                    _unitOfWork.Save();
                    return new UserRegistrationResponse(UserMessages.UserSuccessFullyRegistered, (Int32)Zbizlink.MicroUserManagement.Enum.EnumCollection.SuccessCode.Success, model.ActivationCode);
                }
                else
                {
                    return new UserRegistrationResponse("Your provided email address is not recognized or valid. Please provide a valid email address.", (Int32)Zbizlink.MicroUserManagement.Enum.EnumCollection.ErrorCode.Login_Failed, Guid.Empty);
                }
            }
            else
            {
                return new UserRegistrationResponse("Email already exist.", (Int32)Zbizlink.MicroUserManagement.Enum.EnumCollection.ErrorCode.Login_Failed, Guid.Empty);
            }
        }

        public User GetById(decimal id)
        {
            _logger.LogInfo("Data by Id");
            return _unitOfWork.userRepository.Get(x => x.UserId == id);
        }
        // This user will be used for resending sign up emails 
        public User GetInActiveUserByEmailId(string email)
        {
            _logger.LogInfo("<-----------Get By Email ----------->>>>");
            return _unitOfWork.userRepository.Get(x => x.Email == email);

        }

        public VerifyUserIdResponse VerifyUserId(string userId, string secretkey, string issuer, string audience)
        {
            user = _unitOfWork.userRepository.Get(userVerify => userVerify.Email == userId);
            var token = user != null ? _generateTokn.GenerateJWT(secretkey, user.Email, issuer, audience) : null;
            return token != null ? new VerifyUserIdResponse(token, UserMessages.UserSuccessMessage) : null;
        }

        public User GetByEmail(Guid activationCode, string email)
        {
            return _unitOfWork.userRepository.Get(x => x.ActivationCode == activationCode && x.Email == email);
        }

        public UserRegistrationResponse ActivateUser(User user)
        {
            if (user != null)
            {
                if (user.IsActiveId == 1)
                {
                    return new UserRegistrationResponse(UserMessages.UserRegistrationConfirmedForLogin, (Int32)Zbizlink.MicroUserManagement.Enum.EnumCollection.ErrorCode.Wrong_User, Guid.Empty);
                }
                else
                {
                    if (user.LnkExpiryDate > DateTime.Now)
                    {
                        user.IsActiveId = 1;
                        _unitOfWork.userRepository.Update(user);
                        _unitOfWork.Save();
                        return new UserRegistrationResponse(UserMessages.UserRegistrationConfirmed, (Int32)Zbizlink.MicroUserManagement.Enum.EnumCollection.SuccessCode.Success, (Guid)user.ActivationCode);
                    }
                    else
                        return new UserRegistrationResponse(UserMessages.UserLinkHasExpired, (Int32)Zbizlink.MicroUserManagement.Enum.EnumCollection.ErrorCode.Request_Timeout, Guid.Empty);

                }
            }
            else
            {
                return new UserRegistrationResponse(UserMessages.UserConfirmationFailedContactAdministrator, (Int32)Zbizlink.MicroUserManagement.Enum.EnumCollection.ErrorCode.Login_Failed, Guid.Empty);
            }
        }

        public AuthenticateResponse UpdateUser(User user)
        {
            if (user != null)
            {
                Guid activationCode = Guid.NewGuid();
                user.ActivationCode = activationCode;
                user.LnkExpiryDate = DateTime.Now.AddDays(1);
                _unitOfWork.userRepository.Update(user);
                _unitOfWork.Save();
                return new AuthenticateResponse(user, 0,0, "");
            }
            else
            {
                return new AuthenticateResponse(user,0, 0, "");
            }
        }

        public User GetById(string email)
        {
            _logger.LogInfo("<-----------Get By Id----------->>>>");
             return _unitOfWork.userRepository.Get(x => x.Email == email && x.IsActiveId == 1 && x.ActivationCode != null);            
        }
        public UserRegistrationResponse ResetPassword(AuthenticateRequest authenticateRequest)
        {
            User user = _unitOfWork.userRepository.Get(x => x.Email == authenticateRequest.Username); //GetById(email);
            if (user == null)
            {
                return new UserRegistrationResponse("User not found", (Int32)Zbizlink.MicroUserManagement.Enum.EnumCollection.ErrorCode.NotFound, Guid.Empty);
            }
            else
            {
                user.Password = authenticateRequest.Password;
                _unitOfWork.userRepository.Update(user);
                _unitOfWork.Save();
                return new UserRegistrationResponse("Password reset successfully", (Int32)Zbizlink.MicroUserManagement.Enum.EnumCollection.SuccessCode.Success, Guid.Empty);
            }
        }

        public bool isEmailExists(string apikey, string email, string serviceUri)
        {
            _logger.LogError("<-----------Begning of isEmailExists function----------->>>>");

            string post_data = "key=" + apikey + "&email=" + System.Web.HttpUtility.UrlEncode(email);
            _logger.LogError("<----------- validate email function ,Post params (api key , service url and encoded email) are added----------->>>>");
            // create a request
            _logger.LogError("<-----------//validate email function , create a request----------->>>>");
            HttpWebRequest request = (HttpWebRequest)
            WebRequest.Create(serviceUri);
            request.Method = "POST";

            // turn our request string into a byte stream
            byte[] postBytes = System.Text.Encoding.ASCII.GetBytes(post_data);
            _logger.LogError("<-----------//validate email function , turn our request string into a byte stream----------->>>>");
            // this is important - make sure you specify type this way
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = postBytes.Length;
            Stream requestStream = request.GetRequestStream();
            _logger.LogError("<-----------//validate email function , now send it----------->>>>");
            // now send it
            requestStream.Write(postBytes, 0, postBytes.Length);
            requestStream.Close();

            // grab te response and print it out to the console
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            _logger.LogError("<-----------//validate email function , // grab te response and print it out to the console----------->>>>");
            var newResponse = new StreamReader(response.GetResponseStream()).ReadToEnd();

            BulkEmailCheckerAPIResponse bulkEmailCheckerAPIResponse = JsonConvert.DeserializeObject<BulkEmailCheckerAPIResponse>(newResponse);
            _logger.LogError("<-----------//validate email function , successfully done----------->>>>");

            if (bulkEmailCheckerAPIResponse.status == "passed") // in case Status="failed" return false and show error message
                return true;
            else
                return false;
        }
    }
}
