using System;
using System.Collections.Generic;

#nullable disable

namespace Zbizlink.MicroCompany.DataModel.Models
{
    public partial class Location
    {
        public long Id { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public long? CountryId { get; set; }
        public long? StateId { get; set; }
        public string City { get; set; }
        public string Zipcode { get; set; }
        public string Zipcode4 { get; set; }
        public string Phone { get; set; }
        public string PhoneExt { get; set; }
        public string NonUsphone { get; set; }
        public string Fax { get; set; }
        public string Description { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public string Email { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }
        public string AddressTitle { get; set; }
    }
}
