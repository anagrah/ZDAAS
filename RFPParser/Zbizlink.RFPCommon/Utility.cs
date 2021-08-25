using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.LoggerContracts;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPCommon
{
    public static class Utility
    {

        private static string[] elementList = new string[] { "h1", "h2", "h3", "h4", "h5", "h6", "strong", "b" };

        public static readonly string[] romanLowerArray = { "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv", "xvi", "xvii", "xviii", "xix", "xx" };

        public static readonly string[] romanUpperArray = { "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX" };
        public static string[] ElementList
        {
            get { return elementList; }
        }
        public static bool IsExpectedElement(HtmlNode htmlNode)
        {

            foreach (var item in ElementList)
            {
                if (htmlNode.Name == item)
                {
                    return true;
                }
            }

            return false;
        }

        public static bool IsExpectedElement(string elementName)
        {

            foreach (var item in ElementList)
            {
                if (elementName == item) return true;
            }

            return false;
        }


        public static List<HTMLLineModel> GetDocHtmlLineCollection(string categoryData)
        {
            int lineNumber = 1;
            List<HTMLLineModel> htmlLineModelList = new List<HTMLLineModel>();

            HtmlDocument htmlDocument = new HtmlDocument();

            htmlDocument.LoadHtml(categoryData);


            foreach (var node in htmlDocument.DocumentNode.ChildNodes)
            {

                string text = Utility.LineCleanup(node.InnerText);
                if (text == "") continue;

                HTMLLineModel htmlLineModel = new HTMLLineModel();

                htmlLineModel.HtmlLine = node;
                htmlLineModel.LineNumber = lineNumber;

                lineNumber++;


                htmlLineModelList.Add(htmlLineModel);

            }



            return htmlLineModelList;

        }


        public static string LineCleanup(string text)
        {
            text = string.Join(" ", text.Replace("&#xa0;", " ").Split(default(string[]), StringSplitOptions.RemoveEmptyEntries));
            text = string.Join(" ", text.Replace("&nbsp;", " ").Split(default(string[]), StringSplitOptions.RemoveEmptyEntries));
            text = text.Replace("â€“", "-");
            return text;
        }

        public static string GetNodeText(HtmlNode htmlNode)
        {
            string textTotal = "";
            foreach (var item in htmlNode.ChildNodes)
            {

                string text = LineCleanup(item.InnerText);
                if (text == "") continue;

                textTotal += text + " ";

            }

            return textTotal.Trim();
        }

        public static string GetOneNodeText(HtmlNode htmlNode)
        {
            string totalText = "";
            var cloneNode = htmlNode.Clone();
            foreach (var item in cloneNode.ChildNodes)
            {
                if (item.Name == "#text")
                {
                    item.RemoveAllChildren();
                    totalText += item.InnerText + " ";
                }

            }
            return LineCleanup(totalText.Trim());
        }

        public static double ConvertIntoDouble(string value)
        {
            double size = 0;

            char[] charArray = value.ToCharArray();

            int length = 0;

            foreach (var charValue in charArray)
            {
                if (charValue == 45 || charValue == 46 || (charValue >= 48 && charValue <= 57))
                {
                    length += 1;
                }
            }

            value = value.Substring(0, length);

            double newValue = 0;

            if (double.TryParse(value, out newValue))
            {
                return newValue;
            }

            return 0;
        }

        public static T GetAttributeVlueFromChild<T>(LineDetailModel lineDetailModel, string htmlAttributeName)
        {
            T value = (T)Convert.ChangeType(0, typeof(T));

            double doubleValue = 0;
            string stringValue = "";

            if (lineDetailModel.SubLineDetailCollection != null && lineDetailModel.SubLineDetailCollection.Count() > 0)
            {
                switch (htmlAttributeName)
                {
                    case "text-indent":
                        stringValue = lineDetailModel.SubLineDetailCollection[0].TextIndent;
                        value = (T)Convert.ChangeType(stringValue, typeof(T));
                        break;
                    case "font-size":
                        doubleValue = lineDetailModel.SubLineDetailCollection[0].FontSize;
                        value = (T)Convert.ChangeType(doubleValue, typeof(T));
                        break;
                    case "text-align":
                        stringValue = lineDetailModel.SubLineDetailCollection[0].TextAlign;
                        value = (T)Convert.ChangeType(stringValue, typeof(T));
                        break;
                    case "margin-left":
                        stringValue = lineDetailModel.SubLineDetailCollection[0].MarginLeft;
                        value = (T)Convert.ChangeType(stringValue, typeof(T));
                        break;
                    case "padding-left":
                        stringValue = lineDetailModel.SubLineDetailCollection[0].PaddingLeft;
                        value = (T)Convert.ChangeType(stringValue, typeof(T));
                        break;


                }
            }



            return value;
        }

        public static int CountHtmlWhiteSpacesAtStart(string clearText, string htmlInnerText)
        {
            //htmlInnerText = htmlInnerText.TrimStart();
            //if (htmlInnerText.Contains("&nbsp;"))
            //{
            //    htmlInnerText = htmlInnerText.Replace("&nbsp;", " ");
            //}
            //if (htmlInnerText.Contains("&#xa0;"))
            //{
            //    htmlInnerText = htmlInnerText.Replace("&#xa0;", " ");
            //}

            //int numberOfSpaces = htmlInnerText.TakeWhile(Char.IsWhiteSpace).Count();

            if (clearText == "") return 0;
            int numberOfSpaces = 0;
            //string htmlInnerText = "&nbsp;   &nbsp;Education: &nbsp;  ali";// 40 padding - 9 space (1 space = 3 pt)
            string clean = clearText;

            string firstLetter = clean.Substring(0, 1);

            string spaceString = htmlInnerText.Substring(0, htmlInnerText.IndexOf(firstLetter)).TrimStart();

            string finalSpaceString = "";
            if (spaceString.Contains("&nbsp;") || spaceString.Contains("&#xa0;"))
            {
                var splitArray = spaceString.Split(" ");

                foreach (var item in splitArray)
                {
                    if (item != "")
                    {
                        finalSpaceString += item + " ";
                    }
                }

                if (spaceString.Substring(spaceString.Length - 1) != " ")
                {
                    finalSpaceString = finalSpaceString.Trim();
                }

                finalSpaceString = finalSpaceString.Replace("&nbsp;", " ");
                finalSpaceString = finalSpaceString.Replace("&#xa0;", " ");

                numberOfSpaces = finalSpaceString.Length;
            }

            return numberOfSpaces;
        }

        public static double ConvertIntoPT(string value)
        {

            if (value == "")
            {
                return 0;
            }

            double valueInDouble = 0;
            double ptValue = 0;
            string ValueInString = Regex.Replace(value, "[^-.0-9]", "");

            if (ValueInString.EndsWith("-"))
            {
                ValueInString = ValueInString.Remove(ValueInString.Length - 1);
            }

            bool result = double.TryParse(ValueInString, out valueInDouble);

            if (result == false)
            {
                return 0;
            }

            string metric = Regex.Replace(value, "[^a-zA-Z]", "");

            switch (metric)
            {
                case "pt":
                    ptValue = valueInDouble;
                    break;
                case "px":
                    ptValue = (valueInDouble / (double)1.3);
                    break;
                case "em":
                    ptValue = (valueInDouble / (double)0.08);
                    break;
                case "in":
                    ptValue = (valueInDouble / (double)0.0138888888888889);
                    break;
                case "ws":
                    ptValue = (valueInDouble * (double)3);
                    break;
            }

            return ptValue;
        }

        //internal static bool HeadingInSubLine(LineDetailModel lineDetail)
        //{

        //    LineDetailModel LineDetailModel = lineDetail.SubLineDetailCollection.FirstOrDefault(line => line.HeadingElement == false);

        //    if (LineDetailModel == null)
        //    {
        //        lineDetail.HeadingElement = true;
        //        lineDetail.HeadingElementName = lineDetail.SubLineDetailCollection[0].HeadingElementName;
        //        return true;
        //    }


        //    LineDetailModel SubLineDetail = lineDetail.SubLineDetailCollection[0];
        //    string lineDetailInnerHtml = lineDetail.Node.InnerHtml.TrimStart();
        //    string SubLineDetailOuterHtml;
        //    HtmlNode parentNode = null;

        //    if (SubLineDetail.HeadingElementName == SubLineDetail.Element)
        //    {
        //        SubLineDetailOuterHtml = SubLineDetail.Node.OuterHtml.TrimStart();
        //    }
        //    else
        //    {
        //        parentNode = GetParentHeadingNode(SubLineDetail);
        //        SubLineDetailOuterHtml = parentNode.OuterHtml;
        //    }

        //    if (lineDetail.Node.InnerText.Contains("Provides cost estimating and financial management"))
        //    {
        //       HtmlNode lineDetailClone = lineDetail.Node.Clone();
        //       //HtmlNode headingNodeClone = parentNode.Clone();
        //       //GetCleanNode(lineDetailClone, parentNode);
        //    }

        //    string textFromLineDetail = "";

        //    int SubLineDetailOuterHtmlLength = SubLineDetailOuterHtml.Length;

        //    textFromLineDetail = lineDetailInnerHtml.Substring(0, SubLineDetailOuterHtmlLength);


        //    if (textFromLineDetail == SubLineDetailOuterHtml)
        //    {
        //        if (lineDetail.Text.Length > SubLineDetail.Text.Length)
        //        {

        //            lineDetail.HeadingWithContent = true;
        //            lineDetail.HeadingInSubLine = true;
        //        }

        //        return true;
        //    }
        //    return false;
        //}

        public static bool HeadingInSubLine(LineDetailModel lineDetail)
        {

            LineDetailModel LineDetailModel = lineDetail.SubLineDetailCollection.FirstOrDefault(line => line.HeadingElement == false);

            LineDetailModel SubLineDetail = lineDetail.SubLineDetailCollection[0];
            if (LineDetailModel == null)
            {
                lineDetail.HeadingElement = true;
                lineDetail.HeadingElementName = SubLineDetail.HeadingElementName;
                return true;
            }

            int subLineDetailLength = SubLineDetail.Text.Length;
            string lineDetailSubstringText = lineDetail.Text.Substring(0, subLineDetailLength);

            if (lineDetailSubstringText == SubLineDetail.Text)
            {
                lineDetail.HeadingWithContent = true;
                lineDetail.HeadingInSubLine = true;
                return true;
            }


            return false;
        }
        //private static HtmlNode GetParentHeadingNode(LineDetailModel SubLineDetail)
        //{
        //    HtmlNode parentNode = SubLineDetail.Node.ParentNode;

        //    while (parentNode.Name != "#document")
        //    {
        //        if (SubLineDetail.HeadingElementName == parentNode.Name)
        //        {

        //            return parentNode;

        //        }
        //        parentNode = parentNode.ParentNode;
        //    }

        //    return null;
        //}

        //private static HtmlNode GetCleanNode(HtmlNode lineDetail, HtmlNode parentNode)
        //{

        //    HtmlNode resultedNode = null;

        //    bool result = CheckPreviousSiblingEmpty(lineDetail, parentNode, out resultedNode);

        //    if(result == true)
        //    {
        //        parentNode = resultedNode.ParentNode;
        //        if(parentNode.Name == "#document")
        //        {
        //            return resultedNode;
        //        }
        //        else
        //        {
        //            GetCleanNode(lineDetail, parentNode);
        //        }
        //    }

        //    return lineDetail;
        //}

        //private static bool CheckPreviousSiblingEmpty(HtmlNode lineDetail, HtmlNode headingNode,  out HtmlNode resultedNode)
        //{
        //    //if (parentNode.PreviousSibling != null)
        //    //{
        //    resultedNode = null;
        //    while (headingNode.PreviousSibling != null)
        //    {
        //        HtmlNode previousSibling = headingNode.PreviousSibling;
        //        if(previousSibling.Name == "#text")
        //        {
        //            headingNode = previousSibling;
        //            continue;
        //        }

        //        string previousSiblingText = Utility.LineCleanup(previousSibling.InnerText);

        //        if (previousSiblingText != "")
        //        {
        //            resultedNode = previousSibling;
        //            return false;
        //        }
        //        else
        //        {
        //            HtmlNode SiblingParentNode = previousSibling.ParentNode;
        //            HtmlNode previousSiblingClone = previousSibling;

        //            SiblingParentNode.RemoveChild(previousSibling);
        //            resultedNode = SiblingParentNode;
        //        }
        //        headingNode = previousSibling;

        //    }

        //    return true;
        //    //}

        //}

        public static string GetPhoneFromString(string fieldValue)
        {
            string[] patterns = {
               @"[+]?[(]?[0-9]{1,3}[)]?\s[0-9]{1,3}[-][0-9]{1,4}",
               @"[0-9-]+"
            };

            string phone = "";
            foreach (string pattern in patterns)
            {
                var firstMatch = Regex.Match(fieldValue, pattern);
                if (firstMatch.Success)
                {
                    phone = firstMatch.Value;
                    break;
                }
            }
            return phone;
        }
        public static string GetDateFromString(string fieldValue)
        {


            string[] patterns = {
                @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}\s(([01][0-9]|[012][0-3]):([0-5][0-9]))?\s(?:AM|PM|am|pm)?",
                @"^(?:(?:(?:(?:(?:(?:0[13578])|(?:1[02]))\/(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[01])))|(?:(?:(?:0[469])|11)\/(?:(?:0[1-9])|(?:[1-2][0-9])|30))|(?:02\/(?:(?:0[1-9])|(?:[1-2][0-9]))))\/\d{2}(?:(?:[02468][048])|(?:[13579][26])))|(?:(?:(?:(?:(?:0[13578])|(?:1[02]))\/(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[01])))|(?:(?:(?:0[469])|(?:11))\/(?:(?:0[1-9])|(?:[1-2][0-9])|(?:30)))|(?:02\/(?:(?:0[1-9])|(?:1[0-9])|(?:2[0-8]))))\/\d{2}(?:(?:[02468][1235679])|(?:[13579][01345789]))))(?:\s(?:(?:(?:0[1-9])|(?:1[0-2]))\:(?:[0-5][0-9])(?:\:(?:[0-5][0-9])\s))(?:AM|PM|am|pm))?$",
                @"(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})(?=\W)|\b(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])?|(?:(?:16|[2468][048]|[3579][26])00)?)))(?=\W)|\b(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))(\4)?(?:(?:1[6-9]|[2-9]\d)?\d{2})?(?=\b)",
                @"^([1-9]|(?=0)0[1-9]|(?=1)1[0-2])[-/.]([1-9]|(?=[0-2])[0-2][0-9]|(?=3)3[0-1])[-/.](\d{4}|\d{2})( ([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):(?=[0-5])[0-5][0-9](:(?=[0-5])[0-5][0-9])?(a|p|A|P|am|pm|AM|PM)?)?$",

                 @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ](at)[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",
                 @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}[ ](at)[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",


                 @"(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ](at)[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",
                 @"(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}[ ](at)[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",
                  @"(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",
                 @"(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",

                 @"(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}",
                 @"(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}",
                 @"(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}",
                 @"(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}",
                 @"^([0-9]{4})(-?)(1[0-2]|0[1-9])\2(3[01]|0[1-9]|[12][0-9])$",
                 @"(?x)(3[01]|2[0-9]|1[0-9]|0[1-9])\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+[0-9]{4}",

            };
            string date = "";
            foreach (string pattern in patterns)
            {
                fieldValue = fieldValue.Replace("  ", " ");
                var firstMatch = Regex.Match(fieldValue, pattern);
                if (firstMatch.Success)
                {
                    date = firstMatch.Value.Contains("at") ? firstMatch.Value.Replace("at", "") : firstMatch.Value;
                    break;
                }
            }
            return date;
        }

        /// <summary>
        /// replace every thing retrun only alphabet and spaces
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string GetHeading(string text)
        {
            text = Regex.Replace(text, "[^a-zA-Z-[ ]]", " ").Trim();

            string[] expectedHeadingArray = text.Split(" ", StringSplitOptions.RemoveEmptyEntries);

            text = string.Join(" ", expectedHeadingArray);

            return text;
        }
        /// <summary>
        /// Remove extra spaces
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string GetHeadingRemoveExtraSpaces(string text)
        {

            string[] expectedHeadingArray = text.Split(" ", StringSplitOptions.RemoveEmptyEntries);

            text = string.Join(" ", expectedHeadingArray);

            return text;
        }

        public static int CountNumberOfWordInString(string inputString)
        {
            char[] delimiters = new char[] { ' ', '\r', '\n' };
            int numberOfWord = inputString.Split(delimiters, StringSplitOptions.RemoveEmptyEntries).Length;
            return numberOfWord;
        }

        public static bool ImgElementExist(HtmlNode node)
        {
            HtmlNodeCollection htmlNodes = node.ChildNodes;
            if (htmlNodes != null && htmlNodes.Count > 0)
            {
                HtmlNode imgNode = htmlNodes.FirstOrDefault(node => node.Name == "img");
                if (imgNode != null) return true;
            }

            return false;
        }


        public static bool IsNumberDot(string text, string remainingText, out string result)
        {

            result = "";
            text = text + remainingText;
            StringBuilder stringBuilder = new StringBuilder();
            foreach (char c in text)
            {
                if (char.IsDigit(c) == true || c == 46 || c == 32)
                {
                    if (char.IsDigit(c) == true || c == 46)
                    {
                        stringBuilder.Append(c);
                    }
                }
                else
                {
                    break;
                }
            }
            result = stringBuilder.ToString();

            return true;
        }

        /// <summary>
        /// Metthod will remove unnesseccry spaces start, between and and end.
        /// </summary>
        /// <param name="val"></param>
        /// <returns></returns>
        public static string StringAbsoluteValue(string val)
        {
            string[] valArray = val.Trim().ToLower().Split(" ");
            bool firstLetter = true;
            StringBuilder valStringBuilder = new StringBuilder();

            foreach (var item in valArray)
            {
                if (item != "")
                {
                    string tempItem = item;

                    if (firstLetter == true)
                    {
                        valStringBuilder.Append(tempItem);
                        firstLetter = false;
                        continue;
                    }

                    valStringBuilder.Append(" " +tempItem);
                }
            }
            return valStringBuilder.ToString();
        }
    }
}

