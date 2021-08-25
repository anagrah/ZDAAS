using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCRMDataImport.DataModel.Contracts;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;
using Zbizlink.MicroCRMDataImport.DataModel.Repositories;

namespace Zbizlink.MicroCRMDataImport.DataModel.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private CRMModelRepository<TblCrm> _crm;
        private CRMConnectionPropertiesRepository<TblCrmConnectionProperties> _crmConnectionProperties;
        private CRMImportActivityRepository<TblCrmImportActivity> _crmImportActivity;
        private CRMCompanyTablesRepository<TblCrmCompanyTables> _crmCompanyTablesRepository;
        private CRMCompanyTableFieldsRepository<TblCrmCompanyTableFields> _crmCompanyTableFieldsRepository;
        private CRMImportActivityTablesRepository<TblCrmImportActivityTables> _crmImportActivityTablesRepository;
        private CRMImportActivityFieldsRepository<TblCrmImportActivityFields> _crmImportActivityFieldsRepository;
        private CRMImportDataOwnerRepository<TblCrmImportDataOwner> _crmImportDataOwnerRepository;
        private CRMImportDataUserRepository<TblCrmImportDataUser> _crmImportDataUserRepository;
        private BizlinkToCrmfieldsMappingRepository<TblBizlinkToCrmfieldsMapping> _bizlinkToCrmfieldsMappingRepository;
        private BizlinkTableFieldsRepository<TblBizlinkTableFields> _bizlinkTableFieldsRepository;
        private BizlinkTablesRepository<TblBizlinkTables> _bizlinkTablesRepository;
        private CrmDataImport_DBContext _dbContext;

        public UnitOfWork(CrmDataImport_DBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public CRMModelRepository<TblCrm> Crm
        {
            get
            {
                if (this._crm == null)
                    this._crm = new CRMModelRepository<TblCrm>(_dbContext);
                return this._crm;
            }
        }

        public CRMConnectionPropertiesRepository<TblCrmConnectionProperties> CRMConnectioProperties
        {
            get
            {
                if (this._crmConnectionProperties == null)
                    this._crmConnectionProperties = new CRMConnectionPropertiesRepository<TblCrmConnectionProperties>(_dbContext);
                return this._crmConnectionProperties;
            }
        }

        public CRMImportActivityRepository<TblCrmImportActivity> CRMImportActivity
        {
            get
            {
                if (this._crmImportActivity == null)
                    this._crmImportActivity = new CRMImportActivityRepository<TblCrmImportActivity>(_dbContext);
                return this._crmImportActivity;
            }
        }
        public CRMCompanyTablesRepository<TblCrmCompanyTables> CRMCompanyTables
        {
            get
            {
                if (this._crmCompanyTablesRepository == null)
                    this._crmCompanyTablesRepository = new CRMCompanyTablesRepository<TblCrmCompanyTables>(_dbContext);
                return this._crmCompanyTablesRepository;
            }
        }
        public CRMCompanyTableFieldsRepository<TblCrmCompanyTableFields> CRMCompanyTableFields
        {
            get
            {
                if (this._crmCompanyTableFieldsRepository == null)
                    this._crmCompanyTableFieldsRepository = new CRMCompanyTableFieldsRepository<TblCrmCompanyTableFields>(_dbContext);
                return this._crmCompanyTableFieldsRepository;
            }
        }
        public CRMImportActivityTablesRepository<TblCrmImportActivityTables> CRMImportActivityTables
        {
            get
            {
                if (this._crmImportActivityTablesRepository == null)
                    this._crmImportActivityTablesRepository = new CRMImportActivityTablesRepository<TblCrmImportActivityTables>(_dbContext);
                return this._crmImportActivityTablesRepository;
            }
        }
        public CRMImportActivityFieldsRepository<TblCrmImportActivityFields> CRMImportActivityFields
        {
            get
            {
                if (this._crmImportActivityFieldsRepository == null)
                    this._crmImportActivityFieldsRepository = new CRMImportActivityFieldsRepository<TblCrmImportActivityFields>(_dbContext);
                return this._crmImportActivityFieldsRepository;
            }
        }
        public CRMImportDataOwnerRepository<TblCrmImportDataOwner> CRMImportDataOwner
        {
            get
            {
                if (this._crmImportDataOwnerRepository == null)
                    this._crmImportDataOwnerRepository = new CRMImportDataOwnerRepository<TblCrmImportDataOwner>(_dbContext);
                return this._crmImportDataOwnerRepository;
            }
        }

        public CRMImportDataUserRepository<TblCrmImportDataUser> CRMImportDataUser
        {
            get
            {
                if (this._crmImportDataUserRepository == null)
                    this._crmImportDataUserRepository = new CRMImportDataUserRepository<TblCrmImportDataUser>(_dbContext);
                return this._crmImportDataUserRepository;
            }
        }

        public BizlinkToCrmfieldsMappingRepository<TblBizlinkToCrmfieldsMapping> BizlinkToCrmfieldsMapping
        {
            get
            {
                if (this._bizlinkToCrmfieldsMappingRepository == null)
                    this._bizlinkToCrmfieldsMappingRepository = new BizlinkToCrmfieldsMappingRepository<TblBizlinkToCrmfieldsMapping>(_dbContext);
                return this._bizlinkToCrmfieldsMappingRepository;
            }
        }
        public BizlinkTableFieldsRepository<TblBizlinkTableFields> BizlinkTableFields
        {
            get
            {
                if (this._bizlinkTableFieldsRepository == null)
                    this._bizlinkTableFieldsRepository = new BizlinkTableFieldsRepository<TblBizlinkTableFields>(_dbContext);
                return this._bizlinkTableFieldsRepository;
            }
        }
        public BizlinkTablesRepository<TblBizlinkTables> BizlinkTables
        { 
             get
            {
                if (this._bizlinkTablesRepository == null)
                    this._bizlinkTablesRepository = new BizlinkTablesRepository<TblBizlinkTables>(_dbContext);
                return this._bizlinkTablesRepository;
            }
        }
    public void Save()
        {
            _dbContext.SaveChanges();
        }
    }
}
