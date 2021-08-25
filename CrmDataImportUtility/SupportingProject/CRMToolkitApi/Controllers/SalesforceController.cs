using CRMToolkitApi.Models;
using Newtonsoft.Json.Linq;
using Salesforce.Common;
using SalesforceToolkit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace CRMToolkitApi.Controllers
{
    public class SalesforceController : ApiController
    {
        // GET api/values
        [Route("api/Salesforce/GetAccessTokenAsync")]
        [HttpPost]
        public async Task<IHttpActionResult> GetAccessTokenAsync([FromBody]AuthenticationParams param)
        {
            try
            {
                param.PasswordAndToken = param.Password + param.SecurityToken;
                var auth = new AuthenticationClient();
                await auth.UsernamePasswordAsync(param.ConsumerKey, param.ConuserSecret, param.UserName, param.PasswordAndToken);

                OAuthToken oAuthToken = new OAuthToken() { InstanceUrl = auth.InstanceUrl, AccessToken = auth.AccessToken, ApiVersion = auth.ApiVersion, RefreshToken = auth.RefreshToken, Status = "Success" };

                return Ok(oAuthToken);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("api/Salesforce/GetObjectsNamesAsync")]
        [HttpPost]
        public async Task<IHttpActionResult> GetObjectsNamesAsync(OAuthToken oAuthToken)
        {
            try
            {
                var client = new ForceClient(oAuthToken.InstanceUrl, oAuthToken.AccessToken, oAuthToken.ApiVersion);
                var allObjects = await client.GetObjectsAsync<Table>();
                return Ok(allObjects.SObjects);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("api/Salesforce/GetObjectFieldsAsync")]
        [HttpPost]
        public async Task<IHttpActionResult> GetObjectFieldsAsync(string ObjectName, [FromBody] OAuthToken oAuthToken)
        {
            try
            {

                var client = new ForceClient(oAuthToken.InstanceUrl, oAuthToken.AccessToken, oAuthToken.ApiVersion);
                var describe = await client.DescribeAsync<JObject>(ObjectName);
                List<string> list = new List<string>();
                foreach (var field in (JArray)describe["fields"])
                {
                    string lable = field["name"].ToString();
                    if (lable.ToLower() != "isdeleted" && lable.ToLower() != "deleted")
                    {
                        list.Add(lable);
                    }

                }

                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("api/Salesforce/GetObjectsFieldsDataAsync")]
        [HttpPost]
        public async Task<IHttpActionResult> GetObjectsFieldsDataAsync(OAuthToken oAuthToken)
        {
            try
            {
                var client = new ForceClient(oAuthToken.InstanceUrl, oAuthToken.AccessToken, oAuthToken.ApiVersion);
                var Opportunities = await client.QueryAsync<JObject>(oAuthToken.SqlQuery);

                return Ok(Opportunities.Records);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
