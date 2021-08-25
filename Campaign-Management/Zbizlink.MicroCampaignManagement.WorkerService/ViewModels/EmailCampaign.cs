using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroCampaignManagement.WorkerService.ViewModels
{
    public class EmailCampaign
    {
  
        public decimal UserId { get; set; }
        public decimal CampaignOpportunityId { get; set; }
        public string OpportunityName { get; set; }
        public string Message { get; set; }
        public string[] EmailAdresses { get; set; }
        public string OpportunityURL { get; set; }

        public string[] FirstName { get; set; }
        public string[] LastName { get; set; }
        public string CampaignId { get; set; }

        public string[] CompanyName { get; set; }

     


    }

    public class EmailCampaignList
    {

        public decimal UserId { get; set; }
        public decimal CampaignOpportunityId { get; set; }
        public string OpportunityName { get; set; }
        public string Message { get; set; }
        public string EmailAdresses { get; set; }
        public string OpportunityURL { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CampaignId { get; set; }

        public string CompanyName { get; set; }

        


    }



}
