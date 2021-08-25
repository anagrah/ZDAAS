using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    public class AlphabetLowerBBracket : IListNumberCreation
    {
        public bool FirstLetter(string number)
        {
           if("(a)" == number)
            {
                return true;
            }
            return false;
        }

        public string GetChild(string number)
        {
            throw new NotImplementedException();
        }

        public string GetSibling(string number)
        {

            string nextNumber = "(" +Convert.ToChar(number.Substring(1, 1)[0] + 1) + ")";
            return nextNumber;
        }
    }
}
