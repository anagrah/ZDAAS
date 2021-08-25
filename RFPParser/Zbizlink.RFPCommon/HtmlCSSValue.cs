using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using HtmlAgilityPack;
using Zdaas.RFPCommon.Contracts;

namespace Zdaas.RFPCommon
{
    public class HtmlCSSValue : IHtmlCSSValue
    {
        string result = "";
        public string Get(HtmlNode htmlStyleNode, HtmlNode htmlNode, string attributeName)
        {
            string htmlTagName = htmlNode.Name;
            Match tagMatch = Regex.Match(htmlStyleNode.InnerText, htmlTagName + "[{\\s\\w -;\\.]*}");

            if (tagMatch.Success == true)
            {
                tagMatch = Regex.Match(tagMatch.Value, attributeName + "[:\\s a-z 0-9 \\.]*;");
            }
            if (tagMatch.Success == true)
            {
                tagMatch = Regex.Match(tagMatch.Value, "[0-9]*\\.[0-9 a-z]*");
            }
            if (tagMatch.Success == true)
            {
                return tagMatch.Value;
            }

                //string styleText = htmlStyleNode.InnerText;
                //int htmlTagStartIndex = styleText.IndexOf(htmlNode.Name);
                //styleText = styleText.Substring(htmlTagStartIndex);
                //htmlTagStartIndex = styleText.IndexOf("{");
                //int htmlTagEndIndex = styleText.IndexOf("}");
                //string result = styleText.Substring(htmlTagStartIndex, (htmlTagEndIndex - htmlTagStartIndex + 1));

                //result = result.Substring(result.IndexOf("font-size"));
                //int colonIndex = result.IndexOf(":");
                //int semicolonIndex = result.IndexOf(";");
                //result = result.Substring(colonIndex + 1, (semicolonIndex - colonIndex - 1)).Trim();

                return result;
        }
    }
}
