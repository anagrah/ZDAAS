using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zbizlink.RFPDataModel.Models;

namespace Zdaas.RFPManipulation.Contracts
{
    public interface IZDOpportunityPublish
    {
        //OpportunityEntity Publish(List<CategoryEntity> _categoriesList, IEnumerable<RfpcategoryData> categoryDataList, string SolicitationNumber, decimal companyId, 
        //    decimal clientId, decimal segmentId, string filePath, decimal documentId, out OpportunityEntity opportunityPublished);

        OpportunityEntity Publish(List<CategoryEntity> _categoriesList, IEnumerable<RfpcategoryData> categoryDataList, string SolicitationNumber, decimal companyId,
            decimal clientId, decimal segmentId, List<Rfpdocument> rfpdocumentPathList , OpportunityEntity opportunity,
            out OpportunityEntity opportunityPublished);
    }
}
