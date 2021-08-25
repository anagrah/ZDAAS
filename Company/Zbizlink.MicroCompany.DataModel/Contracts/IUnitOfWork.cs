using Zbizlink.MicroCompany.DataModel.Models;
using Zbizlink.MicroCompany.DataModel.Repositories;

namespace Zbizlink.MicroCompany.DataModel.Contracts
{
    public interface IUnitOfWork
    {
        GenericRepository<Company> company {get;}
        GenericRepository<CompanyEntityType> companyEntityType { get; }
        GenericRepository<AnnualRevenue> annualRevenue { get; }

        GenericRepository<CompanyLocation> companyLocation { get; }
        GenericRepository<CompanyNaicscode> companyNaicscode { get; }
        GenericRepository<CompanyPscccode> companyPscccode { get; }

        GenericRepository<CompanyType> companyType { get; }
        GenericRepository<Country> country { get; }
        GenericRepository<Department> department { get; }

        GenericRepository<EmployeeRange> employeeRange { get; }
        GenericRepository<EntityStructure> entityStructure { get; }
        GenericRepository<EntityType> entityType { get; }

        GenericRepository<Industry> industry { get; }
        GenericRepository<Location> location { get; }
        GenericRepository<Naicscode> naicscode { get; }

        GenericRepository<Pscccode> pscccode { get; }
        GenericRepository<State> state { get; }


        void Save();
    }
}
