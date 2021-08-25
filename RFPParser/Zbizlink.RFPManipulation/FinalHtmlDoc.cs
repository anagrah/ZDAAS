using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPLaborCategory.Contracts;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPManipulation
{
    public class FinalHtmlDoc : IFinalHtmlDoc
    {

        private ICategoryContentIdentification _categoryContentIdentification;
        private ILaborContentIdentification _laborContentIdentification;
        private List<HTMLLineModel> _htmlLineCollection;
        private HtmlDocument _htmlDocument;
        private List<CategoryData> _categoryDataList;
        private ILaborContentIdentificationNew _laborContentIdentificationNew;

        //private ILabor _labor;
        //private LaborContentIdentification _laborContentIdentification;
        private List<LineDetailModel> _lineDetailCollection;
        //private ILaborHeadingIdentification _laborIdentification;
        private List<decimal> _categoryDataIdList = new List<decimal>();
        public FinalHtmlDoc(ILaborContentIdentification laborContentIdentification,
            ICategoryContentIdentification categoryContentIdentification,
            ILaborContentIdentificationNew laborContentIdentificationNew,
            ILaborHeadingIdentification laborIdentification)
        {
            _laborContentIdentificationNew = laborContentIdentificationNew;
            _categoryContentIdentification = categoryContentIdentification;
            //_labor = labor;
            // _laborContentIdentification = new LaborContentIdentification();

            _laborContentIdentification = laborContentIdentification;
            // _laborIdentification = laborIdentification;
        }


        // it will return array
        //public List<HTMLLineModel> CreateFinalDocNew(List<CategoryHeadingModel> categoryHeadingCollection, List<HTMLLineModel> htmlLineCollection, HtmlDocument htmlDocument, INodeTree nodeTree)
        //{
        //    _htmlLineCollection = htmlLineCollection;
        //    _htmlDocument = htmlDocument;

        //    foreach (var categoryHeadings in categoryHeadingCollection)
        //    {
        //        IEnumerable<TreeNodeModel> categoryContent = _categoryContentIdentification.GetCategoryContents(categoryHeadings, htmlLineCollection, nodeTree);
        //        AddAttributes(categoryContent, categoryHeadings.CategoryId, categoryHeadings.Color);


        //    }


        //    PopulateDocument();


        //    return _htmlLineCollection;
        //}

        public string CreateFinalDoc(List<CategoryHeadingModel> categoryHeadingCollection, List<HTMLLineModel> htmlLineCollection,
            HtmlDocument htmlDocument, INodeTree nodeTree, List<CategoryData> categoryDataList, List<CategoryEntity> categories,
            List<LineDetailModel> lineDetailCollection, List<JobTitleWordEntity> jobTitleWordList, List<LaborHeadingEntity> LaborHeadingList)
        {
            _categoryDataList = categoryDataList;
            _htmlLineCollection = htmlLineCollection;
            _htmlDocument = htmlDocument;
            _lineDetailCollection = lineDetailCollection;
            IEnumerable<TreeNodeModel> categoryContent = null;
            bool categoryHeadingExist = false;

            foreach (var categoryHeadings in categoryHeadingCollection)
            {
                (categoryContent as List<TreeNodeModel>)?.Clear();

                // New
                //if (categoryHeadings.CategoryName == "Labor" && categoryHeadings.LineDetails.Count() > 0)
                //{
                //    categoryHeadingExist = true;
                //    categoryContent = _laborContentIdentification.GetCategoryContents(categoryHeadings, htmlLineCollection, nodeTree, categories, lineDetailCollection);
                //    //List<JobTitleModel> jobTitleModelList = _laborContentIdentificationNew.GetCategoryContents(categoryHeadings, htmlLineCollection, nodeTree, categories, lineDetailCollection, LaborHeadingList);
                //    //categoryContent = AddfinalCategoryContents(jobTitleModelList);
                //}
                //else
                //{
                    categoryContent = _categoryContentIdentification.GetCategoryContents(lineDetailCollection, categoryHeadings, htmlLineCollection, nodeTree);
                //}

                AddAttributes(categoryContent, categoryHeadings.CategoryId, categoryHeadings.Color);

            }

            //CategoryHeadingModel  categoryLabor = categoryHeadingCollection.FirstOrDefault(cat => cat.CategoryName == "Labor");
            //if(categoryLabor == null)
            //{
            //    CategoryEntity categoryEntity =  categories.FirstOrDefault(cat => cat.Name == "Labor");
            //    if(categoryEntity != null)
            //    {
            //        categoryHeadingCollection.Clear();
            //        categoryHeadingCollection = _laborIdentification.Get(nodeTree, jobTitleWordList, LaborHeadingList, categoryEntity.CategoryId);
            //        AddAttributes(categoryContent, categoryEntity.CategoryId, categoryEntity.Color);
            //    }

            //}

            PopulateDocument();

            //AddElementInEmptyCategories(categories);

            return _htmlDocument.DocumentNode.InnerHtml;
        }

        private void AddAttributes(IEnumerable<TreeNodeModel> categoryContentList, decimal categoryId, string color)
        {
            CategoryData categoryData = new CategoryData();
            categoryData.CategoryId = categoryId;
            _categoryDataIdList.Add(categoryId);


            foreach (var categoryContentLine in categoryContentList)
            {
                HtmlNode htmlNode = _htmlLineCollection.FirstOrDefault(line => line.LineNumber == categoryContentLine.LineNumber).HtmlLine;

                SetCategoryAttribute(htmlNode, categoryId, color, categoryContentLine.NodeKey);
                SetColorAttribute(htmlNode, color);


                categoryData.HTMLNodeList.Add(htmlNode);

            }

            _categoryDataList.Add(categoryData);
        }

        private void SetDataKeyAttribute(HTMLLineModel htmlLine)
        {
            var node = _lineDetailCollection.FirstOrDefault(Line => Line.LineNumber == htmlLine.LineNumber);

            //var node = _htmlLineCollection.FirstOrDefault(htmlLine => htmlLine.LineNumber == lineDetail.LineNumber);
            if (node != null)
            {
                HtmlAttribute htmlKeyAttribute = _htmlDocument.CreateAttribute("data-Key", node.NodeKey);
                htmlLine.HtmlLine.Attributes.Add(htmlKeyAttribute);
            }


        }
        private void SetCategoryAttribute(HtmlNode htmlNode, decimal categoryId, string color, string categoryKey)
        {
            if (htmlNode.InnerText.Contains("Deliverable Descriptions/Acceptance"))
            {
                var temp = "";
            }

            var attributeCategory = htmlNode.Attributes.FirstOrDefault(v => v.Name.ToLower().Trim() == "data-category");

            if (attributeCategory == null)
            {
                //HtmlAttribute htmlCategoryAttribute = _htmlDocument.CreateAttribute("data-category", categoryName + "/" + categoryKey);
                HtmlAttribute htmlCategoryAttribute = _htmlDocument.CreateAttribute("data-category", categoryId.ToString());
                HtmlAttribute htmlCatAttribute = _htmlDocument.CreateAttribute("data-cat", "");

                //HtmlAttribute htmlKeyAttribute = _htmlDocument.CreateAttribute("data-Key", categoryKey);

                htmlNode.Attributes.Add(htmlCategoryAttribute);
                htmlNode.Attributes.Add(htmlCatAttribute);
                //htmlNode.Attributes.Add(htmlKeyAttribute);

            }
            else
            {
                attributeCategory.Value = attributeCategory.Value + "-" + categoryId;
            }

        }


        private void SetColorAttribute(HtmlNode htmlNode, string color)
        {
            var attributeStyle = htmlNode.Attributes.FirstOrDefault(v => v.Name.ToLower().Trim() == "style");

            if (attributeStyle != null)
            {
                htmlNode.Attributes.Remove(attributeStyle);
                //var value = SetAttributeColor(attributeStyle, color);
                string value = PlaceOrReplaceColor(attributeStyle, color);
                attributeStyle = _htmlDocument.CreateAttribute("style", value);
            }
            else
            {
                attributeStyle = _htmlDocument.CreateAttribute("style", "color:" + color);
            }

            htmlNode.Attributes.Add(attributeStyle);
        }

        private string PlaceOrReplaceColor(HtmlAttribute attribute, string color)
        {
            string colorAttributeValue = "";

            var existingColor = GetColor(attribute);

            if (existingColor != "")
            {
                colorAttributeValue = attribute.Value.Replace(existingColor.Trim(), color);
            }
            else
            {

                colorAttributeValue = attribute.Value + "; color:" + color;
            }

            return colorAttributeValue;
        }
        private string GetColor(HtmlAttribute htmlAttribute)
        {

            var attributeValueArray = htmlAttribute.Value.Split(';');

            foreach (var attributeValue in attributeValueArray)
            {
                var NameValuePairOfattributeValue = attributeValue.Split(':');

                if (NameValuePairOfattributeValue[0].ToLower().Trim() == "color")
                {
                    return NameValuePairOfattributeValue[1];
                }

            }

            return "";
        }


        private void PopulateDocument()
        {
            HtmlNode htmlBody = _htmlDocument.DocumentNode.SelectSingleNode("html//body//div");
            htmlBody.RemoveAllChildren();


            StringBuilder sb = new StringBuilder();
            foreach (var item in _htmlLineCollection)
            {

                //if (item.HtmlLine.Name == "table")
                //{
                //    List<HtmlNode> tableList = GetTableBreakup(item.HtmlLine);
                //    foreach (var table in tableList)
                //    {
                //        sb.Append(table.OuterHtml);
                //    }

                //}
                //else
                //{
                SetDataKeyAttribute(item);
                sb.Append(item.HtmlLine.OuterHtml);
                //}



            }


            htmlBody.SelectSingleNode("//div").InnerHtml = sb.ToString();


        }

        private void AddElementInEmptyCategories(List<CategoryEntity> categories)
        {

            var categoryIdList = categories.Where(cat1 => _categoryDataIdList.All(cat2 => cat2 != cat1.CategoryId));


            foreach (var categoryData in _categoryDataList)
            {
                var count = categoryData.HTMLNodeList.Count();
                HtmlNode lastNode = categoryData.HTMLNodeList[categoryData.HTMLNodeList.Count() - 1];
                string key = GetKey(lastNode);
                HtmlNode htmlNode = HtmlNode.CreateNode("<div> </div>");

                SetCategoryAttribute(htmlNode, categoryData.CategoryId, "black", key);
                categoryData.HTMLNodeList.Add(htmlNode);
            }

            foreach (var category in categoryIdList)
            {
                List<HtmlNode> htmlNodesList = new List<HtmlNode>();
                HtmlNode htmlNode = HtmlNode.CreateNode("<div>          </div>");

                SetCategoryAttribute(htmlNode, category.CategoryId, "black", "1");

                htmlNodesList.Add(htmlNode);

                _categoryDataList.Add(new CategoryData()
                {
                    CategoryId = category.CategoryId,
                    HTMLNodeList = htmlNodesList
                });
            }

        }

        private string GetKey(HtmlNode htmlNode)
        {

            HtmlAttribute categoryAttribute = htmlNode.Attributes.FirstOrDefault(v => v.Name.ToLower().Trim() == "data-key");

            if (categoryAttribute != null)
            {
                return categoryAttribute.Value;
            }

            HtmlNode divNode = HtmlNode.CreateNode("<div></div>");

            return "1";
        }

        //private List<HtmlNode> GetTableBreakup(HtmlNode tableNode)
        //{
        //    if (tableNode.InnerText.Contains("Background"))
        //    {
        //        var t = "";
        //    }
        //    List<HtmlNode> tableList = new List<HtmlNode>();

        //    HtmlNodeCollection trCollection = tableNode.SelectNodes("tr");

        //    if (trCollection == null)
        //    {
        //        tableList.Add(tableNode);
        //        return tableList;
        //    }

        //    foreach (var item in trCollection)
        //    {
        //        HtmlNode tNode = tableNode.Clone();
        //        tNode.RemoveAllChildren();
        //        tNode.InnerHtml = item.OuterHtml;
        //        tableList.Add(tNode);
        //    }
        //    return tableList;
        //}

        private List<TreeNodeModel> AddfinalCategoryContents(List<JobTitleModel> jobTitleModelList)
        {
            int previousLineNumber = 0;
            List<TreeNodeModel> categoryContent = new List<TreeNodeModel>();

            foreach (var jobTitle in jobTitleModelList)
            {

                if (previousLineNumber != jobTitle.LineNumber)
                {

                    TreeNodeModel treeNodeModelTitle = new TreeNodeModel
                    {
                        LineNumber = jobTitle.LineNumber,
                        NodeKey = jobTitle.NodeKey,
                        Text = jobTitle.Text
                    };
                    categoryContent.Add(treeNodeModelTitle);
                    previousLineNumber = jobTitle.LineNumber;

                    foreach (var JobDescription in jobTitle.JobDescription)
                    {

                        if (JobDescription.HeadingLineNumber != JobDescription.DetailLineNumber)
                        {

                            TreeNodeModel treeNodeModelHeading = new TreeNodeModel();
                            treeNodeModelHeading.LineNumber = JobDescription.HeadingLineNumber;
                            treeNodeModelHeading.NodeKey = JobDescription.NodeKey;
                            treeNodeModelHeading.Text = JobDescription.Text;

                            categoryContent.Add(treeNodeModelHeading);


                            if (JobDescription.DetailList != null)
                            {
                                foreach (var detail in JobDescription.DetailList)
                                {
                                    TreeNodeModel treeNodeModelDetail = new TreeNodeModel();
                                    treeNodeModelDetail.LineNumber = detail.DetailLineNumber;
                                    treeNodeModelDetail.NodeKey = detail.NodeKey;
                                    treeNodeModelDetail.Text = detail.DetailText;

                                    categoryContent.Add(treeNodeModelDetail);
                                }
                            }
                        }
                        else
                        {
                            TreeNodeModel treeNodeModelHeading = new TreeNodeModel();
                            treeNodeModelHeading.LineNumber = JobDescription.HeadingLineNumber;
                            treeNodeModelHeading.NodeKey = JobDescription.NodeKey;
                            treeNodeModelHeading.Text = JobDescription.Text;

                            categoryContent.Add(treeNodeModelHeading);
                        }
                    }
                }
            }
            return categoryContent;
        }
    }
}
