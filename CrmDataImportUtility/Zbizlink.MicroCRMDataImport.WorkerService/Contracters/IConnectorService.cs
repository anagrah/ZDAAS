using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Zbizlink.MicroCRMDataImport.WorkerService.Contracters
{
    public interface IConnectorService
    {
        public DataTable ConnectService(out string ConnectionStatus, out string exception, string CallBackUrl);
    }
}
