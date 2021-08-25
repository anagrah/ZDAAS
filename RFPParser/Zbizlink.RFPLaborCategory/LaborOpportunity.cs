using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPLaborCategory.Contracts;
using Zdaas.RFPNodeTree.Contracts;
using RFPCommon = Zdaas.RFPCommon;

namespace Zdaas.RFPLaborCategory
{
    public class LaborOpportunity : ILaborOpportunity
    {
        private List<HTMLLineModel> _htmlLineList;
        private ILineCleanup _lineCleanup;
        private List<LineDetailModel> _lineDetailList;
        private INodeTree _nodeTree;
        private List<JobTitleWordEntity> _jobTitleWordList;
        private List<LaborHeadingEntity> _laborHeadingEntityList;
        private List<JobTitleModel> _jobTitleModelList;
        public LaborOpportunity(ILineCleanup lineCleanup, INodeTree nodeTree)
        {
            _lineCleanup = lineCleanup;
            _nodeTree = nodeTree;

        }
        public List<JobTitleModel> Get(string laborData, List<JobTitleWordEntity> jobTitleWordList, List<LaborHeadingEntity> laborHeadingEntityList)
        {
            var t = laborData;
            _jobTitleModelList = new List<JobTitleModel>();
            _jobTitleWordList = jobTitleWordList;
            _laborHeadingEntityList = laborHeadingEntityList;

            //HtmlDocument htmlDocument = Utility.GetDocHtmlLineCollection(laborData);

            _htmlLineList = RFPCommon.Utility.GetDocHtmlLineCollection(laborData);

            _lineDetailList = _lineCleanup.GetCleanLineDetailCollection(_htmlLineList);

            bool treeStatus = _nodeTree.CreateNodeTree(_lineDetailList);

            //List<LineDetailModel> newLineDetailModel = new List<LineDetailModel>();

            if (treeStatus == true)
            {

                JobTitleModel jobTitleModel = null;
                List<LineDetailModel> remaingLineDetail = _lineDetailList;

                while (remaingLineDetail != null)
                {

                    string jobTitle = null;

                    List<LineDetailModel> jobLinesDetail;
                    
                    jobLinesDetail = GetJobLinesDetail(ref remaingLineDetail, out jobTitle);

                    if (jobTitle != "")
                    {
                        jobTitleModel = new JobTitleModel();
                        jobTitleModel.JobTitle = jobTitle;
                        _jobTitleModelList.Add(jobTitleModel);

                        foreach (var jobLineDetail in jobLinesDetail)
                        {
                            
                            bool result = PopulateJobDescription(jobLineDetail, jobTitleModel);

                        }
                    }                                   
                }

                //foreach (var lineDetail in _lineDetailList)
                //{
                //    if (lineDetail.Text.Contains("Senior Cloud / Salesforce Developer")){
                //        var t1 = "";
                //    }
                //    string jobTitle = null;

                //    bool isJobTitle = Utility.JobTitle(lineDetail.Text, _jobTitleWordList, out jobTitle);

                //    if (isJobTitle == true)
                //    {
                //        foundJobTitle = true;
                //        jobTitleModel = new JobTitleModel();
                //        jobTitleModel.JobTitle = jobTitle;

                //        _jobTitleModelList.Add(jobTitleModel);
                //    }
                //    else
                //    {
                //        if (foundJobTitle == true)
                //        {
                //           // RearrangeSublineDetail(lineDetail);
                //          bool result =  PopulateJobDescription(lineDetail, jobTitleModel);

                //        }
                //    }
                //}
            }

            return _jobTitleModelList;
        }

        private List<LineDetailModel> GetJobLinesDetail(ref List<LineDetailModel> remaingLineDetail, out string jobTitle)
        {
           
            jobTitle = "";
            List<LineDetailModel> jobLines = null;
            bool isJobTitle = false;

            foreach (var lineDetail in remaingLineDetail)
            {
                if(lineDetail.Text.Contains("Project Manager"))
                {
                    var t = "";
                }
                isJobTitle = Utility.JobTitle(lineDetail.Text, _jobTitleWordList, out jobTitle);

                if (isJobTitle == true)
                {
                    jobLines = _lineDetailList.Where(lines => (lines.NodeKey == lineDetail.NodeKey || lines.NodeKey.StartsWith(lineDetail.NodeKey + "/"))
                                                                       && lines.LineNumber >= lineDetail.LineNumber).ToList();

                    if (jobLines != null && jobLines.Count > 0)
                    {
                        int lineDetailNumber = jobLines[jobLines.Count - 1].LineNumber;
                        jobLines.RemoveAt(0);
                        //remaingLineDetail.Clear();
                        remaingLineDetail = remaingLineDetail.Where(line => line.LineNumber > lineDetailNumber).ToList();
                        return jobLines;
                    }
                }              
            }

            if(isJobTitle == false)
            {
                remaingLineDetail = null;
            }

            return jobLines;
        }


        private bool PopulateJobDescription(LineDetailModel lineDetailModel, JobTitleModel jobTitleModel)
        {
            bool result = false;

            foreach (var laborHeadingEntity in _laborHeadingEntityList)
            {
                if (lineDetailModel.SubLineDetailCollection != null && lineDetailModel.SubLineDetailCollection.Count > 0 && lineDetailModel.SubLineDetailCollection[0].HeadingElement == true)
                {
                    string expectedHeading = lineDetailModel.SubLineDetailCollection[0].Text;

                    expectedHeading = Zdaas.RFPCommon.Utility.GetHeading(expectedHeading);

                    LaborHeadingSynonymEntity LaborHeadingSynonym = laborHeadingEntity.LaborHeadingSynonymEntity.FirstOrDefault(line => line.Synonym.ToLower() == expectedHeading.ToLower());

                    if (LaborHeadingSynonym != null)
                    {
                        result = PopulateJobDescriptionInSameLine(lineDetailModel, jobTitleModel, laborHeadingEntity, LaborHeadingSynonym);

                        if (result == true)
                        {
                            return true;
                        }
                    }
                }

                if (lineDetailModel.HeadingElement == true && result == false)
                {
                    string expectedHeading = Zdaas.RFPCommon.Utility.GetHeading(lineDetailModel.Text);

                    LaborHeadingSynonymEntity LaborHeadingSynonym = laborHeadingEntity.LaborHeadingSynonymEntity.FirstOrDefault(line => line.Synonym.ToLower() == expectedHeading.Trim().ToLower());

                    if (LaborHeadingSynonym != null)
                    {
                        result = PopulateJobDescription(lineDetailModel, jobTitleModel, laborHeadingEntity, LaborHeadingSynonym);

                        if (result == true)
                        {
                            return true;
                        }

                    }
                }
            }

            if (jobTitleModel != null && jobTitleModel.JobDescription != null && jobTitleModel.JobDescription.Count > 0)
            {
                jobTitleModel.JobDescription[jobTitleModel.JobDescription.Count - 1].Detail += lineDetailModel.Node.OuterHtml;
                return true;
            }

            return false;
        }

        private bool PopulateJobDescriptionInSameLine(LineDetailModel lineDetailModel, JobTitleModel jobTitleModel, LaborHeadingEntity laborHeadingEntity, LaborHeadingSynonymEntity LaborHeadingSynonym)
        {
            JobDescriptionModel jobDescriptionModel;
            JobDescriptionModel jobDescription = jobTitleModel.JobDescription.FirstOrDefault(line => line.Heading == laborHeadingEntity.Heading);

            if (jobDescription == null)
            {
                jobDescriptionModel = new JobDescriptionModel();
                jobDescriptionModel.Heading = laborHeadingEntity.Heading;

                var regex = new Regex(Regex.Escape(lineDetailModel.SubLineDetailCollection[0].Node.OuterHtml));
                string outerHtml = lineDetailModel.Node.OuterHtml;


                var jobDetail = regex.Replace(outerHtml, "", 1).Trim();

                HtmlNode htmlNode = HtmlNode.CreateNode(jobDetail);

                if (htmlNode.InnerText.Trim() != "")
                {
                    jobDescriptionModel.Detail = jobDetail;
                }

                jobTitleModel.JobDescription.Add(jobDescriptionModel);
                return true;
            }
            return false;
        }

        private bool PopulateJobDescription(LineDetailModel lineDetailModel, JobTitleModel jobTitleModel, LaborHeadingEntity laborHeadingEntity, LaborHeadingSynonymEntity LaborHeadingSynonym)
        {
            JobDescriptionModel jobDescriptionModel;
            JobDescriptionModel jobDescription = jobTitleModel.JobDescription.FirstOrDefault(line => line.Heading == laborHeadingEntity.Heading);

            if (jobDescription == null)
            {
                jobDescriptionModel = new JobDescriptionModel();
                jobDescriptionModel.Heading = laborHeadingEntity.Heading;

                jobTitleModel.JobDescription.Add(jobDescriptionModel);
                return true;
            }
            return false;
        }




        private void RearrangeSublineDetail(LineDetailModel lineDetail)
        {
            if (lineDetail.SubLineDetailCollection.Count() < 2)
            {
                return;
            }

            foreach (var item in lineDetail.SubLineDetailCollection)
            {

            }
        }



    }
}

