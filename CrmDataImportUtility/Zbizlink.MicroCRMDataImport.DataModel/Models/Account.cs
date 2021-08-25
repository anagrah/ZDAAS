using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroCRMDataImport.DataModel.Models
{
    public class Account
    {
        //Id comes from salesforce as a string that's why Id type is string;
        public string Id { set; get; }
        public string Name { set; get; }
        public string BillingState { set; get; }
        public string Type { set; get; }
    }
}
