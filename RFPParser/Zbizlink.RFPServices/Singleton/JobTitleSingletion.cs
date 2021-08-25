using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zbizlink.RFPDataModel.Models;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPDataModel.Contracts;

namespace Zdaas.RFPServices.Singleton
{
   public sealed class JobTitleSingletion
    {
        private static IUnitOfWork _unitOfWork;
        private JobTitleNewModel _jobTitleModel;
        private static bool _refresh;
        private static readonly Lazy<JobTitleSingletion> instance = new Lazy<JobTitleSingletion>(() => new JobTitleSingletion());
        public static JobTitleSingletion GetInstance(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            return instance.Value;
        }

        private JobTitleSingletion()
        {
            GetAllJobTitle();
        }

         public JobTitleNewModel jobTitleList
        {
            get
            {
                if (_refresh == true)
                { GetAllJobTitle(); }
                return _jobTitleModel;
            }
        }

        private void GetAllJobTitle()
        {
            List<JobTitle> jobTitleList = _unitOfWork.JobTitleRepository.Get().ToList();
            List<JobTitleAddOn> JobTitleAddOnList = _unitOfWork.JobTitleAddOnRepository.Get().ToList();

            _jobTitleModel = new JobTitleNewModel();
            if (jobTitleList != null && jobTitleList.Count() > 0)
            {
                foreach (var jobTitle in jobTitleList)
                {
                    _jobTitleModel.JobTitleList.Add(jobTitle.Title.ToLower().Trim());
                }
            }

            if (JobTitleAddOnList != null && JobTitleAddOnList.Count() > 0)
            {
                foreach (var JobTitleAddOn in JobTitleAddOnList)
                {
                    _jobTitleModel.JobTitleAddOnList.Add(JobTitleAddOn.AddOn.ToLower().Trim());
                    
                }
            }

        }
        public static void ReLoad()
        {
            if (!_refresh)
            {
                _refresh = true;
            }

        }
    }
}
