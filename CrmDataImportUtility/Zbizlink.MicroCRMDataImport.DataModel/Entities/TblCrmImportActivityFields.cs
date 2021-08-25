using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrmImportActivityFields
    {
        public decimal Id { get; set; }
        public decimal? CrmImportActivityTablesId { get; set; }
        public decimal? CrmCompanyTableFieldsId { get; set; }
        public string FieldValue { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Status { get; set; }

        public virtual TblCrmCompanyTableFields CrmCompanyTableFields { get; set; }
        public virtual TblCrmImportActivityTables CrmImportActivityTables { get; set; }
    }
}
