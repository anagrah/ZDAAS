using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;
using Zdaas.LoggerContracts;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPManipulation
{
   public class PreviewDocument : IPreviewDocument
    {

        private IHtmlCleanup _htmlCleanup;
        private ILineCleanup _LineCleanup;
        private readonly ILoggerManager _loggerManager;

        private INodeTree _nodeTree;
        
        public PreviewDocument(IHtmlCleanup htmlCleanup, ILineCleanup lineCleanup,
            INodeTree nodeTree, ILoggerManager loggerManager)
        {
            _loggerManager = loggerManager;
            _htmlCleanup = htmlCleanup;
            _LineCleanup = lineCleanup;
            _nodeTree = nodeTree;
        }

        
        public string Get(string htmlFileContent)
        {
            if (htmlFileContent == null || htmlFileContent == "")
            {
                return null;
            }
            HtmlDocument htmlDocument = new HtmlDocument();

           string  finalHtmlDocument = null;
            List<HTMLLineModel> htmlLineCollection = null;
            List<LineDetailModel>  lineDetailCollection = null;
            htmlDocument.LoadHtml(htmlFileContent);
            htmlFileContent = Utility.UncommentCss(htmlFileContent);

            

            htmlLineCollection = _htmlCleanup.CleanDoc(htmlDocument, "700");
            lineDetailCollection = _LineCleanup.GetCleanLineDetailCollection(htmlLineCollection);

            _nodeTree.CreateNodeTree(lineDetailCollection);

            PopulateDocument(htmlDocument, htmlLineCollection, lineDetailCollection);
            finalHtmlDocument = htmlDocument.DocumentNode.InnerHtml;
            return finalHtmlDocument;
        }

       public bool Get(string htmlFileContent, out string finalHtmlDocument,
           out List<HTMLLineModel> htmlLineCollection,
           out List<LineDetailModel> lineDetailCollection)
        {
            HtmlDocument htmlDocument = new HtmlDocument();
        

            finalHtmlDocument = null;
            htmlLineCollection = null;
            lineDetailCollection = null;
            
            htmlFileContent = Utility.UncommentCss(htmlFileContent);

            htmlDocument.LoadHtml(htmlFileContent);

            htmlLineCollection = _htmlCleanup.CleanDoc(htmlDocument, "700");
            lineDetailCollection = _LineCleanup.GetCleanLineDetailCollection(htmlLineCollection);
            _loggerManager.LogInfo(DateTime.Now.ToString("MM/dd/yyyy hh:mm:ss.ffff tt"));
            _nodeTree.CreateNodeTree(lineDetailCollection);
            _loggerManager.LogInfo(DateTime.Now.ToString("MM/dd/yyyy hh:mm:ss.ffff tt"));
            PopulateDocument(htmlDocument, htmlLineCollection, lineDetailCollection);
            finalHtmlDocument = htmlDocument.DocumentNode.InnerHtml;
            
            return true;
        }

        

        private void PopulateDocument(HtmlDocument htmlDocument, List<HTMLLineModel> htmlLineCollection, List<LineDetailModel> lineDetailCollection)
        {
            HtmlNode htmlBody = htmlDocument.DocumentNode.SelectSingleNode("html//body//div");
            htmlBody.RemoveAllChildren();


            StringBuilder sb = new StringBuilder();
            foreach (var item in htmlLineCollection)
            {               
                SetDataKeyAttribute(item, htmlDocument, lineDetailCollection);
                sb.Append(item.HtmlLine.OuterHtml);
            }


            htmlBody.SelectSingleNode("//div").InnerHtml = sb.ToString();
        }

        private void SetDataKeyAttribute(HTMLLineModel htmlLine, HtmlDocument htmlDocument, List<LineDetailModel> lineDetailCollection)
        {
            var node = lineDetailCollection.FirstOrDefault(Line => Line.LineNumber == htmlLine.LineNumber);
            if (node != null)
            {
                HtmlAttribute htmlKeyAttribute = htmlDocument.CreateAttribute("data-Key", node.NodeKey);
                htmlLine.HtmlLine.Attributes.Add(htmlKeyAttribute);

                
            }
    }

        public INodeTree NodeTree
        {
            get { return _nodeTree; }
            
        }

        
    }
}
