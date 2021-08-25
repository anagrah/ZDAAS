using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class Bizlink_TestContext : DbContext
    {
        public Bizlink_TestContext()
        {
        }

        public Bizlink_TestContext(DbContextOptions<Bizlink_TestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminRole> AdminRoles { get; set; }
        public virtual DbSet<AdminUser> AdminUsers { get; set; }
        public virtual DbSet<AdminUserRole> AdminUserRoles { get; set; }
        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<CompanyUser> CompanyUsers { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserEmail> UserEmails { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=192.168.3.6;user=sa;password=Admin12345;database=Bizlink_Test");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AdminRole>(entity =>
            {
                entity.ToTable("AdminRole");

                entity.Property(e => e.AdminRoleId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("AdminRoleID");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.RoleDescription)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AdminUser>(entity =>
            {
                entity.ToTable("AdminUser");

                entity.Property(e => e.AdminUserId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("AdminUserID");

                entity.Property(e => e.ApprovedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ApprovedOn).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.IsActiveId).HasColumnName("IsActiveID");

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.LnkExpiryDate)
                    .HasColumnType("datetime")
                    .HasColumnName("lnkExpiryDate");
            });

            modelBuilder.Entity<AdminUserRole>(entity =>
            {
                entity.ToTable("AdminUserRole");

                entity.Property(e => e.AdminUserRoleId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("AdminUserRoleID");

                entity.Property(e => e.AdminRoleId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("AdminRoleID");

                entity.Property(e => e.AdminUserId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("AdminUserID");

                entity.HasOne(d => d.AdminRole)
                    .WithMany(p => p.AdminUserRoles)
                    .HasForeignKey(d => d.AdminRoleId)
                    .HasConstraintName("FK_AdminUserRole_AdminRole");

                entity.HasOne(d => d.AdminUser)
                    .WithMany(p => p.AdminUserRoles)
                    .HasForeignKey(d => d.AdminUserId)
                    .HasConstraintName("FK_AdminUserRole_AdminUser");
            });

            modelBuilder.Entity<Client>(entity =>
            {
                entity.ToTable("Client");

                entity.HasIndex(e => e.AgencyId, "NCIndex_FK_Client_lkptAgency");

                entity.HasIndex(e => e.DepartmentId, "NCIndex_FK_Client_lkptDepartment");

                entity.HasIndex(e => e.EntityTypeId, "NCIndex_FK_Client_lkptEntityType");

                entity.HasIndex(e => e.StateId, "NCIndex_FK_Client_lkptStates");

                entity.HasIndex(e => new { e.ClientCompanyId, e.EntityTypeId, e.StateId, e.DepartmentId, e.AgencyId }, "NonClndex_Client");

                entity.Property(e => e.ClientId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ClientID");

                entity.Property(e => e.AgencyId).HasColumnName("AgencyID");

                entity.Property(e => e.AgencyName).HasMaxLength(500);

                entity.Property(e => e.ClientCompanyId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("ClientCompanyID");

                entity.Property(e => e.ClientCompanyName).HasMaxLength(500);

                entity.Property(e => e.ClientSourceId).HasMaxLength(50);

                entity.Property(e => e.CreatedBy)
                    .HasColumnType("numeric(18, 0)")
                    .HasComment("Employee - Record Inserted by User ID");

                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasComment("Employee - Date and Time created");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName).HasMaxLength(500);

                entity.Property(e => e.EntityTypeId).HasColumnName("EntityTypeID");

                entity.Property(e => e.ModifiedBy)
                    .HasColumnType("numeric(18, 0)")
                    .HasComment("Record modified by User ID");

                entity.Property(e => e.ModifiedOn)
                    .HasColumnType("datetime")
                    .HasComment("Record Modified - Date and Time");

                entity.Property(e => e.StateId).HasColumnName("StateID");

                entity.HasOne(d => d.ClientCompany)
                    .WithMany(p => p.Clients)
                    .HasForeignKey(d => d.ClientCompanyId)
                    .HasConstraintName("FK_Client_Company");
            });

            modelBuilder.Entity<Company>(entity =>
            {
                entity.ToTable("Company");

                entity.HasComment("Company/Agency/Businesses");

                entity.HasIndex(e => e.BusinessPurposeId, "NCIndex_FK_Admin_Company_lkptBusinessPurpose");

                entity.HasIndex(e => e.CountryOfIncorporation, "NCIndex_FK_Admin_Company_lkptCountry");

                entity.HasIndex(e => e.EntityStructureId, "NCIndex_FK_Admin_Company_lkptEntityStructure1");

                entity.HasIndex(e => e.CompanySecurityLevelId, "NCIndex_FK_Admin_Company_lkptSecurityLevel");

                entity.HasIndex(e => e.StateOfIncorporation, "NCIndex_FK_Admin_Company_lkptStates");

                entity.HasIndex(e => e.TaxIdentifierTypeId, "NCIndex_FK_Admin_Company_lkptTaxIdentifierType");

                entity.HasIndex(e => e.AnnualRevenueId, "NCIndex_FK_Company_AnnualRevenue");

                entity.HasIndex(e => e.EmployeeRangeId, "NCIndex_FK_Company_EmployeeRange");

                entity.HasIndex(e => e.CompanyTypeId, "NCIndex_FK_Company_lkptCompanyType");

                entity.HasIndex(e => e.IndustryId, "NCIndex_FK_Company_lkptIndustry");

                entity.HasIndex(e => e.EmployeeSecurityLevelId, "NCIndex_FK_Company_lkptSecurityLevelEmployee");

                entity.HasIndex(e => new { e.PurposeOfRegistrationId, e.CompanySecurityLevelId, e.EmployeeSecurityLevelId, e.EntityStructureId, e.StateOfIncorporation, e.CountryOfIncorporation, e.BusinessPurposeId, e.PrimaryNaics, e.TaxIdentifierTypeId, e.EmployeeRangeId, e.AnnualRevenueId, e.CompanyTypeId, e.UniqueName }, "NonClndex_Company");

                entity.Property(e => e.CompanyId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("CompanyID")
                    .HasComment("Primary key for the table Company");

                entity.Property(e => e.ActivationDate)
                    .HasColumnType("datetime")
                    .HasComment("ACTIVATION DATE");

                entity.Property(e => e.AnnualRevenueId)
                    .HasColumnName("AnnualRevenueID")
                    .HasComment("Total Annual revenue Range");

                entity.Property(e => e.BusinessPurposeId)
                    .HasColumnName("BusinessPurposeID")
                    .HasComment("Business purpose is  - 1) Buyer - 2) Seller - 3) Buyer and Seller");

                entity.Property(e => e.BusinessStartDate)
                    .HasColumnType("datetime")
                    .HasComment("The Date business/company started its business");

                entity.Property(e => e.BusinessTypeCounter)
                    .HasColumnType("numeric(4, 0)")
                    .HasComment("SBA BUSINESS TYPES COUNTER");

                entity.Property(e => e.Cagecode)
                    .HasMaxLength(5)
                    .HasColumnName("CAGECode")
                    .HasComment("The Commercial And Government Entity (CAGE) Code is a five-character ID number used extensively within the federal government, assigned by the Department of Defense’s Defense Logistics Agency (DLA). The CAGE code  is used to support a variety of mechanized systems throughout the government and provides a standardized method of identifying a given legal entity at a specific location.  The code may be used for a facility clearance, or a pre-award survey.");

                entity.Property(e => e.CompanyDivision)
                    .HasMaxLength(60)
                    .HasComment("Name of the Division, if company is having any divisions");

                entity.Property(e => e.CompanySecurityLevelId)
                    .HasColumnName("CompanySecurityLevelID")
                    .HasComment("Security level is defined as 1) Government Non-Classified - 2) Government Confidential - 3)Government Secret - 4) Government Top Secret");

                entity.Property(e => e.CompanyTypeId)
                    .HasColumnName("CompanyTypeID")
                    .HasComment("Company Type - Description");

                entity.Property(e => e.CorporateUrl)
                    .HasMaxLength(200)
                    .HasColumnName("CorporateURL")
                    .HasComment("Company Website URL");

                entity.Property(e => e.CountryOfIncorporation).HasComment("The name of the country where company/business/agency was incorporated");

                entity.Property(e => e.CreatedBy)
                    .HasColumnType("numeric(18, 0)")
                    .HasComment("User ID- who created this record");

                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasComment("User ID - who created this record date and time");

                entity.Property(e => e.Dbaname)
                    .HasMaxLength(120)
                    .HasColumnName("DBAName")
                    .HasComment("Doing Business As- Synonyum/Alias for the agency");

                entity.Property(e => e.Description).HasComment("Company brief overview");

                entity.Property(e => e.DivisionNumber)
                    .HasMaxLength(10)
                    .HasComment("Division number, if company is having any division numbers");

                entity.Property(e => e.Dodaac)
                    .HasMaxLength(9)
                    .HasColumnName("DODAAC")
                    .HasComment("The Department of Defense Activity Address Code (DoDAAC) is a six position code that uniquely identifies a Department of Defense unit, activity, or organization that has the authority to requisition, contract for, receive, have custody of, issue, or ship DoD assets, or fund/pay bills for materials and/or services. The first positions of the code designate the particular Service/Agency element of ownership");

                entity.Property(e => e.Duns)
                    .HasMaxLength(9)
                    .HasColumnName("DUNS")
                    .HasComment("The Data Universal Numbering System, abbreviated as DUNS or D-U-N-S, is a proprietary system developed and regulated by Dun & Bradstreet (D&B) that assigns a unique numeric identifier, referred to as a \"DUNS number\" to a single business entity");

                entity.Property(e => e.Duns4)
                    .HasMaxLength(4)
                    .HasColumnName("DUNS4")
                    .HasComment("If DUNS number is 9 digits, four zeros will be amalgated in DUNS4");

                entity.Property(e => e.EmployeeRangeId)
                    .HasColumnName("EmployeeRangeID")
                    .HasComment("Number of employees (ranges)");

                entity.Property(e => e.EmployeeSecurityLevelId)
                    .HasColumnName("EmployeeSecurityLevelID")
                    .HasComment("Employee level is defined as 1) Government Non-Classified - 2) Government Confidential - 3)Government Secret - 4) Government Top Secret");

                entity.Property(e => e.EntityStructureId)
                    .HasColumnName("EntityStructureID")
                    .HasComment("Entity Structure level is defined as - 1) Sole Proprietorship - 2) Partnership or Limited Liability Partnership - 3) Corporate Entity (Not Tax Exempt) - 4) Corporate Entity (Tax Exempt) - 5) U.S. Government Entity - 6) Country - Foreign Government - 7) International Organization - 8) Other");

                entity.Property(e => e.ExpirationDate)
                    .HasColumnType("datetime")
                    .HasComment("RENEWAL DATE for SAM");

                entity.Property(e => e.FiscalYearEndCloseDate)
                    .HasColumnType("datetime")
                    .HasComment("Closing date of the financial calender");

                entity.Property(e => e.IndustryId)
                    .HasColumnName("IndustryID")
                    .HasComment("Name of the industry business works");

                entity.Property(e => e.IsActiveId)
                    .HasColumnName("IsActiveID")
                    .HasComment("Is record deleted or Active? ");

                entity.Property(e => e.LastUpdateDate)
                    .HasColumnType("datetime")
                    .HasComment("LAST UPDATE DATE from SAM");

                entity.Property(e => e.LegalBusinessName)
                    .HasMaxLength(120)
                    .HasComment("Legaal business name is a company/agency name");

                entity.Property(e => e.LinkedIn).HasComment("Has record imported from LinkedIn?");

                entity.Property(e => e.LinkedInId)
                    .HasMaxLength(100)
                    .HasColumnName("LinkedInID")
                    .HasComment("LinkedIn ID profile");

                entity.Property(e => e.LogoUrl)
                    .HasMaxLength(1000)
                    .HasColumnName("LogoURL")
                    .HasComment("Company Logo URL, if importd from LinkedIn or any other public URL");

                entity.Property(e => e.ModifiedBy)
                    .HasColumnType("numeric(18, 0)")
                    .HasComment("User ID- who modified this record");

                entity.Property(e => e.ModifiedOn)
                    .HasColumnType("datetime")
                    .HasComment("Date and time when record was modified");

                entity.Property(e => e.NaicscodeCounter)
                    .HasColumnType("numeric(4, 0)")
                    .HasColumnName("NAICSCodeCounter")
                    .HasComment("North American Industry Classification counter codes");

                entity.Property(e => e.PrimaryNaics)
                    .HasMaxLength(6)
                    .HasColumnName("PrimaryNAICS")
                    .HasComment("Primary codes for North American Industry Classification");

                entity.Property(e => e.PsccodeCounter)
                    .HasColumnType("numeric(4, 0)")
                    .HasColumnName("PSCCodeCounter")
                    .HasComment("Counter for Product Service Codes");

                entity.Property(e => e.PurposeOfRegistrationId)
                    .HasColumnName("PurposeOfRegistrationID")
                    .HasComment("PURPOSE OF REGISTRATION - lookup table");

                entity.Property(e => e.RegistrationDate)
                    .HasColumnType("datetime")
                    .HasComment("Registeration Date of the company");

                entity.Property(e => e.Sam)
                    .HasColumnName("SAM")
                    .HasComment("Has record imported from SAM?");

                entity.Property(e => e.SamextractCode)
                    .HasMaxLength(1)
                    .HasColumnName("SAMExtractCode")
                    .IsFixedLength(true)
                    .HasComment("CCR EXTRACT CODE ");

                entity.Property(e => e.SbabusinessTypesCounter)
                    .HasColumnType("numeric(4, 0)")
                    .HasColumnName("SBABusinessTypesCounter")
                    .HasComment("SBA Business Type Counter");

                entity.Property(e => e.StateOfIncorporation).HasComment("The name of the state, where business was incorporated");

                entity.Property(e => e.TaxIdentifierNumber)
                    .HasMaxLength(9)
                    .HasComment("Tax Identifier Number");

                entity.Property(e => e.TaxIdentifierTypeId)
                    .HasColumnName("TaxIdentifierTypeID")
                    .HasComment("SSN or TIN");

                entity.Property(e => e.UniqueName).HasMaxLength(120);
            });

            modelBuilder.Entity<CompanyUser>(entity =>
            {
                entity.ToTable("CompanyUser");

                entity.HasComment("Details for Company Users");

                entity.HasIndex(e => e.CompanyId, "NCIndex_FK_CompanyUser_Company");

                entity.HasIndex(e => e.UserId, "NCIndex_FK_CompanyUser_User");

                entity.Property(e => e.CompanyUserId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("CompanyUserID")
                    .HasComment("Primary Key for Company User  table");

                entity.Property(e => e.CompanyId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("CompanyID")
                    .HasComment("Company ID");

                entity.Property(e => e.UserId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("UserID")
                    .HasComment("User ID");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.CompanyUsers)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_CompanyUser_Company");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CompanyUsers)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_CompanyUser_User");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role");

                entity.Property(e => e.RoleId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("RoleID");

                entity.Property(e => e.IsActiveId).HasColumnName("IsActiveID");

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.HasIndex(e => e.UserName, "Unique_UserName")
                    .IsUnique();

                entity.Property(e => e.UserId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("UserID");

                entity.Property(e => e.BusinessName).HasMaxLength(120);

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Ein)
                    .HasMaxLength(9)
                    .HasColumnName("EIN");

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.EmailBlockedDate).HasColumnType("datetime");

                entity.Property(e => e.EmailProviderId).HasColumnName("EmailProviderID");

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.IsActiveId).HasColumnName("IsActiveID");

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.LnkExpiryDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsFixedLength(true);

                entity.Property(e => e.ProviderPopupDate).HasColumnType("datetime");

                entity.Property(e => e.Source)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserName).HasMaxLength(100);
            });

            modelBuilder.Entity<UserEmail>(entity =>
            {
                entity.ToTable("UserEmail");

                entity.HasIndex(e => e.UserId, "NCIndex_FK_UserEmail_User");

                entity.Property(e => e.UserEmailId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("UserEmailID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.IsActiveId).HasColumnName("IsActiveID");

                entity.Property(e => e.UserId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserEmails)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserEmail_User");
            });

            modelBuilder.Entity<UserRole>(entity =>
            {
                entity.ToTable("UserRole");

                entity.HasIndex(e => e.RoleId, "NCIndex_FK_Admin_User_Role_Admin_Role");

                entity.HasIndex(e => e.UserId, "NCIndex_FK_Admin_User_Role_Admin_User");

                entity.Property(e => e.UserRoleId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("UserRoleID");

                entity.Property(e => e.IsActiveId).HasColumnName("IsActiveID");

                entity.Property(e => e.RoleId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("RoleID");

                entity.Property(e => e.UserId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("UserID");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.UserRoles)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Admin_User_Role_Admin_Role");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserRoles)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Admin_User_Role_Admin_User");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
