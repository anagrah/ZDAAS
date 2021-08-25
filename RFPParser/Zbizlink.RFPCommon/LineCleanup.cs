using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Enum;

using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPCommon
{
    public class LineCleanup : ILineCleanup
    {

        private IBold _bold;
        private List<LineDetailModel> _lineDetailCollection = null;
        private int _tableOfContentlineLimit = 290;
        private IHtmlAttributeValue _htmlAttributeValue;
        private IMarginLeftAttributeValue _marginLeftAttributeValue;
        private IListTypeRecognition _listTypeRecognition;
        IDocumentSectionIdentification _documentSectionIdentification;
        public LineCleanup(IListTypeRecognition listTypeRecognition,
            IBold bold, IHtmlAttributeValue htmlAttributeValue,
            IMarginLeftAttributeValue marginLeftAttributeValue, IDocumentSectionIdentification documentSectionIdentification)
        {
            _bold = bold;
            _listTypeRecognition = listTypeRecognition;
            _htmlAttributeValue = htmlAttributeValue;
            _marginLeftAttributeValue = marginLeftAttributeValue;
            _documentSectionIdentification = documentSectionIdentification;
        }

        //public List<LineDetailModel> GetCleanLineDetailCollection(List<HTMLLineModel> htmlLineCollection, HtmlNode headNode)
        public List<LineDetailModel> GetCleanLineDetailCollection(List<HTMLLineModel> htmlLineCollection)
        {
            //_fontSize = new FontSize(headNode);
            // _fontSize = new FontSize();

            LineDetailModel lineDetail;
            _lineDetailCollection = new List<LineDetailModel>();
            int listIndex = 0;
            foreach (var node in htmlLineCollection)
            {
                if (node.HtmlLine.InnerText.Contains("For any contracts that did not/do not meet original schedule or technical"))
                {
                    var t = "";
                }
                var text = Utility.LineCleanup(node.HtmlLine.InnerText);

                if (text == "")
                {
                    if (text == "")
                    {
                        if (RFPCommon.Utility.ImgElementExist(node.HtmlLine) == false) continue;
                    }
                }
                    

                lineDetail = new LineDetailModel();

                //lineDetail.SubLineDetailCollection = GetSubLineDeatil(node.HtmlLine, node.LineNumber);
                GetSubLineDeatil(node.HtmlLine, node.LineNumber, lineDetail);

                lineDetail.LineNumber = node.LineNumber;
                lineDetail.Element = node.HtmlLine.Name;

                lineDetail.Text = Utility.GetNodeText(node.HtmlLine);

                //lineDetail.IsRequiredElement = HasRequiredElement(node.HtmlLine);

                if (lineDetail.HeadingElement == false)
                {
                    if (GetParentRequiredElementName(node.HtmlLine) != "")
                        lineDetail.HeadingElement = true;
                }

                if (lineDetail.HeadingElement == true && lineDetail.HeadingElementName == null)
                {
                    lineDetail.HeadingElementName = GetParentRequiredElementName(node.HtmlLine);
                }

                lineDetail.FirstNodeText = Utility.GetOneNodeText(node.HtmlLine);

                lineDetail.Node = node.HtmlLine;


                if (lineDetail.FontSize == 0)
                {

                    lineDetail.FontSize = Utility.GetAttributeVlueFromChild<double>(lineDetail, "font-size");
                }

                lineDetail.TextAlign = _htmlAttributeValue.Get(node.HtmlLine, "text-align");

                if (lineDetail.TextAlign == null || lineDetail.TextAlign == "")
                {

                    lineDetail.TextAlign = Utility.GetAttributeVlueFromChild<string>(lineDetail, "text-align");
                }

                PopulateIndentationAndPT(lineDetail, node);


                RearrangeSublineDetail(lineDetail);
                if (lineDetail.Text.Contains("Provides cost estimating and financial management"))
                {
                    var t = "";
                }
                GetRequiredElementFromChild(lineDetail);

                if (lineDetail.HeadingInSubLine != true)
                {
                    lineDetail.HeadingInSubLine = _bold.GetBoldStatus(lineDetail);

                    if(lineDetail.HeadingInSubLine == true)
                    lineDetail.HeadingInSubLineText = ExtreactHeadingTextInSubline(lineDetail);
                }
                if(lineDetail.Text.Contains("The USAF EOS is the Air Force"))
                {
                    var temp = "";
                }
                if (lineDetail.LineNumber < _tableOfContentlineLimit && TableOfContents(lineDetail) == true)
                {
                    lineDetail.TypeOfList = TypesOfList.TableOfContents;
                }

                if (lineDetail.TypeOfList != TypesOfList.TableOfContents)
                {
                  
                    RecognizeListType(lineDetail);
                }
                lineDetail.ListIndex = listIndex++;
                _lineDetailCollection.Add(lineDetail);
            }

            
            _documentSectionIdentification.DocSectionIdentify(_lineDetailCollection);
            int FirstIndex = _lineDetailCollection.FindIndex(line => line.TypeOfList == TypesOfList.TableOfContents);
            int lastIndex = _lineDetailCollection.FindLastIndex(line => line.TypeOfList == TypesOfList.TableOfContents);

            if (lastIndex > 5)
            {
                _lineDetailCollection.RemoveRange(FirstIndex, (lastIndex - FirstIndex) + 1);
            }

            //DocSectionIdentification(_lineDetailCollection);

            //var temp1 = _lineDetailCollection.Where(line => line.LineNumber == 295);
            return _lineDetailCollection;
        }

       
        private string ExtreactHeadingTextInSubline(LineDetailModel lineDetail)
        {
           
            string HeadingTextInSubline = "";
            foreach (var subLineDetail in lineDetail.SubLineDetailCollection)
            {
                if(subLineDetail.HeadingElementName == "b")
                {
                    HeadingTextInSubline += subLineDetail.Text + " ";
                }
                else{
                    break;
                }
                
            }
            return HeadingTextInSubline.Trim();
        }

        //private void DocSectionIdentification(List<LineDetailModel> lineDetailCollection)
        //{

        //    foreach (var lineDetail in lineDetailCollection)
        //    {
        //        if(lineDetail.Text.ToLower().Contains("section") && lineDetail.Text.Trim().Length < 12)
        //        {
        //            lineDetail.LineContainSection = true;
        //        }
        //    }
            
            
        //}

        private bool HasRequiredElement(HtmlNode htmlNode)
        {

            if (Zdaas.RFPCommon.Utility.IsExpectedElement(htmlNode) == true) return true;

            if (GetParentRequiredElementName(htmlNode) != "") return true;

            foreach (var item in Zdaas.RFPCommon.Utility.ElementList)
            {
                if (htmlNode.InnerHtml.Contains("<" + item + ">")) return true;
            }

            return false;
        }

        private string GetParentRequiredElementName(HtmlNode htmlNode)
        {
            string currentElementName = htmlNode.Name;

            if (Zdaas.RFPCommon.Utility.IsExpectedElement(htmlNode) == true) return currentElementName;

            while (htmlNode != null)
            {
                htmlNode = htmlNode.ParentNode;
                if (htmlNode == null) break;
                if (Zdaas.RFPCommon.Utility.IsExpectedElement(htmlNode))
                {
                    return htmlNode.Name;
                }
            }

            return "";
        }

        private List<LineDetailModel> GetSubLineDeatil(HtmlNode htmlNode, int lineNumber, LineDetailModel lineDetail)
        {
            HtmlNode previousNode = null;
            HtmlNode expectedElementNode = null;
            List<LineDetailModel> lineDetailCollectionTemp = new List<LineDetailModel>();
            bool tableOfContent = false;

            if (htmlNode.Name == "table")
            {
                var trs = ExtractTableStructure(htmlNode);
                foreach (var tr in trs)
                {
                    childRecur(tr.ChildNodes, lineNumber, previousNode, expectedElementNode, lineDetailCollectionTemp, tableOfContent);
                    HtmlNodeCollection tds = tr.SelectNodes("//td");

                    foreach (var td in tds)
                    {
                        PopulateTdNode(td, lineNumber, lineDetail);
                    }
                    lineDetail.SubLineDetailCollection = lineDetailCollectionTemp;
                }
            }
            else
            {
                childRecur(htmlNode.ChildNodes, lineNumber, previousNode, expectedElementNode, lineDetailCollectionTemp, tableOfContent);
                lineDetail.SubLineDetailCollection = lineDetailCollectionTemp;
            }



            return lineDetailCollectionTemp;
        }

        private void childRecur(HtmlNodeCollection htmlNode, int lineNumber, HtmlNode previousNode, HtmlNode expectedElementNode, List<LineDetailModel> lineDetailCollectionTemp, bool tableOfContent)
        {
            // bool tableOfContent = false;
            //LineDetailModel lineDetail = null;
            foreach (var item in htmlNode)
            {

                if (item.Name == "#text") continue;

                if (Utility.LineCleanup(item.InnerText) == "") continue;

                var clone = item.CloneNode(true);
                var htmlChildNodeCollection = clone.ChildNodes;

                foreach (var ChildNode in htmlChildNodeCollection)
                {
                    ChildNode.RemoveAllChildren();

                    string cleanLine = Utility.LineCleanup(ChildNode.InnerText);

                    if (cleanLine == "") continue;

                    //string fontSize = _fontSize.GetFontSize(item);

                    if (previousNode != null && ReferenceEquals(previousNode, item))
                    {
                        lineDetailCollectionTemp.Last().Text += " " + cleanLine;
                    }
                    else
                    {
                        LineDetailModel lineDetail = new LineDetailModel();
                        lineDetail.LineNumber = lineNumber;
                        lineDetail.Element = item.Name;
                        lineDetail.HeadingElementName = GetParentElementName(item);
                        lineDetail.Text = cleanLine;


                        lineDetail.FontSize = Utility.ConvertIntoDouble(_htmlAttributeValue.Get(item, "font-size"));

                        lineDetail.TextAlign = _htmlAttributeValue.Get(item, "text-align");

                        lineDetail.MarginLeft = _marginLeftAttributeValue.Get(item);
                        lineDetail.TextIndent = _htmlAttributeValue.Get(item, "text-indent");
                        lineDetail.PaddingLeft = _htmlAttributeValue.Get(item, "padding-left");


                        lineDetail.Node = item;
                        if (GetParentRequiredElementName(item) != "")
                        {
                            lineDetail.HeadingElement = true;
                        }

                        if (lineNumber < _tableOfContentlineLimit && tableOfContent == false && TableOfContents(item) == true)
                        {
                            lineDetail.TypeOfList = TypesOfList.TableOfContents;
                            tableOfContent = true;
                        }
                        lineDetailCollectionTemp.Add(lineDetail);

                    }
                    previousNode = item;

                }

                childRecur(item.ChildNodes, lineNumber, previousNode, expectedElementNode, lineDetailCollectionTemp, tableOfContent);
            }

        }

        private void PopulateTdNode(HtmlNode tdNode, int lineNumber, LineDetailModel lineDetail)
        {
            HtmlNode previousNode = null;
            HtmlNode expectedElementNode = null;
            List<LineDetailModel> lineDetailCollectionTemp = new List<LineDetailModel>();
            bool tableOfContent = false;

            childRecur(tdNode.ChildNodes, lineNumber, previousNode, expectedElementNode, lineDetailCollectionTemp, tableOfContent);

            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Node = tdNode;
            lineDetailModel.Text = Utility.LineCleanup(tdNode.InnerText);
            if (lineDetail.TableTDList == null)
            {
                lineDetail.TableTDList = new List<LineDetailModel>();
            }

            HtmlNodeCollection childNodes = tdNode.ChildNodes;
            List<LineDetailModel> htmLLineModels = null;
            foreach (var node in childNodes)
            {
                if (node.Name == "p" && Utility.LineCleanup(node.InnerText) != "")
                {
                    if (htmLLineModels == null)
                    {
                        htmLLineModels = new List<LineDetailModel>();
                    }
                    LineDetailModel htmlLineModel = new LineDetailModel();
                    htmlLineModel.Text = Utility.LineCleanup(node.InnerText);
                    htmlLineModel.Node = node;
                    htmlLineModel.Element = node.Name;
                    htmLLineModels.Add(htmlLineModel);
                }
            }
            lineDetailModel.TableTDPElement = htmLLineModels;
            lineDetailModel.SubLineDetailCollection = lineDetailCollectionTemp;
            RearrangeSublineDetail(lineDetailModel);
            lineDetail.TableTDList.Add(lineDetailModel);

        }

        private IEnumerable<HtmlNode> ExtractTableStructure(HtmlNode htmlNode)
        {
            return htmlNode.ChildNodes.Where(node => node.Name == "tr");
        }

        private string GetParentElementName(HtmlNode htmlNode)
        {
            string currentElementName = htmlNode.Name;

            if (Zdaas.RFPCommon.Utility.IsExpectedElement(htmlNode) == true) return currentElementName;

            while (htmlNode != null)
            {
                htmlNode = htmlNode.ParentNode;

                if (htmlNode == null) break;

                if (Zdaas.RFPCommon.Utility.IsExpectedElement(htmlNode))
                {
                    return htmlNode.Name;
                }
            }

            return "";
        }

        private void PopulateIndentationAndPT(LineDetailModel lineDetail, HTMLLineModel firstNode)
        {
            if (lineDetail.Text.Contains("&nbsp;") || lineDetail.Text.Contains("&#xa0;"))
            {
                var temp = "";
            }

            if (lineDetail.Text.Contains("Documentation/Technical Writing"))
            {
                var temp = "";
            }

            int numberOfSpacesAtStart = Utility.CountHtmlWhiteSpacesAtStart(lineDetail.Text, firstNode.HtmlLine.InnerText);
            if (numberOfSpacesAtStart > 0)
            {
                lineDetail.WhiteSpace = numberOfSpacesAtStart;
                lineDetail.LeftIndentPT += Utility.ConvertIntoPT(numberOfSpacesAtStart + "ws");
            }

            lineDetail.TextIndent = _htmlAttributeValue.Get(firstNode.HtmlLine, "text-indent");
            if (lineDetail.TextIndent == "")
            {
                lineDetail.TextIndent = Utility.GetAttributeVlueFromChild<string>(lineDetail, "text-indent");
            }
            if (lineDetail.TextIndent != "")
            {
                lineDetail.LeftIndentPT += Utility.ConvertIntoPT(lineDetail.TextIndent);
            }

            lineDetail.MarginLeft = _marginLeftAttributeValue.Get(firstNode.HtmlLine);
            if (lineDetail.MarginLeft == "")
            {
                lineDetail.MarginLeft = Utility.GetAttributeVlueFromChild<string>(lineDetail, "margin-left");
            }
            if (lineDetail.MarginLeft != "")
            {
                lineDetail.LeftIndentPT += Utility.ConvertIntoPT(lineDetail.MarginLeft);
            }

            lineDetail.PaddingLeft = _htmlAttributeValue.Get(firstNode.HtmlLine, "padding-left");
            if (lineDetail.PaddingLeft == "")
            {
                lineDetail.PaddingLeft = Utility.GetAttributeVlueFromChild<string>(lineDetail, "padding-left");
            }
            if (lineDetail.PaddingLeft != "")
            {
                lineDetail.LeftIndentPT += Utility.ConvertIntoPT(lineDetail.PaddingLeft);
            }
        }

        private void GetRequiredElementFromChild(LineDetailModel lineDetailModel)
        {

            if (lineDetailModel.SubLineDetailCollection == null) return;

            if (lineDetailModel.SubLineDetailCollection.Count > 0)
            {
                if (lineDetailModel.FirstNodeText == "" && lineDetailModel.HeadingElement == false)
                {
                    if (lineDetailModel.SubLineDetailCollection[0].HeadingElement == true)
                    {


                        if (Utility.HeadingInSubLine(lineDetailModel))
                        {
                            lineDetailModel.HeadingInSubLine = true;
                        }


                    }
                }
            }

        }

        private bool TableOfContents(HtmlNode htmlNode)
        {
            while (htmlNode.ParentNode != null)
            {
                htmlNode = htmlNode.ParentNode;

                HtmlAttribute attribute = htmlNode.Attributes.FirstOrDefault(v => v.Name.ToLower().Trim() == "href");

                if (attribute != null)
                {
                    string value = attribute.Value;
                    if (attribute.Value.Contains("Toc"))
                    {
                        return true;
                    }
                }
            }

            return false;
        }
        private bool TableOfContents(LineDetailModel lineDetailModel)
        {

            if ((lineDetailModel.Text.Contains("Table of Contents") == true) &&
                (lineDetailModel.Text.Length > 10 && lineDetailModel.Text.Length < 19))
            {
                return true;
            }
            else if (lineDetailModel.Text.Contains(".....") == true)
            {
                return true;
            }
            else
            {
                if (lineDetailModel.SubLineDetailCollection != null && lineDetailModel.SubLineDetailCollection.Count > 0)
                {
                    if (lineDetailModel.SubLineDetailCollection[0].TypeOfList == TypesOfList.TableOfContents)
                    {
                        lineDetailModel.TypeOfList = TypesOfList.TableOfContents;
                    }
                }
            }


            return false;
        }


        private bool CheckBullet(LineDetailModel lineDetail)
        {

            if (lineDetail.SubLineDetailCollection != null && lineDetail.SubLineDetailCollection.Count > 0)
            {
                LineDetailModel line = lineDetail.SubLineDetailCollection[0];

                string[] firstWord = line.Text.Split("");

                if (firstWord.Count() < 1) return false;

                char[] firstLetter = firstWord[0].ToCharArray();

                if (firstLetter.Count() < 1) return false;

                int asciiCode = (int)firstLetter[0];

                //Bullet code can be find in Doc file ""
                switch (asciiCode)
                {
                    case 61558:
                        lineDetail.BulletType = BulletType.BulletTypeOne;
                        return true;
                    case 61623:
                        lineDetail.BulletType = BulletType.BulletTypeTwo;
                        return true;
                    case 216:
                        lineDetail.BulletType = BulletType.BulletTypeThree;
                        return true;
                    case 8226:
                        lineDetail.BulletType = BulletType.BulletTypeFour;
                        return true;
                    case 61656:
                        lineDetail.BulletType = BulletType.BulletTypeFive;
                        return true;

                }

            }

            return false;
        }

        private void RearrangeSublineDetail(LineDetailModel lineDetail)
        {

            if (lineDetail.SubLineDetailCollection == null || lineDetail.SubLineDetailCollection.Count < 2)
            {
                return;
            }

            //string nodeText = lineDetail.Text;

            LineDetailModel secondLineDetail = lineDetail.SubLineDetailCollection[1];

            int length = secondLineDetail.Text.Length;

            string text = lineDetail.Text.Substring(0, length);
            if (text == secondLineDetail.Text && secondLineDetail.HeadingElement == true)
            {
                LineDetailModel firstLineDetail = lineDetail.SubLineDetailCollection[0];

                lineDetail.SubLineDetailCollection[0] = secondLineDetail;
                lineDetail.SubLineDetailCollection[1] = firstLineDetail;
            }
        }

        private void RecognizeListType(LineDetailModel lineDetail)
        {
            if (lineDetail.Text.Contains("The USAF EOS is the Air"))
            {
                var temp = "";
            }
            _listTypeRecognition.RecognizeListType(lineDetail);

            if (lineDetail.HeadingElement == false) return;

            string nodeTextInLower = lineDetail.Text.ToLower();

            if (lineDetail.HeadingElement == true && nodeTextInLower.Contains("section"))
            {
                if (nodeTextInLower.StartsWith("section"))
                {
                    lineDetail.HeadingContainSection = true;
                    return;
                }
                else if (lineDetail.TypeOfListNumber != null && lineDetail.TypeOfListNumber != ""
                    && lineDetail.Text.Replace(lineDetail.TypeOfListNumber, "").Trim().ToLower().StartsWith("section"))
                {
                    lineDetail.HeadingContainSection = true;
                    return;
                }
            }
        }


    }
}
