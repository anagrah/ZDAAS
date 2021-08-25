using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Zbizlink.RFPDataModel.Models;

namespace Zbizlink.RFPDataModel.DBContext
{
    public partial class ZRFPParserContext : DbContext
    {
        public ZRFPParserContext()
        {
        }

        public ZRFPParserContext(DbContextOptions<ZRFPParserContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Agency> Agency { get; set; }
        public virtual DbSet<BridgeSummarySynonymAgency> BridgeSummarySynonymAgency { get; set; }
        public virtual DbSet<BridgeSummarySynonymContractVehicle> BridgeSummarySynonymContractVehicle { get; set; }
        public virtual DbSet<BridgeSummarySynonymIndustry> BridgeSummarySynonymIndustry { get; set; }
        public virtual DbSet<BridgeSummarySynonymOpportunityType> BridgeSummarySynonymOpportunityType { get; set; }
        public virtual DbSet<BridgeSummarySynonymStates> BridgeSummarySynonymStates { get; set; }
        public virtual DbSet<BridgeSynonymAgency> BridgeSynonymAgency { get; set; }
        public virtual DbSet<BridgeSynonymContractVehicle> BridgeSynonymContractVehicle { get; set; }
        public virtual DbSet<BridgeSynonymIndustry> BridgeSynonymIndustry { get; set; }
        public virtual DbSet<BridgeSynonymOpportunityType> BridgeSynonymOpportunityType { get; set; }
        public virtual DbSet<BridgeSynonymStates> BridgeSynonymStates { get; set; }
        public virtual DbSet<CampaignOpportunity> CampaignOpportunity { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<CategorySynonym> CategorySynonym { get; set; }
        public virtual DbSet<ContractVehicle> ContractVehicle { get; set; }
        public virtual DbSet<FieldType> FieldType { get; set; }
        public virtual DbSet<Industry> Industry { get; set; }
        public virtual DbSet<JobTitle> JobTitle { get; set; }
        public virtual DbSet<JobTitleAddOn> JobTitleAddOn { get; set; }
        public virtual DbSet<JobTitleWord> JobTitleWord { get; set; }
        public virtual DbSet<LaborHeading> LaborHeading { get; set; }
        public virtual DbSet<LaborHeadingSynonym> LaborHeadingSynonym { get; set; }
        public virtual DbSet<Opportunity> Opportunity { get; set; }
        public virtual DbSet<OpportunityContent> OpportunityContent { get; set; }
        public virtual DbSet<OpportunityHeading> OpportunityHeading { get; set; }
        public virtual DbSet<OpportunityType> OpportunityType { get; set; }
        public virtual DbSet<RfpcategoryData> RfpcategoryData { get; set; }
        public virtual DbSet<Rfpdocument> Rfpdocument { get; set; }
        public virtual DbSet<RfpdocumentCopy> RfpdocumentCopy { get; set; }
        public virtual DbSet<Rfpsummary> Rfpsummary { get; set; }
        public virtual DbSet<RfpsummaryField> RfpsummaryField { get; set; }
        public virtual DbSet<RfpsummarySynonym> RfpsummarySynonym { get; set; }
        public virtual DbSet<States> States { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.;Database=ZRFPParser_Test;user id=sa;password=Admin123456;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agency>(entity =>
            {
                entity.Property(e => e.AgencyId).HasColumnName("AgencyID");

                entity.Property(e => e.AgencyName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<BridgeSummarySynonymAgency>(entity =>
            {
                entity.Property(e => e.AgencyId).HasColumnName("AgencyID");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.RfpsummarySynonymId)
                    .HasColumnName("RFPSummarySynonymId")
                    .HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<BridgeSummarySynonymContractVehicle>(entity =>
            {
                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.RfpsummarySynonymId)
                    .HasColumnName("RFPSummarySynonymId")
                    .HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<BridgeSummarySynonymIndustry>(entity =>
            {
                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IndustryId).HasColumnName("IndustryID");

                entity.Property(e => e.RfpsummarySynonymId)
                    .HasColumnName("RFPSummarySynonymId")
                    .HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<BridgeSummarySynonymOpportunityType>(entity =>
            {
                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.RfpsummarySynonymId)
                    .HasColumnName("RFPSummarySynonymId")
                    .HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.OpportunityType)
                    .WithMany(p => p.BridgeSummarySynonymOpportunityType)
                    .HasForeignKey(d => d.OpportunityTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BridgeSummarySynonymOpportunityType_OpportunityType");
            });

            modelBuilder.Entity<BridgeSummarySynonymStates>(entity =>
            {
                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.RfpsummarySynonymId)
                    .HasColumnName("RFPSummarySynonymId")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.StateId).HasColumnName("StateID");
            });

            modelBuilder.Entity<BridgeSynonymAgency>(entity =>
            {
                entity.HasIndex(e => new { e.SynonymId, e.AgencyId })
                    .HasName("uq_BridgeSynonymAgency")
                    .IsUnique();

                entity.Property(e => e.BridgeSynonymAgencyId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.AgencyId).HasColumnName("AgencyID");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.SynonymId).HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<BridgeSynonymContractVehicle>(entity =>
            {
                entity.HasIndex(e => new { e.SynonymId, e.ContractVehicleId })
                    .HasName("uq_BridgeSynonymContractVehicle")
                    .IsUnique();

                entity.Property(e => e.BridgeSynonymContractVehicleId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.SynonymId).HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<BridgeSynonymIndustry>(entity =>
            {
                entity.HasIndex(e => new { e.SynonymId, e.IndustryId })
                    .HasName("uq_BridgeSynonymIndustry")
                    .IsUnique();

                entity.Property(e => e.BridgeSynonymIndustryId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IndustryId).HasColumnName("IndustryID");

                entity.Property(e => e.SynonymId).HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<BridgeSynonymOpportunityType>(entity =>
            {
                entity.HasIndex(e => new { e.SynonymId, e.OpportunityTypeId })
                    .HasName("uq_BridgeSynonymOpportunityType")
                    .IsUnique();

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.SynonymId).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.OpportunityType)
                    .WithMany(p => p.BridgeSynonymOpportunityType)
                    .HasForeignKey(d => d.OpportunityTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BridgeSynonymOpportunityType_OpportunityType");
            });

            modelBuilder.Entity<BridgeSynonymStates>(entity =>
            {
                entity.HasIndex(e => new { e.SynonymId, e.StateId })
                    .HasName("uq_BridgeSynonymStates")
                    .IsUnique();

                entity.Property(e => e.BridgeSynonymStatesId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.StateId).HasColumnName("StateID");

                entity.Property(e => e.SynonymId).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.BridgeSynonymStates)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BridgeSynonymStates_States");
            });

            modelBuilder.Entity<CampaignOpportunity>(entity =>
            {
                entity.Property(e => e.CampaignOpportunityId)
                    .HasColumnName("CampaignOpportunityID")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CampaignSentDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.OpportunityId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.SentUserList).IsUnicode(false);

                entity.HasOne(d => d.Opportunity)
                    .WithMany(p => p.CampaignOpportunity)
                    .HasForeignKey(d => d.OpportunityId)
                    .HasConstraintName("FK_CampaignOpportunity_Opportunity");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.Color)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Black')");

                entity.Property(e => e.CompanyId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Decription)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.IdForZbizlink)
                    .HasColumnName("IdForZBizlink")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CategorySynonym>(entity =>
            {
                entity.HasKey(e => e.SynonymId)
                    .HasName("PK_CATEGORYSYNONYM");

                entity.Property(e => e.SynonymId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CategoryId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Synonym)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.CategorySynonym)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CategorySynonym_Category");
            });

            modelBuilder.Entity<ContractVehicle>(entity =>
            {
                entity.Property(e => e.ContractVehicleName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<FieldType>(entity =>
            {
                entity.Property(e => e.FieldTypeLongDesc).HasMaxLength(100);

                entity.Property(e => e.FieldTypeShortDesc).HasMaxLength(100);
            });

            modelBuilder.Entity<Industry>(entity =>
            {
                entity.Property(e => e.IndustryId).HasColumnName("IndustryID");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description).HasMaxLength(200);

                entity.Property(e => e.IndustryName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<JobTitle>(entity =>
            {
                entity.HasIndex(e => e.JobTitleId)
                    .HasName("Parser_JobTitle")
                    .IsUnique();

                entity.Property(e => e.JobTitleId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<JobTitleAddOn>(entity =>
            {
                entity.Property(e => e.JobTitleAddOnId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.AddOn)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<JobTitleWord>(entity =>
            {
                entity.HasIndex(e => e.JobTitleWordId)
                    .HasName("UK_JobTitleWord")
                    .IsUnique();

                entity.Property(e => e.JobTitleWordId)
                    .HasColumnType("decimal(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Word)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<LaborHeading>(entity =>
            {
                entity.Property(e => e.LaborHeadingId)
                    .HasColumnType("decimal(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Heading)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<LaborHeadingSynonym>(entity =>
            {
                entity.Property(e => e.LaborHeadingSynonymId)
                    .HasColumnType("decimal(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.LaborHeadingId).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Synonym)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.LaborHeading)
                    .WithMany(p => p.LaborHeadingSynonym)
                    .HasForeignKey(d => d.LaborHeadingId)
                    .HasConstraintName("FK_LaborHeadingSynonym_LaborHeading");
            });

            modelBuilder.Entity<Opportunity>(entity =>
            {
                entity.Property(e => e.OpportunityId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.ClientId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CompanyId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OldOpportunity).HasDefaultValueSql("((0))");

                entity.Property(e => e.OpportunityName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.RfpdocumentId)
                    .HasColumnName("RFPDocumentId")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.SegmentId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.SolicitationNumber).HasMaxLength(50);

                entity.Property(e => e.UserId).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.OpportunityType)
                    .WithMany(p => p.Opportunity)
                    .HasForeignKey(d => d.OpportunityTypeId)
                    .HasConstraintName("FK_Opportunity_OpportunityType");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.Opportunity)
                    .HasForeignKey(d => d.StateId)
                    .HasConstraintName("FK_Opportunity_States");
            });

            modelBuilder.Entity<OpportunityContent>(entity =>
            {
                entity.HasKey(e => e.DetailId)
                    .HasName("PK_OPPORTUNITYDETAIL");

                entity.Property(e => e.DetailId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.HeadingId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OppContent).IsUnicode(false);

                entity.HasOne(d => d.Heading)
                    .WithMany(p => p.OpportunityContent)
                    .HasForeignKey(d => d.HeadingId)
                    .HasConstraintName("FK_OpportunityContent_OpportunityHeading");
            });

            modelBuilder.Entity<OpportunityHeading>(entity =>
            {
                entity.HasKey(e => e.HeadingId)
                    .HasName("PK_OPPORTUNITYHEADING");

                entity.Property(e => e.HeadingId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CategoryId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OpportunityId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ParentHeadingId).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.OpportunityHeading)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_OpportunityHeading_Category");

                entity.HasOne(d => d.Opportunity)
                    .WithMany(p => p.OpportunityHeading)
                    .HasForeignKey(d => d.OpportunityId)
                    .HasConstraintName("FK_OpportunityHeading_Opportunity");

                entity.HasOne(d => d.ParentHeading)
                    .WithMany(p => p.InverseParentHeading)
                    .HasForeignKey(d => d.ParentHeadingId)
                    .HasConstraintName("FK_OpportunityHeading_OpportunityHeading1");
            });

            modelBuilder.Entity<OpportunityType>(entity =>
            {
                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OpportunityTypeName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<RfpcategoryData>(entity =>
            {
                entity.ToTable("RFPCategoryData");

                entity.Property(e => e.RfpcategoryDataId)
                    .HasColumnName("RFPCategoryDataId")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CategoryData)
                    .IsRequired()
                    .HasColumnType("ntext");

                entity.Property(e => e.CategoryId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CompanyId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OpportunityId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.Published).HasDefaultValueSql("((0))");

                entity.Property(e => e.RfpdocumentId)
                    .HasColumnName("RFPDocumentId")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.UserId).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.RfpcategoryData)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_RFPCategoryData_Category");

                entity.HasOne(d => d.Opportunity)
                    .WithMany(p => p.RfpcategoryData)
                    .HasForeignKey(d => d.OpportunityId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_RFPCategoryData_Opportunity");
            });

            modelBuilder.Entity<Rfpdocument>(entity =>
            {
                entity.ToTable("RFPDocument");

                entity.Property(e => e.RfpdocumentId)
                    .HasColumnName("RFPDocumentId")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.ClientId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CompanyId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DocContent).HasColumnType("ntext");

                entity.Property(e => e.DocName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.FilePath)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.FileType)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.OpportunityId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.SegmentId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.UserId).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.Opportunity)
                    .WithMany(p => p.Rfpdocument)
                    .HasForeignKey(d => d.OpportunityId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_RFPDocument_Opportunity");
            });

            modelBuilder.Entity<RfpdocumentCopy>(entity =>
            {
                entity.HasKey(e => e.RfpdocumentId)
                    .HasName("PK_RFPDOCUMENTCOPY");

                entity.ToTable("RFPDocumentCopy");

                entity.Property(e => e.RfpdocumentId)
                    .HasColumnName("RFPDocumentId")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CompanyId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DocContent)
                    .IsRequired()
                    .HasColumnType("ntext");

                entity.Property(e => e.DocName)
                    .IsRequired()
                    .HasMaxLength(300);

                entity.Property(e => e.UserId).HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<Rfpsummary>(entity =>
            {
                entity.ToTable("RFPSummary");

                entity.Property(e => e.RfpsummaryId)
                    .HasColumnName("RFPSummaryId")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CompanyId).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.CreatedBy).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FieldName).HasMaxLength(500);

                entity.Property(e => e.FieldValue).HasMaxLength(1000);

                entity.Property(e => e.ModifiedBy).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OpportunityId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.RfpdocumentId)
                    .HasColumnName("RFPDocumentId")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.RfpsummaryFieldId)
                    .HasColumnName("RFPSummaryFieldId")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.UserId).HasColumnType("decimal(18, 0)");

                entity.HasOne(d => d.FieldType)
                    .WithMany(p => p.Rfpsummary)
                    .HasForeignKey(d => d.FieldTypeId)
                    .HasConstraintName("FK_RFPSummary_FieldType");

                entity.HasOne(d => d.Opportunity)
                    .WithMany(p => p.Rfpsummary)
                    .HasForeignKey(d => d.OpportunityId)
                    .HasConstraintName("FK_RFPSummary_Opportunity");
            });

            modelBuilder.Entity<RfpsummaryField>(entity =>
            {
                entity.ToTable("RFPSummaryField");

                entity.Property(e => e.RfpsummaryFieldId)
                    .HasColumnName("RFPSummaryFieldId")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.FieldName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<RfpsummarySynonym>(entity =>
            {
                entity.ToTable("RFPSummarySynonym");

                entity.Property(e => e.RfpsummarySynonymId)
                    .HasColumnName("RFPSummarySynonymId")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description).HasMaxLength(200);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.RfpsummaryFieldId)
                    .HasColumnName("RFPSummaryFieldId")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.Synonym)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.RfpsummaryField)
                    .WithMany(p => p.RfpsummarySynonym)
                    .HasForeignKey(d => d.RfpsummaryFieldId)
                    .HasConstraintName("FK_RFPSummarySynonym_RFPSummaryField");
            });

            modelBuilder.Entity<States>(entity =>
            {
                entity.HasKey(e => e.StateId)
                    .HasName("PK_State");

                entity.Property(e => e.StateId).HasColumnName("StateID");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.StateName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
