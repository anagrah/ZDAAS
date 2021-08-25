using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    internal class NumberRBracket : IListNumberCreation
    {
        public bool FirstLetter(string number)
        {
            throw new NotImplementedException();
        }

        public string GetChild(string number)
        {
            number = number.Replace(")", ".1") + ")";

            return number;
        }

        public string GetSibling(string number)
        {

            number = number.Substring(0, number.IndexOf(")"));

            int intOutput;

            if (int.TryParse(number, out intOutput))
            {
                number = (intOutput + 1) + ")";
            }

            return number;
        }
    }
}
