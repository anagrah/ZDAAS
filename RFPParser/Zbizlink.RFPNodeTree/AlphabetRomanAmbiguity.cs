using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree.Contracts;
using Zdaas.RFPCommon.Factory.Contracts;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPNodeTree
{
    internal class AlphabetRomanAmbiguity : IAlphabetRomanAmbiguity
    {
        private IListNumberCreation _numberDot;
        private IListNumberCreation _romanUpperDot;
        private IListNumberCreation _alphabetUpperDot;

        private IListNumberCreation _numberDotNumber;
        private IListNumberCreation _numberRBracket;
        private IListNumberCreation _alphabetLowerDot;
        private IListNumberCreation _alphabetLowerBBracket;
        private IListNumberCreation _numberBBracket;

        private List<LineDetailModel> _lineDetailList;
        private List<LineDetailModel> _previousLineHeadingList;

        private IListNumberCreationFactory _listNumberCreationFactory;
        public AlphabetRomanAmbiguity(IListNumberCreationFactory listNumberCreationFactory)
        {
            _listNumberCreationFactory = listNumberCreationFactory;

            _romanUpperDot = _listNumberCreationFactory.GetObject(TypesOfList.RomanUpperDot);
            _alphabetUpperDot = _listNumberCreationFactory.GetObject(TypesOfList.AlphabetUpperDot);

            _numberDot = _listNumberCreationFactory.GetObject(TypesOfList.NumberDot);
            _numberDotNumber = _listNumberCreationFactory.GetObject(TypesOfList.NumberDotNumber);
            _numberRBracket = _listNumberCreationFactory.GetObject(TypesOfList.NumberRBracket);
            _alphabetLowerDot = _listNumberCreationFactory.GetObject(TypesOfList.AlphabetLowerDot);
            _alphabetLowerBBracket = _listNumberCreationFactory.GetObject(TypesOfList.AlphabetLowerBBracket);
            _numberBBracket = _listNumberCreationFactory.GetObject(TypesOfList.NumberBBracket);
        }
        public bool Resolve(List<LineDetailModel> lineDetailList, List<LineDetailModel> previousLineHeadingList, LineDetailModel currentLineDetail)
        {
            _lineDetailList = lineDetailList;
            _previousLineHeadingList = previousLineHeadingList;

            //if (currentLineDetail.TypeOfListNumber == "I.")
            //{
            //    if (SearchInNextLines(lineDetailList, currentLineDetail) == true)
            //    {
            //        return true;
            //    }
            //}
            //else
            //{
            if (SearchIndocumentLines(currentLineDetail) == true)
            {
                return true;
            }
            else if (SearchInRoman(previousLineHeadingList, currentLineDetail) == true)
            {
                currentLineDetail.TypeOfList = TypesOfList.RomanUpperDot;
                return true;
            }

            if (currentLineDetail.TypeOfListNumber == "I.")
            {
                currentLineDetail.TypeOfList = TypesOfList.RomanUpperDot;
            }

            return false;
        }

        private bool SearchIndocumentLines(LineDetailModel currentLineDetail)
        {
            bool searchResult = SearchInPreviousLines(currentLineDetail);
            if (searchResult == true)
            {
                return true;
            }
            else
            {
                searchResult = SearchInNextLines(currentLineDetail);
                if (searchResult == true)
                {
                    return true;
                }
            }



            return false;
        }



        private bool SearchInPreviousLines(LineDetailModel currentLineDetail)
        {
            for (int index = _previousLineHeadingList.Count - 1; index >= 0; index--)
            {
                LineDetailModel previousLineHeading = _previousLineHeadingList[index];

                if (currentLineDetail.TypeOfList == TypesOfList.AmbiguousRomanLowerDot &&
                    previousLineHeading.TypeOfList != TypesOfList.AmbiguousRomanLowerDot &&
                    previousLineHeading.LeftIndentPT < currentLineDetail.LeftIndentPT)
                {
                    if (currentLineDetail.TypeOfListNumber == "i.")
                    {
                        currentLineDetail.TypeOfList = TypesOfList.RomanLowerDot;
                        return true;
                    }
                }
                else if (currentLineDetail.TypeOfList == TypesOfList.AmbiguousRomanLowerDot &&
                    previousLineHeading.TypeOfList == TypesOfList.RomanLowerDot &&
                    previousLineHeading.LeftIndentPT == currentLineDetail.LeftIndentPT)
                {

                    int result = Array.IndexOf(Utility.romanLowerArray, currentLineDetail.TypeOfListNumber.Substring(0, currentLineDetail.TypeOfListNumber.LastIndexOf('.')));
                    if (result > -1)
                    {                  
                            currentLineDetail.TypeOfList = TypesOfList.RomanLowerDot;
                            return true;
                        
                    }
                }
            }
            return false;
        }

        private bool SearchInNextLines(LineDetailModel currentLineDetail)
        {
            if (currentLineDetail.HeadingElement == false)
            {
                List<LineDetailModel> nextAmbiguousLineDetailList = new List<LineDetailModel>();
                List<LineDetailModel> nextLineDetailList = _lineDetailList.Where(line => line.LineNumber > currentLineDetail.LineNumber).ToList();

                foreach (var nextLineDetail in nextLineDetailList)
                {

                    if (nextLineDetail.TypeOfList == currentLineDetail.TypeOfList &&
                        nextLineDetail.LeftIndentPT == currentLineDetail.LeftIndentPT)
                    {
                        nextAmbiguousLineDetailList.Add(nextLineDetail);
                    }
                    else if (nextLineDetail.HeadingElement == false && nextLineDetail.LeftIndentPT >= currentLineDetail.LeftIndentPT)
                    {
                        nextAmbiguousLineDetailList.Add(nextLineDetail);

                    }
                    else if (nextLineDetail.HeadingElement == true || nextLineDetail.LeftIndentPT < currentLineDetail.LeftIndentPT)
                    {
                        break;
                    }

                }
            }

            return false;
        }
        private bool SearchInRoman(List<LineDetailModel> previousLineHeadingList, LineDetailModel currentLineDetail)
        {
            foreach (var previousLineHeading in previousLineHeadingList)
            {
                if (previousLineHeading.TypeOfList == TypesOfList.RomanUpperDot &&
                    previousLineHeading.HeadingElement == currentLineDetail.HeadingElement &&
                    previousLineHeading.HeadingElementName == currentLineDetail.HeadingElementName &&
                    previousLineHeading.MarginLeft == currentLineDetail.MarginLeft)
                {
                    string listNumber = _romanUpperDot.GetSibling(previousLineHeading.TypeOfListNumber);

                    if (listNumber == currentLineDetail.TypeOfListNumber)
                    {
                        currentLineDetail.TypeOfList = TypesOfList.RomanUpperDot;
                        return true;
                    }
                }
            }


            return false;
        }
        private bool SearchInNextLines(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail)
        {

            IEnumerable<LineDetailModel> searchingLineDetailList = lineDetailList.Where(line => line.HeadingElementName == currentLineDetail.HeadingElementName &&
                                                                                                                line.MarginLeft == currentLineDetail.MarginLeft &&
                                                                                                                      line.LineNumber > currentLineDetail.LineNumber);
            foreach (var nextLineDetail in searchingLineDetailList)
            {
                string TypeOfListNumber = _romanUpperDot.GetSibling(currentLineDetail.TypeOfListNumber);

                if (TypeOfListNumber == nextLineDetail.TypeOfListNumber)
                {
                    return true;
                }
            }


            return false;
        }

    }
}
