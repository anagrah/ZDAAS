using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.RFPServices.ViewModels.Get;
using Zdaas.RFPDataModel.Contracts;

namespace Zbizlink.RFPServices.Singleton
{
   public class SummaryFieldAndSynonymSingletion
    {

        private static IUnitOfWork _unitOfWork;
        private static List<SummaryFieldAndSynonym> _summaryFieldAndSynonymList;
        private static bool _refresh;
        private static readonly Lazy<SummaryFieldAndSynonymSingletion> instance = new Lazy<SummaryFieldAndSynonymSingletion>(() => new SummaryFieldAndSynonymSingletion());

        public static SummaryFieldAndSynonymSingletion GetInstance(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            return instance.Value;
        }

        private SummaryFieldAndSynonymSingletion()
        {
            GetAllSummaryField();
        }

        public List<SummaryFieldAndSynonym> SummaryFieldAndSynonymList
        {
            get
            {
                if (_refresh == true)
                {
                    GetAllSummaryField();
                }
                return _summaryFieldAndSynonymList;
            }
        }

        private void GetAllSummaryField()
        {

            _summaryFieldAndSynonymList = _unitOfWork.RfpSummaryFieldRepository.GetSelectedColumn(
              summ => new SummaryFieldAndSynonym()
              {
                  SummaryFieldId = summ.RfpsummaryFieldId,
                  FieldName = summ.FieldName,
                  DisplayOrder = summ.DisplayOrder,
                  Mandatory = summ.Mandatory,               
                  SummarySynonym = (List<SummarySynonym>)summ.RfpsummarySynonym.Select
                  (y => new SummarySynonym()
                  {
                      SummarySynonymId = y.RfpsummarySynonymId,
                      Synonym = y.Synonym,
                      SummaryFieldId = y.RfpsummaryFieldId,
                      Assign = y.Assign
                  }).ToList()
              }).ToList();
        }

        private void Orderby(List<SummaryFieldAndSynonym>  summaryFieldAndSynonymList )
        {
            summaryFieldAndSynonymList = summaryFieldAndSynonymList.OrderBy(s => s.FieldName).ToList();
            foreach (var summaryFieldAndSynonym in summaryFieldAndSynonymList)
            {
                summaryFieldAndSynonym.SummarySynonym = summaryFieldAndSynonym.SummarySynonym.OrderBy(s => s.Synonym).ToList();
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
