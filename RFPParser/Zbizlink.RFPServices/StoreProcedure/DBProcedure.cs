using RFPStoreProcedureModel;
using RFPStoreProcedureModel.Enum;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.LoggerContracts;
using Zdaas.RFPDataModel.Contracts;
using Zdaas.RFPServices.StoreProcedure.Contracts;

namespace Zdaas.RFPServices.StoreProcedure
{
   public class DBProcedure : IDBProcedure
    {
        private ILoggerManager _logger;
        private readonly IUnitOfWork _unitOfWork;
        public DBProcedure(ILoggerManager logger, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
        }
        public OpportunitySolicitaionNo GetOpportunitySolicitaionNo(decimal opportunityId)
        {
            OpportunitySolicitaionNo opportunitySolicitaionNo = new OpportunitySolicitaionNo();

            DataBaseParameter dataBaseParameter = new DataBaseParameter();

            dataBaseParameter.DBParameterName = "@OpportunityId";
            dataBaseParameter.DBParameterType = DatabaseDataType.Decimal;
            dataBaseParameter.DBParameterValue = opportunityId;


            List<DataBaseParameter> dataBaseParameterList = new List<DataBaseParameter>();
            dataBaseParameterList.Add(dataBaseParameter);

            //_logger.LogInfo("start db class = OpportunityService : method = GetOpportunitySolicitaionNo log 1" + DateTime.Now);
            List<OpportunitySolicitaionNo> OpportunitySolicitaionNoList = _unitOfWork.RfpdocumentRepository.ExecuteStoredProcedure("[spGetDocInfoByOpportunityNo]", opportunitySolicitaionNo, dataBaseParameterList);
           // _logger.LogInfo("end db class = OpportunityService : method = GetOpportunitySolicitaionNo log 1" + DateTime.Now);

            if (OpportunitySolicitaionNoList != null && OpportunitySolicitaionNoList.Count > 0)
            {
                return OpportunitySolicitaionNoList[0];
            }
            return null;


        }
    }
}
