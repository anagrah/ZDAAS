using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;
using Zbizlink.MicroCRMDataImport.DataModel.Models;

namespace Zbizlink.MicroCRMDataImport.WorkerService.Contracters
{
    public interface ICRMService
    {
        void AddConnectionProperties(decimal companyId, decimal userId, TblCrmConnectionProperties[] entityArray);
        ICollection<TblCrmConnectionProperties> GetConnectionProperties(decimal companyId, decimal userId, decimal crmId);
        void AddCompanyCRMTables(TblCrmCompanyTables[] array, decimal companyId);
        void AddCompanyCRMTableFields(TblCrmCompanyTableFields[] array, decimal tableId);
        ICollection<TblCrmCompanyTables> GetCompanyCRMTables(decimal companyId, decimal crmId);
        void SaveTablesData(dynamic[] array, decimal companyId, decimal userId);
        Task SaveAndSyncOpportunityDataAsync(dynamic objject, SalesForceConnectedDataModel oAuthParam, string crmKitBaseUrl, string bizlinkBaseUrl);
        dynamic GetTablesFieldsMappingService(decimal companyId,decimal crmId);
        void AddMappedFields(TblBizlinkToCrmfieldsMapping[] array);
    }
}
