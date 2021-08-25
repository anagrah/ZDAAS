using System;
using System.Collections.Generic;

namespace Zbizlink.MicroCRMDataImport.DataModel.Entities
{
    public partial class TblCrm
    {
        public TblCrm()
        {
            TblCrmConnectionProperties = new HashSet<TblCrmConnectionProperties>();
        }

        public decimal Id { get; set; }
        public string CrmName { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool? Status { get; set; }
        public virtual ICollection<TblCrmCompanyTables> TblCrmCompanyTables { get; set; }
        public virtual ICollection<TblCrmConnectionProperties> TblCrmConnectionProperties { get; set; }
    }
}
