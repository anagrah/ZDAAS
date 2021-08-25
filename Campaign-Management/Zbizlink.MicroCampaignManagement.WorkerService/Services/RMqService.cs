using MassTransit;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.CMCommon.Models;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;
using Zbizlink.MicroCampaignManagement.LoggerService.Contracter;
using Zbizlink.MicroCampaignManagement.WorkerService.Contracts;
using Zbizlink.MicroCampaignManagement.WorkerService.ViewModels;

namespace Zbizlink.MicroCampaignManagement.WorkerService.Services
{
    public class RMqService : IRMqService
    {
        private readonly ISendEndpointProvider _sendEndpointProvider;
        private ICampaignManagementService _campaignManagementService;
        private ILoggerManager _logger;
        public RMqService(ISendEndpointProvider sendEndpointProvider,
            ICampaignManagementService campaignManagementService, ILoggerManager logger)
        {
            _sendEndpointProvider = sendEndpointProvider;
            _campaignManagementService = campaignManagementService;
            _logger = logger;
        }
        public async Task<ClientResponse> SendEmailForCampaignAsync(string transactionId, AppSettings appSettings, EmailCampaign emailCampaign)
        {
            _logger.logTransation(transactionId, this.GetType(), MethodBase.GetCurrentMethod());

            string emailAdresses = string.Join(";",  emailCampaign.EmailAdresses);
            emailAdresses = emailAdresses.Trim();


            var endPoint = await _sendEndpointProvider.GetSendEndpoint(new Uri("queue:" + appSettings.Queue));
            _logger.LogWarn("before try");
            try
            {
                await endPoint.Send<CampaignSendModel>(new CampaignSendModel()
                {
                    transactionId = transactionId,
                    CampaignOpportunityId = emailCampaign.CampaignOpportunityId,
                    OpportunityName = emailCampaign.OpportunityName,
                    EmailMessage = emailCampaign.Message,
                    EmailAddress = emailAdresses,
                    OpportunityURL = emailCampaign.OpportunityURL
                });
                _logger.LogWarn("after send");
            }
            catch (Exception e)
            {
                _logger.LogWarn("In catch : " + e.Message);
                return Utility.GenerateResponse(Enum.WebApiResponseCode.Fail);
            }

            _logger.LogWarn("before catch : UpdateCampaignEmailStatusStarted ");
             bool result =   _campaignManagementService.UpdateCampaignEmailStatusStarted(emailCampaign.CampaignOpportunityId, emailAdresses);
            _logger.LogWarn("after catch : UpdateCampaignEmailStatusStarted result" + result);
            return Utility.GenerateResponse(Enum.WebApiResponseCode.Success);
        }

    }   
}
