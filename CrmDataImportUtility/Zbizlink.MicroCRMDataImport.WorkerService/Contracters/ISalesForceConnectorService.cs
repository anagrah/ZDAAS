using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;
using Zbizlink.MicroCRMDataImport.DataModel.Models;

namespace Zbizlink.MicroCRMDataImport.WorkerService.Contracters
{
    public interface ISalesForceConnectorService
    {
        Task<SalesForceConnectedDataModel> GetConnectServiceAsync(decimal companyId, decimal userId, decimal crmId, SalesForceConnectionDataModel inputParams, string baseUrl);
        Task<ICollection<TblCrmCompanyTables>> GetSalesForceTablesServiceAsync(SalesForceConnectedDataModel oAuthParam, string baseUrl);
        Task<ICollection<TblCrmCompanyTableFields>> GetSalesForceTableFieldsServiceAsync(SalesForceConnectedDataModel oAuthParam, decimal tableId, string baseUrl);
        Task<dynamic> GetSalesForceTablesDataServiceAsync(string search, SalesForceConnectedDataModel oAuthParam, string baseUrl);
        Task<dynamic> GetSalesForceOpportunitesDataServiceAsync(string search, SalesForceConnectedDataModel oAuthParam, string baseUrl);
    }
}
