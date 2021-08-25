using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
   public class CategoryEntity
    {
        public CategoryEntity()
        {
            CategorySynonym = new HashSet<CategorySynonymEntity>();
            LaborPosition = new HashSet<LaborPositionEntity>();
            RfpCategoryDataEntity = new HashSet<RfpCategoryDataEntity>();
        }
        public decimal CategoryId { get; set; }
        public decimal IdForZbizlink { get; set; }
        public string Name { get; set; }
        public string Decription { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string Color { get; set; }
        public decimal CompanyId { get; set; }

        public ICollection<CategorySynonymEntity> CategorySynonym { get; set; }
        public ICollection<LaborPositionEntity> LaborPosition { get; set; }
        public ICollection<RfpCategoryDataEntity> RfpCategoryDataEntity { get; set; }
    }
}
