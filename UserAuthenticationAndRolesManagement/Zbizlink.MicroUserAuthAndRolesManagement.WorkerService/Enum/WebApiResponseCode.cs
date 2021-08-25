using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Enum
{
    public enum WebApiResponseCode
    {

        //General Code
        Success = 1,
        Fail = 2,
        Empty = 5,
        Duplicate = 6,
        RecordNotFound = 7,
        ChildRecordExist = 8,
        //RfpParser Project
        PasswordProtected = 3,
        
        
        //General Error for Exception midddle ware
        ErrorCode = 4


    }

    
}
