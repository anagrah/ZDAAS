using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroCRMDataImport.DataModel.Models
{
    public class SalesForceConnectionDataModel
    {
        public string UserName { get; set; }
        public string Password{ get; set; }
        public string SecurityToken { get; set; }
        public string ConsumerKey { get; set; }
        public string ConuserSecret { get; set; }
        

    }
    public class SalesForceConnectedDataModel
    {
        public string InstanceUrl { get; set; }
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string Id { get; set; }
        public string ApiVersion { get; set; }
        public string Status { set; get; }
        public string ExceptionMsg { set; get; }
        public decimal CompanyId { get; set; }
        public string Message { set; get; }
        //means comapny
        public decimal CrmOwnerId { get; set; }

        public decimal UserId { get; set; }
        //means user based upon company
        public decimal CrmImportUserId { get; set; }
        public decimal CrmId { get; set; }
        public string SqlQuery { get; set; }
    }
}
