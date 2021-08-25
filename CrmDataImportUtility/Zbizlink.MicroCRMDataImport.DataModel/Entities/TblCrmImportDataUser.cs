using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrmImportDataUser
    {
        public TblCrmImportDataUser()
        {
            TblCrmConnectionProperties = new HashSet<TblCrmConnectionProperties>();
            TblCrmImportActivity = new HashSet<TblCrmImportActivity>();
        }

        public decimal Id { get; set; }
        public decimal? OwnerId { get; set; }
        public decimal? UserId { get; set; }
        public string SegmentId { get; set; }
        public decimal? ClientId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Status { get; set; }

        public virtual TblCrmImportDataOwner Owner { get; set; }
        public virtual ICollection<TblCrmConnectionProperties> TblCrmConnectionProperties { get; set; }
        public virtual ICollection<TblCrmImportActivity> TblCrmImportActivity { get; set; }
    }
}
