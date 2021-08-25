using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPDataModel.Contracts;
using Zdaas.RFPLaborCategory.Contracts;
using Zdaas.RFPServices.Contracts;
using Zdaas.RFPServices.Singleton;
using System.IO;
using Zdaas.RFPBusinessModel;

namespace Zdaas.RFPServices.Services
{
  public  class LaborCategoryService : ILaborCategoryService
    {
        private readonly IUnitOfWork _unitOfWork;
        private LaborModel laborModel;
        private ILaborOpportunity _laborOpportunity;
        private ILaborOpportunityNew _laborOpportunityNew;
        private List<JobTitleWordEntity> _jobTitleWordList;
        private IMapper _mapper;
        

        private List<JobTitleModel> _jobTitleModelList;

        //public LaborCategoryService(ILaborOpportunity laborOpportunity, IUnitOfWork unitOfWork)
        //{
        //    _laborOpportunity = laborOpportunity;

        //    _unitOfWork = unitOfWork;
        //}

        public LaborCategoryService(ILaborOpportunityNew laborOpportunityNew,
            ILaborOpportunity laborOpportunity,IUnitOfWork unitOfWork, IMapper mapper)
        {
            _laborOpportunity = laborOpportunity;
            _laborOpportunityNew = laborOpportunityNew;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public List<JobTitleModel> GetForOpportunity(string categoryData)
        {

            //SaveJobWord();

            laborModel = new LaborModel();

            _jobTitleWordList = jobTitleWordSingletion.GetInstance(_unitOfWork, _mapper).jobTitleWordList;

            List<LaborHeadingEntity> laborHeadingEntityList = LaborHeadingSingleton.GetInstance(_unitOfWork).LaborHeadingList;

           JobTitleNewModel jobTitleModel = JobTitleSingletion.GetInstance(_unitOfWork).jobTitleList;
          List<CategoryEntity> categories = CategorySingleton.GetInstance(_unitOfWork).CategoryList;
            CategoryEntity category  = categories.FirstOrDefault(line => line.Name == "Labor");
            //new
            //_jobTitleModelList = _laborOpportunity.Get(categoryData, _jobTitleWordList, laborHeadingEntityList);
            _jobTitleModelList = _laborOpportunityNew.Get(categoryData, laborHeadingEntityList, category.CategoryId, jobTitleModel);


            return _jobTitleModelList;
        }

       

    }
}
