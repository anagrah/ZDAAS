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
    public sealed class IndustrySingleton
    {
        private static IUnitOfWork _unitOfWork;
        private static List<IndustryEntity> _industryEntityList;
        private static IMapper _mapper;
        private static bool _refresh;
        private static readonly Lazy<IndustrySingleton> instance = new Lazy<IndustrySingleton>(() => new IndustrySingleton());

        public static IndustrySingleton GetInstance(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            return instance.Value;
        }
        private IndustrySingleton()
        {
            GetAllIndustry();
        }

        public List<IndustryEntity> IndustryList
        {
            get
            {
                if (_refresh == true)
                { GetAllIndustry(); }
                    return _industryEntityList;
            }
        }
        private void GetAllIndustry()
        {

            List<Industry> _industryList = _unitOfWork.IndustryRepository.Get().ToList();

            _industryEntityList = _mapper.Map<List<IndustryEntity>>(_industryList);
            _industryEntityList = _industryEntityList.OrderBy(i => i.IndustryName).ToList();
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
