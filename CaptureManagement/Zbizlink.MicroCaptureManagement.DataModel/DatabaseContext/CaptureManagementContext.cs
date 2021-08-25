using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroCaptureManagement.DataModel.Models;

namespace Zbizlink.MicroCaptureManagement.DataModel.DatabaseContext
{
    public partial class CaptureManagementContext : DbContext
    {
        public CaptureManagementContext()
        {
        }

        public CaptureManagementContext(DbContextOptions<CaptureManagementContext> options)
            : base(options)
        {
        }

        public virtual DbSet<lkptOpportunityRequirementType> lkptOpportunityRequirementType { get; set; }
        public virtual DbSet<lkptOpportunitySection> lkptOpportunitySections { get; set; }
        public virtual DbSet<lkptOpportunityType> lkptOpportunityTypes { get; set; }
        public virtual DbSet<OpportunityResourceShared> OpportunityResourceShareds { get; set; }
        public virtual DbSet<Opportunity> Opportunities { get; set; }
        public virtual DbSet<OpportunityRequirementShared> OpportunityRequirementShareds { get; set; }
        public virtual DbSet<OpportunityCheckList> OpportunityCheckLists { get; set; }
        public virtual DbSet<OpportunityCheckListRemark> OpportunityCheckListRemarks { get; set; }
        public virtual DbSet<OpportunityCapabilityRemark> OpportunityCapabilityRemarks { get; set; }
        public virtual DbSet<OpportunityDocument> OpportunityDocuments { get; set; }
        public virtual DbSet<OpportunityLaborCategory> OpportunityLaborCategories { get; set; }
        public virtual DbSet<OpportunityRequirementDetail> OpportunityRequirementDetails { get; set; }
        public virtual DbSet<OpportunityRequirementDetailLog> OpportunityRequirementDetailLogs { get; set; }
        public virtual DbSet<OpportunityRequirementTeamMember> OpportunityRequirementTeamMembers { get; set; }
        public virtual DbSet<OpportunityResource> OpportunityResources { get; set; }
        public virtual DbSet<OpportunityCapability> OpportunityCapabilities { get; set; }
        public virtual DbSet<OpportunityShared> OpportunityShareds { get; set; }
        public virtual DbSet<OpportunitySharedSection> OpportunitySharedSections { get; set; }
        public virtual DbSet<OpportunityRequirementHeading> OpportunityRequirementHeadings { get; set; }
        public virtual DbSet<OpportunityResourceHistory> OpportunityResourceHistory { get; set; }
        public virtual DbSet<OpportunityTeam> OpportunityTeams { get; set; }
        public virtual DbSet<OpportunitySharedRemark> OpportunitySharedRemarks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlServer("Server=zdaas-db2; Database=CampaignManagement;user id=sa;password=Admin12345;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
