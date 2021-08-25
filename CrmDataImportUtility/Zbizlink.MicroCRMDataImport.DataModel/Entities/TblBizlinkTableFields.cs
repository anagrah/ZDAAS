using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblBizlinkTableFields
    {
        public decimal Id { get; set; }
        public decimal? BizlnkTableId { get; set; }
        public string BizlinkTableFieldName { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Status { get; set; }
    }
}
