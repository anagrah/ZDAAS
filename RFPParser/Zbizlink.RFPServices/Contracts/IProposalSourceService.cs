using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zdaas.RFPServices.ViewModels;

namespace Zbizlink.RFPServices.Contracts
{
    public interface IProposalSourceService
    {
        ClientResponse GetProposalSourcesDataLists();
    }
}
