using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.Micro.Enum;
namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Helper
{
    public static class Helper
    {
        public static string GetExchangeType(string exchangeType)
        {
            switch (exchangeType)
            {
                case "Local":
                    exchangeType = EnumCollection.MQExchanges.Zbizlink_TestAlerts.ToString();
                    break;
                case "Dev":
                    exchangeType = EnumCollection.MQExchanges.Zbizlink_Dev.ToString();
                    break;
                case "Prod":
                    exchangeType = EnumCollection.MQExchanges.Zbizlink_Prod.ToString();
                    break;
            }

            return exchangeType;
        }
    }
}
