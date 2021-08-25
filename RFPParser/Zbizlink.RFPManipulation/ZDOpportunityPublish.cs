using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.LoggerContracts;
using Zdaas.RFPOpportunityRFPNodeTree.Contracts;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Models;
using Zbizlink.RFPDataModel.Models;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPNodeTree;
using RFPCommon = Zdaas.RFPCommon;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPManipulation
{
    public class ZDOpportunityPublish : IZDOpportunityPublish
    {


        private List<HTMLLineModel> _htmlLineModelList = new List<HTMLLineModel>();
        private readonly ILoggerManager _logger;
        // private OpportunityEntity _opportunity = new OpportunityEntity();
        private OpportunityEntity _opportunityPublished;
        private ILineCleanup _lineCleanup;
        private INodeTree _nodeTree;
        private IOpportunityNodeTree _opportunityNodeTree;
        private List<CategoryEntity> _categoriesList;
        private int _headingId;
        private int _headingIndex;
        //private Opportunity _opportunity = new Opportunity();

        bool _populateOpportunity = true;
        public ZDOpportunityPublish(ILineCleanup lineCleanup, INodeTree nodeTree, IOpportunityNodeTree opportunityNodeTree, ILoggerManager logger)
        {
            _lineCleanup = lineCleanup;
            _nodeTree = nodeTree;
            _opportunityNodeTree = opportunityNodeTree;
            _logger = logger;
        }

        public OpportunityEntity Publish(List<CategoryEntity> categoriesList, IEnumerable<RfpcategoryData> categoryDataList, string SolicitationNumber, decimal companyId,
            decimal clientId, decimal segmentId, List<Rfpdocument> rfpdocumentPathList
            , OpportunityEntity opportunity,
            out OpportunityEntity opportunityPublished)
        {
            opportunityPublished = new OpportunityEntity();
            _opportunityPublished = opportunityPublished;
            _categoriesList = categoriesList;
            _headingId = 0;
            _headingIndex = 0;

            if (categoryDataList != null & categoryDataList.Count() > 0)
            {
             
                foreach (var categoryData in categoryDataList)
                {
                    _htmlLineModelList.Clear();

                    GetDoc(categoryData.CategoryId, categoryData.CategoryData, SolicitationNumber,
                        companyId, clientId, segmentId, opportunity);

                }

            }
            else
            {
                PopulateOpportunityEntity(SolicitationNumber, companyId, clientId, segmentId, opportunity);
            }
            //temp.TempWirtefile(_opportunityPublished);
            return opportunity;
        }


        //public OpportunityEntity Publish(List<CategoryEntity> categoriesList, IEnumerable<RfpcategoryData> categoryDataList, string SolicitationNumber, decimal companyId,
        //    decimal clientId, decimal segmentId, string filePath, decimal documentId, out OpportunityEntity opportunityPublished)
        //{
        //    opportunityPublished = new OpportunityEntity();
        //    _opportunityPublished = opportunityPublished;
        //    _categoriesList = categoriesList;
        //    _headingId = 0;
        //    _headingIndex = 0;

        //    if (categoryDataList != null & categoryDataList.Count() > 0)
        //    {
        //        var capabilityData = categoryDataList.FirstOrDefault(line => line.CategoryId == 8);

        //        if (capabilityData != null)
        //        {
        //            _logger.LogWarn("ZDOpportunityPublish: " + capabilityData.CategoryData);
        //        }
        //        else
        //        {
        //            _logger.LogWarn("ZDOpportunityPublish: capabilityData is null");
        //        }

        //        foreach (var categoryData in categoryDataList)
        //        {
        //            _htmlLineModelList.Clear();

        //            GetDoc(categoryData.CategoryId, WebUtility.HtmlDecode(categoryData.CategoryData), SolicitationNumber, companyId, clientId, segmentId, filePath, documentId);

        //        }

        //    }
        //    else
        //    {
        //        PopulateOpportunityEntity(SolicitationNumber, companyId, clientId, segmentId, filePath, documentId);
        //    }
        //    temp.TempWirtefile(_opportunityPublished);
        //    return _opportunity;
        //}

        private void GetDoc(decimal categoryId, string categoryData, string SolicitationNumber,
            decimal companyId, decimal clientId, decimal segmentId, OpportunityEntity opportunity)
        {
            HtmlDocument htmlDocument = new HtmlDocument();

            htmlDocument.LoadHtml(categoryData);
            PopulateLineDetailModel(categoryId, htmlDocument, SolicitationNumber, companyId,
                clientId, segmentId, opportunity);

        }

        private void PopulateLineDetailModel(decimal categoryId, HtmlDocument htmlDocument,
            string SolicitationNumber, decimal companyId, decimal clientId, decimal segmentId,
            OpportunityEntity opportunity)
        {
            int lineNumber = 1;
            foreach (var node in htmlDocument.DocumentNode.ChildNodes)
            {

                string text = Utility.LineCleanup(node.InnerText);
                if (text == "")
                {
                    if (RFPCommon.Utility.ImgElementExist(node) == false) continue;                            
                }
                    

                HTMLLineModel htmlLineModel = new HTMLLineModel();

                htmlLineModel.HtmlLine = node;
                htmlLineModel.LineNumber = lineNumber;

                lineNumber++;


                _htmlLineModelList.Add(htmlLineModel);

            }


            SetNodeKey(categoryId);

            PopulateEntity(categoryId, SolicitationNumber, companyId, clientId, segmentId, opportunity);
        }

        private void PopulateEntity(decimal categoryId, string SolicitationNumber,
            decimal companyId, decimal clientId, decimal segmentId, OpportunityEntity opportunity)
        {
            string privousNodeKey = "";
            int contentIndex = 0;
            //OpportunityHeading previousOpportunityHeading = new OpportunityHeading();
            OpportunityHeadingEntity previousOpportunityHeading = new OpportunityHeadingEntity();
            OpportunityHeadingEntity previousOpportunityHeadingPublished = new OpportunityHeadingEntity();
            //string categorId = GetCategoryId(_htmlLineModelList);


            foreach (var htmlLineModel in _htmlLineModelList)
            {
                if (htmlLineModel.HtmlLine.InnerText.Contains("Documentation/Technical"))
                {
                    var t = "";
                }
                string nodeKey = htmlLineModel.HtmlLine.GetAttributeValue("data-key", "");

                if (_populateOpportunity == true)
                {

                    _populateOpportunity = PopulateOpportunityEntity(SolicitationNumber, companyId, clientId, segmentId, opportunity);
                }

                if (privousNodeKey == "")
                {
                    OpportunityHeadingEntity opportunityHeading = new OpportunityHeadingEntity
                    {
                        IndexNumber = ++_headingIndex,
                        Heading = htmlLineModel.HtmlLine.OuterHtml,
                        CategoryId = ChangeCategoryIdForBizLink(categoryId),
                        NodeKey = nodeKey,
                        OpportunityId = opportunity.OpportunityId //Akmal
                    };

                    opportunity.OpportunityHeading.Add(opportunityHeading);
                    previousOpportunityHeading = opportunityHeading;

                    //for biszlinkfs
                    OpportunityHeadingEntity opportunityHeadingPublished = new OpportunityHeadingEntity
                    {
                        HeadingId = ++_headingId,
                        Heading = htmlLineModel.HtmlLine.OuterHtml,
                        CategoryId = ChangeCategoryIdForBizLink(categoryId),
                        NodeKey = nodeKey,
                        OpportunityId = opportunity.OpportunityId //Akmal
                    };
                    _opportunityPublished.OpportunityHeading.Add(opportunityHeadingPublished);
                    previousOpportunityHeadingPublished = opportunityHeadingPublished;


                }
                else if (htmlLineModel.Content == false)
                {
                    contentIndex = 0;
                    previousOpportunityHeading = PopulateOpportunityHeading(htmlLineModel, categoryId, nodeKey, opportunity);

                    if (htmlLineModel.HtmlLine.InnerText.Contains("If the State chooses to purchase any"))
                    {
                        var t = "";
                    }

                    previousOpportunityHeadingPublished = PopulateOpportunityHeadingPublished(htmlLineModel, categoryId, nodeKey);
                }

                else if (htmlLineModel.Content == true)
                {
                    contentIndex += 1;
                    PopulateOpportunityContent(htmlLineModel, previousOpportunityHeading, contentIndex);

                    PopulateOpportunityContentPublished(htmlLineModel, previousOpportunityHeadingPublished, contentIndex);

                }
                //old logic
                //else if ((privousNodeKey.Count(text => text == '/') < nodeKey.Count(text => text == '/')) ||
                //         (privousNodeKey.Count(text => text == '/') > nodeKey.Count(text => text == '/')) ||
                //         (privousNodeKey.Count(text => text == '/') == nodeKey.Count(text => text == '/') && privousNodeKey != nodeKey)
                //         )
                //{
                //    contentIndex = 0;
                //    previousOpportunityHeading = PopulateOpportunityHeading(htmlLineModel, categoryId, nodeKey, opportunity);

                //    if (htmlLineModel.HtmlLine.InnerText.Contains("If the State chooses to purchase any"))
                //    {
                //        var t = "";
                //    }

                //    previousOpportunityHeadingPublished = PopulateOpportunityHeadingPublished(htmlLineModel, categoryId, nodeKey);
                //}

                //else if (privousNodeKey.Count(text => text == '/') == nodeKey.Count(text => text == '/') &&
                //   privousNodeKey == nodeKey)
                //{
                //    contentIndex += 1;
                //    PopulateOpportunityContent(htmlLineModel, previousOpportunityHeading, contentIndex);

                //    PopulateOpportunityContentPublished(htmlLineModel, previousOpportunityHeadingPublished, contentIndex);

                //}

                privousNodeKey = nodeKey;

            }

        }
        private bool PopulateOpportunityEntity(string solicitationNumber, decimal companyId,
            decimal clientId, decimal segmentId, OpportunityEntity opportunity)
        {
            //Multiple file
            opportunity.SolicitationNumber = solicitationNumber;
            opportunity.CompanyId = companyId;
            opportunity.ClientId = clientId;
            opportunity.CompanySegmentID = segmentId;
            //opportunity.Published = true;
            //_opportunity.RfpdocumentId = rfpDocumentId;
            //_opportunity.FilePath = filePath;
            //for bizlink
            _opportunityPublished.SolicitationNumber = solicitationNumber;
            _opportunityPublished.CompanyId = companyId;
            _opportunityPublished.ClientId = clientId;
            _opportunityPublished.CompanySegmentID = segmentId;
            //_opportunityPublished.RfpdocumentId = rfpDocumentId;
            //_opportunityPublished.FilePath = filePath;
            return false;
        }

        //private bool PopulateOpportunityEntity(string solicitationNumber, decimal companyId, decimal clientId, decimal segmentId, string filePath, decimal rfpDocumentId)
        //{
        //    //Multiple file
        //    _opportunity.SolicitationNumber = solicitationNumber;
        //    _opportunity.CompanyId = companyId;
        //    _opportunity.ClientId = clientId;
        //    _opportunity.CompanySegmentID = segmentId;
        //    _opportunity.RfpdocumentId = rfpDocumentId;
        //    _opportunity.FilePath = filePath;
        //    //for bizlink
        //    _opportunityPublished.SolicitationNumber = solicitationNumber;
        //    _opportunityPublished.CompanyId = companyId;
        //    _opportunityPublished.ClientId = clientId;
        //    _opportunityPublished.CompanySegmentID = segmentId;
        //    _opportunityPublished.RfpdocumentId = rfpDocumentId;
        //    _opportunityPublished.FilePath = filePath;
        //    return false;
        //}

        private OpportunityHeadingEntity PopulateOpportunityHeading(HTMLLineModel htmlLineModel,
            decimal categoryId, string nodeKey, OpportunityEntity opportunity)
        {
            OpportunityHeadingEntity opportunityHeading = new OpportunityHeadingEntity
            {
                IndexNumber = ++_headingIndex,
                Heading = htmlLineModel.HtmlLine.OuterHtml,
                CategoryId = ChangeCategoryIdForBizLink(categoryId),
                NodeKey = nodeKey,
                OpportunityId = opportunity.OpportunityId //Akmal
            };

            OpportunityHeadingEntity parentOpportunityHeading = null;

            if (nodeKey.Contains("/"))
            {
                GetParentHeading(opportunity.OpportunityHeading, nodeKey.Substring(0, nodeKey.LastIndexOf('/')), ref parentOpportunityHeading);
            }

            if (parentOpportunityHeading != null)
            {
                opportunityHeading.Opportunity = opportunity;

                parentOpportunityHeading.InverseParentHeading.Add(opportunityHeading);

            }
            else
            {
                opportunity.OpportunityHeading.Add(opportunityHeading);


            }

            return opportunityHeading;
        }

        private OpportunityHeadingEntity PopulateOpportunityHeadingPublished(HTMLLineModel htmlLineModel, decimal categoryId, string nodeKey)
        {


            OpportunityHeadingEntity opportunityHeading = new OpportunityHeadingEntity
            {
                Heading = htmlLineModel.HtmlLine.OuterHtml,
                CategoryId = ChangeCategoryIdForBizLink(categoryId),
                NodeKey = nodeKey
            };

            OpportunityHeadingEntity opportunityHeadingEntity = _opportunityPublished.OpportunityHeading.LastOrDefault();
            if (opportunityHeadingEntity != null)
            {
                opportunityHeading.HeadingId = ++_headingId;
            }

            OpportunityHeadingEntity parentOpportunityHeading = null;

            if (nodeKey.Contains("/"))
            {
                GetParentHeading(_opportunityPublished.OpportunityHeading, nodeKey.Substring(0, nodeKey.LastIndexOf('/')), ref parentOpportunityHeading);
            }

            if (parentOpportunityHeading != null)
            {
                //opportunityHeading.Opportunity = _opportunity;

                //parentOpportunityHeading.InverseParentHeading.Add(opportunityHeading);
                opportunityHeading.ParentHeadingId = parentOpportunityHeading.HeadingId;
                _opportunityPublished.OpportunityHeading.Add(opportunityHeading);
            }
            else
            {
                _opportunityPublished.OpportunityHeading.Add(opportunityHeading);
            }

            return opportunityHeading;
        }

        private void PopulateOpportunityContent(HTMLLineModel htmlLineModel, OpportunityHeadingEntity opportunityHeading, int contentIndex)
        {

            if (htmlLineModel.HtmlLine.InnerText.Contains("The scope of this solicitation encompasses the following"))
            {
                var temp = "stop";
            }

            OpportunityContentEntity opportunityContent = new OpportunityContentEntity
            {

                OppContent = htmlLineModel.HtmlLine.OuterHtml,
                IndexNumber = contentIndex

            };

            opportunityHeading.OpportunityContent.Add(opportunityContent);
        }

        private void PopulateOpportunityContentPublished(HTMLLineModel htmlLineModel, OpportunityHeadingEntity opportunityHeading, int contentIndex)
        {

            OpportunityContentEntity opportunityContentEntity = opportunityHeading.OpportunityContent.LastOrDefault();

            OpportunityContentEntity opportunityContent = new OpportunityContentEntity
            {
                HeadingId = opportunityHeading.HeadingId,
                DetailId = 1,
                OppContent = htmlLineModel.HtmlLine.OuterHtml,
                IndexNumber = contentIndex
            };

            if (opportunityContentEntity != null)
            {
                opportunityContent.DetailId = opportunityContentEntity.DetailId + 1;
            }

            opportunityHeading.OpportunityContent.Add(opportunityContent);
        }
        private void GetParentHeading(ICollection<OpportunityHeadingEntity> opportunityHeadingList, string nodeKey, ref OpportunityHeadingEntity refHeading)
        {

            foreach (var heading in opportunityHeadingList)
            {
                if (heading.NodeKey == nodeKey)
                {
                    refHeading = heading;
                }

                GetParentHeading(heading.InverseParentHeading, nodeKey, ref refHeading);
            }


        }

        private string GetCategoryId()
        {
            foreach (var htmlLineModel in _htmlLineModelList)
            {
                string categoryId = htmlLineModel.HtmlLine.GetAttributeValue("data-category", "");
                if (categoryId == "")
                {
                    return categoryId;
                }
            }

            return "";
        }



        private void SetNodeKey(decimal categoryId)
        {

            List<LineDetailModel> lineDetailCollection = _lineCleanup.GetCleanLineDetailCollection(_htmlLineModelList);

            if (lineDetailCollection != null && lineDetailCollection.Count > 0)
            {

                bool treeStatus = _opportunityNodeTree.CreateNodeTree(lineDetailCollection);


                if (treeStatus == true)
                {
                    foreach (var lineDetail in lineDetailCollection)
                    {
                        //HtmlNode node = _htmlLineModelList.FirstOrDefault(line => line.LineNumber == lineDetail.LineNumber).HtmlLine;

                        HTMLLineModel HTMLLine = _htmlLineModelList.FirstOrDefault(line => line.LineNumber == lineDetail.LineNumber);

                        HTMLLine.Content = lineDetail.Content;
                        HtmlNode node = HTMLLine.HtmlLine;
                        SetAttribute(node, lineDetail.NodeKey, categoryId);
                    }
                }
            }
        }

        private void SetAttribute(HtmlNode node, string key, decimal categoryId)
        {
            HtmlAttribute attributeCategory = node.Attributes["data-category"];
            HtmlAttribute attributeKey = node.Attributes["data-Key"];

            if (attributeCategory != null)
            {
                attributeCategory.Value = Convert.ToString(categoryId);
            }
            else
            {
                node.Attributes.Add("data-category", Convert.ToString(categoryId));
            }

            if (attributeKey != null)
            {
                attributeKey.Value = key;
            }
            else
            {
                node.Attributes.Add("data-Key", key);
            }
        }

        private decimal ChangeCategoryIdForBizLink(decimal categoryId)
        {
            CategoryEntity category = _categoriesList.FirstOrDefault(cat => cat.CategoryId == categoryId);

            if (category == null)
            {
                return 0;
            }
            else
            {
                return category.IdForZbizlink;
            }



        }

    }
}
