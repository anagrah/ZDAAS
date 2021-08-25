using AutoMapper;
using AutoMapper.Features;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;
using Zbizlink.MicroUserManagement.WorkerService.ViewModels;

namespace Zbizlink.MicroUserManagement.WorkerService.Mapping
{
   public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<AdminUser, AdminUserVM>();
            CreateMap<AdminRole, AdminRoleVM>();

            //CreateMap<Opportunity, OpportunityEntity>()
            //    .ForMember(dest => dest.CompanySegmentID, opt => opt.MapFrom(src => src.SegmentId))
            //.ReverseMap();

            //CreateMap<OpportunityHeadingEntity, OpportunityHeading>().ReverseMap();


        }

    }
}
