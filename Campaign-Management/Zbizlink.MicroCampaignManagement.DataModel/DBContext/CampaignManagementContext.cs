using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Zbizlink.MicroCampaignManagement.DataModel.Models;

namespace Zbizlink.MicroCampaignManagement.DataModel.DBContext
{
    public partial class CampaignManagementContext : DbContext
    {
        public CampaignManagementContext()
        {
        }

        public CampaignManagementContext(DbContextOptions<CampaignManagementContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CampaignLeadsToDb> CampaignLeadsToDb { get; set; }
        public virtual DbSet<CampaignOpportunity> CampaignOpportunity { get; set; }
        public virtual DbSet<GenerateLeads> GenerateLeads { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=zdaas-db2; Database=CampaignManagement;user id=sa;password=Admin12345;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CampaignLeadsToDb>(entity =>
            {
                entity.HasKey(e => e.CampaignOpportunityId);

                entity.Property(e => e.CampaignOpportunityId)
                    .HasColumnName("CampaignOpportunityID")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CampaignSentDate).HasColumnType("datetime");

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.OpportunityId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.OpportunityName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.SentUserList).IsUnicode(false);
            });

            modelBuilder.Entity<CampaignOpportunity>(entity =>
            {
                entity.Property(e => e.CampaignOpportunityId)
                    .HasColumnName("CampaignOpportunityID")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CampaignSentDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OpportunityId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.OpportunityName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.SentUserList).IsUnicode(false);
            });

            modelBuilder.Entity<GenerateLeads>(entity =>
            {
                entity.HasKey(e => e.CampaignOpportunityId)
                    .HasName("PK_CampaignOpportunityTest");

                entity.Property(e => e.CampaignOpportunityId)
                    .HasColumnName("CampaignOpportunityID")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CampaignSentDate).HasColumnType("datetime");

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.OpportunityId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.OpportunityName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.SentUserList).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
