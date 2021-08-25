using System;
using System.Collections.Generic;
using System.Linq;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPDataModel.Contracts;

namespace Zdaas.RFPServices.Singleton
{
    public sealed class CategorySingleton
    {
      
        private static  IUnitOfWork _unitOfWork;
        private static  List<CategoryEntity> _categoryEntityList;
        private static bool _refresh;
        private static readonly Lazy<CategorySingleton> instance = new Lazy<CategorySingleton>(() => new CategorySingleton());

        public static CategorySingleton GetInstance(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            return instance.Value;
        }
        private CategorySingleton()
        {
            GetAllCategory();
        }

        public List<CategoryEntity> CategoryList {
            get {
                if (_refresh == true)
                {
                    GetAllCategory();
                }
                    return _categoryEntityList;
            }
        }
        private void GetAllCategory()
        {
              _categoryEntityList = _unitOfWork.CategoryRepository.GetSelectedColumn(
                cat => new CategoryEntity()
                {
                    CategoryId = cat.CategoryId,
                    Name = cat.Name,
                    IdForZbizlink = cat.IdForZbizlink,
                    CategorySynonym = (ICollection<CategorySynonymEntity>)cat.CategorySynonym.Select
                    (y => new CategorySynonymEntity() { 
                        Synonym = y.Synonym, 
                        CategoryId = y.CategoryId, 
                        SynonymId = y.SynonymId,
                        Assign = y.Assign
                    }).ToList()
                }).ToList();

            _categoryEntityList = _categoryEntityList.OrderBy(line => line.CategoryId).ToList();

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
