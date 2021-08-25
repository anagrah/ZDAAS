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
   public sealed class AgencySingleton
    {
        private static IUnitOfWork _unitOfWork;
        private static List<AgencyEntity> _agencyEntityList;
        private static IMapper _mapper;
        private static bool _refresh;

        private static readonly Lazy<AgencySingleton> instance = new Lazy<AgencySingleton>(() => new AgencySingleton());

        public static AgencySingleton GetInstance(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            return instance.Value;
        }
        private AgencySingleton()
        {

            GetAllAgency();
        }

        public List<AgencyEntity> AgencyList
        {
            get
            {
                if (_refresh == true)
                {
                    GetAllAgency();
                }
                return _agencyEntityList;
            }
        }
        private void GetAllAgency()
        {
            List<Agency> _agencyList = _unitOfWork.AgencyRepository.Get().ToList();

            _agencyEntityList=  _mapper.Map<List<AgencyEntity>>(_agencyList);
            _agencyEntityList = _agencyEntityList.OrderBy(a => a.AgencyName).ToList();
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
