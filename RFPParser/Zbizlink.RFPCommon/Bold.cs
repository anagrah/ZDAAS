using System;
using System.Collections.Generic;
using System.Text;
using HtmlAgilityPack;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Models;


namespace Zdaas.RFPCommon
{
    public class Bold : IBold
    {
        public bool GetBoldStatus(LineDetailModel lineDetail)
        {

            //bool bold = false;

            //if (lineDetail.Node.Name == "b")
            //{
            //    return true;
            //}

            if (lineDetail.FirstNodeText != null && lineDetail.FirstNodeText != "")
            {
                if(lineDetail.SubLineDetailCollection != null && lineDetail.SubLineDetailCollection.Count > 0)
                {
                   LineDetailModel SubLineDetail = lineDetail.SubLineDetailCollection[0];
                    if (SubLineDetail.HeadingElementName == "b")
                    {
                        //string lineDetailInnerHtml = lineDetail.Node.InnerHtml.TrimStart();
                        // string SubLineDetailOuterHtml = SubLineDetail.Node.OuterHtml.TrimStart();

                        // int SubLineDetailOuterHtmlLength = SubLineDetailOuterHtml.Length;

                        //string textFromLineDetail = lineDetailInnerHtml.Substring(0, SubLineDetailOuterHtmlLength);

                        // if(textFromLineDetail == SubLineDetailOuterHtml)
                        // {
                        //     lineDetail.HeadingWithContent = true;

                        //     return true;
                        // }

                        string lineDetailText = lineDetail.Text;
                        string SubLineDetailText = SubLineDetail.Text;

                        int SubLineDetaillLength = SubLineDetail.Text.Length;

                        string textFromLineDetail = lineDetail.Text.Substring(0, SubLineDetaillLength);

                        if (textFromLineDetail == SubLineDetailText)
                        {
                            lineDetail.HeadingWithContent = true;

                            return true;
                        }

                    }
                }
                return false;
            }

            //foreach (var line in lineDetail.SubLineDetailCollection)
            //{
            //    bold = IsBold(line.Node);

            //    if (bold)
            //    {
            //        continue;
            //    }
            //    else
            //    {
            //        return false;
            //    }
            //}
        
    
            
            return false;

        }

        private bool IsBold(HtmlNode Node)
        {

            if (Node.Name == "b")
            {
                return true;
            }
            
            while (Node.ParentNode != null)
            {
                Node = Node.ParentNode;
                if (Node.Name == "b")
                {
                    return true;
                }
            }

            return false;
        }
    }
}
