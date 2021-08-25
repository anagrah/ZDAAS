using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrmCompanyTables
    {
        public TblCrmCompanyTables()
        {
            TblCrmCompanyTableFields = new HashSet<TblCrmCompanyTableFields>();
            TblCrmImportActivityTables = new HashSet<TblCrmImportActivityTables>();
        }

        public decimal Id { get; set; }
        public string CrmTableName { get; set; }
        public decimal? CrmOwnerId { get; set; }
        public decimal? CrmId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Status { get; set; }

        public virtual TblCrmImportDataOwner CrmOwner { get; set; }
        public virtual TblCrm Crm { get; set; }
        public virtual ICollection<TblCrmCompanyTableFields> TblCrmCompanyTableFields { get; set; }
        public virtual ICollection<TblCrmImportActivityTables> TblCrmImportActivityTables { get; set; }
    }
}
