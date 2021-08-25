using System;
using System.Collections.Generic;
using System.Text;

namespace Zbizlink.MicroCampaignManagement.LoggerService.Contracter
{
    public interface ILoggerManager
    {
        void LogInfo(string message);
        void LogWarn(string message);
        void LogDebug(string message);
        void LogError(string message);

        /// <summary>
        /// method will be used for transation tracking between mutiple microservices.
        /// </summary>
        /// <param name="transactionId">Must be unique id, Example: Guid.NewGuid(); </param>
        /// <param name="currentclassType">Current class Name, Example: this.GetType(); </param>
        /// <param name="methodName">Current Method, Example: System.Reflection.MethodBase.GetCurrentMethod(); </param>
        /// <param name="parms">Optional, enter key value paire, key is variable name and value is varialbe [only for Primitive] </param>
        void logTransation(string transactionId, Type currentclassType, System.Reflection.MethodBase method, Dictionary<string, object> parms = null);
    }
}
