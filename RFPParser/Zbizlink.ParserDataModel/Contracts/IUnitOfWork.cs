using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPDataModel.GenericRepository;
using Zbizlink.RFPDataModel.Models;

namespace Zdaas.RFPDataModel.Contracts
{
  public  interface IUnitOfWork
    {
        GenericRepository<Category> CategoryRepository { get; }
        GenericRepository<CategorySynonym> CategorySynonymRepository { get; }
        GenericRepository<Rfpdocument> RfpdocumentRepository { get; }
        GenericRepository<RfpcategoryData> RfpCategoryDataRepository { get; }
        GenericRepository<Opportunity> opportunityRepository { get; }
        GenericRepository<OpportunityHeading> opportunityHeadingRepository { get; }
        GenericRepository<Rfpsummary> RFPSummaryRepository { get; }
        GenericRepository<FieldType> FieldTypeRepository { get; }
        GenericRepository<RfpsummaryField> RfpSummaryFieldRepository { get; }
        GenericRepository<RfpsummarySynonym> RfpsummarySynonymRepository { get; }
        GenericRepository<JobTitleWord> JobTitleWordRepository { get; }
        GenericRepository<LaborHeading> LaborHeadingRepository { get; }

        GenericRepository<JobTitle> JobTitleRepository { get; }
        GenericRepository<JobTitleAddOn> JobTitleAddOnRepository { get; }

        GenericRepository<OpportunityType> OpportunityTypeRepository { get; }
        GenericRepository<Agency> AgencyRepository { get; }
        GenericRepository<States> StatesRepository { get; }
        GenericRepository<ContractVehicle> ContractVehicleRepository { get; }
        GenericRepository<Industry> IndustryRepository { get; }

        GenericRepository<BridgeSynonymAgency> BridgeSynonymAgencyRepository { get; }
        GenericRepository<BridgeSynonymContractVehicle> BridgeSynonymContractVehicleRepository { get; }
        GenericRepository<BridgeSynonymIndustry> BridgeSynonymIndustryRepository { get; }
        GenericRepository<BridgeSynonymOpportunityType> BridgeSynonymOpportunityTypeRepository { get; }
        GenericRepository<BridgeSynonymStates> BridgeSynonymStatesRepository { get; }

        GenericRepository<BridgeSummarySynonymAgency> BridgeSummarySynonymAgencyRepository { get; }
        GenericRepository<BridgeSummarySynonymContractVehicle> BridgeSummarySynonymContractVehicleRepository { get; }
        GenericRepository<BridgeSummarySynonymIndustry> BridgeSummarySynonymIndustryRepository { get; }
        GenericRepository<BridgeSummarySynonymOpportunityType> BridgeSummarySynonymOpportunityTypeRepository { get; }
        GenericRepository<BridgeSummarySynonymStates> BridgeSummarySynonymStatesRepository { get; }


        void Save();
    }
}
