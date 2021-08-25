using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPLaborCategory.Contracts;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPLaborCategory
{
    public class LaborContentIdentificationNew : ILaborContentIdentificationNew
    {

        private List<TreeNodeModel> _finalCategoryContentsList;
        private List<LaborHeadingEntity> _laborHeadingList;
        private int _laborHeadingSynonymMaxLength = 0;
        private List<JobTitleModel> _jobTitleModelList;
        private LineDetailModel _nextHeadingLineDetail;
        private CategoryHeadingModel _categoryHeadings;
        private bool _startHeading = false;
        private int _endHeadingLineNumber;
        public List<JobTitleModel> GetCategoryContents(CategoryHeadingModel categoryHeadings, List<HTMLLineModel> htmlLineCollection,
            INodeTree nodeTree, List<CategoryEntity> categories,
            List<LineDetailModel> lineDetailCollection, List<LaborHeadingEntity> laborHeadingList)
        {


            _laborHeadingList = laborHeadingList;
            _categoryHeadings = categoryHeadings;
            _finalCategoryContentsList = new List<TreeNodeModel>();
            _startHeading = true;

            _endHeadingLineNumber = 0;
            _jobTitleModelList = new List<JobTitleModel>();
            //_laborHeadingSynonymMaxLength = _laborHeadingList.Max(line => line.SynonymMaximumLength);

            for (int mainLoopCounter = 0; mainLoopCounter < categoryHeadings.LineDetails.Count(); mainLoopCounter++)
            {
                _nextHeadingLineDetail = null;
                if (categoryHeadings.LineDetails.Count() > mainLoopCounter + 1)
                {
                    
                    _nextHeadingLineDetail = categoryHeadings.LineDetails[mainLoopCounter + 1];
                }

                LineDetailModel headingLineDetail = categoryHeadings.LineDetails[mainLoopCounter];

                JobTitleModel jobTitle = _jobTitleModelList.FirstOrDefault(line => line.JobTitle == headingLineDetail.JobHeading);

                JobTitleModel jobTitleModel = null;

                if (jobTitle == null)
                {
                    jobTitleModel = new JobTitleModel();
                    jobTitleModel.LineNumber = headingLineDetail.LineNumber;
                    jobTitleModel.NodeKey = headingLineDetail.NodeKey;
                    jobTitleModel.JobTitle = headingLineDetail.JobHeading;
                    jobTitleModel.Text = headingLineDetail.Text;
                    _jobTitleModelList.Add(jobTitleModel);
                }
                else
                {
                    jobTitleModel = jobTitle;
                }

                List<LineDetailModel> lineDetailListAfterHeading = lineDetailCollection.Where(line => line.LineNumber > headingLineDetail.LineNumber).ToList();

                if (lineDetailListAfterHeading == null)
                {
                    continue;
                }

                for (int innerLoopCounter = 0; innerLoopCounter < lineDetailListAfterHeading.Count(); innerLoopCounter++)
                {

                    LineDetailModel lineDetailAfterHeading = lineDetailListAfterHeading[innerLoopCounter];

                    if (lineDetailAfterHeading.Text.Contains("Dangerous experience"))
                    {
                        var temp = "";
                    }

                    if (HeadingEnd(headingLineDetail, lineDetailAfterHeading))
                    {
                        break;
                    }

                    string expectedHeading = "";
                    bool isHeading = false;
                    if (lineDetailAfterHeading.HeadingElement == true)
                    {
                        expectedHeading = lineDetailAfterHeading.Text;
                        isHeading = true;
                    }
                    else if (lineDetailAfterHeading.HeadingInSubLine == true)

                    {
                        expectedHeading = lineDetailAfterHeading.SubLineDetailCollection[0].Text;
                        isHeading = true;
                    }

                    if(expectedHeading.Length > 90)
                    {
                        isHeading = false;
                    }

                    if (isHeading == true)
                    {

                        expectedHeading = Zdaas.RFPCommon.Utility.GetHeading(expectedHeading);

                        //if (expectedHeading.Length > _laborHeadingSynonymMaxLength)
                        //{
                        //    break;
                        //}

                        if (_jobTitleModelList.Count > 0)
                        {
                            bool result = PopulateJobDescription(lineDetailAfterHeading, expectedHeading, jobTitleModel);
                            if (result == false)
                            {
                                PopulateJobDetail(lineDetailAfterHeading, jobTitleModel);
                            }
                            else
                            {

                            }

                        }
                    }
                    else
                    {
                        PopulateJobDetail(lineDetailAfterHeading, jobTitleModel);
                    }

                }
            }



            AddEmptyHeading(_jobTitleModelList);
            return _jobTitleModelList;
        }

        private void AddEmptyHeading(List<JobTitleModel> jobTitleModelList)
        {
            foreach (var jobTitleModel in jobTitleModelList)
            {
                if(jobTitleModel.JobDescription != null && jobTitleModel.JobDescription.Count() == 0)
                {
                    JobDescriptionModel jobDescriptionModel = new JobDescriptionModel();

                    jobDescriptionModel.Heading = "Experience";

                    jobTitleModel.JobDescription.Add(jobDescriptionModel);
                }
            }
        }

        private bool PopulateJobDescription(LineDetailModel lineDetailAfterHeading, string expectedHeading, JobTitleModel jobTitleModel)
        {

            JobDescriptionModel jobDescriptionModel = new JobDescriptionModel();
            jobDescriptionModel.Heading = expectedHeading;
            jobDescriptionModel.HeadingLineNumber = lineDetailAfterHeading.LineNumber;
            jobDescriptionModel.NodeKey = lineDetailAfterHeading.NodeKey;
            jobDescriptionModel.Text = lineDetailAfterHeading.Text;

            if (lineDetailAfterHeading.HeadingInSubLine == true)
            {
                LineDetailModel heading = lineDetailAfterHeading.SubLineDetailCollection[0];
                string withoutHeading = lineDetailAfterHeading.Node.OuterHtml.Replace(heading.Node.OuterHtml, "");
                jobDescriptionModel.Detail = withoutHeading;
                jobDescriptionModel.HeadingContentMix = true;
                jobTitleModel.JobDescription.Add(jobDescriptionModel);
                
                return true;
            }
            else
            {

                jobTitleModel.JobDescription.Add(jobDescriptionModel);
                return true;
            }


            //===============================Old Logic========================================================

            //foreach (var LaborHeading in _laborHeadingList)
            //{
            //    if (LaborHeading.SynonymMaximumLength < expectedHeading.Length)
            //    {
            //        continue;
            //    }

            //    LaborHeadingSynonymEntity laborHeadingSynonymEntity = LaborHeading.LaborHeadingSynonymEntity.FirstOrDefault(line => line.Synonym == expectedHeading);

            //    if (laborHeadingSynonymEntity != null)
            //    {


            //        if (DuplicateHeading(expectedHeading, jobTitleModel) == true)
            //        {
            //            continue;
            //        }

            //        JobDescriptionModel jobDescriptionModel = new JobDescriptionModel();
            //        jobDescriptionModel.Heading = expectedHeading;
            //        jobDescriptionModel.HeadingLineNumber = lineDetailAfterHeading.LineNumber;
            //        jobDescriptionModel.NodeKey = lineDetailAfterHeading.NodeKey;
            //        jobDescriptionModel.Text = lineDetailAfterHeading.Text;



            //        if (lineDetailAfterHeading.HeadingInSubLine == true)
            //        {

            //            jobDescriptionModel.Detail = lineDetailAfterHeading.Node.OuterHtml;

            //            jobTitleModel.JobDescription.Add(jobDescriptionModel);
            //            jobDescriptionModel.HeadingContentMix = true;
            //            return true;
            //        }
            //        else
            //        {

            //            jobTitleModel.JobDescription.Add(jobDescriptionModel);
            //            return true;
            //        }
            //    }
            //}


            //if (jobTitleModel.JobDescription.Count == 0)
            //{
            //    JobDescriptionModel jobDescriptionModel = new JobDescriptionModel();
            //    jobDescriptionModel.Heading = "Experience";
            //    jobDescriptionModel.HeadingLineNumber = lineDetailAfterHeading.LineNumber;
            //    jobDescriptionModel.NodeKey = lineDetailAfterHeading.NodeKey;
            //    jobDescriptionModel.Text = lineDetailAfterHeading.Text;

            //    DetailCollection detail = new DetailCollection();
            //    detail.DetailLineNumber = lineDetailAfterHeading.LineNumber;
            //    detail.DetailText = lineDetailAfterHeading.Node.OuterHtml;
            //    detail.NodeKey = lineDetailAfterHeading.NodeKey;

            //    jobDescriptionModel.DetailList = new List<DetailCollection>();
            //    jobDescriptionModel.DetailList.Add(detail);
            //    jobDescriptionModel.Detail = lineDetailAfterHeading.Node.OuterHtml;

            //    jobTitleModel.JobDescription.Add(jobDescriptionModel);

            //    return true;
            //}
            return false;
        }

        private bool DuplicateHeading(string expectedHeading, JobTitleModel jobTitleModel)
        {

            JobDescriptionModel jobDescription = jobTitleModel.JobDescription.FirstOrDefault(line => line.Heading == expectedHeading);

            if (jobDescription != null)
            {
                return true;
            }
            return false;
        }

        private bool HeadingEnd(LineDetailModel lineDetailHeading, LineDetailModel lineDetailAfterHeading)
        {

            if (_nextHeadingLineDetail == null)
            {
                if (_startHeading == true)
                {
                    _endHeadingLineNumber = lineDetailAfterHeading.LineNumber + 200;
                    _startHeading = false;
                }

                if (_endHeadingLineNumber < lineDetailAfterHeading.LineNumber)
                {

                    return true;
                }
            }

            if (_nextHeadingLineDetail != null && _nextHeadingLineDetail.LineNumber == lineDetailAfterHeading.LineNumber)
            {
                return true;
            }

            return false;
        }

        private bool LineDetailGreaterThanHeading(LineDetailModel lineDetailHeading, LineDetailModel lineDetailAfterHeading)
        {


            return false;
        }


        private void PopulateJobDetail(LineDetailModel lineDetailAfterHeading, JobTitleModel jobTitleModel)
        {


            JobTitleModel lastJobTitleModel = jobTitleModel;
            List<JobDescriptionModel> lastJobDescription = lastJobTitleModel.JobDescription;

            if (lastJobTitleModel.JobDescription != null && lastJobTitleModel.JobDescription.Count > 0)
            {
                if (lastJobDescription[lastJobDescription.Count - 1].DetailList == null)
                {
                    lastJobDescription[lastJobDescription.Count - 1].DetailList = new List<DetailCollection>();
                    DetailCollection detail = new DetailCollection();
                    detail.DetailLineNumber = lineDetailAfterHeading.LineNumber;
                    detail.DetailText = lineDetailAfterHeading.Node.OuterHtml;
                    detail.NodeKey = lineDetailAfterHeading.NodeKey;
                    lastJobDescription[lastJobDescription.Count - 1].DetailList.Add(detail);
                }
                else
                {

                    DetailCollection detail = new DetailCollection();
                    detail.DetailLineNumber = lineDetailAfterHeading.LineNumber;
                    detail.DetailText = lineDetailAfterHeading.Node.OuterHtml;
                    detail.NodeKey = lineDetailAfterHeading.NodeKey;
                    lastJobDescription[lastJobDescription.Count - 1].DetailList.Add(detail);

                }


                lastJobDescription[lastJobDescription.Count - 1].Detail = lastJobDescription[lastJobDescription.Count - 1].Detail + lineDetailAfterHeading.Node.OuterHtml;
            }


        }

    }
}




//===========================================================Old Logic===============================================================

//public List<JobTitleModel> GetCategoryContents(CategoryHeadingModel categoryHeadings, List<HTMLLineModel> htmlLineCollection,
//        INodeTree nodeTree, List<CategoryEntity> categories,
//        List<LineDetailModel> lineDetailCollection, List<LaborHeadingEntity> laborHeadingList)
//{


//    _laborHeadingList = laborHeadingList;
//    _categoryHeadings = categoryHeadings;
//    _finalCategoryContentsList = new List<TreeNodeModel>();
//    _startHeading = true;

//    _endHeadingLineNumber = 0;
//    _jobTitleModelList = new List<JobTitleModel>();
//    _laborHeadingSynonymMaxLength = _laborHeadingList.Max(line => line.SynonymMaximumLength);

//    for (int mainLoopCounter = 0; mainLoopCounter < categoryHeadings.LineDetails.Count(); mainLoopCounter++)
//    {
//        _nextHeadingLineDetail = null;
//        if (categoryHeadings.LineDetails.Count() > mainLoopCounter + 1)
//        {
//            if (mainLoopCounter == 109)
//            {
//                var t = "";
//            }
//            _nextHeadingLineDetail = categoryHeadings.LineDetails[mainLoopCounter + 1];
//        }

//        LineDetailModel headingLineDetail = categoryHeadings.LineDetails[mainLoopCounter];

//        JobTitleModel jobTitle = _jobTitleModelList.FirstOrDefault(line => line.JobTitle == headingLineDetail.JobHeading);

//        JobTitleModel jobTitleModel = null;

//        if (jobTitle == null)
//        {
//            jobTitleModel = new JobTitleModel();
//            jobTitleModel.LineNumber = headingLineDetail.LineNumber;
//            jobTitleModel.NodeKey = headingLineDetail.NodeKey;
//            jobTitleModel.JobTitle = headingLineDetail.JobHeading;
//            jobTitleModel.Text = headingLineDetail.Text;
//            _jobTitleModelList.Add(jobTitleModel);
//        }
//        else
//        {
//            jobTitleModel = jobTitle;
//        }

//        List<LineDetailModel> lineDetailListAfterHeading = lineDetailCollection.Where(line => line.LineNumber > headingLineDetail.LineNumber).ToList();

//        if (lineDetailListAfterHeading == null)
//        {
//            continue;
//        }

//        for (int innerLoopCounter = 0; innerLoopCounter < lineDetailListAfterHeading.Count(); innerLoopCounter++)
//        {

//            LineDetailModel lineDetailAfterHeading = lineDetailListAfterHeading[innerLoopCounter];

//            if (lineDetailAfterHeading.Text.Contains("Training Specialist/Instructor"))
//            {
//                var temp = "";
//            }

//            if (HeadingEnd(headingLineDetail, lineDetailAfterHeading))
//            {
//                break;
//            }

//            string expectedHeading = "";
//            bool isHeading = false;
//            if (lineDetailAfterHeading.HeadingElement == true)
//            {
//                expectedHeading = lineDetailAfterHeading.Text;
//                isHeading = true;
//            }
//            else if (lineDetailAfterHeading.HeadingInSubLine == true)

//            {
//                expectedHeading = lineDetailAfterHeading.SubLineDetailCollection[0].Text;
//                isHeading = true;
//            }

//            if (isHeading == true)
//            {

//                expectedHeading = Zdaas.RFPCommon.Utility.GetHeading(expectedHeading);

//                if (expectedHeading.Length > _laborHeadingSynonymMaxLength)
//                {
//                    break;
//                }

//                if (_jobTitleModelList.Count > 0)
//                {
//                    bool result = PopulateJobDescription(lineDetailAfterHeading, expectedHeading, jobTitleModel);
//                    if (result == false)
//                    {
//                        PopulateJobDetail(lineDetailAfterHeading, jobTitleModel);
//                    }
//                    else
//                    {

//                    }

//                }
//            }
//            else
//            {
//                PopulateJobDetail(lineDetailAfterHeading, jobTitleModel);
//            }

//        }
//    }




//    return _jobTitleModelList;
//}


//private bool PopulateJobDescription(LineDetailModel lineDetailAfterHeading, string expectedHeading, JobTitleModel jobTitleModel)
//{


//    foreach (var LaborHeading in _laborHeadingList)
//    {
//        if (LaborHeading.SynonymMaximumLength < expectedHeading.Length)
//        {
//            continue;
//        }

//        LaborHeadingSynonymEntity laborHeadingSynonymEntity = LaborHeading.LaborHeadingSynonymEntity.FirstOrDefault(line => line.Synonym == expectedHeading);

//        if (laborHeadingSynonymEntity != null)
//        {

//            if (DuplicateHeading(expectedHeading, jobTitleModel) == true)
//            {
//                continue;
//            }

//            JobDescriptionModel jobDescriptionModel = new JobDescriptionModel();
//            jobDescriptionModel.Heading = expectedHeading;
//            jobDescriptionModel.HeadingLineNumber = lineDetailAfterHeading.LineNumber;
//            jobDescriptionModel.NodeKey = lineDetailAfterHeading.NodeKey;
//            jobDescriptionModel.Text = lineDetailAfterHeading.Text;



//            if (lineDetailAfterHeading.HeadingInSubLine == true)
//            {

//                jobDescriptionModel.Detail = lineDetailAfterHeading.Node.OuterHtml;

//                jobTitleModel.JobDescription.Add(jobDescriptionModel);
//                jobDescriptionModel.HeadingContentMix = true;
//                return true;
//            }
//            else
//            {

//                jobTitleModel.JobDescription.Add(jobDescriptionModel);
//                return true;
//            }
//        }
//    }


//    if (jobTitleModel.JobDescription.Count == 0)
//    {
//        JobDescriptionModel jobDescriptionModel = new JobDescriptionModel();
//        jobDescriptionModel.Heading = "Experience";
//        jobDescriptionModel.HeadingLineNumber = lineDetailAfterHeading.LineNumber;
//        jobDescriptionModel.NodeKey = lineDetailAfterHeading.NodeKey;
//        jobDescriptionModel.Text = lineDetailAfterHeading.Text;

//        DetailCollection detail = new DetailCollection();
//        detail.DetailLineNumber = lineDetailAfterHeading.LineNumber;
//        detail.DetailText = lineDetailAfterHeading.Node.OuterHtml;
//        detail.NodeKey = lineDetailAfterHeading.NodeKey;

//        jobDescriptionModel.DetailList = new List<DetailCollection>();
//        jobDescriptionModel.DetailList.Add(detail);
//        jobDescriptionModel.Detail = lineDetailAfterHeading.Node.OuterHtml;

//        jobTitleModel.JobDescription.Add(jobDescriptionModel);

//        return true;
//    }
//    return false;
//}

//private bool DuplicateHeading(string expectedHeading, JobTitleModel jobTitleModel)
//{

//    JobDescriptionModel jobDescription = jobTitleModel.JobDescription.FirstOrDefault(line => line.Heading == expectedHeading);

//    if (jobDescription != null)
//    {
//        return true;
//    }
//    return false;
//}

//private bool HeadingEnd(LineDetailModel lineDetailHeading, LineDetailModel lineDetailAfterHeading)
//{

//    if (_nextHeadingLineDetail == null)
//    {
//        if (_startHeading == true)
//        {
//            _endHeadingLineNumber = lineDetailAfterHeading.LineNumber + 200;
//            _startHeading = false;
//        }

//        if (_endHeadingLineNumber < lineDetailAfterHeading.LineNumber)
//        {

//            return true;
//        }
//    }

//    if (_nextHeadingLineDetail != null && _nextHeadingLineDetail.LineNumber == lineDetailAfterHeading.LineNumber)
//    {
//        return true;
//    }

//    return false;
//}

//private bool LineDetailGreaterThanHeading(LineDetailModel lineDetailHeading, LineDetailModel lineDetailAfterHeading)
//{


//    return false;
//}


//private void PopulateJobDetail(LineDetailModel lineDetailAfterHeading, JobTitleModel jobTitleModel)
//{


//    JobTitleModel lastJobTitleModel = jobTitleModel;
//    List<JobDescriptionModel> lastJobDescription = lastJobTitleModel.JobDescription;

//    if (lastJobTitleModel.JobDescription != null && lastJobTitleModel.JobDescription.Count > 0)
//    {
//        if (lastJobDescription[lastJobDescription.Count - 1].DetailList == null)
//        {
//            lastJobDescription[lastJobDescription.Count - 1].DetailList = new List<DetailCollection>();
//            DetailCollection detail = new DetailCollection();
//            detail.DetailLineNumber = lineDetailAfterHeading.LineNumber;
//            detail.DetailText = lineDetailAfterHeading.Node.OuterHtml;
//            detail.NodeKey = lineDetailAfterHeading.NodeKey;
//            lastJobDescription[lastJobDescription.Count - 1].DetailList.Add(detail);
//        }
//        else
//        {

//            DetailCollection detail = new DetailCollection();
//            detail.DetailLineNumber = lineDetailAfterHeading.LineNumber;
//            detail.DetailText = lineDetailAfterHeading.Node.OuterHtml;
//            detail.NodeKey = lineDetailAfterHeading.NodeKey;
//            lastJobDescription[lastJobDescription.Count - 1].DetailList.Add(detail);

//        }


//        lastJobDescription[lastJobDescription.Count - 1].Detail = lastJobDescription[lastJobDescription.Count - 1].Detail + lineDetailAfterHeading.Node.OuterHtml;
//    }


//}

