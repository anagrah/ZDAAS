using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroCRMDataImport.DataModel.Models
{
    public class LookUps
    {
        public List<lkptCountry> Countries { get; set; }
        public List<lkptState> States { get; set; }
    }
    public class lkptCountry
    {
        public int CountryID { get; set; }
        public string CountryShortDesc { get; set; }
        public string CountryLongDesc { get; set; }

    }
    public class lkptState
    {
        public int StateID { get; set; }
        public string StateShortDesc { get; set; }
        public string StateLongDesc { get; set; }

    }
}
