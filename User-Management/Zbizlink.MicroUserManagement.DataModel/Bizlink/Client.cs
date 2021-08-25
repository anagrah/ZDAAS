using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroUserManagement.DataModel.Bizlink
{
    public partial class Client
    {
        public decimal ClientId { get; set; }
        public string ClientCompanyName { get; set; }
        public decimal? ClientCompanyId { get; set; }
        public int? EntityTypeId { get; set; }
        public int? StateId { get; set; }
        public int? DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public int? AgencyId { get; set; }
        public string AgencyName { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public string ClientUrl { get; set; }
        public string ClientSourceId { get; set; }

        public virtual Company ClientCompany { get; set; }
    }
}
