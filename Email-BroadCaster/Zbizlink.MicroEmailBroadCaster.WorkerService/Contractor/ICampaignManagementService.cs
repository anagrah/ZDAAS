using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroEmailBroadCaster.WorkerService.RMQ;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor
{
  public  interface ICampaignManagementService
    {
        void SendEmail(CampaignSendModel campaignSendModel);
    }
}
