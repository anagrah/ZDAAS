using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class Company
    {
        public Company()
        {
            Clients = new HashSet<Client>();
            CompanyUsers = new HashSet<CompanyUser>();
        }

        public decimal CompanyId { get; set; }
        public string Duns { get; set; }
        public string Duns4 { get; set; }
        public string Cagecode { get; set; }
        public string Dodaac { get; set; }
        public string SamextractCode { get; set; }
        public int? PurposeOfRegistrationId { get; set; }
        public DateTime? RegistrationDate { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime? ActivationDate { get; set; }
        public string LegalBusinessName { get; set; }
        public string Dbaname { get; set; }
        public string CompanyDivision { get; set; }
        public string DivisionNumber { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? FiscalYearEndCloseDate { get; set; }
        public int? CompanySecurityLevelId { get; set; }
        public int? EmployeeSecurityLevelId { get; set; }
        public string CorporateUrl { get; set; }
        public int? EntityStructureId { get; set; }
        public int? StateOfIncorporation { get; set; }
        public int? CountryOfIncorporation { get; set; }
        public decimal? BusinessTypeCounter { get; set; }
        public int? BusinessPurposeId { get; set; }
        public string PrimaryNaics { get; set; }
        public decimal? NaicscodeCounter { get; set; }
        public decimal? PsccodeCounter { get; set; }
        public int? TaxIdentifierTypeId { get; set; }
        public string TaxIdentifierNumber { get; set; }
        public int? EmployeeRangeId { get; set; }
        public int? AnnualRevenueId { get; set; }
        public decimal? SbabusinessTypesCounter { get; set; }
        public string Description { get; set; }
        public string LogoUrl { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int? IsActiveId { get; set; }
        public int? IndustryId { get; set; }
        public int? CompanyTypeId { get; set; }
        public bool? Sam { get; set; }
        public bool? LinkedIn { get; set; }
        public string LinkedInId { get; set; }
        public string UniqueName { get; set; }

        public virtual ICollection<Client> Clients { get; set; }
        public virtual ICollection<CompanyUser> CompanyUsers { get; set; }
    }
}
