using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrmConnectionProperties
    {
        public decimal Id { get; set; }
        public decimal? CrmId { get; set; }
        public decimal? CrmImportDataUserId { get; set; }
        public string KeyVar { get; set; }
        public string ValueVar { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Status { get; set; }

        public virtual TblCrm Crm { get; set; }
        public virtual TblCrmImportDataUser CrmImportDataUser { get; set; }
    }
}
