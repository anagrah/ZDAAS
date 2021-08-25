using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;

using Zbizlink.RFPBusinessModel;
using Zbizlink.RFPDataModel.Models;
using Zdaas.RFPDataModel.Contracts;

namespace Zbizlink.RFPServices.Singleton
{
    public sealed class OpportunityTypeSingleton
    {
        private static IUnitOfWork _unitOfWork;
        private static List<OpportunityTypeEntity> _opportunityTypeEntityList;
        private static IMapper _mapper;
        private static bool _refresh;
        private static readonly Lazy<OpportunityTypeSingleton> instance = new Lazy<OpportunityTypeSingleton>(() => new OpportunityTypeSingleton());

        public static OpportunityTypeSingleton GetInstance(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            return instance.Value;
        }
        private OpportunityTypeSingleton()
        {
            GetAllOpportunityType();
        }

        public List<OpportunityTypeEntity> OpportunityTypeList
        {
            get
            {
                if (_refresh == true)
                { GetAllOpportunityType(); }
                return _opportunityTypeEntityList;
            }
        }
        private void GetAllOpportunityType()
        {

            List<OpportunityType> _opportunityTypeList = _unitOfWork.OpportunityTypeRepository.Get().ToList();

            _opportunityTypeEntityList = _mapper.Map<List<OpportunityTypeEntity>>(_opportunityTypeList);

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
