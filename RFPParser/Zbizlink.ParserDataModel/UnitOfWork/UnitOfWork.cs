using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data;
using Zdaas.RFPDataModel.Contracts;
using Zbizlink.RFPDataModel.DBContext;
using Zdaas.RFPDataModel.GenericRepository;
using Zbizlink.RFPDataModel.Models;

namespace Zdaas.RFPDataModel.UnitOfWork 
{

    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        private ZRFPParserContext _context = null;

        //private IZRFPParserContext _context = null;

        private GenericRepository<Category> _categoryRepository;
        private GenericRepository<CategorySynonym> _CategorySynonymRepository;

        private GenericRepository<Rfpdocument> _rfpDocumentRepository;

        private GenericRepository<RfpcategoryData> _categoryDataRepository;

        private GenericRepository<Opportunity> _opportunityRepository;

        private GenericRepository<OpportunityHeading> _opportunityHeadingRepository;

        private GenericRepository<Rfpsummary> _rfpsummaryRepository;

        private GenericRepository<FieldType> _FieldTypeRepository;

        private GenericRepository<RfpsummarySynonym> _RfpsummarySynonymRepository;

        private GenericRepository<RfpsummaryField> _RfpSummaryFieldRepository;

        private GenericRepository<JobTitleWord> _JobTitleWordRepository;

        private GenericRepository<LaborHeading> _LaborHeadingRepository;
        private GenericRepository<JobTitle> _JobTitleRepository;
        private GenericRepository<JobTitleAddOn> _JobTitleAddOnRepository;

        private GenericRepository<OpportunityType> _OpportunityTypeRepository;
        private GenericRepository<Agency> _AgencyRepository;
        private GenericRepository<States> _StatesRepository;
        private GenericRepository<ContractVehicle> _ContractVehicleRepository;
        private GenericRepository<Industry> _IndustryRepository;

        private GenericRepository<BridgeSynonymAgency> _bridgeSynonymAgencyRepository;
        private GenericRepository<BridgeSynonymContractVehicle> _bridgeSynonymContractVehicleRepository;
        private GenericRepository<BridgeSynonymIndustry> _bridgeSynonymIndustryRepository;
        private GenericRepository<BridgeSynonymOpportunityType> _bridgeSynonymOpportunityTypeRepository;
        private GenericRepository<BridgeSynonymStates> _bridgeSynonymStatesRepository;

        private GenericRepository<BridgeSummarySynonymAgency> _bridgeSummarySynonymAgencyRepository;
        private GenericRepository<BridgeSummarySynonymContractVehicle> _bridgeSummarySynonymContractVehicleRepository;
        private GenericRepository<BridgeSummarySynonymIndustry> _bridgeSummarySynonymIndustryRepository;
        private GenericRepository<BridgeSummarySynonymOpportunityType> _bridgeSummarySynonymOpportunityTypeRepository;
        private GenericRepository<BridgeSummarySynonymStates> _bridgeSummarySynonymStatesRepository;

        public UnitOfWork(ZRFPParserContext context)
        {
            _context = context;
        }


        public GenericRepository<Category> CategoryRepository
        {
            get
            {
                if (this._categoryRepository == null)
                    this._categoryRepository = new GenericRepository<Category>(_context);
                return _categoryRepository;
            }
        }

        public GenericRepository<Rfpdocument> RfpdocumentRepository
        {
            get
            {
                if (this._rfpDocumentRepository == null)
                    this._rfpDocumentRepository = new GenericRepository<Rfpdocument>(_context);
                return _rfpDocumentRepository;
            }
        }
        public GenericRepository<RfpcategoryData> RfpCategoryDataRepository
        {
            get
            {
                if (this._categoryDataRepository == null)
                    this._categoryDataRepository = new GenericRepository<RfpcategoryData>(_context);
                return _categoryDataRepository;
            }
        }

        public GenericRepository<Opportunity> opportunityRepository
        {
            get
            {
                if (this._opportunityRepository == null)
                    this._opportunityRepository = new GenericRepository<Opportunity>(_context);
                return _opportunityRepository;
            }
        }

        public GenericRepository<OpportunityHeading> opportunityHeadingRepository
        {
            get
            {
                if (this._opportunityHeadingRepository == null)
                    this._opportunityHeadingRepository = new GenericRepository<OpportunityHeading>(_context);
                return _opportunityHeadingRepository;
            }
        }

        public GenericRepository<Rfpsummary> RFPSummaryRepository
        {
            get
            {
                if (this._rfpsummaryRepository == null)
                    this._rfpsummaryRepository = new GenericRepository<Rfpsummary>(_context);
                return _rfpsummaryRepository;
            }
        }

        public GenericRepository<FieldType> FieldTypeRepository
        {
            get
            {
                if (this._FieldTypeRepository == null)
                    this._FieldTypeRepository = new GenericRepository<FieldType>(_context);
                return _FieldTypeRepository;
            }
        }

        public GenericRepository<RfpsummaryField> RfpSummaryFieldRepository
        {
            get
            {
                if (this._RfpSummaryFieldRepository == null)
                    this._RfpSummaryFieldRepository = new GenericRepository<RfpsummaryField>(_context);
                return _RfpSummaryFieldRepository;
            }
        }

        public GenericRepository<RfpsummarySynonym> RfpsummarySynonymRepository
        {
            get
            {
                if (this._RfpsummarySynonymRepository == null)
                    this._RfpsummarySynonymRepository = new GenericRepository<RfpsummarySynonym>(_context);
                return _RfpsummarySynonymRepository;
            }
        }

        public GenericRepository<JobTitleWord> JobTitleWordRepository
        {
            get
            {
                if (this._JobTitleWordRepository == null)
                    this._JobTitleWordRepository = new GenericRepository<JobTitleWord>(_context);
                return _JobTitleWordRepository;
            }
        }

        public GenericRepository<LaborHeading> LaborHeadingRepository
        {
            get
            {
                if (this._LaborHeadingRepository == null)
                    this._LaborHeadingRepository = new GenericRepository<LaborHeading>(_context);
                return _LaborHeadingRepository;
            }
        }

        public GenericRepository<JobTitle> JobTitleRepository {
            get
            {
                if (this._JobTitleRepository == null)
                    this._JobTitleRepository = new GenericRepository<JobTitle>(_context);
                return _JobTitleRepository;
            }
        }

        public GenericRepository<JobTitleAddOn> JobTitleAddOnRepository {
            get
            {
                if (this._JobTitleAddOnRepository == null)
                    this._JobTitleAddOnRepository = new GenericRepository<JobTitleAddOn>(_context);
                return _JobTitleAddOnRepository;
            }
        }

        public GenericRepository<Agency> AgencyRepository
        {
            get
            {
                if (this._AgencyRepository == null)
                    this._AgencyRepository = new GenericRepository<Agency>(_context);
                return _AgencyRepository;
            }
        }


        public GenericRepository<States> StatesRepository
        {
            get
            {
                if (this._StatesRepository == null)
                    this._StatesRepository = new GenericRepository<States>(_context);
                return _StatesRepository;
            }
        }


        public GenericRepository<ContractVehicle> ContractVehicleRepository
        {
            get
            {
                if (this._ContractVehicleRepository == null)
                    this._ContractVehicleRepository = new GenericRepository<ContractVehicle>(_context);
                return _ContractVehicleRepository;
            }
        }


        public GenericRepository<Industry> IndustryRepository
        {
            get
            {
                if (this._IndustryRepository == null)
                    this._IndustryRepository = new GenericRepository<Industry>(_context);
                return _IndustryRepository;
            }
        }

        public GenericRepository<OpportunityType> OpportunityTypeRepository
        {
            get
            {
                if (this._OpportunityTypeRepository == null)
                    this._OpportunityTypeRepository = new GenericRepository<OpportunityType>(_context);
                return _OpportunityTypeRepository;
            }
        }

        public GenericRepository<CategorySynonym> CategorySynonymRepository
        {
            get
            {
                if (this._CategorySynonymRepository == null)
                    this._CategorySynonymRepository = new GenericRepository<CategorySynonym>(_context);
                return _CategorySynonymRepository;
            }
        }

        public GenericRepository<BridgeSynonymAgency> BridgeSynonymAgencyRepository
        {
            get
            {
                if (this._bridgeSynonymAgencyRepository == null)
                    this._bridgeSynonymAgencyRepository = new GenericRepository<BridgeSynonymAgency>(_context);
                return _bridgeSynonymAgencyRepository;
            }
        }

        public GenericRepository<BridgeSynonymContractVehicle> BridgeSynonymContractVehicleRepository
        {
            get
            {
                if (this._bridgeSynonymContractVehicleRepository == null)
                    this._bridgeSynonymContractVehicleRepository = new GenericRepository<BridgeSynonymContractVehicle>(_context);
                return _bridgeSynonymContractVehicleRepository;
            }
        }

        public GenericRepository<BridgeSynonymIndustry> BridgeSynonymIndustryRepository
        {
            get
            {
                if (this._bridgeSynonymIndustryRepository == null)
                    this._bridgeSynonymIndustryRepository = new GenericRepository<BridgeSynonymIndustry>(_context);
                return _bridgeSynonymIndustryRepository;
            }
        }

        public GenericRepository<BridgeSynonymOpportunityType> BridgeSynonymOpportunityTypeRepository
        {
            get
            {
                if (this._bridgeSynonymOpportunityTypeRepository == null)
                    this._bridgeSynonymOpportunityTypeRepository = new GenericRepository<BridgeSynonymOpportunityType>(_context);
                return _bridgeSynonymOpportunityTypeRepository;
            }
        }

        public GenericRepository<BridgeSynonymStates> BridgeSynonymStatesRepository
        {
            get
            {
                if (this._bridgeSynonymStatesRepository == null)
                    this._bridgeSynonymStatesRepository = new GenericRepository<BridgeSynonymStates>(_context);
                return _bridgeSynonymStatesRepository;
            }
        }

        public GenericRepository<BridgeSummarySynonymAgency> BridgeSummarySynonymAgencyRepository
        {
            get
            {
                if (this._bridgeSummarySynonymAgencyRepository == null)
                    this._bridgeSummarySynonymAgencyRepository = new GenericRepository<BridgeSummarySynonymAgency>(_context);
                return _bridgeSummarySynonymAgencyRepository;
            }
        }
        public GenericRepository<BridgeSummarySynonymContractVehicle> BridgeSummarySynonymContractVehicleRepository
        {
            get
            {
                if (this._bridgeSummarySynonymContractVehicleRepository == null)
                    this._bridgeSummarySynonymContractVehicleRepository = new GenericRepository<BridgeSummarySynonymContractVehicle>(_context);
                return _bridgeSummarySynonymContractVehicleRepository;
            }
        }
        public GenericRepository<BridgeSummarySynonymIndustry> BridgeSummarySynonymIndustryRepository
        {
            get
            {
                if (this._bridgeSummarySynonymIndustryRepository == null)
                    this._bridgeSummarySynonymIndustryRepository = new GenericRepository<BridgeSummarySynonymIndustry>(_context);
                return _bridgeSummarySynonymIndustryRepository;
            }
        }
        public GenericRepository<BridgeSummarySynonymOpportunityType> BridgeSummarySynonymOpportunityTypeRepository
        {
            get
            {
                if (this._bridgeSummarySynonymOpportunityTypeRepository == null)
                    this._bridgeSummarySynonymOpportunityTypeRepository = new GenericRepository<BridgeSummarySynonymOpportunityType>(_context);
                return _bridgeSummarySynonymOpportunityTypeRepository;
            }
        }
        public GenericRepository<BridgeSummarySynonymStates> BridgeSummarySynonymStatesRepository
        {
            get
            {
                if (this._bridgeSummarySynonymStatesRepository == null)
                    this._bridgeSummarySynonymStatesRepository = new GenericRepository<BridgeSummarySynonymStates>(_context);
                return _bridgeSummarySynonymStatesRepository;
            }
        }
        public void ExecuteStoredProcedure(string stroredProcedure)
        {
            using(var connection = _context.Database.GetDbConnection())
            {
                if (connection.State == ConnectionState.Closed)
                {
                    connection.Open();
                }

                using(var command = connection.CreateCommand())
                {
                    command.CommandText = "spGetDocSolicitaionNo";
                    command.Connection = connection;
                    command.CommandType = CommandType.StoredProcedure;

                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand =(SqlCommand)command;

                    DataSet ds = new DataSet();
                    da.Fill(ds);


                }
            }
        }

        private bool disposed = false;


        public void Save()
        {
           
              _context.SaveChanges();
            

        }


        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }


        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }

}
