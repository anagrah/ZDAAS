using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.RFPServices.Contracts;
using Zbizlink.RFPServices.Models;
using Zdaas.RFPDataModel.Contracts;
using Zdaas.RFPServices;
using Zdaas.RFPServices.ViewModels;
using en = Zdaas.RFPServices.Enum;

namespace Zbizlink.RFPServices.Services
{
    public class ProposalSourceService : IProposalSourceService
    {
        private readonly IUnitOfWork _unitOfWork;
        public ProposalSourceService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public ClientResponse GetProposalSourcesDataLists()
        {
            ProposalSourcesList _ProposalSourcesList = new ProposalSourcesList();
            _ProposalSourcesList.AgencyList = _unitOfWork.AgencyRepository.GetAll().ToList();
            _ProposalSourcesList.StatesList = _unitOfWork.StatesRepository.GetAll().ToList();
            _ProposalSourcesList.ContractVehicleList = _unitOfWork.ContractVehicleRepository.GetAll().ToList();
            _ProposalSourcesList.IndustryList = _unitOfWork.IndustryRepository.GetAll().ToList();
            return Utility.GenerateResponse(en.WebApiResponseCode.Success, _ProposalSourcesList);
        }
    }
}
