using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Factory.Contracts;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.Factory
{
    public class ListNumberCreationFactory : IListNumberCreationFactory
    {
        private readonly Func<string, IListNumberCreation> numberCreation;
        public ListNumberCreationFactory(Func<string, IListNumberCreation> numberGen)
        {
            this.numberCreation = numberGen;
        }
        public IListNumberCreation GetObject(TypesOfList typesOfList)
        {
            return numberCreation(typesOfList.ToString());
        }
    }
}
