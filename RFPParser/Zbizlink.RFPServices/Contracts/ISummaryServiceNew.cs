using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.RFPDataModel.Models;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPServices.ViewModels;

namespace Zdaas.RFPServices.Contracts
{
   public interface ISummaryServiceNew
    {
        List<SummaryModel> GetDocumentSummary(List<LineDetailModel> lineDetailModels, int? opportunityTypeId,
            int? agencyId,
            int? contractVehicleId,
            int? industryId,
            int? stateId);
        List<OpportunitySummaryViewModel> GetOpportunitySummary(decimal documentId);
        Opportunity OpportunitySummaryParameters(Opportunity opportunity);
    }
}
