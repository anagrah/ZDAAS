using AutoMapper;
using HtmlAgilityPack;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.PortableExecutable;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPDataModel.Contracts;
using Zdaas.RFPManipulation.Contracts;
//using Zdaas.RFPTreeNode;
using Zdaas.RFPNodeTree;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPManipulation
{

    public class ZDDocxToHTMLManipulation : BaseRFPManipulation, IZDDocxToHTMLManipulation
    {
        //private FinalHtmlDoc _finalHtmlDoc;
        private ICategoryContentIdentification _categoryContentIdentification;
        private List<HTMLLineModel> _htmlLineCollection;
        private ICategoryHeadingIdentification _categoryHeadingIdentification;
        private List<CategoryHeadingModel> _categoryHeadingCollection;
        private IHtmlCleanup _htmlCleanup;
       
        //private LineCleanup _LineCleanup;
        private ILineCleanup _LineCleanup;
        private IFinalHtmlDoc _finalHtmlDoc;
        private IPreviewDocument _previewDocument;
        //old is working

        private INodeTree _nodeTree;

        private List<CategoryData> _categoryDataList;


        public ZDDocxToHTMLManipulation(IUnitOfWork unitOfWork, ILineCleanup lineCleanup,
            INodeTree nodeTree, IFinalHtmlDoc finalHtmlDoc, IHtmlCleanup htmlCleanup,
            ICategoryHeadingIdentification categoryHeadingIdentification, 
            IHtmlCSSValue htmlCSSValue, IMapper mapper,
            IPreviewDocument previewDocument,
            ICategoryContentIdentification categoryContentIdentification) : base(unitOfWork, mapper)
        {
            _htmlDocument = new HtmlDocument();
            _htmlCleanup = htmlCleanup;
            
            _LineCleanup = lineCleanup;
            _nodeTree = nodeTree;
            _categoryContentIdentification = categoryContentIdentification;
            _finalHtmlDoc = finalHtmlDoc;
            _categoryHeadingIdentification = categoryHeadingIdentification;
            _previewDocument = previewDocument;

        }

        public string ManipulateDocForAutoParsing(string htmlFileContent, 
            decimal documentId, List<CategoryEntity> categoryList, out List<CategoryData> categoryDataList,
             List<JobTitleWordEntity> jobTitleWordList,
            List<LaborHeadingEntity> LaborHeadingList, JobTitleNewModel jobTitleNewModel,
          List<HTMLLineModel> htmlLineCollection,out List<LineDetailModel> lineDetailCollection)
        {
            categoryDataList = new List<CategoryData>();
            _categoryDataList = categoryDataList;
           // htmlDocument = null;
            lineDetailCollection = null;
            _htmlDocument.LoadHtml(htmlFileContent);

           INodeTree nodeTree = this._previewDocument.NodeTree;

            if (nodeTree.Tree != null && nodeTree.Tree.Count > 0)
            {
                return "";
            }
            string finalHtmlDocument;
            _previewDocument.Get(htmlFileContent, out finalHtmlDocument, out htmlLineCollection, out lineDetailCollection);


           //List<LineDetailModel> actualDocumentContentLineDetails =  GetLineDetailsForExtractingContents(lineDetailCollection);

            _categoryHeadingCollection = _categoryHeadingIdentification.CategoryHeadingIdentify(categoryList, lineDetailCollection, jobTitleWordList, LaborHeadingList, jobTitleNewModel);

            string finalDocString = "";

            foreach (var categoryHeadings in _categoryHeadingCollection)
            {
                IEnumerable<TreeNodeModel> categoryContentList = _categoryContentIdentification.GetCategoryContents(lineDetailCollection, categoryHeadings, htmlLineCollection, nodeTree);

                CategoryData categoryData = new CategoryData();
                categoryData.CategoryId = categoryHeadings.CategoryId;

                foreach (var categoryContentLine in categoryContentList)
                {
                    HtmlNode htmlNode = htmlLineCollection.FirstOrDefault(line => line.LineNumber == categoryContentLine.LineNumber).HtmlLine;
                    SetCategoryAttribute(htmlNode, categoryData.CategoryId, documentId);
                    categoryData.HTMLNodeList.Add(htmlNode);

                }     
                _categoryDataList.Add(categoryData);
            }
                

            return finalDocString;

        }

      

        private List<LineDetailModel> GetLineDetailsForExtractingContents(List<LineDetailModel> lineDetailCollection)
        {
            List<LineDetailModel> actualDocumentContentLineDetails = new List<LineDetailModel>();

            LineDetailModel firstSectionLineDetail = lineDetailCollection.FirstOrDefault(line => line.HeadingContainSection == true);

            if (firstSectionLineDetail != null)
            {
                actualDocumentContentLineDetails = lineDetailCollection.Where(line => line.LineNumber >= firstSectionLineDetail.LineNumber).ToList();
            }
            else
            {
                return lineDetailCollection;
            }

            return actualDocumentContentLineDetails;
        }

        private void SetCategoryAttribute(HtmlNode htmlNode, decimal categoryId, decimal documentId)
        {
            if (htmlNode.InnerText.Contains("Deliverable Descriptions/Acceptance"))
            {
                var temp = "";
            }

            var attributeCategory = htmlNode.Attributes.FirstOrDefault(v => v.Name.ToLower().Trim() == "data-category");
            
            if (attributeCategory == null)
            {
                //HtmlAttribute htmlCategoryAttribute = _htmlDocument.CreateAttribute("data-category", categoryName + "/" + categoryKey);
                HtmlAttribute htmlDocumentIdAttribute = _htmlDocument.CreateAttribute("data-docid", documentId.ToString());
                HtmlAttribute htmlCategoryAttribute = _htmlDocument.CreateAttribute("data-category", categoryId.ToString());
                HtmlAttribute htmlCatAttribute = _htmlDocument.CreateAttribute("data-cat", "");

                //HtmlAttribute htmlKeyAttribute = _htmlDocument.CreateAttribute("data-Key", categoryKey);

                htmlNode.Attributes.Add(htmlCategoryAttribute);
                htmlNode.Attributes.Add(htmlCatAttribute);
                htmlNode.Attributes.Add(htmlDocumentIdAttribute);
                //htmlNode.Attributes.Add(htmlKeyAttribute);

            }
            else
            {
                attributeCategory.Value = attributeCategory.Value + "-" + categoryId;
            }

        }

        public string ManipulateDoc(string htmlFileContent, out List<CategoryData> categoryDataList, 
            out HtmlDocument htmlDocument, List<JobTitleWordEntity> jobTitleWordList,
            List<LaborHeadingEntity> LaborHeadingList, JobTitleNewModel jobTitleNewModel,
           out List<LineDetailModel> lineDetailModel)
        {
            lineDetailModel = null;
            categoryDataList = new List<CategoryData>();
            _categoryDataList = categoryDataList;
            
             List <LineDetailModel> lineDetailCollection = new List<LineDetailModel>();

            htmlFileContent = Utility.UncommentCss(htmlFileContent);

            _htmlDocument.LoadHtml(htmlFileContent);

            
            

            HtmlNodeCollection trNodeList = _htmlDocument.DocumentNode.SelectNodes("//body//div//table//tr");

            htmlDocument = _htmlDocument;
            _htmlLineCollection = _htmlCleanup.CleanDoc(_htmlDocument, PageSize);
          
            //lineDetailCollection = _LineCleanup.GetCleanLineDetailCollection(_htmlLineCollection, _htmlDocument.DocumentNode.SelectSingleNode("//head"));
            lineDetailCollection = _LineCleanup.GetCleanLineDetailCollection(_htmlLineCollection);
           
            bool treeStatus = _nodeTree.CreateNodeTree(lineDetailCollection);
           
            if (treeStatus == false)
            {
                return "";
            }

            //var test = lineDetailCollection.Where(line => line.Text.Contains("FEDERAL FUNDS ATTACHMENT"));

            lineDetailModel = lineDetailCollection;
            _categoryHeadingCollection = _categoryHeadingIdentification.CategoryHeadingIdentify(Categories, lineDetailCollection, jobTitleWordList, LaborHeadingList, jobTitleNewModel);

            string finalDocString = "";
            if (treeStatus == true)
            {
                //it is commented for new nodetree
                finalDocString = _finalHtmlDoc.CreateFinalDoc(_categoryHeadingCollection, _htmlLineCollection, _htmlDocument, _nodeTree, _categoryDataList, Categories, lineDetailCollection, jobTitleWordList, LaborHeadingList);
            }

            return finalDocString;
        }


        public string CleanUpHtmlFile(string htmlFile)
        {

            HtmlDocument htmlDocument = new HtmlDocument();

            htmlDocument.LoadHtml(htmlFile);

            List<HTMLLineModel> htmlLineCollection = _htmlCleanup.CleanDoc(htmlDocument, PageSize);


            HtmlNode htmlBody = htmlDocument.DocumentNode.SelectSingleNode("html//body//div");

            htmlBody.RemoveAllChildren();


            StringBuilder sb = new StringBuilder();
            foreach (var item in htmlLineCollection)
            {
                sb.Append(item.HtmlLine.OuterHtml);
            }


            htmlBody.SelectSingleNode("//div").InnerHtml = sb.ToString();


            return htmlDocument.DocumentNode.InnerHtml;
        }


    }
}
