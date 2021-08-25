using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPOpportunityRFPNodeTree.Contracts;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Factory.Contracts;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPOpportunityRFPNodeTree
{
    internal class HierarchyOnlyNumber : IHierarchyOnlyNumber
    {

        private IListNumberCreation _numberDot;
        private IListNumberCreation _numberDotNumber;
        private IListNumberCreation _numberRBracket;
        private IListNumberCreation _alphabetLowerDot;
        private IListNumberCreation _alphabetLowerBBracket;
        private IListNumberCreation _numberBBracket;
        private IListNumberCreation _romanLowerDot;
        private IListNumberCreationFactory _listNumberCreationFactory;
        //public HierarchyOnlyNumber(INumberCreater numberDot, INumberCreater numberDotNumber, INumberRBracket numberRBracket)
        //{
        //    _numberDot = numberDot;
        //    _numberDotNumber = numberDotNumber;
        //    _numberRBracket = numberRBracket;
        //}

        public HierarchyOnlyNumber(IListNumberCreationFactory listNumberCreationFactory)
        {
            _listNumberCreationFactory = listNumberCreationFactory;
            _numberDot = _listNumberCreationFactory.GetObject(TypesOfList.NumberDot);
            _numberDotNumber = _listNumberCreationFactory.GetObject(TypesOfList.NumberDotNumber);
            _numberRBracket = _listNumberCreationFactory.GetObject(TypesOfList.NumberRBracket);
            _alphabetLowerDot = _listNumberCreationFactory.GetObject(TypesOfList.AlphabetLowerDot);
            _alphabetLowerBBracket = _listNumberCreationFactory.GetObject(TypesOfList.AlphabetLowerBBracket);
            _numberBBracket = _listNumberCreationFactory.GetObject(TypesOfList.NumberBBracket);
            _romanLowerDot = _listNumberCreationFactory.GetObject(TypesOfList.RomanLowerDot);

        }

        public void SetNodeKey(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, List<LineDetailModel> previousLineHeadingList, List<LineDetailModel> _previousLineContentList)
        {
            if (currentLineDetail.Text.Contains("Submit invoices on all contract workers") == true)
            {
                var t = "";
            }
            for (int index = previousLineHeadingList.Count - 1; index >= 0; index--)
            {



                LineDetailModel previousLineHeading = previousLineHeadingList[index];

                TreeHierarchyStatus treeHierarchyStatus = SetNodeKey(currentLineDetail, previousLineHeading, previousLineHeadingList);

                if (currentLineDetail.NodeKey != null)
                {
                    if (treeHierarchyStatus == TreeHierarchyStatus.Sibling && index == 0)
                    {
                        previousLineHeadingList.Clear();
                    }

                    break;
                }
            }
        }

        private TreeHierarchyStatus SetNodeKey(LineDetailModel currentLineDetail, LineDetailModel previousLineHeading, List<LineDetailModel> previousLineHeadingList)
        {
            string number = "";

            if (previousLineHeadingList.Count == 1)
            {
                var LastLineHeading = previousLineHeadingList[previousLineHeadingList.Count - 1];
                if (LastLineHeading.HeadingElement == true &&
             currentLineDetail.HeadingElement == false)
                {
                    if (Child(currentLineDetail, previousLineHeading, ""))
                    {
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Child;
                    }
                }
            }
            else if (previousLineHeading.HeadingElement == false &&
               currentLineDetail.TypeOfList == TypesOfList.NumberDotNumber &&
               previousLineHeading.TypeOfList == TypesOfList.NumberDotNumber)
            {
                number = _numberDotNumber.GetSibling(previousLineHeading.TypeOfListNumber);

                if (Sibling(currentLineDetail, previousLineHeading, number))
                {
                    currentLineDetail.TemporaryHeading = true;
                    return TreeHierarchyStatus.Sibling;
                }
                else
                {
                    number = _numberDotNumber.GetChild(previousLineHeading.TypeOfListNumber);
                    if (Child(currentLineDetail, previousLineHeading, number))
                    {
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Child;
                    }
                }
            }
            else if (currentLineDetail.TypeOfList == TypesOfList.NumberDotNumber &&
              previousLineHeading.TypeOfList == TypesOfList.NumberDotNumber)
            {
                number = _numberDotNumber.GetSibling(previousLineHeading.TypeOfListNumber);

                if (Sibling(currentLineDetail, previousLineHeading, number))
                {
                    currentLineDetail.TemporaryHeading = true;
                    return TreeHierarchyStatus.Sibling;
                }
                else
                {
                    number = _numberDotNumber.GetChild(previousLineHeading.TypeOfListNumber);
                    if (Child(currentLineDetail, previousLineHeading, number))
                    {
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Child;
                    }
                }
            }
            else if (previousLineHeading.HeadingElement == false &&
              currentLineDetail.TypeOfList == TypesOfList.NumberRBracket &&
               previousLineHeading.TypeOfList == TypesOfList.NumberRBracket)
            {
                number = _numberRBracket.GetSibling(previousLineHeading.TypeOfListNumber);

                if (Sibling(currentLineDetail, previousLineHeading, number))
                {
                    currentLineDetail.TemporaryHeading = true;
                    return TreeHierarchyStatus.Sibling;
                }
                else
                {
                    number = _numberRBracket.GetChild(previousLineHeading.TypeOfListNumber);
                    if (Child(currentLineDetail, previousLineHeading, number))
                    {
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Child;
                    }
                }
            }
            // =======================  (1)  ======================
            else if (currentLineDetail.TypeOfList == TypesOfList.NumberBBracket)
            {
                if(_numberBBracket.FirstLetter(currentLineDetail.TypeOfListNumber) == true)
                {
                    if (previousLineHeading.LeftIndentPT < currentLineDetail.LeftIndentPT)
                    {
                        currentLineDetail.NodeKey = previousLineHeading.NodeKey + "/" + currentLineDetail.LineNumber;
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Child;
                    }
                }

                if (previousLineHeading.TypeOfList == TypesOfList.NumberBBracket &&
                    previousLineHeading.LeftIndentPT == currentLineDetail.LeftIndentPT)
                {
                    number = _alphabetLowerBBracket.GetSibling(previousLineHeading.TypeOfListNumber);

                    if (Sibling(currentLineDetail, previousLineHeading, number))
                    {
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Sibling;
                    }
                }
            }
            else if (previousLineHeading.HeadingElement == false &&
              currentLineDetail.TypeOfList == TypesOfList.AlphabetLowerDot &&
               previousLineHeading.TypeOfList == TypesOfList.AlphabetLowerDot)
            {
                number = _alphabetLowerDot.GetSibling(previousLineHeading.TypeOfListNumber);

                if (Sibling(currentLineDetail, previousLineHeading, number))
                {
                    currentLineDetail.TemporaryHeading = true;
                    return TreeHierarchyStatus.Sibling;
                }

            }
            // =======================  (a)  ======================
            else if (
             currentLineDetail.TypeOfList == TypesOfList.AlphabetLowerBBracket)
            {

                if (_alphabetLowerBBracket.FirstLetter(currentLineDetail.TypeOfListNumber) == true)
                {
                    if(previousLineHeading.LeftIndentPT < currentLineDetail.LeftIndentPT)
                    {
                        currentLineDetail.NodeKey = previousLineHeading.NodeKey + "/" + currentLineDetail.LineNumber;
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Child;
                    }
                }

             

                if (previousLineHeading.TypeOfList == TypesOfList.AlphabetLowerBBracket &&
                    previousLineHeading.LeftIndentPT == currentLineDetail.LeftIndentPT)
                {
                    number = _alphabetLowerBBracket.GetSibling(previousLineHeading.TypeOfListNumber);

                    if (Sibling(currentLineDetail, previousLineHeading, number))
                    {
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Sibling;
                    }
                }
            }
            // =======================  i.  ======================
            else if (currentLineDetail.TypeOfList == TypesOfList.RomanLowerDot)
            {
                if(_romanLowerDot.FirstLetter(currentLineDetail.TypeOfListNumber) == true)
                {
                    if (previousLineHeading.LeftIndentPT < currentLineDetail.LeftIndentPT)
                    {
                        currentLineDetail.NodeKey = previousLineHeading.NodeKey + "/" + currentLineDetail.LineNumber;
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Child;
                    }
                }

                if (previousLineHeading.TypeOfList == TypesOfList.RomanLowerDot)
                {
                    number = _romanLowerDot.GetSibling(previousLineHeading.TypeOfListNumber);

                    if (Sibling(currentLineDetail, previousLineHeading, number))
                    {
                        currentLineDetail.TemporaryHeading = true;
                        return TreeHierarchyStatus.Sibling;
                    }
                }

            }
            else
            {
                if (Math.Truncate(previousLineHeading.LeftIndentPT) < Math.Truncate(currentLineDetail.LeftIndentPT))
                {
                    string key = previousLineHeading.NodeKey + "/" + currentLineDetail.LineNumber;

                    currentLineDetail.NodeKey = key;
                    currentLineDetail.TemporaryHeading = true;
                }
            }

            return TreeHierarchyStatus.None;
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

        private bool Child(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail, string number)
        {
            if (currentLineDetail.TypeOfListNumber == number || number == "")
            {
                string key = previousLineDetail.NodeKey + "/" + currentLineDetail.LineNumber;

                currentLineDetail.NodeKey = key;
                return true;
            }

            return false;

        }
    }
}
