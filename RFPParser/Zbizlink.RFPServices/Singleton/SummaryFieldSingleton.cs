using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.RFPServices.ViewModels.Get;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPDataModel.Contracts;

namespace Zbizlink.RFPServices.Singleton
{
    public sealed class SummaryFieldSingleton
    {
        private static IUnitOfWork _unitOfWork;
        private static List<RfpSummaryFieldEntity> _rfpSummaryFieldEntityList;
        private static bool _refresh;
        private static readonly Lazy<SummaryFieldSingleton> instance = new Lazy<SummaryFieldSingleton>(() => new SummaryFieldSingleton());

        public static SummaryFieldSingleton GetInstance(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            return instance.Value;
        }

        public SummaryFieldSingleton()
        {
            GetAllSummaryfieldAndSynonym();
        }

        public List<RfpSummaryFieldEntity> SummaryFieldList
        {
            get
            {
                if (_refresh == true)
                {
                    GetAllSummaryfieldAndSynonym();
                }
                return _rfpSummaryFieldEntityList;
            }
        }

        private void GetAllSummaryfieldAndSynonym()
        {

            _rfpSummaryFieldEntityList = _unitOfWork.RfpSummaryFieldRepository.GetSelectedColumn(
              summ => new RfpSummaryFieldEntity()
              {
                  RfpsummaryFieldId = summ.RfpsummaryFieldId,
                  FieldName = summ.FieldName,
                  DisplayOrder = summ.DisplayOrder,
                  Mandatory = summ.Mandatory,
                  RfpsummarySynonym = (List<RfpSummarySynonymEntity>)summ.RfpsummarySynonym.Select
                  (sy => new RfpSummarySynonymEntity()
                  {
                      RfpsummarySynonymId = sy.RfpsummarySynonymId,
                      Synonym = sy.Synonym,
                      RfpsummaryFieldId = sy.RfpsummaryFieldId,
                      Assign = sy.Assign                     
                  }).ToList()
              }).ToList();

           

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
