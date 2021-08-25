using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Zbizlink.MicroEmailBroadCaster.DataModel.DBContext
{
    public partial class EmailBroadCasterContext : DbContext
    {
        public EmailBroadCasterContext()
        {
        }

        public EmailBroadCasterContext(DbContextOptions<EmailBroadCasterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmailTemplate> EmailTemplates { get; set; }
        public virtual DbSet<LkptEmailCategory> LkptEmailCategories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=192.168.3.6;user=sa;password=Admin1234;database=EmailBroadCaster");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<EmailTemplate>(entity =>
            {
                entity.ToTable("EmailTemplate");

                entity.Property(e => e.EmailTemplateId).HasColumnName("EmailTemplateID");

                entity.Property(e => e.Body).IsUnicode(false);

                entity.Property(e => e.EmailCategoryId).HasColumnName("EmailCategoryID");

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.StartDate).HasColumnType("datetime");

                entity.Property(e => e.Subject).HasMaxLength(500);

                entity.HasOne(d => d.EmailCategory)
                    .WithMany(p => p.EmailTemplates)
                    .HasForeignKey(d => d.EmailCategoryId)
                    .HasConstraintName("FK_EmailTemplate_lkptEmailCategory");
            });

            modelBuilder.Entity<LkptEmailCategory>(entity =>
            {
                entity.HasKey(e => e.EmailCategoryId);

                entity.ToTable("lkptEmailCategory");

                entity.Property(e => e.EmailCategoryId).HasColumnName("EmailCategoryID");

                entity.Property(e => e.EmailCategoryLongDesc).HasMaxLength(500);

                entity.Property(e => e.EmailCategoryShortDesc).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
