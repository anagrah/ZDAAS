using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrmImportActivityTables
    {
        public TblCrmImportActivityTables()
        {
            TblCrmImportActivityFields = new HashSet<TblCrmImportActivityFields>();
        }

        public decimal Id { get; set; }
        public decimal? CrmImportActivityId { get; set; }
        public decimal? CrmCompanyTableId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Status { get; set; }

        public virtual TblCrmCompanyTables CrmCompanyTable { get; set; }
        public virtual TblCrmImportActivity CrmImportActivity { get; set; }
        public virtual ICollection<TblCrmImportActivityFields> TblCrmImportActivityFields { get; set; }
    }
}
