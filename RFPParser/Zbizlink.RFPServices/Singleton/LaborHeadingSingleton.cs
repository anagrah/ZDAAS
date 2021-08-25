using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Zdaas.RFPBusinessModel;
using Zdaas.RFPDataModel.Contracts;


namespace Zdaas.RFPServices.Singleton
{
   public sealed class LaborHeadingSingleton
    {
        private static IUnitOfWork _unitOfWork;
        private static List<LaborHeadingEntity> _laborHeadingEntityList;
        private static readonly Lazy<LaborHeadingSingleton> instance = new Lazy<LaborHeadingSingleton>(() => new LaborHeadingSingleton());
        private static bool _refresh;
        public static LaborHeadingSingleton GetInstance(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            return instance.Value;
        }
        public LaborHeadingSingleton()
        {
            GetAllLaborHeading();
        }

        public List<LaborHeadingEntity> LaborHeadingList
        {
            get
            {
                if (_refresh == true)
                { GetAllLaborHeading(); }
                return _laborHeadingEntityList;
            }
        }
        private void GetAllLaborHeading()
        {
            _laborHeadingEntityList = _unitOfWork.LaborHeadingRepository.GetSelectedColumn(
                h => new LaborHeadingEntity()
                {
                    Heading = h.Heading,
                    LaborHeadingSynonymEntity  = (ICollection<LaborHeadingSynonymEntity>)h.LaborHeadingSynonym.Select
                    (s => new LaborHeadingSynonymEntity() { Synonym = s.Synonym }).ToList()
                }).ToList();


            CalculatorMaxLengthOfSynonym();
        }

        private void CalculatorMaxLengthOfSynonym()
        {
            int synonymLength = 0;

            foreach (var laborHeadingEntity in _laborHeadingEntityList)
            {
              int synonymMaxLength = laborHeadingEntity.LaborHeadingSynonymEntity.Max(line => line.Synonym.Length);

                laborHeadingEntity.SynonymMaximumLength = synonymMaxLength;
                

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
