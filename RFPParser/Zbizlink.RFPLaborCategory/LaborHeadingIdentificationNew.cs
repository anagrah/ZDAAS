using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPLaborCategory.Contracts;

namespace Zdaas.RFPLaborCategory
{
    class LaborHeadingIdentificationNew : ILaborHeadingIdentification
    {

        private CategoryHeadingModel categoryHeading;
        private JobTitleNewModel _jobTitleModel;
        List<LineDetailModel> _lineDetailCollection;
        public CategoryHeadingModel Get(List<LineDetailModel> lineDetailCollection, List<JobTitleWordEntity> jobTitleWordList,
            List<LaborHeadingEntity> LaborHeadingList, decimal categoryId, JobTitleNewModel jobTitleModel)
        {
            _jobTitleModel = jobTitleModel;
            _lineDetailCollection = lineDetailCollection;

            List<LineDetailModel> jobTitleLineDetailList = GetJobTitles();


            List<LineDetailModel> jobTitleHeading = new List<LineDetailModel>();
            foreach (var jobTitleLine in jobTitleLineDetailList)
            {               
                jobTitleHeading.Add(jobTitleLine);
            }

            categoryHeading = new CategoryHeadingModel
            {
                CategoryId = categoryId,
                CategoryName = "Labor",
                Color = "black",
                LineDetails = jobTitleHeading
            };

            return categoryHeading;
        }

        private List<LineDetailModel> GetJobTitles()
        {
            List<LineDetailModel> jobTitleLineDetail = new List<LineDetailModel>();
            foreach (var jobTitleWord in _jobTitleModel.JobTitleList)
            {
                if(jobTitleWord == "Administrative".ToLower())
                {
                    var temp = "";
                }
            
                List<LineDetailModel> jobTitleList = _lineDetailCollection.Where(line => line.Text.ToLower().Contains(jobTitleWord) && line.Text.Length < 80).ToList();

                if (jobTitleList != null && jobTitleList.Count() > 0)
                {
                    foreach (var jobTitle in jobTitleList)
                    {
                        LineDetailModel sameLineNumber = jobTitleLineDetail.FirstOrDefault(line => line.LineNumber == jobTitle.LineNumber);
                        if (sameLineNumber == null)
                        {
                            if (CheckAddOn(jobTitle, jobTitleWord) == true)
                            {
                                jobTitleLineDetail.Add(jobTitle);
                            }
                        }
                    }
                }
            }

            
            return jobTitleLineDetail.OrderBy(line => line.LineNumber).ToList();
        }
        private bool CheckAddOn(LineDetailModel jobTitleLineDetail, string jobTitleWord)
        {
            string jobTitle = "";
            if (jobTitleLineDetail.TypeOfListNumber == null)
            {
                jobTitle = Zdaas.RFPCommon.Utility.GetHeading(jobTitleLineDetail.Text);
                jobTitleLineDetail.JobHeading = jobTitle;
            }
            else
            {
                jobTitle = Utility.GetHeading(jobTitleLineDetail.Text, jobTitleLineDetail.TypeOfListNumber);
                jobTitleLineDetail.JobHeading = jobTitle;

            }
          
           
            string[] jobTitleArray = jobTitle.Split(" ");

            if (jobTitleArray != null && jobTitleArray.Count() > 0)
            {
                foreach (var item in jobTitleArray)
                {
                   string jobTitleSingleWord = item.ToLower().Trim();
                    if (jobTitleWord != jobTitleSingleWord)
                    {
                        if (!_jobTitleModel.JobTitleAddOnList.Contains(jobTitleSingleWord))
                        {
                            return false;
                        }
                    }
                }
            }

            return true;
        }
    }
}
