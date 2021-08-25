using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPOpportunityRFPNodeTree.Contracts;

namespace Zdaas.RFPOpportunityRFPNodeTree
{
    public class ListTypeRecognition : IListTypeRecognition
    {
        public bool RecognizeListType(LineDetailModel lineDetail)
        {

            lineDetail.TypeOfList = TypesOfList.None;

            //if (lineDetail.Element == "table")
            //{
            //    lineDetail.TypeOfList = TypesOfList.Table;
            //    return true;
            //}

            if (lineDetail.Text == null || lineDetail.Text == "")
            {
                lineDetail.TypeOfList = TypesOfList.Error;
                return true;
            }

            TypesOfList typesOfList;

            string firstWord = lineDetail.Text.Split(' ')[0].Trim();

            typesOfList = GetTypeOfNumberList(firstWord);

            if (typesOfList != TypesOfList.None)
            {
                lineDetail.TypeOfListNumber = firstWord;
                lineDetail.TypeOfList = typesOfList;
                return true;
            }

            TypesOfList result;
            result = GetTypeOfCharacterList(firstWord, lineDetail.HeadingElement);

            if (result != TypesOfList.None)
            {
                lineDetail.TypeOfListNumber = firstWord;
                lineDetail.TypeOfList = result;
                return true;
            }

            result = GetTypeOfRomanList(firstWord);

            if (result != TypesOfList.None)
            {
                lineDetail.TypeOfListNumber = firstWord;
                lineDetail.TypeOfList = result;
                return true;
            }

            return false;
        }


        private TypesOfList GetTypeOfNumberList(string text)
        {

            //if (firstWord.All(c => c >= '0' && c <= '9') == true)

            //Example: [1] or [4] or [34]
            if (Regex.IsMatch(text, @"^([0-9]{1,2})$") == true)
            {
                return TypesOfList.Number;
            }
            //Example: [1.0] or [2.0] or [3.0]
            if (Regex.IsMatch(text, @"^([0-9]{1,2})\.0$") == true)
            {
                return TypesOfList.NumberDotZero;
            }
            //Example: [(1)] or [(4)] or [(34)]
            else if (Regex.IsMatch(text, @"^\(([0-9]{1,2})\)") == true)
            {
                return TypesOfList.NumberBBracket;
            }
            //Example: [1)] or [4)] or [34)]
            else if (Regex.IsMatch(text, @"^([0-9]{1,2})\)") == true)
            {
                return TypesOfList.NumberRBracket;
            }
            //Example: [1.1] or [2.3.3)] or [12.34)]
            else if (Regex.IsMatch(text, @"^\d{1,2}(\.\d{1,3})+$") == true)
            {
                return TypesOfList.NumberDotNumber;
            }//Example: [1.] or [2.)] or [12.)]
            else if (Regex.IsMatch(text, @"^([0-9]{1,2})\.$") == true)
            {
                return TypesOfList.NumberDot;
            }

            return TypesOfList.None;

        }

        private TypesOfList GetTypeOfCharacterList(string firstWord, bool isHeading)
        {

            if (firstWord.Length == 1 && isHeading)
            {
                if (char.IsLetter(firstWord[0]) == true)
                {
                    return TypesOfList.Alphabet;
                }
            }
            else if (firstWord.Length < 4)
            {
                //Example [a.] or [b.]
                if (Regex.IsMatch(firstWord, @"^([a-z]{1,2}\.)$"))
                {
                    if (firstWord.Substring(0, 1) == "i")
                    {
                        return TypesOfList.AmbiguousRomanLowerDot;
                    }
                    else if (firstWord.Substring(0, 1) == "v")
                    {
                        return TypesOfList.AmbiguousRomanLowerDot;
                    }
                    else
                    {
                        return TypesOfList.AlphabetLowerDot;
                    }

                }
                //Example [A.] or [B.]
                if (Regex.IsMatch(firstWord, @"^([A-Z]{1,2}\.)$"))
                {
                    if (firstWord.Substring(0, 1) == "I")
                    {
                        return TypesOfList.AmbiguousRomanUpperDot;
                    }
                    else if (firstWord.Substring(0, 1) == "V")
                    {
                        return TypesOfList.AmbiguousRomanUpperDot;
                    }
                    else
                    {
                        return TypesOfList.AlphabetUpperDot;
                    }

                }
                
                //Example [a)] or [b)]
                else if (Regex.IsMatch(firstWord, @"^([a-z]{1,3}\))$"))
                {
                    if (firstWord == "i)")
                    {
                        return TypesOfList.AmbiguousRomanLowerRBracket;
                    }
                    else
                    {
                        return TypesOfList.AlphabetLowerRBracket;
                    }
                }
                //Example [(a)] or [(b)]
                else if (Regex.IsMatch(firstWord, @"^\([a-z]\)$"))
                {
                    if (firstWord == "i)")
                    {
                        return TypesOfList.AmbiguousRomanLowerRBracket;
                    }
                    else
                    {
                        return TypesOfList.AlphabetLowerBBracket;
                    }
                }
                //Example [A)] or [C)]
                else if (Regex.IsMatch(firstWord, @"^([A-Z]{1,2}\))$"))
                {
                    if (firstWord.Substring(0, 1) == "I)")
                    {
                        return TypesOfList.AmbiguousRomanUpperRBracket;
                    }
                    else
                    {
                        return TypesOfList.AlphabetUpperRBracket;
                    }
                }
                //Example [(A)] or [(C)]
                else if (Regex.IsMatch(firstWord, @"^\([A-Z]\)$"))
                {
                    if (firstWord.Substring(0, 1) == "I)")
                    {
                        return TypesOfList.AmbiguousRomanUpperRBracket;
                    }
                    else
                    {
                        return TypesOfList.AlphabetUpperBBracket;
                    }
                }

            }

            return TypesOfList.None;

        }

        private TypesOfList GetTypeOfRomanList(string firstWord)
        {
            if (firstWord.Trim().Length < 7)
            {
                if (firstWord.Contains("."))
                {
                    firstWord = firstWord.Replace(".", "");
                    if (firstWord.Trim() != "" && RomanUpper(firstWord) == true) return TypesOfList.RomanUpperDot;
                }
                if (firstWord.Contains("."))
                {
                    firstWord = firstWord.Replace(".", "");
                    if (firstWord.Trim() != "" && RomanLower(firstWord) == true) return TypesOfList.RomanUpperDot;

                }
            }

            return TypesOfList.None;

        }

        private bool RomanLower(string romanWord)
        {
            switch (romanWord)
            {
                case "i":
                    return true;
                case "ii":
                    return true;
                case "iii":
                    return true;
                case "iv":
                    return true;
                case "v":
                    return true;
                case "vi":
                    return true;
                case "vii":
                    return true;
                case "viii":
                    return true;
                case "ix":
                    return true;
                case "x":
                    return true;
                case "xi":
                    return true;
                case "xii":
                    return true;
                case "xiii":
                    return true;
                case "xiv":
                    return true;
                case "xv":
                    return true;
                case "xvi":
                    return true;
                case "xvii":
                    return true;
                case "xviii":
                    return true;
                case "xix":
                    return true;
                case "xx":
                    return true;
            }

            return false;
        }

        private bool RomanUpper(string firstWord)
        {

            switch (firstWord)
            {
                case "I":
                    return true;
                case "II":
                    return true;
                case "III":
                    return true;
                case "IV":
                    return true;
                case "V":
                    return true;
                case "VI":
                    return true;
                case "VII":
                    return true;
                case "VIII":
                    return true;
                case "IX":
                    return true;
                case "X":
                    return true;
                case "XI":
                    return true;
                case "XII":
                    return true;
                case "XIII":
                    return true;
                case "XIV":
                    return true;
                case "XV":
                    return true;
                case "XVI":
                    return true;
                case "XVII":
                    return true;
                case "XVIII":
                    return true;
                case "XIX":
                    return true;
                case "XX":
                    return true;
            }


            return false;
        }
    }
}
