using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroCRMDataImport.DataModel.Models
{
    public class Contact
    {      
        public string Id { set; get; }
        public string AccountId { set; get; }
        public string FirstName { set; get; }
        public string LastName { set; get; }
        public string Department { set; get; }
        public string Description { set; get; }
        public string HomePhone { set; get; }
        public string Email { set; get; }
        public string Name { set; get; }
        public string Birthdate { set; get; }
        public string IsDeleted { set; get; }
        public MailingAddress MailingAddress { set; get; }//we are taking Mailing address as location for zbizlink from crm
        public string MailingCity { set; get; }
        public string MailingCountry { set; get; }        
        public string MailingLatitude { set; get; }
        public string MailingLongitude { set; get; }
        public string MailingPostalCode { set; get; }
        public string MailingState { set; get; }
        public string MailingStreet { set; get; }
        public string MobilePhone { set; get; }
        public string Phone { set; get; }
        public string PhotoUrl { set; get; }
        public string Title { set; get; }
    }

    public class MailingAddress
    {
        public string city { set; get; }
        public string country { set; get; }
        public string state { set; get; }
        public string street { set; get; }
        public string postalCode { set; get; }
        public string latitude { set; get; }
        public string longitude { set; get; }
        public string geocodeAccuracy { set; get; }
        

    }

    public class Location
    {
        public string city { set; get; }
        public string country { set; get; }
        public string state { set; get; }
        public string street { set; get; }
        public string postalCode { set; get; }
        public string latitude { set; get; }
        public string longitude { set; get; }
        public string geocodeAccuracy { set; get; }

    }

}
