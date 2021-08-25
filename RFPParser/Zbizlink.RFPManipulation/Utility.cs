using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPManipulation
{
    internal static class Utility
    {



        internal static string LineCleanup(string text)
        {
            text = string.Join(" ", text.Replace("&#xa0;", " ").Split(default(string[]), StringSplitOptions.RemoveEmptyEntries));
            text = string.Join(" ", text.Replace("&nbsp;", " ").Split(default(string[]), StringSplitOptions.RemoveEmptyEntries));
            text = text.Replace("â€“", "-");
            return text;
        }

       

        

        internal static string GetDateFromString(string fieldValue)
        {

            //string[] patterns = {
            //    @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}\s(([01][0-9]|[012][0-3]):([0-5][0-9]))?\s(?:AM|PM|am|pm)?",
            //    @"^(?:(?:(?:(?:(?:(?:0[13578])|(?:1[02]))\/(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[01])))|(?:(?:(?:0[469])|11)\/(?:(?:0[1-9])|(?:[1-2][0-9])|30))|(?:02\/(?:(?:0[1-9])|(?:[1-2][0-9]))))\/\d{2}(?:(?:[02468][048])|(?:[13579][26])))|(?:(?:(?:(?:(?:0[13578])|(?:1[02]))\/(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[01])))|(?:(?:(?:0[469])|(?:11))\/(?:(?:0[1-9])|(?:[1-2][0-9])|(?:30)))|(?:02\/(?:(?:0[1-9])|(?:1[0-9])|(?:2[0-8]))))\/\d{2}(?:(?:[02468][1235679])|(?:[13579][01345789]))))(?:\s(?:(?:(?:0[1-9])|(?:1[0-2]))\:(?:[0-5][0-9])(?:\:(?:[0-5][0-9])\s))(?:AM|PM|am|pm))?$",
            //    @"(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})(?=\W)|\b(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])?|(?:(?:16|[2468][048]|[3579][26])00)?)))(?=\W)|\b(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))(\4)?(?:(?:1[6-9]|[2-9]\d)?\d{2})?(?=\b)",
            //    @"^([1-9]|(?=0)0[1-9]|(?=1)1[0-2])[-/.]([1-9]|(?=[0-2])[0-2][0-9]|(?=3)3[0-1])[-/.](\d{4}|\d{2})( ([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):(?=[0-5])[0-5][0-9](:(?=[0-5])[0-5][0-9])?(a|p|A|P|am|pm|AM|PM)?)?$",
            //    @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}",
            //    @"^([0-9]{4})(-?)(1[0-2]|0[1-9])\2(3[01]|0[1-9]|[12][0-9])$",
            //    @"(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}",
            //    @"(?x)(3[01]|2[0-9]|1[0-9]|0[1-9])\s+(Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+[0-9]{4}",

            //};

            string[] patterns = {
                @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}\s(([01][0-9]|[012][0-3]):([0-5][0-9]))?\s(?:AM|PM|am|pm)?",
                @"^(?:(?:(?:(?:(?:(?:0[13578])|(?:1[02]))\/(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[01])))|(?:(?:(?:0[469])|11)\/(?:(?:0[1-9])|(?:[1-2][0-9])|30))|(?:02\/(?:(?:0[1-9])|(?:[1-2][0-9]))))\/\d{2}(?:(?:[02468][048])|(?:[13579][26])))|(?:(?:(?:(?:(?:0[13578])|(?:1[02]))\/(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[01])))|(?:(?:(?:0[469])|(?:11))\/(?:(?:0[1-9])|(?:[1-2][0-9])|(?:30)))|(?:02\/(?:(?:0[1-9])|(?:1[0-9])|(?:2[0-8]))))\/\d{2}(?:(?:[02468][1235679])|(?:[13579][01345789]))))(?:\s(?:(?:(?:0[1-9])|(?:1[0-2]))\:(?:[0-5][0-9])(?:\:(?:[0-5][0-9])\s))(?:AM|PM|am|pm))?$",
                @"(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})(?=\W)|\b(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])?|(?:(?:16|[2468][048]|[3579][26])00)?)))(?=\W)|\b(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))(\4)?(?:(?:1[6-9]|[2-9]\d)?\d{2})?(?=\b)",
                @"^([1-9]|(?=0)0[1-9]|(?=1)1[0-2])[-/.]([1-9]|(?=[0-2])[0-2][0-9]|(?=3)3[0-1])[-/.](\d{4}|\d{2})( ([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):(?=[0-5])[0-5][0-9](:(?=[0-5])[0-5][0-9])?(a|p|A|P|am|pm|AM|PM)?)?$",

                 @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ](at)[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",
                 @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}[ ](at)[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",


                 @"(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ](at)[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",
                 @"(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}[ ](at)[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",
                  @"(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",
                 @"(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)",

                 @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}",
                 @"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}",
                 @"(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}",
                 @"(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,](20)[0-9]{2}",
                 @"^([0-9]{4})(-?)(1[0-2]|0[1-9])\2(3[01]|0[1-9]|[12][0-9])$",
                 @"(?x)(3[01]|2[0-9]|1[0-9]|0[1-9])\s+(Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+[0-9]{4}",

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

        internal static List<HTMLLineModel> GetDocHtmlLineCollection(string categoryData)
        {
            int lineNumber = 1;
            List<HTMLLineModel> htmlLineModelList  = new List<HTMLLineModel>();

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

        internal static string UncommentCss(string htmlDocument)
        {
           
            string beforeStyle = "";
            string afterStyle = "";

            int styleStartTagIndex = htmlDocument.IndexOf("<style>");
            int styleEndTagIndex = htmlDocument.IndexOf("</style>") + 8;

            if (styleStartTagIndex > 0 && styleEndTagIndex > 0)
            {
                beforeStyle = htmlDocument.Substring(0, styleStartTagIndex);
                afterStyle = htmlDocument.Substring(styleEndTagIndex);

                string style = htmlDocument.Substring(styleStartTagIndex, styleEndTagIndex - styleStartTagIndex);

                style = style.Replace("<![CDATA[", "");
                style = style.Replace("< !--", "");
                style = style.Replace("<!--", "");
                style = style.Replace("-->", "");
                style = style.Replace("]]>", "");

                htmlDocument = beforeStyle + style + afterStyle;
            }

            return htmlDocument;
        }
        
    }
}
