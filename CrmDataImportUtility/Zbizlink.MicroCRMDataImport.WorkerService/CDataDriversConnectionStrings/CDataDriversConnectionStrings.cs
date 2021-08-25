using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCRMDataImport.DataModel.Models;

namespace Zbizlink.MicroCRMDataImport.WorkerService.CDataDriversConnectionStrings
{
    public class CDataDriversConnectionStrings
    {
        public string SalesForceConnectString(SalesForceConnectionDataModel sfcDM)
        {
            return "User=" + sfcDM.UserName + ";Password=" + sfcDM.Password + ";Security Token=" + sfcDM.SecurityToken + ";";
        }
        public string ZOHOConnectString(ZOHODataModel zohoDM)
        {
            return "InitiateOAuth=" + zohoDM.InitiateOAuth + ";OAuthClientId=" + zohoDM.OAuthClientId + ";OAuthClientSecret=" + zohoDM.OAuthClientSecret + ";CallbackURL="+ zohoDM.CallbackURL + ";";
        }
    }
}
