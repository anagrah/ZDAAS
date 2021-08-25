using System;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;
using Zbizlink.MicroCRMDataImport.DataModel.Repositories;


namespace Zbizlink.MicroCRMDataImport.DataModel.Contracts
{
    public interface IUnitOfWork
    {
        CRMModelRepository<TblCrm> Crm { get; }
        CRMConnectionPropertiesRepository<TblCrmConnectionProperties> CRMConnectioProperties { get; }
        CRMImportActivityRepository<TblCrmImportActivity> CRMImportActivity { get; }
        CRMCompanyTablesRepository<TblCrmCompanyTables> CRMCompanyTables { get; }
        CRMCompanyTableFieldsRepository<TblCrmCompanyTableFields> CRMCompanyTableFields { get; }
        CRMImportActivityTablesRepository<TblCrmImportActivityTables> CRMImportActivityTables { get; }
        CRMImportActivityFieldsRepository<TblCrmImportActivityFields> CRMImportActivityFields { get; }
        CRMImportDataOwnerRepository<TblCrmImportDataOwner> CRMImportDataOwner { get; }
        CRMImportDataUserRepository<TblCrmImportDataUser> CRMImportDataUser{ get; }
        BizlinkTablesRepository<TblBizlinkTables> BizlinkTables { get; }
        BizlinkTableFieldsRepository<TblBizlinkTableFields> BizlinkTableFields { get; }
        BizlinkToCrmfieldsMappingRepository<TblBizlinkToCrmfieldsMapping> BizlinkToCrmfieldsMapping { get; }
        void Save();
    }
}
