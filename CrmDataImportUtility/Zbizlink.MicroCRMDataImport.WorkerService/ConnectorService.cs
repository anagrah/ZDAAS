using System;
using System.Data.CData.Salesforce;
using System.Data;
using Zbizlink.MicroCRMDataImport.WorkerService.Contracters;
using Zbizlink.MicroCRMDataImport.LoggerService.Contracters;
using Zbizlink.MicroCRMDataImport.DataModel.Models;
using Zbizlink.Micro.Enum;
using Zbizlink.MicroCRMDataImport.DataModel.Contracts;

namespace Zbizlink.MicroCRMDataImport.WorkerService
{
    public class ConnectorService: IConnectorService
    {
        ILoggerManager _logger;
        SalesForceConnectionDataModel sfcDM = new SalesForceConnectionDataModel();
        CDataDriversConnectionStrings.CDataDriversConnectionStrings cddCS = new CDataDriversConnectionStrings.CDataDriversConnectionStrings();
        private IUnitOfWork _iunitOfWork;
        public ConnectorService(IUnitOfWork iunitOfWork, ILoggerManager logger)
        {
            _iunitOfWork = iunitOfWork;
            _logger = logger;
        }
        public DataTable ConnectService(out string ConnectionStatus, out string exception, string CallBackUrl)
        {
            DataTable _table = new DataTable();
            var getIDByValues = _iunitOfWork.Crm.GetAll();

            //sfcDM.User = "zedge744@resourceful-panda-enlspg.com";
            //sfcDM.Password = "fibonacci11";
            //sfcDM.SecurityToken = "HrMez7gwwUGLwzZdwCoPcQ5sD";
            sfcDM.UserName = "imran@zd-techsolutions.com";
            sfcDM.Password = "Zdaasdeveloper123";
            sfcDM.SecurityToken = "LGqCZ2J38ogA4CiOCEnVmt1N";

            _logger.LogInfo("SalesForce connection bridge >>> connection iniating");
            _logger.LogInfo("Connection string of sales force is>> \n" + cddCS.SalesForceConnectString(sfcDM));
            try
            {

                using (SalesforceConnection connection = new SalesforceConnection(cddCS.SalesForceConnectString(sfcDM)))
                {
                    connection.Open();
                    var stateofConnection = connection.State.ToString();
                    if (connection.State == ConnectionState.Open)
                    {
                        _logger.LogInfo("SalesForce connection bridge >>> done");
                        _logger.LogInfo("SalesForce data fetching >>> initaited");
                        SalesforceDataAdapter dataAdapter = new SalesforceDataAdapter("SELECT * FROM Contact", connection);
                        dataAdapter.Fill(_table);
                        _logger.LogInfo("SalesForce data fetching >>> done");
                    }
                }
                ConnectionStatus = EnumCollection.ErrorCode.Success.ToString();
                exception = "";
                return _table;
            }
            catch (Exception ex)
            {
                _logger.LogInfo(ex.ToString());
                ConnectionStatus = ex.Message.ToString().Contains("INVALID_LOGIN") ? EnumCollection.ErrorCode.Login_Failed.ToString() : ex.Message.ToString();
                exception = "";
                return _table = null;
            }
        }

        public DataTable SalesForceConnectService(out string ConnectionStatus, out string exception, string CallBackUrl)
        {
            DataTable _table = new DataTable();
            var getIDByValues = _iunitOfWork.Crm.GetAll();

            
            sfcDM.UserName = "imran@zd-techsolutions.com";
            sfcDM.Password = "Zdaasdeveloper123";
            sfcDM.SecurityToken = "LGqCZ2J38ogA4CiOCEnVmt1N";

            _logger.LogInfo("SalesForce connection bridge >>> connection iniating");
            _logger.LogInfo("Connection string of sales force is>> \n" + cddCS.SalesForceConnectString(sfcDM));
            try
            {

                using (SalesforceConnection connection = new SalesforceConnection(cddCS.SalesForceConnectString(sfcDM)))
                {
                    connection.Open();
                    var stateofConnection = connection.State.ToString();
                    if (connection.State == ConnectionState.Open)
                    {
                        _logger.LogInfo("SalesForce connection bridge >>> done");
                        _logger.LogInfo("SalesForce data fetching >>> initaited");
                        SalesforceDataAdapter dataAdapter = new SalesforceDataAdapter("SELECT * FROM Contact", connection);
                        dataAdapter.Fill(_table);
                        _logger.LogInfo("SalesForce data fetching >>> done");
                    }
                }
                ConnectionStatus = EnumCollection.ErrorCode.Success.ToString();
                exception = "";
                return _table;
            }
            catch (Exception ex)
            {
                _logger.LogInfo(ex.ToString());
                ConnectionStatus = ex.Message.ToString().Contains("INVALID_LOGIN") ? EnumCollection.ErrorCode.Login_Failed.ToString() : ex.Message.ToString();
                exception = "";
                return _table = null;
            }
        }
    }
}
