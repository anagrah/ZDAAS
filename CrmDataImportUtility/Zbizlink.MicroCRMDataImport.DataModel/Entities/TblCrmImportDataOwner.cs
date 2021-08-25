using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrmImportDataOwner
    {
        public TblCrmImportDataOwner()
        {
            TblCrmCompanyTables = new HashSet<TblCrmCompanyTables>();
            TblCrmImportDataUser = new HashSet<TblCrmImportDataUser>();
        }

        public decimal Id { get; set; }
        public decimal CompanyId { get; set; }

        public virtual ICollection<TblCrmCompanyTables> TblCrmCompanyTables { get; set; }
        public virtual ICollection<TblCrmImportDataUser> TblCrmImportDataUser { get; set; }
    }
}
