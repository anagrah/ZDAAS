using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblBizlinkToCrmfieldsMapping
    {
        public decimal Id { get; set; }
        public decimal? BizlinkTableFieldId { get; set; }
        public decimal? CrmCompanyTableFieldId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Status { get; set; }
    }
}
