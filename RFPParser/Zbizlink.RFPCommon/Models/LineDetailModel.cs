using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Enum;

namespace Zdaas.RFPCommon.Models
{
    [Serializable]
    public class LineDetailModel
    {
        public double FontSize { get; set; }
        public string TextIndent { get; set; }
        public string TextAlign { get; set; }
        public string MarginLeft { get; set; }
        public string PaddingLeft { get; set; }
        public int WhiteSpace { get; set; }
        public double LeftIndentPT { get; set; }
        public string JobHeading { get; set; }
        public bool HeadingInSubLine { get; set; }
        public string HeadingInSubLineText { get; set; }
        public bool HeadingWithContent { get; set; }
        public int LineNumber { get; set; }
        public string HeadingElementName { get; set; }
        public bool HeadingElement { get; set; }
        public string Element { get; set; }
        public bool HeadingContainSection { get; set; }
        public string Synonym { get; set; }
        //public bool LineContainSection { get; set; }

        public string FirstNodeText { get; set; }
        public string Text { get; set; }
        public HtmlNode Node { get; set; }
        public bool Content { get; set; }
        public bool DocumentSectionHeading { get; set; }
        public string HeadingSectionText { get; set; }
        public string DocumentSectionLineNumber { get; set; }

        public List<LineDetailModel> TableTRList;

        public List<LineDetailModel> TableTDList;

        public List<LineDetailModel> TableTDPElement;

        public int ListIndex;
        //Blow two line is used in RFPNodeTree module
        public TypesOfList TypeOfList { get; set; }
        public string TypeOfListNumber { get; set; }
        public BulletType BulletType { get; set; }
        public bool TemporaryHeading { get; set; }
        public string NodeKey { get; set; }

        public List<LineDetailModel> SubLineDetailCollection;
    }

}

