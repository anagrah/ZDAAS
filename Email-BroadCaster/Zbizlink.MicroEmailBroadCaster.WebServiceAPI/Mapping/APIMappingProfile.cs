using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RMQBus = Zbizlink.Micro.RabbitMessageQueueBus.Model;
using workerService = Zbizlink.MicroEmailBroadCaster.WorkerService.RMQ;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Mapping
{
    public class APIMappingProfile : Profile
    {
        public APIMappingProfile()
        {
            CreateMap<RMQBus.CampaignSendModel, workerService.CampaignSendModel>().ReverseMap();
        }
        
    }
}
