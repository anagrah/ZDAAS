using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using HtmlAgilityPack;
using Zdaas.RFPCommon.Contracts;

namespace Zdaas.RFPCommon
{
    public class HtmlAttributeValue : IHtmlAttributeValue
    {
        private string _attributeName;
       
        public string Get(HtmlNode htmlNode, string attributeName)
        {
            _attributeName = attributeName;

            
            string attributeValue = "";

            HtmlAttribute attributeStyle = htmlNode.Attributes.FirstOrDefault(v => v.Name.ToLower().Trim() == "style");

            if (attributeStyle != null && attributeStyle.Value.Contains(_attributeName) == true)
            {
                attributeValue = GetValueFromAttribute(htmlNode);
                if (attributeValue != "") return attributeValue.Trim();
            }

            if (attributeValue == "")
            {
                attributeValue = GetValueFromParentAttribute(htmlNode);
                if (attributeValue != "") return attributeValue.Trim();
            }

            return "";
        }

        private string GetValueFromAttribute(HtmlNode htmlNode)
        {

            string attributeValue = "";

            HtmlAttribute attributeStyle = htmlNode.Attributes.FirstOrDefault(v => v.Name.ToLower().Trim() == "style");

            if (attributeStyle != null && attributeStyle.Value.Contains(_attributeName) == true)
            {
                string attributeVal = attributeStyle.Value;
                string[] attributeValueArray = attributeVal.Split(";");
                if (attributeValueArray != null)
                {
                    string[] result = attributeValueArray.FirstOrDefault(value => value.Contains(_attributeName)).Split(":");
                    if (result != null && result.Count() > 0)
                    {
                        attributeValue = result[1];
                        if (attributeValue != "") return attributeValue;
                    }
                }
            }

            return "";
        }

        public string GetValueFromParentAttribute(HtmlNode htmlNode)
        {
            HtmlNode parentNode = htmlNode.ParentNode;

            while (parentNode != null)
            {
                string attributeValue = GetValueFromAttribute(parentNode);

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
