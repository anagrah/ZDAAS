﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Insert
{
   public class CategorySynonym
    {
        public decimal SynonymId { get; set; }
        public string Synonym { get; set; }
        public decimal CategoryId { get; set; }
        public decimal CreatedBy { get; set; }
       

    }
}
