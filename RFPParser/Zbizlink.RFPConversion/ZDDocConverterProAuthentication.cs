using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text;
using Zdaas.LoggerContracts;
using Zdaas.RFPConversion.Contracts;
using Zdaas.RFPConversion.Models;

namespace Zdaas.RFPConversion
{
    public class ZDDocConverterProAuthentication : IZDDocConverterProAuthentication
    {

        private TokenResponseModel _token = null;
        private ILoggerManager _loggerManager;
        public ZDDocConverterProAuthentication(ILoggerManager loggerManager)
        {
            _loggerManager = loggerManager;
        }
        public bool GetUserToken(string apiURL, string userName, string password, out string token)
        {
            token = "";
            if (userName.Length > 0 && password.Length > 0)
            {

                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(apiURL);
                    client.DefaultRequestHeaders.Accept.Clear();

                    HttpContent requestContent = new StringContent("grant_type=password&username=" + userName + "&password=" + password, Encoding.UTF8, "application/x-www-form-urlencoded");

                    try
                    {
                        _loggerManager.LogInfo(" :- Rrequest to convertdoc service for Authentication");
                        HttpResponseMessage response = client.PostAsync("/Token", requestContent).Result;
                        _loggerManager.LogInfo(" :- Response from convertdoc service against Authentication request. StatusCode : " + response.IsSuccessStatusCode);
                        if (response.IsSuccessStatusCode)
                        {
                            string jsonMessage;
                            using (Stream responseStream = response.Content.ReadAsStreamAsync().Result)
                            {
                                jsonMessage = new StreamReader(responseStream).ReadToEnd();
                            }

                            _token = (TokenResponseModel)JsonConvert.DeserializeObject(jsonMessage, typeof(TokenResponseModel));
                            token =   _token.AccessToken;
                            return true;
                        }

                    }
                    catch (Exception ex)
                    {
                        _loggerManager.LogError(" :- Sending request to converdoc service for Authenication. Error : " + ex.InnerException);
                        return false;
                    }
                }
            }
            return false;

        }
    }
}
