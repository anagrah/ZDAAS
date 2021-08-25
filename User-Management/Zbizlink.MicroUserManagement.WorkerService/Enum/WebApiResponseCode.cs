using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserManagement.WorkerService.Enum
{
   public enum WebApiResponseCode
    {
        Success = 1,
        Fail = 2,
        UserNotFound = 3,
        UserTokenProblem = 5,

        //General Error for Exception midddle ware
        ErrorCode = 4
        
    }
}
