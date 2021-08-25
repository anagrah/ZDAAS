using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using Zbizlink.RFPDataModel.Models;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPDataModel.Contracts;


namespace Zdaas.RFPServices.Singleton
{
    public sealed class jobTitleWordSingletion
    {
        private static IUnitOfWork _unitOfWork;
        private static List<JobTitleWordEntity> _JobTitleWordList;
        private static IMapper _mapper;
        private static bool _refresh;
        private  static readonly Lazy<jobTitleWordSingletion> instance = new Lazy<jobTitleWordSingletion>(() => new jobTitleWordSingletion());

        public static jobTitleWordSingletion GetInstance(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            return instance.Value;
        }
        
        private jobTitleWordSingletion()
        {
            GetAllJobTitleWord();
        }

        public List<JobTitleWordEntity> jobTitleWordList
        {
            get
            {
                if (_refresh == true)
                { GetAllJobTitleWord(); }
                return _JobTitleWordList;
            }
        }
        private void GetAllJobTitleWord()
        {
            List<JobTitleWord> jobTitleWordDMlList = _unitOfWork.JobTitleWordRepository.Get().ToList();

            if (jobTitleWordDMlList != null && jobTitleWordDMlList.Count() > 0)
            {
                 _JobTitleWordList = _mapper.Map<List<JobTitleWordEntity>>(jobTitleWordDMlList);
                //_JobTitleWordList = Mapper.Map<List<JobTitleWordEntity>>(jobTitleWordDMlList);
              
            }

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
