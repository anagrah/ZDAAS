using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    public class SectionUpperAlphabet : IListNumberCreation
    {
        public bool FirstLetter(string number)
        {
            if(number == "Section A")
            {
                return true;
            }

            return false;
        }

        public string GetChild(string number)
        {
            return "";
        }

        public string GetSibling(string number)
        {
            throw new NotImplementedException();
        }
    }
}
