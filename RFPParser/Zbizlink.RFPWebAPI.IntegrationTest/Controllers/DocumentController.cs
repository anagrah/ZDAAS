using Zbizlink.HttpClientSimulation;
using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Primitives;
//using RFPClient;
using Zbizlink.ParserClient;
//using RFPWebAPI;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Zdaas.RFPWebAPI.IntegrationTest.Controllers
{
    public class DocumentCont : IClassFixture<TestFixture<Startup>>
    {
        private HttpClient _client;
        private const string _url = "/api/document/upload";
        public DocumentCont(TestFixture<Startup> fixture)
        {
            _client = fixture.Client;
        }

        [Fact]
        public async Task UploadTest()
        {
           
            HttpResponseMessage response;
            string currentDirectory = Environment.CurrentDirectory;
            //using (var file = File.OpenRead(@"C:/Akmal/AkTest.docx"))
            using (var file = File.OpenRead(@"Doc/19-7521_Solicitation.html"))
            using (var content1 = new StreamContent(file))
            using (var formData = new MultipartFormDataContent())
            {
                formData.Add(content1, "file", "19-7521_Solicitation.html");
                response = await _client.PostAsync(_url, formData);
            }

               response.EnsureSuccessStatusCode();
            
            

            
        }

        
    }
}
