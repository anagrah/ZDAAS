using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrmCompanyTableFields
    {
        public TblCrmCompanyTableFields()
        {
            TblCrmImportActivityFields = new HashSet<TblCrmImportActivityFields>();
        }

        public decimal Id { get; set; }
        public decimal? CrmCompanyTableId { get; set; }
        public string TableFieldName { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Status { get; set; }

        public virtual TblCrmCompanyTables CrmCompanyTable { get; set; }
        public virtual ICollection<TblCrmImportActivityFields> TblCrmImportActivityFields { get; set; }
    }
}
