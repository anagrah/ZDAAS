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
   public sealed class StatesSingleton
    {
        private static IUnitOfWork _unitOfWork;
        private static List<StatesEntity> _statesEntityList;
        private static IMapper _mapper;
        private static bool _refresh;
        private static readonly Lazy<StatesSingleton> instance = new Lazy<StatesSingleton>(() => new StatesSingleton());
        public static StatesSingleton GetInstance(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            return instance.Value;
        }
        private StatesSingleton()
        {
            GetAllStates();
        }

        public List<StatesEntity> StatesList
        {
            get
            {
                if (_refresh == true)
                { GetAllStates(); }
                return _statesEntityList;
            }
        }
        private void GetAllStates()
        {

            List<States> _statesList = _unitOfWork.StatesRepository.Get().ToList();

            _statesEntityList = _mapper.Map<List<StatesEntity>>(_statesList);
            _statesEntityList = _statesEntityList.OrderBy(s => s.StateName).ToList();
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