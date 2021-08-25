using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrmImportActivity
    {
        public TblCrmImportActivity()
        {
            TblCrmImportActivityTables = new HashSet<TblCrmImportActivityTables>();
        }

        public decimal Id { get; set; }
        public decimal? CrmImportDataUserId { get; set; }
        public DateTime? ActivityDateTime { get; set; }
        public bool? Status { get; set; }

        public virtual TblCrmImportDataUser CrmImportDataUser { get; set; }
        public virtual ICollection<TblCrmImportActivityTables> TblCrmImportActivityTables { get; set; }
    }
}
