using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPCommon.Contracts
{
  public interface IDocumentSectionIdentification
    {
        public void DocSectionIdentify(List<LineDetailModel> lineDetailModels);
       
    }
}
