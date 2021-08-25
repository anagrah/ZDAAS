using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.Factory.Contracts
{
   public interface IListNumberCreationFactory
    {
        IListNumberCreation GetObject(TypesOfList typesOfList);
    }
}
