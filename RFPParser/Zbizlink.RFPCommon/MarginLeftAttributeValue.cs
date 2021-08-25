using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using HtmlAgilityPack;
using Zdaas.RFPCommon.Contracts;

namespace Zdaas.RFPCommon
{
    public class MarginLeftAttributeValue : HtmlAttributeValue, IMarginLeftAttributeValue
    {
        private HtmlNode _htmlNode;
        public string Get(HtmlNode htmlNode)
        {
            if (htmlNode.InnerText.Contains("General course descriptions are as follows"))
            {
                var temp = "";
            }
            _htmlNode = htmlNode;
            string result = base.Get(htmlNode, "margin-left");

            if (result != "")
            {
                return result;
            }

            result = Get();

            if( result == "")
            {
                result = GetValueFromParentAttribute();
            }

            if(result != "")
            {
                return result;
            }

            return "";
        }

        private string Get()
        {
            HtmlAttribute attributeStyle = _htmlNode.Attributes.FirstOrDefault(v => v.Name.ToLower().Trim() == "style");

            if(attributeStyle == null)
            {
                return "";
            }

            string style = attributeStyle.Value.Trim().ToLower();

            if (attributeStyle.Value.Contains("margin:") == false)
            {
                return "";
            }

            string styleMargin = style.Substring(style.IndexOf("margin"));

            int indexSemicolon = styleMargin.IndexOf(";");
            int indexColon = styleMargin.IndexOf(":");

            if (indexColon > -1 && indexSemicolon > -1)
            {
                styleMargin = styleMargin.Substring(styleMargin.IndexOf(":") + 1);
                styleMargin = styleMargin.Substring(0, styleMargin.IndexOf(";"));
            }
            else if (indexColon > -1 && indexSemicolon == -1)
            {
                styleMargin = styleMargin.Substring(styleMargin.IndexOf(":") + 1);
            }

            string[] marginValueArray = styleMargin.Trim().Split(" ");

            string finalResult = GetValue(marginValueArray);

            if (finalResult != "")
            {
                return finalResult;
            }

            return "";
        }

        private static string GetValue(string[] marginValueArray)
        {
            switch (marginValueArray.Length)
            {
                case 4:
                    return marginValueArray[3];
                case 3:
                    return marginValueArray[1];
                case 2:
                    return marginValueArray[1];
                case 1:
                    return marginValueArray[0];
                default:
                    break;
            }

            return "";
        }

        public string GetValueFromParentAttribute()
        {
            HtmlNode parentNode = _htmlNode.ParentNode;

            while (parentNode != null)
            {
                string attributeValue = Get(parentNode);

                if (attributeValue != "")
                {
                    return attributeValue;
                }

                parentNode = parentNode.ParentNode;
            }


            return "";
        }
    }
}
