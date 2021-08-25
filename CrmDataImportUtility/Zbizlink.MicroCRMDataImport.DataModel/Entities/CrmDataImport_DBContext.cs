
using Microsoft.EntityFrameworkCore;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class CrmDataImport_DBContext : DbContext
    {
        public CrmDataImport_DBContext()
        {
        }

        public CrmDataImport_DBContext(DbContextOptions<CrmDataImport_DBContext> options)
            : base(options)
        {
        }


        public virtual DbSet<TblBizlinkToCrmfieldsMapping> TblBizlinkToCrmfieldsMapping { get; set; }
        public virtual DbSet<TblBizlinkTableFields> TblBizlinkTableFields { get; set; }
        public virtual DbSet<TblBizlinkTables> TblBizlinkTables { get; set; }
        public virtual DbSet<TblCrm> TblCrm { get; set; }
        public virtual DbSet<TblCrmCompanyTableFields> TblCrmCompanyTableFields { get; set; }
        public virtual DbSet<TblCrmCompanyTables> TblCrmCompanyTables { get; set; }
        public virtual DbSet<TblCrmConnectionProperties> TblCrmConnectionProperties { get; set; }
        public virtual DbSet<TblCrmImportActivity> TblCrmImportActivity { get; set; }
        public virtual DbSet<TblCrmImportActivityFields> TblCrmImportActivityFields { get; set; }
        public virtual DbSet<TblCrmImportActivityTables> TblCrmImportActivityTables { get; set; }
        public virtual DbSet<TblCrmImportDataOwner> TblCrmImportDataOwner { get; set; }
        public virtual DbSet<TblCrmImportDataUser> TblCrmImportDataUser { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=110.39.197.13\\MSSQLServer2019;Database=CrmDataImport_DB;user id=sa;password=Admin12345;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblBizlinkToCrmfieldsMapping>(entity =>
            {
                entity.ToTable("Tbl_BizlinkToCRMFieldsMapping");

                entity.Property(e => e.Id).HasColumnType("numeric(18, 0)").ValueGeneratedOnAdd(); 

                entity.Property(e => e.BizlinkTableFieldId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.CrmCompanyTableFieldId).HasColumnType("numeric(18, 0)")
                    .HasMaxLength(10)
                    .IsFixedLength();
            });

            modelBuilder.Entity<TblBizlinkTableFields>(entity =>
            {
                entity.ToTable("Tbl_BizlinkTableFields");

                entity.Property(e => e.Id)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.BizlinkTableFieldName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BizlnkTableId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<TblBizlinkTables>(entity =>
            {
                entity.ToTable("Tbl_BizlinkTables");

                entity.Property(e => e.Id)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.BizlnkTableName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<TblCrm>(entity =>
            {
                entity.ToTable("Tbl_CRM");

                entity.Property(e => e.Id)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.CrmName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblCrmCompanyTableFields>(entity =>
            {
                entity.ToTable("Tbl_CRMCompanyTableFields");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("Created_Date")
                    .HasColumnType("datetime");

                entity.Property(e => e.CrmCompanyTableId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.TableFieldName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.CrmCompanyTable)
                    .WithMany(p => p.TblCrmCompanyTableFields)
                    .HasForeignKey(d => d.CrmCompanyTableId)
                    .HasConstraintName("FK_Tbl_CRMCompanyTableFields_Tbl_CRMCompanyTables");
            });

            modelBuilder.Entity<TblCrmCompanyTables>(entity =>
            {
                entity.ToTable("Tbl_CRMCompanyTables");

                entity.Property(e => e.Id)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("Created_Date")
                    .HasColumnType("datetime");

                entity.Property(e => e.CrmOwnerId).HasColumnType("numeric(18, 0)");
                entity.Property(e => e.CrmId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CrmTableName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.CrmOwner)
                    .WithMany(p => p.TblCrmCompanyTables)
                    .HasForeignKey(d => d.CrmOwnerId)
                    .HasConstraintName("FK_Tbl_CRMCompanyTables_Tbl_CRMImportDataOwner");

                entity.HasOne(d => d.Crm)
                   .WithMany(p => p.TblCrmCompanyTables)
                   .HasForeignKey(d => d.CrmId)
                   .HasConstraintName("FK_Tbl_CRMCompanyTables_Tbl_CRM");
            });

            modelBuilder.Entity<TblCrmConnectionProperties>(entity =>
            {
                entity.ToTable("Tbl_CRMConnectionProperties");

                entity.Property(e => e.Id)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("Created_Date")
                    .HasColumnType("datetime");

                entity.Property(e => e.CrmId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CrmImportDataUserId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.KeyVar)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ValueVar)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Crm)
                    .WithMany(p => p.TblCrmConnectionProperties)
                    .HasForeignKey(d => d.CrmId)
                    .HasConstraintName("FK_Tbl_CRMConnectionProperties_Tbl_CRM");

                entity.HasOne(d => d.CrmImportDataUser)
                    .WithMany(p => p.TblCrmConnectionProperties)
                    .HasForeignKey(d => d.CrmImportDataUserId)
                    .HasConstraintName("FK_Tbl_CRMConnectionProperties_Tbl_CRMImportDataUser");
            });

            modelBuilder.Entity<TblCrmImportActivity>(entity =>
            {
                entity.ToTable("Tbl_CRMImportActivity");

                entity.Property(e => e.Id)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.ActivityDateTime).HasColumnType("datetime");

                entity.Property(e => e.CrmImportDataUserId).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.CrmImportDataUser)
                    .WithMany(p => p.TblCrmImportActivity)
                    .HasForeignKey(d => d.CrmImportDataUserId)
                    .HasConstraintName("FK_Tbl_CRMImportActivity_Tbl_CRMImportDataUser");
            });

            modelBuilder.Entity<TblCrmImportActivityFields>(entity =>
            {
                entity.ToTable("Tbl_CRMImportActivityFields");

                entity.Property(e => e.Id)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("Created_Date")
                    .HasColumnType("datetime");

                entity.Property(e => e.CrmCompanyTableFieldsId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CrmImportActivityTablesId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.FieldValue).HasMaxLength(200);

                entity.HasOne(d => d.CrmCompanyTableFields)
                    .WithMany(p => p.TblCrmImportActivityFields)
                    .HasForeignKey(d => d.CrmCompanyTableFieldsId)
                    .HasConstraintName("FK_Tbl_CRMImportActivityFields_Tbl_CRMCompanyTableFields");

                entity.HasOne(d => d.CrmImportActivityTables)
                    .WithMany(p => p.TblCrmImportActivityFields)
                    .HasForeignKey(d => d.CrmImportActivityTablesId)
                    .HasConstraintName("FK_Tbl_CRMImportActivityFields_Tbl_CRMImportActivityTables");
            });

            modelBuilder.Entity<TblCrmImportActivityTables>(entity =>
            {
                entity.ToTable("Tbl_CRMImportActivityTables");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("Created_Date")
                    .HasColumnType("datetime");

                entity.Property(e => e.CrmCompanyTableId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CrmImportActivityId).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.CrmCompanyTable)
                    .WithMany(p => p.TblCrmImportActivityTables)
                    .HasForeignKey(d => d.CrmCompanyTableId)
                    .HasConstraintName("FK_Tbl_CRMImportActivityTables_Tbl_CRMCompanyTables");

                entity.HasOne(d => d.CrmImportActivity)
                    .WithMany(p => p.TblCrmImportActivityTables)
                    .HasForeignKey(d => d.CrmImportActivityId)
                    .HasConstraintName("FK_Tbl_CRMImportActivityTables_Tbl_CRMImportActivity");
            });

            modelBuilder.Entity<TblCrmImportDataOwner>(entity =>
            {
                entity.ToTable("Tbl_CRMImportDataOwner");

                entity.Property(e => e.Id)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CompanyId).HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<TblCrmImportDataUser>(entity =>
            {
                entity.ToTable("Tbl_CRMImportDataUser");

                entity.Property(e => e.Id)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.ClientId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("Created_Date")
                    .HasColumnType("datetime");

                entity.Property(e => e.OwnerId).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.SegmentId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.Owner)
                    .WithMany(p => p.TblCrmImportDataUser)
                    .HasForeignKey(d => d.OwnerId)
                    .HasConstraintName("FK_Tbl_CRMImportDataUser_Tbl_CRMImportDataOwner");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
