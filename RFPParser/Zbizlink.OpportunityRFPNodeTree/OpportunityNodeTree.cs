using System.Collections.Generic;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPOpportunityRFPNodeTree.Contracts;
using Zdaas.RFPCommon.Enum;
using Zdaas.LoggerContracts;
using System.Linq;

namespace Zdaas.RFPOpportunityRFPNodeTree
{

    public class OpportunityNodeTree : IOpportunityNodeTree
    {
        TreeNodeModel _treeNode;
        List<TreeNodeModel> _treeNodeCollection = new List<TreeNodeModel>();
        //IListTypeRecognition _listTypeRecognition;
        INodeKeyCreation _nodeKeyCreation;
        LineDetailModel _previousLineDetail;
        private readonly ILoggerManager _logger;

        List<LineDetailModel> _previousLineHeadingList = new List<LineDetailModel>();
        List<LineDetailModel> _previousLineContentList = new List<LineDetailModel>();
        List<LineDetailModel> _ambiguousAlphabetWithRomanList = new List<LineDetailModel>();
        List<LineDetailModel> _unclearLineHeadingList = new List<LineDetailModel>();

        //public NodeTree(IListTypeRecognition listTypeRecognition, INodeKeyCreation nodeKeyCreation, ILoggerManager logger)
        //{
        //    _listTypeRecognition = listTypeRecognition;
        //    _nodeKeyCreation = nodeKeyCreation;
        //    _logger = logger;
        //}
        public OpportunityNodeTree( INodeKeyCreation nodeKeyCreation, ILoggerManager logger)
        {
            
            _nodeKeyCreation = nodeKeyCreation;
            _logger = logger;
        }
        public bool CreateNodeTree(List<LineDetailModel> lineDetailList)
        {

           
            int tempArrayElementNumber = 0;

            if (lineDetailList[0].HeadingElement == false)
            {
                lineDetailList[0].HeadingElement = true;
                lineDetailList[0].HeadingElementName = "h1";
                lineDetailList[0].TemporaryHeading = true;
            }

            //RecognizeListType(lineDetailList);

            var temp1 = lineDetailList.Where(l => l.TypeOfList == TypesOfList.Table);

            foreach (var currentlineDetail in lineDetailList)
            {
                if (currentlineDetail.Text.Contains("Secondary competition documents, such as a TORFP or RFR, will be issued to"))
                {
                    var temp = "";
                }
                _treeNode = new TreeNodeModel();

               
                tempArrayElementNumber += 1;
                
         
                var tempLineNumber = currentlineDetail.LineNumber;
                var tempLineText = currentlineDetail.Text;



                if (currentlineDetail.TypeOfList == TypesOfList.Error) continue;

                _nodeKeyCreation.CreateNodeKey(lineDetailList, currentlineDetail, _previousLineDetail,
                    _previousLineHeadingList, _previousLineContentList, _ambiguousAlphabetWithRomanList,
                    _unclearLineHeadingList);

                _previousLineDetail = currentlineDetail;

                _treeNode.NodeKey = currentlineDetail.NodeKey;
                _treeNode.Text = currentlineDetail.Text;
                _treeNode.LineNumber = currentlineDetail.LineNumber;

                _treeNodeCollection.Add(_treeNode);

            }

            _previousLineHeadingList.Clear(); 
            _previousLineContentList.Clear();
            _ambiguousAlphabetWithRomanList.Clear();
            _unclearLineHeadingList.Clear();
            _previousLineDetail = null;
            //Temp.TempWirtefile(lineDetailList);
            //ResetTreeKeys(lineDetailList);
            //Temp.TempWirtefile(lineDetailList);
            if (_treeNodeCollection.Count > 0)
            {             
                return true;
            }

            //Temp.TempWirtefile(lineDetailList);

            return false;
        }

        public List<TreeNodeModel> Tree
        {
            
            get { return _treeNodeCollection; }
        }

        private void ResetTreeKeys(List<LineDetailModel> lineDetailList)
        {
            List<LineDetailModel> oldTreeNodeLineDetailModels = new List<LineDetailModel>();

            //List<LineDetailModel> finalLineDetailModels = new List<LineDetailModel>();
            //  LineDetailModel lastParentNode = null;
            foreach (var lineDetail in lineDetailList)
            {
                LineDetailModel oldTreeNodeLineDetailModel = new LineDetailModel();
                oldTreeNodeLineDetailModel.Content = lineDetail.Content;
                oldTreeNodeLineDetailModel.NodeKey = lineDetail.NodeKey;
                oldTreeNodeLineDetailModels.Add(oldTreeNodeLineDetailModel);
            }


            for (int i = 0; i < lineDetailList.Count() - 1; i++)
            {
               
                //if (i == 0)
                //{
                //    lastParentNode = lineDetailList[i];
                //    finalLineDetailModels.Add(lastParentNode);
                //    continue;
                //}

                LineDetailModel currentLineDetail = lineDetailList[i];
                LineDetailModel nextLinedetail = lineDetailList[i + 1];
                string oldTreeNodePreviousNodeKey = "";
                bool oldTreeNodePreviousContent = false;
                string newTreeNodePreviousNodeKey = "";
                bool newTreeNodePreviousContent = false;



                if (i > 0)
                {
                    oldTreeNodePreviousNodeKey = oldTreeNodeLineDetailModels[i - 1].NodeKey;
                    oldTreeNodePreviousContent = oldTreeNodeLineDetailModels[i - 1].Content;
                    newTreeNodePreviousNodeKey = lineDetailList[i - 1].NodeKey;
                    newTreeNodePreviousContent = lineDetailList[i - 1].Content; ;
                }

                if ( currentLineDetail.Text.Contains("Assess risks and review technical risk"))
                {
                    var t = "";
                }

                
                if (currentLineDetail.Content == false && nextLinedetail.Content == false)
                {
                    if (currentLineDetail.NodeKey.Contains("/") && nextLinedetail.NodeKey.Contains("/"))
                    {
                        if (currentLineDetail.NodeKey.Count(word => word == '/') == nextLinedetail.NodeKey.Count(word => word == '/'))
                        {
                            //_logger.LogInfo(currentLineDetail.Text);
                            currentLineDetail.NodeKey = currentLineDetail.NodeKey.Substring(0, currentLineDetail.NodeKey.LastIndexOf("/"));
                            currentLineDetail.Content = true;
                            currentLineDetail.Node.SetAttributeValue("data-content", "true");
                        }
                        else if (currentLineDetail.NodeKey.Count(word => word == '/') > nextLinedetail.NodeKey.Count(word => word == '/'))
                        {
                            currentLineDetail.NodeKey = currentLineDetail.NodeKey.Substring(0, currentLineDetail.NodeKey.LastIndexOf("/"));
                            currentLineDetail.Content = true;
                            currentLineDetail.Node.SetAttributeValue("data-content", "true");
                        }
                    }
                }
                else if (
                    (currentLineDetail.Content == false && nextLinedetail.Content == true && newTreeNodePreviousContent == true) &&
                    (currentLineDetail.NodeKey.Contains("/") && newTreeNodePreviousNodeKey.Contains("/") && nextLinedetail.NodeKey.Contains("/")) &&
                    (currentLineDetail.NodeKey.Count(word => word == '/') == oldTreeNodePreviousNodeKey.Count(word => word == '/'))

                  )
                {
                    currentLineDetail.NodeKey = lineDetailList[i - 1].NodeKey;
                    currentLineDetail.Content = false;
                    currentLineDetail.Node.SetAttributeValue("data-content", "false");
                }
            }
        }

        //private void RecognizeListType(List<LineDetailModel> lineDetailList)
        //{
        //    foreach (var line in lineDetailList)
        //    {
        //        //if (line.Text.Contains("A. Application Architect (Senior)"))
        //        //{
        //        //    var temp = "stop";
        //        //}
        //        _listTypeRecognition.RecognizeListType(line);
        //    }

        //}

    }
}
