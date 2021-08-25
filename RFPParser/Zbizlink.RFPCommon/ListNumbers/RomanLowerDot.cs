using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    public class RomanLowerDot : IListNumberCreation
    {
        public bool FirstLetter(string number)
        {
            if(number == "i.")
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
            number = number.Substring(0, number.LastIndexOf('.'));

            int index = Array.IndexOf(Utility.romanLowerArray, number);

            if (index != -1 && (index < (Utility.romanLowerArray.Length - 1)))
            {
                return Utility.romanLowerArray[index + 1] + ".";
            }

            return "";
        }
    }
}
