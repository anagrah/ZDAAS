using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPLaborCategory.Contracts;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPLaborCategory
{
    public class LaborHeadingIdentification : ILaborHeadingIdentification
    {
        //private List<CategoryHeadingModel> _categoryHeadingModelList;

        private List<JobTitleWordEntity> _jobTitleWordList;
        private List<LaborHeadingEntity> _LaborHeadingList;
        private List<LineDetailModel> _lineDetailCollection;

        


        public CategoryHeadingModel Get(List<LineDetailModel> lineDetailCollection, List<JobTitleWordEntity> jobTitleWordList, 
            List<LaborHeadingEntity> laborHeadingList, decimal categoryId, JobTitleNewModel jobTitleNewModel)
        {
            _jobTitleWordList = jobTitleWordList;
            _LaborHeadingList = laborHeadingList;
            _lineDetailCollection = lineDetailCollection;

            CategoryHeadingModel categoryHeading = PopulateLaborHeading(categoryId);

            return categoryHeading;
        }

        private CategoryHeadingModel PopulateLaborHeading(decimal categoryId)
        {
            CategoryHeadingModel categoryHeading = null;

            foreach (var lineDetail in _lineDetailCollection)
            {
                string nodeText = lineDetail.Text;

                string jobTitle = null;

                bool isJobTitle = Utility.JobTitle(nodeText, _jobTitleWordList, out jobTitle);

                if (isJobTitle == true)
                {                    
                    if (categoryHeading == null)
                    {
                        categoryHeading = new CategoryHeadingModel()
                        {
                            CategoryId = categoryId,
                            Color = "black",
                            CategoryName = "Labor",
                            LineDetails = new List<LineDetailModel>()
                        };
                    }

                   categoryHeading.LineDetails.Add(lineDetail);
                }
                
            }
            return categoryHeading;
        }
    }
}
