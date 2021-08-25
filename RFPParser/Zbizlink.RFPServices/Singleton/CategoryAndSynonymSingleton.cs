using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.RFPServices.ViewModels;
using Zbizlink.RFPServices.ViewModels.Get;
using Zdaas.RFPDataModel.Contracts;

namespace Zbizlink.RFPServices.Singleton
{
    public sealed class CategoryAndSynonymSingleton
    {
        private static IUnitOfWork _unitOfWork;
        private static List<CategoryAndSynonym> _categoryAndSynonymList;
        private static bool _refresh;
        private static readonly Lazy<CategoryAndSynonymSingleton> instance = new Lazy<CategoryAndSynonymSingleton>(() => new CategoryAndSynonymSingleton());

        public static CategoryAndSynonymSingleton GetInstance(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            return instance.Value;
        }
        private CategoryAndSynonymSingleton()
        {
            GetAllCategory();
        }

        public List<CategoryAndSynonym> CategoryAndSynonymList
        {
            get
            {
                if (_refresh == true)
                {
                    GetAllCategory();
                }
                    return _categoryAndSynonymList;
            }
        }
        private void GetAllCategory()
        {

            _categoryAndSynonymList = _unitOfWork.CategoryRepository.GetSelectedColumn(
              cat => new CategoryAndSynonym()
              {
                  CategoryId = cat.CategoryId,
                  Name = cat.Name,
                  CategorySynonym = (List<CategorySynonym>)cat.CategorySynonym.Select
                  (y => new CategorySynonym() {
                      SynonymId = y.SynonymId,
                      Synonym = y.Synonym,
                      CategoryId = y.CategoryId,
                      Assign = y.Assign
                      
                  }).ToList()
              }).ToList();

            _categoryAndSynonymList = _categoryAndSynonymList.OrderBy(line => line.CategoryId).ToList();

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