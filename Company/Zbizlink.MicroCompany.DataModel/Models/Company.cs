using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class Company
    {
        public Company()
        {
            CompanyEntityTypes = new HashSet<CompanyEntityType>();
            CompanyPscccodes = new HashSet<CompanyPscccode>();
        }

        public long Id { get; set; }
        public string Duns { get; set; }
        public string Duns4 { get; set; }
        public int? PurposeOfRegistrationId { get; set; }
        public DateTime? ActivationDate { get; set; }
        public string LegalBusinessName { get; set; }
        public string Dbaname { get; set; }
        public string CorporateUrl { get; set; }
        public long? EntityStructureId { get; set; }
        public int? StateOfIncorporation { get; set; }
        public int? CountryOfIncorporation { get; set; }
        public long? EmployeeRangeId { get; set; }
        public long? AnnualRevenueId { get; set; }
        public string Description { get; set; }
        public string LogoUrl { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int? IsActiveId { get; set; }
        public long? IndustryId { get; set; }
        public long? CompanyTypeId { get; set; }
        public string UniqueName { get; set; }

        public virtual ICollection<CompanyEntityType> CompanyEntityTypes { get; set; }
        public virtual ICollection<CompanyPscccode> CompanyPscccodes { get; set; }
    }
}
