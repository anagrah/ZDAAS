using AutoMapper;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Zbizlink.MicroCampaignManagement.DataModel.Contracts;
using dataModels = Zbizlink.MicroCampaignManagement.DataModel.Models;
using Zbizlink.MicroCampaignManagement.WorkerService.Contracts;
using Zbizlink.MicroCampaignManagement.WorkerService.Enum;
using Zbizlink.MicroCampaignManagement.WorkerService.ViewModels;
using viewModels = Zbizlink.MicroCampaignManagement.WorkerService.ViewModels;
using Zbizlink.CMCommon.ViewModels;
using Zbizlink.MicroCampaignManagement.LoggerService.Contracter;
using System.Reflection;
using System.Net;
using Zbizlink.MicroCampaignManagement.WebServiceAPI.Models;
using RestSharp;
using Zbizlink.CMCommon.Models;
using Newtonsoft.Json;
using Zbizlink.MicroCampaignManagement.DataModel.Models;

namespace Zbizlink.MicroCampaignManagement.WorkerService.Services
{
    public class CampaignManagementService : ICampaignManagementService
    {
        public IUnitOfWork _unitOfWork;
        private IMapper _mapper;
        ILoggerManager _logger;
        public CampaignManagementService(IUnitOfWork unitOfWork, IMapper mapper, ILoggerManager logger)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
        }

        public ClientResponse SaveCampaignOpportunity(string transactionId, CampaignOpportunityInsert campaignOpportunityInsert)
        {
            _logger.logTransation(transactionId, this.GetType(), MethodBase.GetCurrentMethod());
            dataModels.CampaignOpportunity dataModelCampaignOpportunity = _mapper.Map<dataModels.CampaignOpportunity>(campaignOpportunityInsert);

            _unitOfWork.CampaignOpportunityRepository.Insert(dataModelCampaignOpportunity);

            _unitOfWork.Save();

            return Utility.GenerateResponse(WebApiResponseCode.Success);
        }

        //public async System.Threading.Tasks.Task<ClientResponse> SaveCampaignOpportunityAsync(HttpRequest Request)
        //{
        //    var body = "";

        //    using (StreamReader reader
        //           = new StreamReader(Request.Body, Encoding.UTF8, true, 1024, true))
        //    {
        //        body = await reader.ReadToEndAsync();
        //    }

        //        viewModels.CampaignOpportunityInsert campaignOpportunity =
        //                           (viewModels.CampaignOpportunityInsert)JsonConvert.DeserializeObject(body, typeof(viewModels.CampaignOpportunityInsert));

        //        dataModels.CampaignOpportunity dataModelCampaignOpportunity = _mapper.Map<dataModels.CampaignOpportunity>(campaignOpportunity);

        //        _unitOfWork.CampaignOpportunityRepository.Insert(dataModelCampaignOpportunity);

        //        _unitOfWork.Save();

        //    return Utility.GenerateResponse(WebApiResponseCode.Success);
        //}

        public ClientResponse GetCampaignOpportunityList()
        {

            List<dataModels.CampaignOpportunity> campaignOpportunities = _unitOfWork.CampaignOpportunityRepository.GetAll();

            List<CampaignOpportunityGet> campaignOpportunityGets = _mapper.Map<List<CampaignOpportunityGet>>(campaignOpportunities);

            if (campaignOpportunityGets != null && campaignOpportunityGets.Count > 0)
            {
                return Utility.GenerateResponse(WebApiResponseCode.Success, campaignOpportunityGets);
            }
            else
            {
                return Utility.GenerateResponse(WebApiResponseCode.Success, campaignOpportunityGets, "There is no opportunity");
            }

            return Utility.GenerateResponse(WebApiResponseCode.Fail);

        }

        public bool UpdateCampaignOpportunity(CampaignOpportunityInsert campaignOpportunityInsert)
        {

            dataModels.CampaignOpportunity campaignOpportunity = _unitOfWork.CampaignOpportunityRepository.Get(op => op.OpportunityId == campaignOpportunityInsert.OpportunityId);

            campaignOpportunity.OpportunityName = campaignOpportunityInsert.OpportunityName;


            _unitOfWork.CampaignOpportunityRepository.Update(campaignOpportunity);

            _unitOfWork.Save();

            return true;

        }

        public bool UpdateCampaignEmailStatusStarted(decimal CampaignOpportunityId, string EmailAddressList)
        {

            // dataModels.CampaignOpportunity campaignOpportunity = _unitOfWork.CampaignOpportunityRepository.Get(op => op.CampaignOpportunityId == CampaignOpportunityId);

            CampaignOpportunity campaignOpportunity = new CampaignOpportunity();
            campaignOpportunity.SentUserList = EmailAddressList;
            campaignOpportunity.CampaignSentStatus = 1;
            campaignOpportunity.CampaignSentDate = DateTime.Now;
            _unitOfWork.CampaignOpportunityRepository.Insert(campaignOpportunity);

            _unitOfWork.Save();

            return true;

        }

        public bool LeadsRedeemToDb(decimal CampaignOpportunityId, string EmailAddressList, string FirstName, string LastName, string CompanyName)
        {


            GenerateLeads generateLeads = new GenerateLeads();
            generateLeads.SentUserList = EmailAddressList;
            generateLeads.FirstName = FirstName;
            generateLeads.LastName = LastName;
            generateLeads.CompanyName = CompanyName;
            generateLeads.CampaignSentStatus = 1;
            generateLeads.CampaignSentDate = DateTime.Now;
            generateLeads.OpportunityId = CampaignOpportunityId;
            generateLeads.OpportunityName = "";
            generateLeads.ModifiedBy = null;
            generateLeads.ModifiedDate = null;
            generateLeads.CreatedBy = 1;
            generateLeads.CreatedDate = DateTime.Now;


            _unitOfWork.GenerateLeadsRepository.Insert(generateLeads);


            _unitOfWork.Save();

            return true;

        }

        public bool UpdateCampaignEmailStatusFalseOrTrue(string CampaignOpportunityId, bool status)
        {

            decimal oppId;

            bool result = decimal.TryParse(CampaignOpportunityId, out oppId);

            if (result == false)
            {
                return false;
            }
            dataModels.CampaignOpportunity campaignOpportunity = _unitOfWork.CampaignOpportunityRepository.Get(op => op.CampaignOpportunityId == oppId);

            if (status == true)
            {//success = 2
                campaignOpportunity.CampaignSentStatus = 2;
            }
            else
            {//false = 3
                campaignOpportunity.CampaignSentStatus = 3;
            }

            //campaignOpportunity.CampaignSentStatus = 1;

            _unitOfWork.CampaignOpportunityRepository.Update(campaignOpportunity);

            _unitOfWork.Save();

            return true;

        }

        public bool ExecuteLeadsFuntionality(EmailCampaign emailCampaign, AppSettings appSettings)
        {
           // LeadsRedeemToDb(1, "faisal@gmail.com", "Faisal", "Faisal", "ZDAAS");
            var CampaignList = new List<EmailCampaignList>();
            int i = 0;
            bool response;
            var EmaillAddressLength = emailCampaign.EmailAdresses.Length;
            var FirstNameLenght = emailCampaign.FirstName.Length;
            var LastNameLength = emailCampaign.LastName.Length;
            bool flag = false;
            if(EmaillAddressLength != 0 && FirstNameLenght == 1 && LastNameLength == 1)
            {


                while (EmaillAddressLength != i)
                {

                    var TempList = new EmailCampaignList();
                    TempList.OpportunityName = emailCampaign.OpportunityName;
                    TempList.CompanyName = "";
                    TempList.OpportunityURL = emailCampaign.OpportunityURL;
                    TempList.CampaignOpportunityId = emailCampaign.CampaignOpportunityId;
                    if (emailCampaign.EmailAdresses.Length > i)
                    {
                        TempList.EmailAdresses = emailCampaign.EmailAdresses[i];
                    }
                    TempList.FirstName = "";
                    TempList.LastName = "";
                    TempList.CampaignId  = emailCampaign.CampaignId ;
                    TempList.UserId = emailCampaign.UserId;
                    CampaignList.Add(TempList);
                    i++;
                }
                flag = true;

            }

            if (flag == false)
            {
                while (EmaillAddressLength != i)
                {

                    var TempList = new EmailCampaignList();

                    TempList.OpportunityName = emailCampaign.OpportunityName;
                    TempList.OpportunityURL = emailCampaign.OpportunityURL;
                    TempList.CampaignOpportunityId = emailCampaign.CampaignOpportunityId;
                    TempList.CampaignId  = emailCampaign.CampaignId ;
                    TempList.UserId = emailCampaign.UserId;

                    if (emailCampaign.CompanyName.Length > i)
                    {
                        TempList.CompanyName = emailCampaign.CompanyName[i];
                    }
                    if (emailCampaign.EmailAdresses.Length > i)
                    {
                        TempList.EmailAdresses = emailCampaign.EmailAdresses[i];
                    }
                    if (emailCampaign.FirstName.Length > i)
                    {
                        TempList.FirstName = emailCampaign.FirstName[i];
                    }
                    if (emailCampaign.LastName.Length > i)
                    {
                        TempList.LastName = emailCampaign.LastName[i];
                    }
                    CampaignList.Add(TempList);
                    i++;
                }

            }
           
            foreach (var item in CampaignList)
            {
                if (item.EmailAdresses != "")
                {
                    bool EmailChecker = IsEmailExists(appSettings.BulkEmailCheckerAPIkey, item.EmailAdresses, appSettings.BulkEmailCheckerServiceUri);
                    if (EmailChecker == true)
                    {
                        bool PushLeadToLemList = PushToLemList(item.FirstName, item.LastName, item.CompanyName, "", appSettings, item.EmailAdresses, item.CampaignId );
                        if (PushLeadToLemList == true)
                        {
                            // response = UpdateCampaignEmailStatusStarted(emailCampaign.CampaignOpportunityId, item.EmailAdresses);
                            response = LeadsRedeemToDb(item.CampaignOpportunityId, item.EmailAdresses, item.FirstName, item.LastName, item.CompanyName);
                        }
                    }
                }

            }

            return true;

        }

        public bool IsEmailExists(string apikey, string email, string serviceUri)
        {
            try
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
            catch (Exception ex)
            {
                
            }
            return true;
        }

        public bool PushToLemList(string? firstname, string? lastname, string? companyName, string? body, AppSettings appsetting, string EmailId, string CampaignId)
        {

            var client = new RestClient("https://api.lemlist.com/api/campaigns/"+ CampaignId + "/leads");

            client.Timeout = -1;
            
            var request = new RestRequest(EmailId, Method.POST);    
            
            //var request = new RestRequest("faisal6465@outlook.com");

            request.AddHeader("Authorization", appsetting.LemlistHeader);
            request.AddHeader("Content-Type", "application/json");
            request.AddParameter("application/json", "{\r\n    \"firstName\":\"" + firstname + "\",\r\n    \"lastName\":\"" + lastname + "\",\r\n    \"companyname\": \"" + companyName + "\"\r\n    \r\n}", ParameterType.RequestBody);
            IRestResponse response = client.Execute(request);

            Console.WriteLine(response.Content);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                //string rawResponse = response.Content;
                //Rootobject result= JsonConvert.DeserializeObject<Rootobject>(rawResponse);
                
                return true;
            }

            return false;
        }
        public string CampaignList(AppSettings appSettings)
        {
            
            var client = new RestClient("https://api.lemlist.com/api/campaigns");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            request.AddHeader("Authorization", appSettings.LemlistHeader);
            IRestResponse response = client.Execute(request);
            Console.WriteLine(response.Content);
            return response.Content;
           

        }

    }
 
}
