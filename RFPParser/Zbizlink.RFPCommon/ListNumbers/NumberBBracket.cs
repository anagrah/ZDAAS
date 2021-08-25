using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    public class NumberBBracket : IListNumberCreation
    {
        public bool FirstLetter(string number)
        {
            if ("(1)" == number)
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
            string nextNumber = "";
            int nextNum;

            bool result = int.TryParse(number.Substring(1, number.LastIndexOf(")")), out nextNum);

            if(result == true)
            {
                nextNumber = "(" + (nextNum + 1) +")";
            }
            
            return nextNumber;
        }
    }
}
