using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPLaborCategory
{
    public static class Utility
    {

        public static HtmlDocument GetDocHtmlLineCollection(string categoryData)
        {
            List<HTMLLineModel> htmlLineModelList = new List<HTMLLineModel>();

            HtmlDocument htmlDocument = new HtmlDocument();

            htmlDocument.LoadHtml(categoryData);

            List<HtmlNode> tempList = new List<HtmlNode>();

            HtmlDocument htmlDocumentNew = new HtmlDocument();

            //htmlDocumentNew.DocumentNode.InnerHtml = htmlDocument.DocumentNode.InnerHtml;

            HtmlNode documentNode = htmlDocument.DocumentNode;
            HtmlNode documentNodeClone = documentNode.CloneNode(true);

            htmlDocument.DocumentNode.RemoveAllChildren();

            foreach (var node in documentNodeClone.ChildNodes)
            {
                HtmlNode lastNode = node;
                var previousSbling = node.PreviousSibling;

                var result = DetelableNode(node);
                if (result == true)
                {
                    //var cloneNode = node.CloneNode(true);

                    //var firstNode = cloneNode.FirstChild;

                    //var parentNode = node.ParentNode;

                    foreach (var childNode in node.ChildNodes)
                    {
                        documentNode.InsertAfter(childNode, documentNode.LastChild);
                        
                    }
                    //List<HtmlNode> nodeList = new List<HtmlNode>();
                    //while (firstNode.NextSibling != null)
                    //{
                    //    nodeList.Add(firstNode);
                    //    firstNode = firstNode.NextSibling;
                    //}
                   
                    //foreach (var htmlNode in nodeList)
                    //{
                        
                    //    if (previousSbling == null)
                    //    {
                    //        parentNode.PrependChild(htmlNode);
                    //        previousSbling = htmlNode;                           
                    //    }
                    //    else
                    //    {
                    //        parentNode.InsertAfter(htmlNode, previousSbling);
                    //    }
                    //}
                }
                else
                {
                    documentNode.InsertAfter(node, documentNode.LastChild);
                }
            }

            return htmlDocument;

        }

        private static bool DetelableNode(HtmlNode htmlNode)
        {
            HtmlAttributeCollection htmlAttributes = htmlNode.Attributes;
            bool status = false;
            foreach (var attribute in htmlAttributes)
            {
                if ((attribute.Name == "data-lastrow" || attribute.Name == "data-category" || attribute.Name == "data-cat" ||
                    attribute.Name == "data-key" || attribute.Name == "data-index") && (htmlNode.Name == "p" || htmlNode.Name == "div") && (Zdaas.RFPCommon.Utility.LineCleanup(htmlNode.InnerText) == ""))
                {
                    status = true;
                }
                else
                {
                    return false;

                }
            }
            return status;
        }

        internal static bool JobTitle(string expectedHeadingText, List<JobTitleWordEntity> jobTitleWordList,  out string JobTitle)
        {
            bool result = false;
            JobTitle = "";

            string expectedHedading = Zdaas.RFPCommon.Utility.GetHeading(expectedHeadingText);


            string[] textArray = expectedHedading.Trim().Split(" ");

            foreach (var text in textArray)
            {

                if (jobTitleWordList.FirstOrDefault(line => line.Word.Trim().ToLower() == text.Trim().ToLower()) != null)
                {
                    result = true;
                }
                else
                {
                    return false;
                }

            }

            JobTitle = expectedHedading;
            return result;
        }

        

        public static string GetHeading(string expectedHeading, string listNumber)
        {

            var regex = new Regex(Regex.Escape(listNumber));

            expectedHeading = regex.Replace(expectedHeading, "", 1).Trim();

            expectedHeading = Regex.Replace(expectedHeading, "[^a-zA-Z-[ ]]", " ").Trim();

            string[] expectedHeadingArray = expectedHeading.Split(" ", StringSplitOptions.RemoveEmptyEntries);

            expectedHeading = string.Join(" ", expectedHeadingArray);

            return expectedHeading;
        }

        internal static int GetHeadingNumber(string HeadingElementName)
        {
            if (HeadingElementName.Contains("h") == true && HeadingElementName.Length > 1)
            {
                int HeadingNumber;

                bool result = int.TryParse(HeadingElementName.Substring(1, 1), out HeadingNumber);

                if (result == true)
                {
                    return HeadingNumber;
                }
            }
            return 0;
        }
    }
}
