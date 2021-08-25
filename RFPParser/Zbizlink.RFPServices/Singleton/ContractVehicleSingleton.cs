using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.RFPBusinessModel;
using Zbizlink.RFPDataModel.Models;
using Zdaas.RFPDataModel.Contracts;

namespace Zbizlink.RFPServices.Singleton
{
   public sealed class ContractVehicleSingleton
    {

        private static IUnitOfWork _unitOfWork;
        private static List<ContractVehicleEntity> _contractVehicleEntityList;
        private static IMapper _mapper;
        private static bool _refresh;
        private static readonly Lazy<ContractVehicleSingleton> instance = new Lazy<ContractVehicleSingleton>(() => new ContractVehicleSingleton());

        public static ContractVehicleSingleton GetInstance(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            return instance.Value;
        }
        private ContractVehicleSingleton()
        {
            GetAllContractVehicle();
        }

        public List<ContractVehicleEntity> ContractVehicleList
        {
            get
            {
                if (_refresh == true)
                { GetAllContractVehicle(); }

                    return _contractVehicleEntityList;
            }
        }
        private void GetAllContractVehicle()
        {

            List<ContractVehicle> _contractVehicleList = _unitOfWork.ContractVehicleRepository.Get().ToList();

            _contractVehicleEntityList = _mapper.Map<List<ContractVehicleEntity>>(_contractVehicleList);
            _contractVehicleEntityList = _contractVehicleEntityList.OrderBy(c => c.ContractVehicleName).ToList();
        }

        public static void ReLoad()
        {
            if (!_refresh)
            {
                _refresh = true;
            }

        }
    }
}
