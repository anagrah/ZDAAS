using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPOpportunityRFPNodeTree.Contracts;
using Zdaas.RFPCommon.Enum;
using System.Linq;
using Zdaas.RFPCommon.ListNumbers.Contracts;
using Zdaas.RFPCommon.Factory.Contracts;

namespace Zdaas.RFPOpportunityRFPNodeTree
{
    internal class HierarchyHeadingNumber : IHierarchyHeadingNumber
    {
        //INumberDotNumber _numberDotNumberHierarchy;
        private IListNumberCreation _numberDotNumberHierarchy;
        IListNumberCreation _numberHierarchy;
        IListNumberCreation _numberDotZeroHierarchy;
        IListNumberCreation _alphabetUpperDot;
        //INumberDot _numberDot;
        private IListNumberCreation _numberDot;
        IListNumberCreation _romanUpperDot;
        private IListNumberCreationFactory _listNumberCreationFactory;
        //public HierarchyHeadingNumber(INumberDotNumber numberDotNumberHierarchy,
        //    INumber numberHierarchy, INumberDotZero numberDotZeroHierarchy,
        //    IAlphabetUpperDot alphabetUpperDot, INumberDot numberDot,
        //    IRomanUpperDot romanUpperDot)
        //{
        //public HierarchyHeadingNumber(
        //   INumber numberHierarchy, INumberDotZero numberDotZeroHierarchy,
        //   IAlphabetUpperDot alphabetUpperDot,
        //   IRomanUpperDot romanUpperDot, IListNumberCreationFactory listNumberCreationFactory)
        //{
        public HierarchyHeadingNumber(IListNumberCreationFactory listNumberCreationFactory)
        {
            _listNumberCreationFactory = listNumberCreationFactory;
            
            _numberHierarchy = _listNumberCreationFactory.GetObject(TypesOfList.Number);
            _numberDotZeroHierarchy = _listNumberCreationFactory.GetObject(TypesOfList.NumberDotZero);
            _alphabetUpperDot = _listNumberCreationFactory.GetObject(TypesOfList.AlphabetUpperDot);
            _numberDot = _listNumberCreationFactory.GetObject(TypesOfList.NumberDot);
            _numberDotNumberHierarchy = _listNumberCreationFactory.GetObject(TypesOfList.NumberDotNumber);
            _romanUpperDot = _listNumberCreationFactory.GetObject(TypesOfList.RomanUpperDot);
        }
        public void SetNodeKey(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, List<LineDetailModel> previousLineHeadingList, List<LineDetailModel> _previousLineContentList)
        {

           List<LineDetailModel> previousHeadingList = previousLineHeadingList.Where(line => line.HeadingElement == true).ToList();
            //List<LineDetailModel> temp= previousLineHeadingList.Where(line => line.Text.Contains("SECTION")).ToList();
            for (int index = previousHeadingList.Count - 1; index >= 0; index--)
            {

                LineDetailModel previousLineHeading = previousHeadingList[index];
                
               
                TreeHierarchyStatus treeHierarchyStatus = SetNodeKey(currentLineDetail, previousLineHeading, previousHeadingList);

                if (currentLineDetail.NodeKey != null)
                {
                    if (treeHierarchyStatus == TreeHierarchyStatus.Sibling && index == 0)
                    {
                        previousLineHeadingList.Clear();
                    }

                    break;
                }
            }

            if (currentLineDetail.NodeKey == null)
            {
                if(previousHeadingList.Count > 0)
                {
                    DecideByLeftMagin(currentLineDetail, previousHeadingList.Last());
                }
               
            }

        }

        private TreeHierarchyStatus SetNodeKey(LineDetailModel currentLineDetail, LineDetailModel previousLineHeading, List<LineDetailModel> previousHeadingList)
        {
            string number = "";

            if (previousLineHeading.TypeOfList == TypesOfList.Number)
            {
                number = _numberHierarchy.GetChild(previousLineHeading.TypeOfListNumber);
                if (Child(currentLineDetail, previousLineHeading, number)) return TreeHierarchyStatus.Child;

                number = _numberHierarchy.GetSibling(previousLineHeading.TypeOfListNumber);
                if (Sibling(currentLineDetail, previousLineHeading, number)) return TreeHierarchyStatus.Sibling;
            }
            else if (previousLineHeading.TypeOfList == TypesOfList.NumberDotNumber)
            {
                number = _numberDotNumberHierarchy.GetChild(previousLineHeading.TypeOfListNumber);
                if (Child(currentLineDetail, previousLineHeading, number)) return TreeHierarchyStatus.Child;

                number = _numberDotNumberHierarchy.GetSibling(previousLineHeading.TypeOfListNumber);
                if (Sibling(currentLineDetail, previousLineHeading, number)) return TreeHierarchyStatus.Sibling;
            }
            else if (previousLineHeading.TypeOfList == TypesOfList.NumberDotZero)
            {
                number = _numberDotZeroHierarchy.GetChild(previousLineHeading.TypeOfListNumber);

                if (Child(currentLineDetail, previousLineHeading, number)) return TreeHierarchyStatus.Child;

                number = _numberDotZeroHierarchy.GetSibling(previousLineHeading.TypeOfListNumber);
                if (Sibling(currentLineDetail, previousLineHeading, number)) return TreeHierarchyStatus.Sibling;
            }
            else if (previousLineHeading.TypeOfList == TypesOfList.AlphabetUpperDot)
            {
                number = _alphabetUpperDot.GetSibling(previousLineHeading.TypeOfListNumber);
                if (Sibling(currentLineDetail, previousLineHeading, number)) return TreeHierarchyStatus.Sibling;
            }
            else if (previousLineHeading.TypeOfList == TypesOfList.NumberDot)
            {
                number = _numberDot.GetSibling(previousLineHeading.TypeOfListNumber);
                if (Sibling(currentLineDetail, previousLineHeading, number)) return TreeHierarchyStatus.Sibling;

            }
            else if (previousLineHeading.TypeOfList == TypesOfList.RomanUpperDot)
            {
                number = _romanUpperDot.GetSibling(previousLineHeading.TypeOfListNumber);
                if (Sibling(currentLineDetail, previousLineHeading, number)) return TreeHierarchyStatus.Sibling;
            }

                return TreeHierarchyStatus.None;
        }

        private bool Child(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail, string number)
        {
            if (currentLineDetail.TypeOfListNumber == number)
            {
                string key = previousLineDetail.NodeKey + "/" + currentLineDetail.LineNumber;

                currentLineDetail.NodeKey = key;

                return true;
            }
            

            return false;
        }

        private bool Child(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail)
        {
            
                string key = previousLineDetail.NodeKey + "/" + currentLineDetail.LineNumber;

                currentLineDetail.NodeKey = key;

                return true;
     
        }

        private bool Sibling(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail, string number)
        {
            if (currentLineDetail.TypeOfListNumber == number)
            {
                if (previousLineDetail.NodeKey.Contains("/"))
                {
                    currentLineDetail.NodeKey = previousLineDetail.NodeKey.Substring(0, previousLineDetail.NodeKey.LastIndexOf('/')) + "/" + currentLineDetail.LineNumber;
                }
                else if (previousLineDetail.NodeKey != null || previousLineDetail.NodeKey != "")
                {

                    currentLineDetail.NodeKey = Convert.ToString(currentLineDetail.LineNumber);
                }

                return true;
            }

            return false;
        }


        private void DecideByLeftMagin(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail)
        {

            if (currentLineDetail.LeftIndentPT > (previousLineDetail.LeftIndentPT + 2))
            {
                Child(currentLineDetail, previousLineDetail);
            }
        }
    }
}
