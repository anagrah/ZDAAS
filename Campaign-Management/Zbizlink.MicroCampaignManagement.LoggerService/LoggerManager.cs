using NLog;
using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroCampaignManagement.LoggerService.Contracter;

namespace Zbizlink.MicroCampaignManagement.LoggerService
{
    public class LoggerManager : ILoggerManager
    {
        private static ILogger logger = LogManager.GetCurrentClassLogger();
        public LoggerManager()
        {
        }

        public void LogDebug(string message)
        {
            logger.Debug(message);
        }

        public void LogError(string message)
        {
            logger.Error(message);
        }

        public void LogInfo(string message)
        {
            logger.Info(message);
        }

        public void LogWarn(string message)
        {
            logger.Warn(message);
        }
 
        public void logTransation(string transactionId, Type currentclassType, System.Reflection.MethodBase method, Dictionary<string, object> parms = null)
        {

            if (parms != null)
            {
                StringBuilder parmsValues = new StringBuilder();

                foreach (var parm in parms)
                {
                    if (parm.GetType().IsPrimitive == true)
                    {
                        parmsValues.Append(" , " + parm.Key + ":" + parm.Value);

                    }
                }

                if (parmsValues.ToString().Length > 0)
                {
                    LogInfo("TransId: " + transactionId + " , " + currentclassType.Name + "." + method.Name + parmsValues.ToString());
                }
                else
                {
                    LogInfo("TransId: " + transactionId + " , " + currentclassType.Name + "." + method.Name);
                }

            }
            else
            {
                LogInfo("TransId: " + transactionId + " , " + currentclassType.Name + "." + method.Name);
            }

        }

    }
}
