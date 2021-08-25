using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    internal class Number : IListNumberCreation
    {
        public bool FirstLetter(string number)
        {
            throw new NotImplementedException();
        }

        public string GetChild(string number)
        {

            number = number + ".1";

            return number;
        }

        public string GetSibling(string number)
        {
            int sibling = int.Parse(number) + 1;

            return Convert.ToString(sibling);
        }

       
    }
}
