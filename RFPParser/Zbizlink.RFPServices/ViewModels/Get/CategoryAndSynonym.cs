using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Get
{
   public class CategoryAndSynonym
    {
        public decimal CategoryId { get; set; }
        public decimal IdForZbizlink { get; set; }
        public string Name { get; set; }
        public List<CategorySynonym> CategorySynonym { get; set; }
    }

    public class CategorySynonym
    {
        public decimal SynonymId { get; set; }
        public string Synonym { get; set; }
        public decimal CategoryId { get; set; }
        public bool Assign { get; set; }

    }
}
