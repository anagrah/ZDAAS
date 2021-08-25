using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.RFPServices.ViewModels.Insert;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPServices.ViewModels;
using viewModelInsert = Zbizlink.RFPServices.ViewModels.Insert;
using viewModelEdit = Zbizlink.RFPServices.ViewModels.Edit;

namespace Zbizlink.RFPServices.Contracts
{
   public interface ILookupDataService
    {
        ClientResponse GetOpportunityCategoryLookupData();
        ClientResponse GetOpportunitySummaryLookupData();
        ClientResponse GetCategoriesAndSynonym();     
        ClientResponse GetOpportunityTypes();
        
        
        
        
        
        ClientResponse CategoryInsert(viewModelInsert.Category category);
        ClientResponse SynonymInsert(viewModelInsert.CategorySynonym synonym);
        
        
        

        ClientResponse GetSynonymBridges(decimal synonymId);
        ClientResponse GetSummarySynonymBridges(decimal synonymId);
        ClientResponse SaveSynonymBridges(viewModelInsert.SynonymBridges synonymBridges);
        ClientResponse SaveSummarySynonymBridges(viewModelInsert.SummarySynonymBridges summarySynonymBridges);
        List<CategoryEntity> GetCategorySynonymList(int ?OpportunityTypeId, int ?agencyID, int ?ContractVehicleId, int ?IndustryID, int ?StateID);

        ClientResponse CategorySynonymDelete(decimal categorySynonymId);

        ClientResponse EditCategoriesAndSynonym(viewModelEdit.CategorySynonym categorySynonym);

        ClientResponse GetAgencies();
        ClientResponse AgencyInsert(viewModelInsert.Agency agency);
        ClientResponse AgencyEdit(viewModelEdit.Agency agency);
        ClientResponse AgencyDelete(int agencyId);


        ClientResponse GetIndustries();
        ClientResponse IndustryInsert(viewModelInsert.Industry industry);
        ClientResponse IndustryEdit(viewModelEdit.Industry industry);
        ClientResponse IndustryDelete(int industryId);

        ClientResponse GetContractVehicles();
        ClientResponse ContractVehicleInsert(viewModelInsert.ContractVehicle contractVehicle);
        ClientResponse ContractVehicleEdit(viewModelEdit.ContractVehicle contractVehicle);
        ClientResponse ContractVehicleDelete(int contractVehicleId);

        ClientResponse GetStates();
        ClientResponse StatesInsert(viewModelInsert.States states);
        ClientResponse EditStates(viewModelEdit.States states);

        ClientResponse GetSummaryFieldAndSynonym();
        ClientResponse GetSummaryField();
        ClientResponse SummaryFieldInsert(viewModelInsert.SummaryField summaryField);
        ClientResponse SummaryFieldEdit(viewModelEdit.SummaryField summaryField);
        ClientResponse SummaryFieldDelete(decimal summaryFieldId);
            
        ClientResponse GetSummarySynonym();
        ClientResponse SummarySynonymInsert(SummarySynonym summarySynonym);
        ClientResponse SummarySynonymEdit(viewModelEdit.SummarySynonym summarySynonym);
        ClientResponse SummarySynonymDelete(Decimal summarySynonymId);
        ClientResponse MovedSummaryFieldSynonymEdit(List<viewModelEdit.SummarySynonym> summarySynonymList);
        ClientResponse MovedCategorySynonymEdit(List<viewModelEdit.CategorySynonym> categorySynonymList);

        #region Bridge summary/category synonym delete methods
        ClientResponse BridgeSummarySynonymDelete(int summarySynonymId);
        ClientResponse BridgeCategorySynonymDelete(int categorySynonymId);
        #endregion  
    }
}
 