using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.ListNumbers.Contracts
{
   public interface IListNumberCreation
    {
        string GetChild(string number);
        string GetSibling(string number);
        bool FirstLetter(string number);
    }
}
