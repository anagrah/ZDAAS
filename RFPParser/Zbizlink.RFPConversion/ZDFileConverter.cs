using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.AspNetCore.Http;
using Zdaas.LoggerContracts;
using Zdaas.RFPConversion.Contracts;

namespace Zdaas.RFPConversion
{
    public class ZDFileConverter : IZDFileConverter
    {
        private const string _ApiUrl = "https://api.docconverter.pro";
        private string _token;
       
        private IZDDocConverterProAuthentication _docConverterProToken;
        private string _convertedHtmlDocument;
        private ILoggerManager _loggerManager;
        public ZDFileConverter(IZDDocConverterProAuthentication docConverterProToken,ILoggerManager loggerManager)
        {
            _docConverterProToken = docConverterProToken;
            _loggerManager = loggerManager;
        }

      
        public bool FileConvert(byte[] byteStream, string inputDocFileName, out string convertedHtmlDocument, out string errorMessage)
        {
            //Token = DocConverterProToken.GetUserToken(ApiUrl, "zdaas2018@gmail.com", "Allah@786");
            convertedHtmlDocument = "";
            errorMessage = "";
           
            bool authenticationResult = _docConverterProToken.GetUserToken(_ApiUrl, "anagrah@zd-techsolutions.com", "#Dr0pitn0w", out _token);

            if(authenticationResult ==  false)
            {
                return false;
            }
            bool result = PostFileAndConvert(byteStream, inputDocFileName, "Zdaas",out errorMessage);
            
            if (result == true)
            {
                convertedHtmlDocument = _convertedHtmlDocument;
                return true;
            }
            return false;
        }

        public bool PostFileAndConvert(byte[] byteStream, string inputDocFileName, string templateName,out string errorMessage)
        {
            errorMessage = "";
            using (var client = new HttpClient())
            {
                client.Timeout = TimeSpan.FromMinutes(10);
                client.BaseAddress = new Uri(_ApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _token);


                var content = new MultipartFormDataContent();
                var fileContent = new ByteArrayContent(byteStream);
                fileContent.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                {
                    FileName = Path.GetFileName(inputDocFileName)
                };

                content.Add(new StringContent(templateName), "template");
                content.Add(new StringContent("true"), "returnHtml");
                content.Add(new StringContent("true"), "returnData");
                content.Add(fileContent);

                HttpResponseMessage response = null;
                _loggerManager.LogInfo(" :- Rrequest to convertdoc service for converting document");
                try
                {
                 response = client.PostAsync("api/converter/convertdoc", content).Result;

                _loggerManager.LogInfo(" :- Response from convertdoc service against converting document request. StatusCode : " + response.IsSuccessStatusCode);
                }
                catch(Exception ex)
                {
                    
                    _loggerManager.LogError(" :- Rrequest to convertdoc service for converting document. Error : " + ex.InnerException);
                    return false;
                }
                
                if (response.IsSuccessStatusCode)
                {
                    
                    byte[] outData = response.Content.ReadAsByteArrayAsync().Result;
                    _convertedHtmlDocument = Encoding.UTF8.GetString(outData, 0, outData.Length);
                                     
                    return true;
                }
                else
                {
                    errorMessage  = response.Content.ReadAsStringAsync().Result;
                    _loggerManager.LogError("From docconverter service : " + errorMessage);
                    return false;
                }
            }
            
            
        }
    }
}
