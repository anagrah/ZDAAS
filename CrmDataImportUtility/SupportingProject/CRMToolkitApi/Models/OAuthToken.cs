using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRMToolkitApi.Models
{
    public class OAuthToken
    {
        public string InstanceUrl { get; set; }
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string Id { get; set; }
        public string ApiVersion { get; set; }
        public string Status { set; get; }
        public string ExceptionMsg { set; get; }
        public string SqlQuery { get; set; }
    }
}