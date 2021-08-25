using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.UnitOfWork.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Utility;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Services
{
    public class UserTypeService : IUserTypeService
    {
        private readonly IUnitOfWork _unitOfWork;
        public UserTypeService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
           
        }
        public ClientResponse AddEntity(UserType _userType)
        {
            _unitOfWork.userTypeRepository.Insert(_userType);
            _unitOfWork.SaveChanges();
            return Utility.Utility.GenerateResponse(Enum.WebApiResponseCode.Success);
        }
    }
}
