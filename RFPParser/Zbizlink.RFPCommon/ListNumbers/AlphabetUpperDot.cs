using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    internal class AlphabetUpperDot : IListNumberCreation
    {
        public bool FirstLetter(string number)
        {
            throw new NotImplementedException();
        }

        public string GetChild(string number)
        {
            throw new NotImplementedException();
        }

        public string GetSibling(string number)
        {
            string nextNumber = Convert.ToChar(number.Substring(0, number.IndexOf('.'))[0] + 1) + ".";

            return nextNumber;
        }
    }
}
