using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.LoggerContracts;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPManipulation.Models;

namespace Zdaas.RFPManipulation
{
    public class HtmlCleanup : IHtmlCleanup
    {
        private HtmlNode _bodyNode = null;
        private List<HTMLLineModel> _htmlLineCollection;
        private HtmlDocument _htmlDocument;
        private int _lineNumber = 0;
        private int tableIndex = 0;
        private IHtmlCSSValue _htmlCSSValue;
        private HtmlNode _htmlStyleTag;
        private IHtmlAttributeValue _htmlAttributeValue;
        private ILoggerManager _logger;
        public HtmlCleanup(IHtmlCSSValue htmlCSSValue, IHtmlAttributeValue htmlAttributeValue,ILoggerManager logger)
        {
            _htmlCSSValue = htmlCSSValue;
            _htmlAttributeValue = htmlAttributeValue; 
            _logger = logger;
        }
        public List<HTMLLineModel> CleanDoc(HtmlDocument htmlDocument, string _width)
        {
            _htmlLineCollection = new List<HTMLLineModel>();
            _htmlDocument = htmlDocument;

            _bodyNode = _htmlDocument.DocumentNode.SelectSingleNode("//body");
            _htmlStyleTag = _htmlDocument.DocumentNode.SelectSingleNode("//style");
            tableIndex = 0;

            PopulateLineCollection();


            _bodyNode.RemoveAllChildren();

            SetDocumentWidth(_width);


            var nodes = _bodyNode.ChildNodes;

            PopulateRequiredNode();

            //EliminateTable();

            return _htmlLineCollection;
        }

        
        private void PopulateRequiredNode()
        {
            StringBuilder sb = new StringBuilder();
            foreach (var item in _htmlLineCollection)
            {
                if (item.HtmlLine.InnerText.Contains("FEDERAL FUNDS ATTACHMENT"))
                {
                    var t = "";
                }

                if (_htmlStyleTag != null &&(item.HtmlLine.Name == "h1"
                    || item.HtmlLine.Name == "h2"
                    || item.HtmlLine.Name == "h3"))
                {
                    InsertSizeAttributFromCSS(item.HtmlLine);
                }

                sb.Append(item.HtmlLine.OuterHtml);

            }

            _bodyNode.SelectSingleNode("div").InnerHtml = sb.ToString();
        }


        private void InsertSizeAttributFromCSS(HtmlNode htmlNode)
        {

            HtmlAttribute attributeStyle = htmlNode.Attributes.FirstOrDefault(v => v.Name.ToLower().Trim() == "style");

           

            if (attributeStyle == null)
            {
                string fontSize = _htmlCSSValue.Get(_htmlStyleTag, htmlNode, "font-size");
                if (fontSize != "")
                {
                    attributeStyle = _htmlDocument.CreateAttribute("style", "font-size: " + fontSize);
                    htmlNode.Attributes.Add(attributeStyle);
                }
            }
            else if (!attributeStyle.Value.Contains("font-size"))
            {

                string fontSize = _htmlCSSValue.Get(_htmlStyleTag, htmlNode, "font-size");
                if (fontSize != "")
                {
                    string styleValue = attributeStyle.Value;
                    attributeStyle.Value = styleValue + ";font-size:" + fontSize;
                }

            }
        }

        private void SetDocumentWidth(string _width)
        {

            HtmlNode newNode = HtmlNode.CreateNode("<div  style=\"height:auto; width: " + _width + "px;\"></div>");

            _bodyNode.AppendChild(newNode);


        }

        private void PopulateLineCollection()
        {

            foreach (var node in _bodyNode.ChildNodes)
            {
                //if ((item.Name != "#text" & item.Name != "br" & item.InnerText.Trim() != "&#xa0;"))
                if (node.Name != "#text" & node.Name != "br" & node.InnerText.Trim() != "&#xa0;")
                {
                    HtmlLineBreakup(node);
                }
            }
        }

        private void HtmlLineBreakup(HtmlNode node)
        {
            foreach (var htmlNode in node.ChildNodes)
            {
                if (htmlNode.InnerText.Contains("CONTRACT LABORERS"))
                {
                    var temp = "";
                }
                var nodeLine = htmlNode;
                if (htmlNode.Name != "#text" && htmlNode.Name != "br")
                {
                    if (htmlNode.Name == "table")
                    {
                        List<HtmlNode> tableNodes = TableBreakup(htmlNode);

                        foreach (var tableNode in tableNodes)
                        {
                            DeleteUnnecessaryLines(tableNode);
                        }
                    }
                    else
                    {
                        DeleteUnnecessaryLines(htmlNode);
                    }
                }
            }
        }
        private List<HtmlNode> TableBreakup(HtmlNode tableNode)
        {
            List<HtmlNode> tableList = new List<HtmlNode>();
            tableIndex += 1;
            HtmlNodeCollection trCollection = tableNode.SelectNodes("tr");

            if (trCollection == null)
            {
                HtmlNode theadNode = tableNode.SelectSingleNode("thead");
                HtmlNode tbodyNode = tableNode.SelectSingleNode("tbody");

                if (tbodyNode != null)
                {
                    HtmlNodeCollection tbodyTrCollection = tbodyNode.SelectNodes("tr");

                    if (tbodyTrCollection != null)
                    {
                        HtmlNode tNode = tableNode.Clone();
                        tNode.RemoveAllChildren();
                        tNode.InnerHtml = theadNode.OuterHtml;
                        tableList.Add(tNode);
                        CreateBrakupTableList(tbodyTrCollection, tableNode, ref tableList);
                        return tableList;
                    }
                }

                tableList.Add(tableNode);
                return tableList;
            }
            else
            {
                CreateBrakupTableList(trCollection, tableNode, ref tableList);
                return tableList;
            }
        }

        private List<HtmlNode> CreateBrakupTableList(HtmlNodeCollection trCollection, HtmlNode tableNode, ref List<HtmlNode> tableList)
        {
            foreach (var item in trCollection)
            {
                HtmlNode tNode = tableNode.Clone();
                tNode.RemoveAllChildren();
                tNode.InnerHtml = item.OuterHtml;
                tableList.Add(tNode);
            }

            return tableList;
        }
        public void DeleteUnnecessaryLines(HtmlNode node)
        {
            //foreach (var htmlNode in node.ChildNodes)
            //{
            var nodeLine = node;
            if (node.Name != "#text" & node.Name != "br")
            {

                HtmlNode[] htmlNodeArray = SegregateMergedLine(ref nodeLine, _htmlLineCollection);

                if (htmlNodeArray != null)
                {
                    nodeLine = ChangePtoDiv(htmlNodeArray[0]);
                    _htmlLineCollection.Add(new HTMLLineModel() { LineNumber = _lineNumber += 1, HtmlLine = ChangePtoDiv(htmlNodeArray[0]) });

                    nodeLine = ChangePtoDiv(htmlNodeArray[1]);
                    _htmlLineCollection.Add(new HTMLLineModel() { LineNumber = _lineNumber += 1, HtmlLine = ChangePtoDiv(htmlNodeArray[1]) });
                }
                else
                {

                    _htmlLineCollection.Add(new HTMLLineModel() { LineNumber = _lineNumber += 1, HtmlLine = ChangePtoDiv(nodeLine) });
                }


            }
            //}
        }
        //public void DeleteUnnecessaryLines(HtmlNode node)
        //{
        //    foreach (var htmlNode in node.ChildNodes)
        //    {
        //        var nodeLine = htmlNode;
        //        if (htmlNode.Name != "#text" & htmlNode.Name != "br")
        //        {

        //            HtmlNode[] htmlNodeArray = SegregateMergedLine(ref nodeLine, _htmlLineCollection);

        //            if (htmlNodeArray != null)
        //            {
        //                nodeLine = ChangePtoDiv(htmlNodeArray[0]);
        //                _htmlLineCollection.Add(new HTMLLineModel() { LineNumber = _lineNumber += 1, HtmlLine = ChangePtoDiv(htmlNodeArray[0]) });

        //                nodeLine = ChangePtoDiv(htmlNodeArray[1]);
        //                _htmlLineCollection.Add(new HTMLLineModel() { LineNumber = _lineNumber += 1, HtmlLine = ChangePtoDiv(htmlNodeArray[1]) });
        //            }
        //            else
        //            {

        //                _htmlLineCollection.Add(new HTMLLineModel() { LineNumber = _lineNumber += 1, HtmlLine = ChangePtoDiv(nodeLine) });
        //            }


        //        }
        //    }
        //}

        private HtmlNode[] SegregateMergedLine(ref HtmlNode node, List<HTMLLineModel> htmlLineCollection)
        {
            HtmlNode[] htmlNodeArray = new HtmlNode[2];

            HtmlNode clonNode = node.CloneNode(true);
            //if (node.InnerHtml.Contains("1.10") == true)
            //{
            List<HtmlNode> previousNodes = new List<HtmlNode>();
            childRecur(node.ChildNodes, previousNodes);

            var textBoxNode = previousNodes.FirstOrDefault(n => n.Attributes.FirstOrDefault(att => att.Name == "class" && att.Value == "textBoxReplacement") != null);

            if (textBoxNode != null)
            {

                HtmlNode newNode = HtmlNode.CreateNode("<p></p>");

                //newNode.InnerHtml = textBoxNode.ParentNode.InnerHtml;
                            
                if (textBoxNode.InnerText.Contains("ATTACHMENT A – STANDARD CONTRACT AGREEMENT"))
                {
                    HtmlNode textBoxNodeParentNode = textBoxNode.ParentNode;
                    while (true)
                    {
                        if (textBoxNodeParentNode != null && textBoxNodeParentNode != node)
                        {
                            HtmlNode nodeHasChild = node.ChildNodes.FirstOrDefault(childNode => childNode == textBoxNodeParentNode);

                            if (nodeHasChild != null)
                            {
                                newNode.InnerHtml = textBoxNodeParentNode.InnerHtml;
                                node.RemoveChild(textBoxNodeParentNode);
                                break;
                            }
                            else
                            {
                                textBoxNodeParentNode = textBoxNodeParentNode.ParentNode;
                            }
                        }
                        else
                        {
                            break;
                        }
                    }

                }

                //node.RemoveChild(textBoxNode.ParentNode);
                //node.RemoveChild(textBoxNode.ParentNode);

                if (Utility.LineCleanup(node.InnerText) != "")
                {

                    htmlNodeArray[0] = node;
                    htmlNodeArray[1] = newNode;
                    return htmlNodeArray;
                }

            }

            //}
            node = clonNode;
            return null;
        }

        private void childRecur(HtmlNodeCollection htmlNode, List<HtmlNode> previousNodes)
        {

            foreach (var node in htmlNode)
            {
                previousNodes.Add(node);

                childRecur(node.ChildNodes, previousNodes);
            }

        }

        private HtmlNode ChangePtoDiv(HtmlNode htmlNode)
        {
            if (htmlNode.InnerText.Contains("2.10.1"))
            {
                var stop = "";
            }
            if (htmlNode.Name.ToLower() == "p")
            {
                HtmlNode divNode = HtmlNode.CreateNode("<div></div>");
                HtmlAttributeCollection attributeCollection = htmlNode.Attributes;
                foreach (var attribute in attributeCollection)
                {
                    divNode.Attributes.Add(attribute);
                }

                divNode.InnerHtml = htmlNode.InnerHtml;

                return divNode;
            }
            return htmlNode;
        }


    }
}
