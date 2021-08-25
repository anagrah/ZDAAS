using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPBusinessModel
{
  public  class CategorySynonymEntity
    {
        public decimal SynonymId { get; set; }
        public string Synonym { get; set; }
        public string Description { get; set; }
        public decimal CategoryId { get; set; }
        public decimal? CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool Assign { get; set; }
        public CategoryEntity Category { get; set; }
    }
}
