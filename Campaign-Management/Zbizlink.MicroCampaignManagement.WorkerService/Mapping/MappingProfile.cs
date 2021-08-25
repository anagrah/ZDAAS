using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.CMCommon.ViewModels;
using Zbizlink.MicroCampaignManagement.WorkerService.ViewModels;
using dataModel = Zbizlink.MicroCampaignManagement.DataModel.Models;


namespace Zbizlink.MicroCampaignManagement.WorkerService.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            
            CreateMap< CampaignOpportunityInsert, dataModel.CampaignOpportunity>()
                .ForMember(dest => dest.CreatedBy, opt => opt.MapFrom(src => src.UserId))
                .ReverseMap();

            CreateMap<dataModel.CampaignOpportunity, CampaignOpportunityGet>();
        }
        
    }
}
