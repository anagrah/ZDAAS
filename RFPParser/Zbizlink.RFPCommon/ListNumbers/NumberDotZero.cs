using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    public class NumberDotZero : IListNumberCreation
    {
        public bool FirstLetter(string number)
        {
            throw new NotImplementedException();
        }

        public string GetChild(string number)
        {         
            number = number.Substring(0, number.LastIndexOf('.'));

            number = number + ".1";

            return number;
        }

        public string GetSibling(string number)
        {
            number = Convert.ToString((int.Parse(number.Substring(0, number.IndexOf('.'))) + 1));

            number = number + ".0";

            return Convert.ToString(number);
        }

        

    }
}
