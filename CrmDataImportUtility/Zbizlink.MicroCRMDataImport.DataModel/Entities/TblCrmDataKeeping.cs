using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrmDataKeeping
    {
        public decimal Id { get; set; }
        public decimal? CrmImportActId { get; set; }
        public string FieldName { get; set; }
        public string Value { get; set; }
        public bool? Status { get; set; }
        public DateTime? DataKeepingDateTime { get; set; }

        public virtual TblCrmImportActivity CrmImportAct { get; set; }
    }
}
