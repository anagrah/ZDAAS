using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroEmailBroadCaster.DataModel.DBContext;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Contractor
{
    public interface IEmailTemplateService
    {
        EmailTemplate GetEmailTemplate(int emailCategoryId);
       
    }
}
