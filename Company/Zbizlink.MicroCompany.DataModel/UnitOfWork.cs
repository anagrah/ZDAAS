using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroCompany.DataModel.Contracts;
using Zbizlink.MicroCompany.DataModel.Models;
using Zbizlink.MicroCompany.DataModel.Repositories;
using Zbizlink.MicroCompany.DataModel.Database.DatabaseContext;
namespace Zbizlink.MicroCompany.DataModel
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        GenericRepository<Company> _company;
        GenericRepository<CompanyEntityType> _companyEntityType;
        GenericRepository<AnnualRevenue> _annualRevenue;

        GenericRepository<CompanyLocation> _companyLocation;
        GenericRepository<CompanyNaicscode> _companyNaicscode;
        GenericRepository<CompanyPscccode> _companyPscccode;

        GenericRepository<CompanyType> _companyType;
        GenericRepository<Country> _country;
        GenericRepository<Department> _department;

        GenericRepository<EmployeeRange> _employeeRange;
        GenericRepository<EntityStructure> _entityStructure;
        GenericRepository<EntityType> _entityType;

        GenericRepository<Industry> _industry;
        GenericRepository<Location> _location;
        GenericRepository<Naicscode> _naicscode;

        GenericRepository<Pscccode> _pscccode;
        GenericRepository<State> _state;

        CompanyManagementContext _context;

        bool disposed = false;
        public UnitOfWork(CompanyManagementContext context)
        {
            _context = context;
        }
        public GenericRepository<Company> company {
            get{
                if(_company==null)
                    _company = new GenericRepository<Company>(_context);
                return _company;
                }
            }

        public GenericRepository<CompanyEntityType> companyEntityType {
            get
            {
                if (_companyEntityType == null)
                    _companyEntityType = new GenericRepository<CompanyEntityType>(_context);
                return _companyEntityType;
            }
        }

        public GenericRepository<AnnualRevenue> annualRevenue
        {

            get {
                if (_annualRevenue == null)
                    _annualRevenue = new GenericRepository<AnnualRevenue>(_context);
                return _annualRevenue;
            }

        }

        public GenericRepository<CompanyLocation> companyLocation
        {
            get
            {
                if (_companyLocation == null)
                    _companyLocation = new GenericRepository<CompanyLocation>(_context);
                return _companyLocation;

            }
        }

        public GenericRepository<CompanyNaicscode> companyNaicscode
        {
            get {
                if (_companyNaicscode == null)
                    _companyNaicscode = new GenericRepository<CompanyNaicscode>(_context);
                return _companyNaicscode;
            }
        }

        public GenericRepository<CompanyPscccode> companyPscccode
        {
            get {
                if (_companyPscccode == null)
                    _companyPscccode = new GenericRepository<CompanyPscccode>(_context);
                return _companyPscccode;
            }
        }

        public GenericRepository<CompanyType> companyType 
        {
            get {
                if (_companyType == null)
                    _companyType = new GenericRepository<CompanyType>(_context);
                return _companyType;
            }
        }

        public GenericRepository<Country> country
        {
            get {
                if (_country == null)
                    _country = new GenericRepository<Country>(_context);
                return _country;
            }
        }

        public GenericRepository<Department> department
        {
            get {
                if (_department == null)
                    _department = new GenericRepository<Department>(_context);
                return _department;
            }
        }

        public GenericRepository<EmployeeRange> employeeRange
        {
            get 
            {
                if (_employeeRange == null)
                    _employeeRange = new GenericRepository<EmployeeRange>(_context);
                return _employeeRange;
            }
        }

        public GenericRepository<EntityStructure> entityStructure {
            get {
                if (_entityStructure == null)
                    _entityStructure = new GenericRepository<EntityStructure>(_context);
                return _entityStructure;
            }
        }

        public GenericRepository<EntityType> entityType
        {
            get
            {
                if (_entityType == null)
                    _entityType = new GenericRepository<EntityType>(_context);
                return _entityType;
            }
        }

        public GenericRepository<Industry> industry 
        {
            get {
                if (_industry == null)
                    _industry = new GenericRepository<Industry>(_context);
                return _industry;
                }
        }

        public GenericRepository<Location> location 
        {
            get {
                if (_location == null)
                    _location = new GenericRepository<Location>(_context);
                return _location;
            }
        }

        public GenericRepository<Naicscode> naicscode {
            get {
                if (_naicscode == null)
                    _naicscode = new GenericRepository<Naicscode>(_context);
                return _naicscode;
            }
        }

        public GenericRepository<Pscccode> pscccode
        {
            get
            {
                if (_pscccode == null)
                    _pscccode = new GenericRepository<Pscccode>(_context);
                return _pscccode;
            }
        }

        public GenericRepository<State> state {
            get {
                if (_state == null)
                    _state = new GenericRepository<State>(_context);
                return _state;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

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
    }
}
