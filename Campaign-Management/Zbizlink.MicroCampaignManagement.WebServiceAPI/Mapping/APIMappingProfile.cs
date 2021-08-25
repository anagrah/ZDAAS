using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.CMCommon.ViewModels;
using Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcProto;

namespace Zbizlink.MicroCampaignManagement.WebServiceAPI.Mapping
{
    public class APIMappingProfile : Profile
    {
        public APIMappingProfile()
        {
            CreateMap<Opportunity, CampaignOpportunityInsert>().ReverseMap();

            //CreateMap<Opportunity, CampaignOpportunityInsert>()
            //   .ForMember(dest => dest.CreatedBy, opt => opt.MapFrom(src => src.UserId))
            //   .ReverseMap();


        }
    }
}
