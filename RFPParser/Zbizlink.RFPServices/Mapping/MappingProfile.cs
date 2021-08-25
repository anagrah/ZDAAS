using AutoMapper;
using AutoMapper.Features;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.RFPBusinessModel;
using Zbizlink.RFPDataModel.Models;
using ViewModelGet = Zbizlink.RFPServices.ViewModels.Get;
using ViewModelInsert = Zbizlink.RFPServices.ViewModels.Insert;
using Zdaas.RFPBusinessModel;

using Zdaas.RFPServices.ViewModels;

namespace Zdaas.RFPServices.Mapping
{
    public class MappingProfile : Profile
    {

        public MappingProfile()
        {

            CreateMap<Category, CategoryEntity>();

            CreateMap<CategoryEntity, Category>();

            CreateMap<CategorySynonym, CategorySynonymEntity>();

            CreateMap<OpportunityContent, OpportunityContentEntity>().ReverseMap();


            CreateMap<RfpdocumentEntity, Rfpdocument>();

            CreateMap<RfpCategoryDataEntity, RfpcategoryData>();

            CreateMap<Opportunity, OpportunityEntity>()
                .ForMember(dest => dest.CompanySegmentID, opt => opt.MapFrom(src => src.SegmentId))
            .ReverseMap();

            CreateMap<OpportunityHeadingEntity, OpportunityHeading>().ReverseMap();

            CreateMap<JobTitleWord, JobTitleWordEntity>();


            CreateMap<RfpSummaryEntity, Rfpsummary>();

            CreateMap<RfpsummaryField, RfpSummaryFieldEntity>();

            CreateMap<LaborHeading, LaborHeadingEntity>();
            CreateMap<LaborHeadingSynonym, LaborHeadingSynonymEntity>();
            CreateMap<CategoryEntity, CategoryViewModel>();

            CreateMap<CategoryEntity, CategoryEntity>();


            CreateMap<OpportunityType, OpportunityTypeEntity>();
            CreateMap<Agency, AgencyEntity>();
            CreateMap<Industry, IndustryEntity>();
            CreateMap<ContractVehicle, ContractVehicleEntity>();
            CreateMap<States, StatesEntity>();

            CreateMap<OpportunityTypeEntity, ViewModelGet.OpportunityType>();
            CreateMap<AgencyEntity, ViewModelGet.Agency>();
            CreateMap<IndustryEntity, ViewModelGet.Industry>();
            CreateMap<ContractVehicleEntity, ViewModelGet.ContractVehicle>();
            CreateMap<StatesEntity, ViewModelGet.States>();
           
            CreateMap<ViewModelInsert.BridgeSynonymAgency, BridgeSynonymAgency>();
            CreateMap<ViewModelInsert.BridgeSynonymContractVehicle, BridgeSynonymContractVehicle>();
            CreateMap<ViewModelInsert.BridgeSynonymIndustry, BridgeSynonymIndustry>();
            CreateMap<ViewModelInsert.BridgeSynonymOpportunityType, BridgeSynonymOpportunityType>();
            CreateMap<ViewModelInsert.BridgeSynonymStates, BridgeSynonymStates>();

            CreateMap<ViewModelInsert.BridgeSummarySynonymAgency, BridgeSummarySynonymAgency>();
            CreateMap<ViewModelInsert.BridgeSummarySynonymContractVehicle, BridgeSummarySynonymContractVehicle>();
            CreateMap<ViewModelInsert.BridgeSummarySynonymIndustry, BridgeSummarySynonymIndustry>();
            CreateMap<ViewModelInsert.BridgeSummarySynonymOpportunityType, BridgeSummarySynonymOpportunityType>();
            CreateMap<ViewModelInsert.BridgeSummarySynonymStates, BridgeSummarySynonymStates>();

        }

    }
}
