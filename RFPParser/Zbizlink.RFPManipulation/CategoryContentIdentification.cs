using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPCommon.Factory.Contracts;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPManipulation.Models;
using Zdaas.RFPNodeTree.Contracts;
using commonUtility = Zdaas.RFPCommon.Utility;


namespace Zdaas.RFPManipulation
{
    public class CategoryContentIdentification : ICategoryContentIdentification
    {
        private int _SynonymID;

        private List<TreeNodeModel> _treeNodeCollection;
        private List<HTMLLineModel> _htmlLineCollection;
        private List<TreeNodeModel> _finalCategorycontentsList = new List<TreeNodeModel>();
        private List<LineDetailModel> _lineDetailCollection;
        private IListNumberCreationFactory _listNumberCreationFactory;
        private bool _documentSection;
        public CategoryContentIdentification(IListNumberCreationFactory listNumberCreationFactory)
        {
            _listNumberCreationFactory = listNumberCreationFactory;
        }
        //public IEnumerable<TreeNodeModel> GetCategoryContents(CategoryHeadingModel categoryHeadings, 
        //    List<HTMLLineModel> htmlLineCollection, INodeTree nodeTree)
        //{
        //    _treeNodeCollection = nodeTree.Tree;
        //    _htmlLineCollection = htmlLineCollection;
        //    _finalCategorycontentsList.Clear();



        //    if (categoryHeadings.LineDetails != null)
        //    {

        //        foreach (var categoryHeading in categoryHeadings.LineDetails)
        //        {

        //              _SynonymID += 1;
        //            GetCategoryContents(categoryHeading.LineNumber);
        //        }
        //    }


        //    _SynonymID = 0;

        //    return _finalCategorycontentsList;
        //}

        //private void GetCategoryContents(int lineNumber)
        //{
        //    //List<TreeNodeModel> categoryContentLines;

        //    TreeNodeModel categoryHeadingFromTree = _treeNodeCollection.FirstOrDefault(line => line.LineNumber == lineNumber);

        //    var categoryContentLines = _treeNodeCollection.Where(lines => (lines.NodeKey == categoryHeadingFromTree.NodeKey || lines.NodeKey.StartsWith(categoryHeadingFromTree.NodeKey + "/"))
        //                                                                    && lines.LineNumber >= categoryHeadingFromTree.LineNumber).ToList();


        //    foreach (var item in categoryContentLines)
        //    {
        //        var treeNode = _finalCategorycontentsList.FirstOrDefault(lineNum => lineNum.LineNumber == item.LineNumber);

        //        if (treeNode == null)
        //        {
        //            _finalCategorycontentsList.Add(item);
        //        }
        //    }

        //}



        public IEnumerable<TreeNodeModel> GetCategoryContents(List<LineDetailModel> lineDetailCollection, CategoryHeadingModel categoryHeadings,
            List<HTMLLineModel> htmlLineCollection, INodeTree nodeTree)
            {
            _treeNodeCollection = nodeTree.Tree;
            _htmlLineCollection = htmlLineCollection;
            _finalCategorycontentsList.Clear();
            _lineDetailCollection = lineDetailCollection;

            List<LineDetailModel> DocumentSectionHeading = lineDetailCollection.Where(line => line.DocumentSectionHeading == true).ToList();
            if (DocumentSectionHeading != null && DocumentSectionHeading.Count > 0)
            {
                _documentSection = true;
            }
            if (categoryHeadings.LineDetails != null)
            {

                foreach (var categoryHeading in categoryHeadings.LineDetails)
                {
                    GetCategoryContents(categoryHeading);
                }
            }

            _SynonymID = 0;

            return _finalCategorycontentsList;
        }
        private void GetCategoryContents(LineDetailModel categoryHeading)
        {

            if (categoryHeading.Text.Contains("Background"))
            {
                var temp = "";
            }

            List<LineDetailModel> headingWithContent = new List<LineDetailModel>();
            headingWithContent.Add(categoryHeading);

            List<LineDetailModel> categoryHeadingOnwordCollection = _lineDetailCollection.Where(line => line.LineNumber > categoryHeading.LineNumber).ToList();

            if (categoryHeading.TypeOfListNumber != null && categoryHeading.TypeOfList == RFPCommon.Enum.TypesOfList.NumberDotNumber)
            {
                NumberDotNumber(categoryHeading, categoryHeadingOnwordCollection, headingWithContent);
            }
            else if (categoryHeading.TypeOfListNumber != null && categoryHeading.TypeOfList == RFPCommon.Enum.TypesOfList.Number)
            {
                Number(categoryHeading, categoryHeadingOnwordCollection, headingWithContent);
            }
            else if (categoryHeading.TypeOfListNumber != null && categoryHeading.TypeOfList == RFPCommon.Enum.TypesOfList.NumberDot)
            {
                NumberDot(categoryHeading, categoryHeadingOnwordCollection, headingWithContent);
            }
            else if (categoryHeading.TypeOfListNumber == null)
            {
                Heading(categoryHeading, categoryHeadingOnwordCollection, headingWithContent);
            }
            else
            {
                string temp = "";
            }


            if (headingWithContent.Count == 1 &&
                headingWithContent[0].HeadingInSubLine == true &&
                headingWithContent[0].Text == headingWithContent[0].SubLineDetailCollection[0].Text)
            {
                return;
            }

            foreach (var item in headingWithContent)
            {

                var treeNode = _finalCategorycontentsList.FirstOrDefault(lineNum => lineNum.LineNumber == item.LineNumber);

                if (treeNode == null)
                {
                    TreeNodeModel Node = _treeNodeCollection.FirstOrDefault(line => line.LineNumber == item.LineNumber);
                    _finalCategorycontentsList.Add(Node);
                }
            }

        }

        private void Heading(LineDetailModel categoryHeading, List<LineDetailModel> categoryHeadingOnwordCollection, List<LineDetailModel> headingWithContent)
        {
            int docSectionLineNumber = 0;

            if (_documentSection == true)
            {
                LineDetailModel docSectionLine = categoryHeadingOnwordCollection.FirstOrDefault(Line => Line.DocumentSectionHeading == true);

                if (docSectionLine != null)
                {
                    docSectionLineNumber = docSectionLine.LineNumber;
                }
            }

            foreach (var categoryHeadingOnword in categoryHeadingOnwordCollection)
            {
                if(categoryHeading.Element == "table")
                {
                    if(categoryHeadingOnword.Element == "table")
                    {
                        headingWithContent.Add(categoryHeadingOnword);
                    }
                    else
                    {
                        break;
                    }
                }
                if (categoryHeadingOnword.LineNumber == docSectionLineNumber)
                {
                    break;
                }
                else if (categoryHeadingOnword.HeadingElement == false && categoryHeadingOnword.HeadingInSubLine == false)
                {
                    headingWithContent.Add(categoryHeadingOnword);
                }
                else if ((categoryHeadingOnword.FontSize == categoryHeading.FontSize &&
                     categoryHeadingOnword.TextAlign == categoryHeading.TextAlign))
                {
                    break;
                }
                else
                {
                    headingWithContent.Add(categoryHeadingOnword);
                }


            }
        }

        private void NumberDot(LineDetailModel categoryHeading, List<LineDetailModel> categoryHeadingOnwordCollection, List<LineDetailModel> headingWithContent)
        {
            List<LineDetailModel> tempHeadingWithContent = new List<LineDetailModel>();
            var numberDot = _listNumberCreationFactory.GetObject(RFPCommon.Enum.TypesOfList.NumberDot);

            string numberSbling = numberDot.GetSibling(categoryHeading.TypeOfListNumber);

            foreach (var categoryHeadingOnword in categoryHeadingOnwordCollection)
            {
                if (categoryHeading.TypeOfList == categoryHeadingOnword.TypeOfList &&
                    (categoryHeadingOnword.TypeOfListNumber == numberSbling || categoryHeadingOnword.TypeOfListNumber == categoryHeading.TypeOfListNumber))
                {
                    break;
                }
                else if (commonUtility.ConvertIntoDouble(categoryHeadingOnword.MarginLeft) > commonUtility.ConvertIntoDouble(categoryHeading.MarginLeft))
                {


                    headingWithContent.Add(categoryHeadingOnword);


                }
                else
                {
                    break;
                }
            }


        }

        private void Number(LineDetailModel categoryHeading, List<LineDetailModel> categoryHeadingOnwordCollection, List<LineDetailModel> headingWithContent)
        {
            //List<LineDetailModel> tempHeadingWithContent = new List<LineDetailModel>();
            var numberDotNumber = _listNumberCreationFactory.GetObject(RFPCommon.Enum.TypesOfList.Number);

            string numberSbling = numberDotNumber.GetSibling(categoryHeading.TypeOfListNumber);

            foreach (var categoryHeadingOnword in categoryHeadingOnwordCollection)
            {
                if (categoryHeading.HeadingContainSection == true)
                {
                    headingWithContent.Add(categoryHeadingOnword);

                    if (categoryHeadingOnword.HeadingContainSection == true) break;

                }else if (categoryHeading.TypeOfList == categoryHeadingOnword.TypeOfList &&
                    categoryHeadingOnword.TypeOfListNumber == numberSbling)
                {
                    break;
                }
                else if (categoryHeadingOnword.LeftIndentPT > categoryHeading.LeftIndentPT)
                {
                    headingWithContent.Add(categoryHeadingOnword);
                }

            }
        }

        private void NumberDotNumber(LineDetailModel categoryHeading,
            List<LineDetailModel> categoryHeadingOnwordCollection,
            List<LineDetailModel> headingWithContent)
        {

            var numberDotNumber = _listNumberCreationFactory.GetObject(RFPCommon.Enum.TypesOfList.NumberDotNumber);

            string numberSbling = numberDotNumber.GetSibling(categoryHeading.TypeOfListNumber);

            foreach (var categoryHeadingOnword in categoryHeadingOnwordCollection)
            {
                if (categoryHeading.TypeOfList == categoryHeadingOnword.TypeOfList &&
                    categoryHeadingOnword.TypeOfListNumber == numberSbling)
                {
                    break;
                }
                else
                {
                    headingWithContent.Add(categoryHeadingOnword);
                }
            }
        }
    }
}
