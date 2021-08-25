using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Zbizlink.MicroCompany.DataModel.Models;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Database.DatabaseContext
{
    public partial class CompanyManagementContext : DbContext
    {
        public CompanyManagementContext()
        {
        }

        public CompanyManagementContext(DbContextOptions<CompanyManagementContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AnnualRevenue> AnnualRevenues { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<CompanyEntityType> CompanyEntityTypes { get; set; }
        public virtual DbSet<CompanyLocation> CompanyLocations { get; set; }
        public virtual DbSet<CompanyNaicscode> CompanyNaicscodes { get; set; }
        public virtual DbSet<CompanyPscccode> CompanyPscccodes { get; set; }
        public virtual DbSet<CompanyType> CompanyTypes { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<EmployeeRange> EmployeeRanges { get; set; }
        public virtual DbSet<EntityStructure> EntityStructures { get; set; }
        public virtual DbSet<EntityType> EntityTypes { get; set; }
        public virtual DbSet<Industry> Industries { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Naicscode> Naicscodes { get; set; }
        public virtual DbSet<Pscccode> Pscccodes { get; set; }
        public virtual DbSet<State> States { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=192.168.3.6;user=sa;password=Admin1234;database=CompanyManagement");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AnnualRevenue>(entity =>
            {
                entity.ToTable("AnnualRevenue");

                entity.Property(e => e.AnnualRevenueLongDesc).HasMaxLength(100);

                entity.Property(e => e.AnnualRevenueShortDesc).HasMaxLength(50);
            });

            modelBuilder.Entity<Company>(entity =>
            {
                entity.ToTable("Company");

                entity.Property(e => e.ActivationDate).HasColumnType("datetime");

                entity.Property(e => e.AnnualRevenueId).HasColumnName("AnnualRevenueID");

                entity.Property(e => e.CompanyTypeId).HasColumnName("CompanyTypeID");

                entity.Property(e => e.CorporateUrl)
                    .HasMaxLength(200)
                    .HasColumnName("CorporateURL");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Dbaname)
                    .HasMaxLength(120)
                    .HasColumnName("DBAName");

                entity.Property(e => e.Duns)
                    .HasMaxLength(9)
                    .HasColumnName("DUNS");

                entity.Property(e => e.Duns4)
                    .HasMaxLength(4)
                    .HasColumnName("DUNS4");

                entity.Property(e => e.EmployeeRangeId).HasColumnName("EmployeeRangeID");

                entity.Property(e => e.IndustryId).HasColumnName("IndustryID");

                entity.Property(e => e.IsActiveId).HasColumnName("IsActiveID");

                entity.Property(e => e.LegalBusinessName).HasMaxLength(120);

                entity.Property(e => e.LogoUrl)
                    .HasMaxLength(200)
                    .HasColumnName("LogoURL");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.UniqueName).HasMaxLength(120);
            });

            modelBuilder.Entity<CompanyEntityType>(entity =>
            {
                entity.ToTable("CompanyEntityType");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.CompanyEntityTypes)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_CompanyEntityType_Company");

                entity.HasOne(d => d.EntityType)
                    .WithMany(p => p.CompanyEntityTypes)
                    .HasForeignKey(d => d.EntityTypeId)
                    .HasConstraintName("FK_CompanyEntityType_EntityType");
            });

            modelBuilder.Entity<CompanyLocation>(entity =>
            {
                entity.ToTable("CompanyLocation");

                entity.Property(e => e.IsActiveId).HasColumnName("IsActiveID");
            });

            modelBuilder.Entity<CompanyNaicscode>(entity =>
            {
                entity.ToTable("CompanyNAICSCode");

                entity.Property(e => e.NaicscodeId).HasColumnName("NAICSCodeID");
            });

            modelBuilder.Entity<CompanyPscccode>(entity =>
            {
                entity.ToTable("CompanyPSCCCode");

                entity.Property(e => e.PscccodeId).HasColumnName("PSCCCodeId");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.CompanyPscccodes)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_CompanyPSCCCode_Company");

                entity.HasOne(d => d.Pscccode)
                    .WithMany(p => p.CompanyPscccodes)
                    .HasForeignKey(d => d.PscccodeId)
                    .HasConstraintName("FK_CompanyPSCCCode_PSCCCode");
            });

            modelBuilder.Entity<CompanyType>(entity =>
            {
                entity.ToTable("CompanyType");

                entity.Property(e => e.CompanyTypeLongDesc).HasMaxLength(100);

                entity.Property(e => e.CompanyTypeShortDesc).HasMaxLength(50);
            });

            modelBuilder.Entity<Country>(entity =>
            {
                entity.ToTable("Country");

                entity.Property(e => e.CountryLongDesc).HasMaxLength(50);

                entity.Property(e => e.CountryShortDesc).HasMaxLength(3);
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("Department");

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.DepartmentName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");
            });

            modelBuilder.Entity<EmployeeRange>(entity =>
            {
                entity.ToTable("EmployeeRange");

                entity.Property(e => e.EmployeeRangeLongDesc).HasMaxLength(100);

                entity.Property(e => e.EmployeeRangeShortDesc).HasMaxLength(50);
            });

            modelBuilder.Entity<EntityStructure>(entity =>
            {
                entity.ToTable("EntityStructure");

                entity.Property(e => e.EntityStructureLongDesc).HasMaxLength(100);

                entity.Property(e => e.EntityStructureShortDesc).HasMaxLength(50);
            });

            modelBuilder.Entity<EntityType>(entity =>
            {
                entity.ToTable("EntityType");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.EntityTypeLongDesc).HasMaxLength(100);

                entity.Property(e => e.EntityTypeShortDesc).HasMaxLength(100);
            });

            modelBuilder.Entity<Industry>(entity =>
            {
                entity.ToTable("Industry");

                entity.Property(e => e.IndustryLongDesc).HasMaxLength(100);

                entity.Property(e => e.IndustryShortDesc).HasMaxLength(50);
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("Location");

                entity.Property(e => e.Address1).HasMaxLength(1000);

                entity.Property(e => e.Address2).HasMaxLength(150);

                entity.Property(e => e.AddressTitle).HasMaxLength(1000);

                entity.Property(e => e.City).HasMaxLength(40);

                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.Fax).HasMaxLength(30);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.NonUsphone)
                    .HasMaxLength(30)
                    .HasColumnName("NonUSPhone");

                entity.Property(e => e.Phone).HasMaxLength(30);

                entity.Property(e => e.PhoneExt).HasMaxLength(30);

                entity.Property(e => e.Zipcode).HasMaxLength(50);

                entity.Property(e => e.Zipcode4).HasMaxLength(4);
            });

            modelBuilder.Entity<Naicscode>(entity =>
            {
                entity.ToTable("NAICSCode");

                entity.Property(e => e.NaicscodeLongDesc)
                    .HasMaxLength(100)
                    .HasColumnName("NAICSCodeLongDesc");

                entity.Property(e => e.NaicscodeShortDesc)
                    .HasMaxLength(50)
                    .HasColumnName("NAICSCodeShortDesc");

                entity.Property(e => e.ParentId).HasColumnName("ParentID");
            });

            modelBuilder.Entity<Pscccode>(entity =>
            {
                entity.ToTable("PSCCCode");

                entity.Property(e => e.PsccodeLongDesc)
                    .HasMaxLength(500)
                    .HasColumnName("PSCCodeLongDesc");

                entity.Property(e => e.PsccodeShortDesc)
                    .HasMaxLength(10)
                    .HasColumnName("PSCCodeShortDesc");
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.ToTable("State");

                entity.Property(e => e.StateLongDesc).HasMaxLength(100);

                entity.Property(e => e.StateShortDesc).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
