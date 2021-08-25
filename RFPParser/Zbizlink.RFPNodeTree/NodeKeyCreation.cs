using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPNodeTree
{
    internal class NodeKeyCreation : INodeKeyCreation
    {

        ILineSearch _lineSearch;

        IHierarchyHeadingNumber _hierarchyHeadingNumber;
        IHierarchyOnlyHeading _hierarchyOnlyHeading;
        IHierarchyOnlyNumber _hierarchyOnlyNumber;
        IAlphabetRomanAmbiguity _alphabetRomanAmbiguity;

        //List<LineDetailModel> _previousLineHeadingList = new List<LineDetailModel>();
        //List<LineDetailModel> _previousLineContentList = new List<LineDetailModel>();
        //List<LineDetailModel> _ambiguousAlphabetWithRomanList = new List<LineDetailModel>();

        //List<LineDetailModel> _unclearLineHeadingList = new List<LineDetailModel>();

        public NodeKeyCreation(ILineSearch lineSearch, IHierarchyHeadingNumber hierarchyHeadingNumber,
            IHierarchyOnlyHeading hierarchyOnlyHeading, IAlphabetRomanAmbiguity alphabetRomanAmbiguity,
            IHierarchyOnlyNumber hierarchyOnlyNumber)
        {

            _lineSearch = lineSearch;
            _hierarchyHeadingNumber = hierarchyHeadingNumber;
            _hierarchyOnlyHeading = hierarchyOnlyHeading;
            _alphabetRomanAmbiguity = alphabetRomanAmbiguity;
            _hierarchyOnlyNumber = hierarchyOnlyNumber;
        }
        public void CreateNodeKey(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, LineDetailModel previousLineDetail,
            List<LineDetailModel> previousLineHeadingList, List<LineDetailModel> previousLineContentList, List<LineDetailModel> ambiguousAlphabetWithRomanList,
           List<LineDetailModel> unclearLineHeadingList)
        {
            if (currentLineDetail.Text.Contains("The remainder of this page is intentionally left blank"))
            {
                var temp = "";
            }
            //if(currentLineDetail.TypeOfList == TypesOfList.AmbiguousRomanUpperDot && currentLineDetail.HeadingElement == true)
            if (currentLineDetail.TypeOfList == TypesOfList.AmbiguousRomanUpperDot || currentLineDetail.TypeOfList == TypesOfList.AmbiguousRomanLowerDot)
            {
                _alphabetRomanAmbiguity.Resolve(lineDetailList, previousLineHeadingList, currentLineDetail);
            }

            if (previousLineHeadingList.Count == 0)
            {
                if (currentLineDetail.HeadingElement == true)
                {
                    currentLineDetail.NodeKey = Convert.ToString(currentLineDetail.LineNumber);
                    previousLineHeadingList.Add(currentLineDetail);
                }
                else
                {
                    currentLineDetail.NodeKey = Convert.ToString(currentLineDetail.LineNumber);
                }
            }
            else
            {
                HandleNodeKeyHierarchy(lineDetailList, currentLineDetail, previousLineDetail, previousLineHeadingList, previousLineContentList,
                                                                      ambiguousAlphabetWithRomanList, unclearLineHeadingList);
            }


        }

        private void HandleNodeKeyHierarchy(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, LineDetailModel previousLineDetail, List<LineDetailModel> previousLineHeadingList,
            List<LineDetailModel> previousLineContentList, List<LineDetailModel> ambiguousAlphabetWithRomanList, List<LineDetailModel> unclearLineHeadingList)
        {
            if (currentLineDetail.HeadingElement == true && currentLineDetail.TypeOfListNumber != null)
            {
                HandleHeadingNumber(lineDetailList, currentLineDetail, previousLineHeadingList, previousLineContentList);
            }
            else if (currentLineDetail.HeadingElement == true && currentLineDetail.TypeOfListNumber == null)
            {
                HandleOnlyHeading(lineDetailList, currentLineDetail, previousLineHeadingList, previousLineContentList);
            }
            else if (currentLineDetail.HeadingElement == false && currentLineDetail.TypeOfListNumber != null)
            {
                //HandleOnlyNumber(lineDetailList, currentLineDetail, previousLineHeadingList, previousLineContentList);
                HandleContent(currentLineDetail, previousLineDetail, previousLineContentList);
            }

            if (currentLineDetail.HeadingElement == false && currentLineDetail.TemporaryHeading == false)
            {
                HandleContent(currentLineDetail, previousLineDetail, previousLineContentList);
            }


            if (currentLineDetail.NodeKey == null)
            {
                unclearLineHeadingList.Add(currentLineDetail);
            }
            else
            {
                if (unclearLineHeadingList.Count == 0 && (currentLineDetail.HeadingElement == true || currentLineDetail.TemporaryHeading == true))
                {
                    previousLineHeadingList.Add(currentLineDetail);
                }
            }
        }

        private void Resolved(List<LineDetailModel> lineDetailList)
        {

        }

        //If have TypeOfList and have heading
        private void HandleHeadingNumber(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, List<LineDetailModel> previousLineHeadingList,
            List<LineDetailModel> previousLineContentList)
        {
            _hierarchyHeadingNumber.SetNodeKey(lineDetailList, currentLineDetail, previousLineHeadingList, previousLineContentList);

            if (currentLineDetail.NodeKey == null || currentLineDetail.NodeKey == "")
            {
                HandleOnlyHeading(lineDetailList, currentLineDetail, previousLineHeadingList, previousLineContentList);
            }

        }

        //If no TypeOfList and have only heading
        private void HandleOnlyHeading(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, List<LineDetailModel> previousLineHeadingList,
            List<LineDetailModel> previousLineContentList)
        {
            _hierarchyOnlyHeading.SetNodeKey(lineDetailList, currentLineDetail, previousLineHeadingList, previousLineContentList);
        }

        //If have TypeOfList and have no heading
        private void HandleOnlyNumber(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, List<LineDetailModel> previousLineHeadingList,
            List<LineDetailModel> previousLineContentList)
        {
            _hierarchyOnlyNumber.SetNodeKey(lineDetailList, currentLineDetail, previousLineHeadingList, previousLineContentList);
        }

        //If no TypeOfList and no heading
        private void HandleContent(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail, List<LineDetailModel> previousLineContentList)
        {
            currentLineDetail.Content = true;
            currentLineDetail.Node.SetAttributeValue("data-content", "true");
            currentLineDetail.NodeKey = previousLineDetail.NodeKey;
            previousLineContentList.Add(currentLineDetail);
        }
    }
}
