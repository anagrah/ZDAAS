using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.RFPServices.ViewModels.Insert
{
   public class BridgeSummarySynonymStates
    {
        public int BridgeSummarySynonymStatesId { get; set; }
        public decimal RfpsummarySynonymId { get; set; }
        public int StateId { get; set; }
        /// <summary>
        ///  [1] for insert record,
        ///  [2] for delete record
        /// </summary>
        public int DBTransactionType { get; set; }
    }
}
