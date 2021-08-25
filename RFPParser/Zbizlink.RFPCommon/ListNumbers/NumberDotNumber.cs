using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    internal class NumberDotNumber : IListNumberCreation
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
           
            string [] numberArray =  number.Split('.');

            int lastNumber = int.Parse(numberArray[numberArray.Length - 1]) + 1;

            string siblingNumber = number.Substring(0, number.LastIndexOf('.') + 1) + lastNumber;

            return siblingNumber;
        }

       
    }
}
