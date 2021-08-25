using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.RFPBusinessModel;

namespace Zdaas.RFPSummary
{
    internal static class Utility
    {
     internal static bool firstWordMatched(string lineText, string synonym)
        {
            string firstWordOfSynonym;
            string firstWordOfLineDeteail;

            if (lineText.IndexOf(" ") != -1)
            {
                firstWordOfLineDeteail = lineText.Substring(0, lineText.IndexOf(" "));
            }
            else
            {
                firstWordOfLineDeteail = lineText;
            }

            if (synonym.IndexOf(" ") != -1)
            {
                firstWordOfSynonym = synonym.Substring(0, synonym.IndexOf(" "));
            }
            else
            {
                firstWordOfSynonym = synonym;
            }

            if(firstWordOfLineDeteail.ToLower() == firstWordOfSynonym.ToLower())
            {
                return true;
            }
            return false;
        }

        internal static bool ExtractHeadingEndPoint(string summaryFieldValueFromDoc, RfpSummarySynonymEntity RfpsummarySynonym, out string summaryFieldFromDoc,   out string summaryFieldValueEndPoint)
        {
            summaryFieldFromDoc = "";
            summaryFieldValueEndPoint = "";
            Match summaryFieldValueEndPointResult = Regex.Match(summaryFieldValueFromDoc, RfpsummarySynonym.Synonym + @"[\s]*[:]", RegexOptions.IgnoreCase);

            if (summaryFieldValueEndPointResult.Success == true)
            {
                summaryFieldFromDoc = summaryFieldValueEndPointResult.Value;
                summaryFieldValueEndPoint = ":";
                return true;
            }

            summaryFieldValueEndPointResult = Regex.Match(summaryFieldValueFromDoc, RfpsummarySynonym.Synonym + @"[\s]*[:-]", RegexOptions.IgnoreCase);

            if (summaryFieldValueEndPointResult.Success == true)
            {
                summaryFieldFromDoc = summaryFieldValueEndPointResult.Value;
                summaryFieldValueEndPoint = ":-";
                return true;
            }

            summaryFieldValueEndPointResult = Regex.Match(summaryFieldValueFromDoc, RfpsummarySynonym.Synonym + @"[\s]*[.]", RegexOptions.IgnoreCase);

            if (summaryFieldValueEndPointResult.Success == true)
            {
                summaryFieldFromDoc = summaryFieldValueEndPointResult.Value;
                summaryFieldValueEndPoint = ":-";
                return true;
            }

            summaryFieldValueEndPointResult = Regex.Match(summaryFieldValueFromDoc, RfpsummarySynonym.Synonym, RegexOptions.IgnoreCase);

            if (summaryFieldValueEndPointResult.Success == true)
            {
                summaryFieldFromDoc = summaryFieldValueEndPointResult.Value;

                return true;
            }

            return false;
        }
    }
}
