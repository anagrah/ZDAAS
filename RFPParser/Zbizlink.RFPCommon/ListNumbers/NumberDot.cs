using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    internal class NumberDot : IListNumberCreation
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

            int dotCount = number.Count(w => w == '.');
            string siblingNumber = "";

            if (dotCount == 1)
            {
                int no = int.Parse(number.Substring(0, number.IndexOf('.')));
                no = no + 1;
                siblingNumber = no.ToString() + ".";
            }
            else if (dotCount > 1)
            {

                string numberTrimLastDot = number.Substring(0, number.LastIndexOf("."));

                string remainingNumber = numberTrimLastDot.Substring(0, numberTrimLastDot.LastIndexOf("."));

                int lastNumber;
                bool result = int.TryParse(numberTrimLastDot.Substring(numberTrimLastDot.LastIndexOf(".") + 1), out lastNumber);

                if (result == true)
                {
                    lastNumber = lastNumber + 1;
                }

                siblingNumber = remainingNumber + "." + lastNumber + ".";
            }

            return siblingNumber;
        }
    }
}
