using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCampaignManagement.WorkerService.Enum;
using Zbizlink.MicroCampaignManagement.WorkerService.ViewModels;

namespace Zbizlink.MicroCampaignManagement.WorkerService
{
   internal class Utility
    {

        internal static ClientResponse GenerateResponse(WebApiResponseCode webApiResponseCode, string message = "")
        {

            ClientResponse clientResponse = new ClientResponse();
            clientResponse.code = webApiResponseCode;
            clientResponse.message = message;
            return clientResponse;
        }

        internal static ClientResponse GenerateResponse<T>(WebApiResponseCode webApiResponseCode, T response, string message = "")
        {

            ClientResponse<T> clientResponse = new ClientResponse<T>();
            clientResponse.code = webApiResponseCode;
            clientResponse.message = message;
            clientResponse.response = response;
            return clientResponse;
        }
    }
}
