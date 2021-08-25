using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.RFPBusinessModel;
using Zdaas.LoggerContracts;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPSummary.Contracts;
using CommanUtility = Zdaas.RFPCommon.Utility;

namespace Zdaas.RFPSummary
{
    public class DocumentSummaryNew : IDocumentSummaryNew
    {
        private List<SummaryModel> _summaryList;
        private List<DocSummaryModel> _fieldsFromDoc;
        private List<DocSummaryModel> _fieldsFromDocByContainSynonymWord;

        private List<LineDetailModel> _lineDetailModels;
        private List<RfpSummaryFieldEntity> _rfpSummaryFieldList;
        private ILoggerManager _logger;
        private StringBuilder _synonymValueFromTD;

        public DocumentSummaryNew(ILoggerManager logger)
        {
            _logger = logger;
        }
        public List<SummaryModel> Get(List<LineDetailModel> lineDetailModels, 
            List<RfpSummaryFieldEntity> rfpSummaryFieldList)
        {

            _summaryList = new List<SummaryModel>();
            _fieldsFromDocByContainSynonymWord = new List<DocSummaryModel>();
            _fieldsFromDoc = new List<DocSummaryModel>();
            _synonymValueFromTD = new StringBuilder();


            _rfpSummaryFieldList = rfpSummaryFieldList;

            _lineDetailModels = lineDetailModels;
            //_lineDetailModels = GetMaxLineNumberForSummarySearching(lineDetailModels);

            LoadFieldFormDoc();

            //FielterCurrectSummaryFields();

            foreach (var fieldFromDoc in _fieldsFromDoc)
            {
                PopulateSummaryModel(fieldFromDoc);
            }

            CheckMandatorySummaryField();

            _summaryList = _summaryList.OrderBy(summary => summary.DisplayOrder).ToList();

            return _summaryList;
        }


        private void LoadFieldFormDoc()
        {
            int Index = 0;

            foreach (var lineDetailModel in _lineDetailModels)
            {
                if (lineDetailModel.Text.Contains("TEMPORARY STAFFING SERVICES"))
                {
                    var t = "";
                }
                if (lineDetailModel.Element == "table" && lineDetailModel.TableTDList != null && lineDetailModel.TableTDList.Count > 1)
                {
                  bool result =   LoadFieldFormDoc(lineDetailModel, true);

                    if (result == false)
                    {
                        foreach (var lineDetailModelTD in lineDetailModel.TableTDList)
                        {
                            if (lineDetailModelTD.TableTDPElement != null && lineDetailModelTD.TableTDPElement.Count() > 0)
                            {
                                List<LineDetailModel> lineDetailModelTDPList = lineDetailModelTD.TableTDPElement;
                                foreach (var lineDetailModelTDP in lineDetailModelTDPList)
                                {
                                    LoadFieldFormDoc(lineDetailModelTDP, false);
                                }
                            }

                        }
                    }
                }
                else
                {
                    LoadFieldFormDoc(lineDetailModel, false);
                }
            }
        }

        private bool LoadFieldFormDoc(LineDetailModel lineDetailModel, bool table)
        {
            //bool rfpSummaryFieldEnd = false;
            int rfpSummaryFieldCount = 0;
            foreach (var rfpSummaryField in _rfpSummaryFieldList)
            {
                rfpSummaryFieldCount++;
                //bool RfpsummarySynonymEnd = false;
                int RfpsummarySynonymCount = 0;


                if (rfpSummaryField.FieldName == "TEMPORARY STAFFING SERVICES")
                {
                    var t = "";
                }
                DocSummaryModel DocSummary = _fieldsFromDoc.FirstOrDefault(line => line.FieldDisplayName == rfpSummaryField.FieldName);
                if (DocSummary != null)
                {
                    continue;
                }

                foreach (var RfpsummarySynonym in rfpSummaryField.RfpsummarySynonym)
                {                
                    if (lineDetailModel.Text.Contains(RfpsummarySynonym.Synonym))
                    {
                        DocSummaryModel docSummary = new DocSummaryModel();
                        docSummary.lineDetailModel = lineDetailModel;
                        docSummary.FieldDisplayName = rfpSummaryField.FieldName;
                        docSummary.Synonym = RfpsummarySynonym.Synonym;
                        docSummary.Index = lineDetailModel.ListIndex;
                        _fieldsFromDocByContainSynonymWord.Add(docSummary);
                    }

                    RfpsummarySynonymCount++;

                    if (RfpsummarySynonym.Synonym == "rfp title".ToLower())
                    {
                        var t = "";
                    }
                    string fieldText;
                    DocSummaryModel docSummaryModel = new DocSummaryModel();

                    bool result = false;
                    string summaryFieldFromDocument = "";
                    if (table == true)
                    {
                        result = RequiredSummaryFieldFromDocTable(lineDetailModel, rfpSummaryField, RfpsummarySynonym, docSummaryModel, out fieldText);
                        if(result == false && rfpSummaryFieldCount == _rfpSummaryFieldList.Count() && RfpsummarySynonymCount == rfpSummaryField.RfpsummarySynonym.Count())
                        {
                            return false;
                        }
                    }
                    else
                    {
                        result = RequiredSummaryFieldFromDoc(lineDetailModel, rfpSummaryField, RfpsummarySynonym, docSummaryModel, 
                            rfpSummaryField.FieldName,out summaryFieldFromDocument, out fieldText);
                       
                    }

                    if (result == true)
                    {
                        if (fieldText.Contains("410"))
                        {
                            var test = "";
                        }
                        docSummaryModel.FieldDisplayName = rfpSummaryField.FieldName;
                        docSummaryModel.Synonym = RfpsummarySynonym.Synonym;
                        docSummaryModel.Extracted = true;
                        docSummaryModel.FieldContent = fieldText;
                        docSummaryModel.DisplayOrder = rfpSummaryField.DisplayOrder;
                        docSummaryModel.TableTDList = lineDetailModel.TableTDList;
                        docSummaryModel.RfpSummaryFieldEntity = rfpSummaryField;
                        docSummaryModel.SummaryfieldFromDocument = summaryFieldFromDocument;
                        _fieldsFromDoc.Add(docSummaryModel);
                        return true;
                    }

                }

            }

            return false;
        }


        private bool RequiredSummaryFieldFromDoc(LineDetailModel lineDetailModel, RfpSummaryFieldEntity rfpSummaryField,
            RfpSummarySynonymEntity RfpsummarySynonym,
            DocSummaryModel DocSummaryModel, string fieldName, out string summaryFieldFromDoc, out string fieldText)
        {
            fieldText = "";
           
            bool result = false;
            //string summaryFieldFromDoc;
            string summaryFieldEndPoint;          
            string summaryFieldValueFromDoc;
            result = SynonymExist(lineDetailModel, RfpsummarySynonym, out summaryFieldFromDoc, out summaryFieldValueFromDoc,
                out summaryFieldEndPoint);

            if (result == true)
            {
                //string lineDetailInLower = lineDetailModel.Text;
                fieldText = summaryFieldValueFromDoc.Replace(summaryFieldFromDoc, "", StringComparison.InvariantCultureIgnoreCase).Trim();

                if (fieldText != "")
                {
                    if (fieldName.ToLower().Contains("date") || rfpSummaryField.FieldName.ToLower().Contains("date"))
                    {
                        string dateResult = ExtractValue("date", fieldText);
                        if (dateResult == "")
                        {
                            return false;
                        }
                        else
                        {
                            fieldText = dateResult;
                        }
                    }
                    else if (fieldName.ToLower().Contains("phone"))
                    {
                        string phoneResult = ExtractValue("phone", fieldText);
                        if (phoneResult != "") fieldText = phoneResult;

                    }
                    else if (fieldName.ToLower().Contains("email"))
                    {
                        string emailResult = ExtractValue("email", fieldText);
                        if (emailResult != "") fieldText = emailResult;
                    }


                    return true;

                }
            }
            return false;
        }
        private bool RequiredSummaryFieldFromDocTable(LineDetailModel lineDetailModel, RfpSummaryFieldEntity rfpSummaryField,
            RfpSummarySynonymEntity RfpsummarySynonym, DocSummaryModel DocSummaryModel, out string fieldText)
        {
            fieldText = "";

            bool CheckInTwoTableTDResult = CheckInTwoTableTD(lineDetailModel, rfpSummaryField, RfpsummarySynonym, DocSummaryModel, out fieldText);

            if (CheckInTwoTableTDResult == true)
            {
                return true;
            }
            //else
            //{

            //    if (lineDetailModel.TableTDList != null && lineDetailModel.TableTDList.Count() > 0)
            //    {
            //        foreach (var TableTD in lineDetailModel.TableTDList)
            //        {
            //            if (TableTD.TableTDPElement != null && TableTD.TableTDPElement.Count() > 0)
            //            {
            //                List<LineDetailModel> lineDetailModels = TableTD.TableTDPElement;
            //                foreach (var lineDetail in lineDetailModels)
            //                {
            //                    if (lineDetail.Text.Contains("TELEPHONE"))
            //                    {
            //                        var temp = "";
            //                    }

            //                        LoadFieldFormDoc(lineDetail, false);
            //                }
            //            }
            //        }


            //    }
            //    var t = "";
            //}
            return false;
        }



        private bool CheckInTwoTableTD(LineDetailModel lineDetailModel, RfpSummaryFieldEntity rfpSummaryField,
            RfpSummarySynonymEntity RfpsummarySynonym, DocSummaryModel DocSummaryModel, out string fieldText)
        {
            fieldText = "";
            int tableTDCount = lineDetailModel.TableTDList.Count();
            bool whileCondition = true;
            int tableTDNumber = 0;
            while (whileCondition)
            {
                LineDetailModel fieldName = lineDetailModel.TableTDList[tableTDNumber];

                bool result = false;

                if (fieldName.Text.Length >= RfpsummarySynonym.Synonym.Length)
                {
                    result = SynonymExistInTable(fieldName.Text, RfpsummarySynonym);
                }

                if (result == true && (tableTDNumber + 1) <= tableTDCount)
                {

                    DocSummaryModel.FieldHeading = fieldName.Text;
                    
                    string fieldContent = lineDetailModel.TableTDList[tableTDNumber + 1].Text;
                    if(fieldContent == "")
                    {
                        int currentSearchingContentTDIndex = tableTDNumber + 1;
                        while ((currentSearchingContentTDIndex + 1) < tableTDCount)
                        {
                            currentSearchingContentTDIndex++;
                            fieldContent = lineDetailModel.TableTDList[currentSearchingContentTDIndex].Text;

                            if (fieldContent != "") break;
                        }
                        
                    }
                    if (fieldName.Text.ToLower().Contains("date") || rfpSummaryField.FieldName.ToLower().Contains("date"))
                    {
                        string dateResult = ExtractValue("date", fieldContent.ToLower());
                        if (dateResult != "")
                        {
                            fieldText = dateResult;
                        }
                        else
                        {
                            return false;
                        }
                    }
                    else if (fieldName.Text.ToLower().Contains("phone"))
                    {
                        string phoneResult = ExtractValue("phone", fieldContent.ToLower());
                        if (phoneResult != "") fieldText = phoneResult;

                    }
                    else if (fieldName.Text.ToLower().Contains("email") || fieldName.Text.ToLower().Contains("e-mail"))
                    {
                        string emailResult = ExtractValue("email", fieldContent.ToLower());
                        if (emailResult != "") fieldText = emailResult;
                    }
                    else
                    {
                        fieldText = fieldContent.Trim();
                    }

                    if (fieldContent != "")
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }

                tableTDNumber++;

                if ((tableTDNumber + 1) >= tableTDCount)
                {
                    whileCondition = false;
                }
            }

            return false;
        }


        private bool SynonymExist(LineDetailModel lineDetailModel, RfpSummarySynonymEntity RfpsummarySynonym,
            out string summaryFieldFromDoc, out string summaryFieldValueFromDoc, out string summaryFieldValueEndPoint)
        {
            if (lineDetailModel.Text.Contains("DEADLINE FOR QUESTIONS") && RfpsummarySynonym.Synonym.Contains("Deadline for questions".ToLower()))
            {
                var t = "";
            }
            string firstLineText = lineDetailModel.Text;

            summaryFieldFromDoc = "";
            summaryFieldValueEndPoint = "";
            summaryFieldValueFromDoc = "";
            firstLineText = Zdaas.RFPCommon.Utility.GetHeadingRemoveExtraSpaces(firstLineText);


            
            bool synonymExist = firstLineText.StartsWith(RfpsummarySynonym.Synonym, StringComparison.InvariantCultureIgnoreCase);


            string summaryFieldValue;
            string summaryFieldName;
            if (synonymExist == false)
            {
                bool firstWordResult = Utility.firstWordMatched(firstLineText, RfpsummarySynonym.Synonym);

                if (firstWordResult == false)
                {
                    return false;
                }
                bool result = SummaryfieldInTwoLines(lineDetailModel, RfpsummarySynonym, out summaryFieldName, out summaryFieldValue);
                if (result == false)
                {
                    return false;
                }
                summaryFieldValueFromDoc = summaryFieldName + " " + summaryFieldValue;
            }
            else
            {
                if (CommanUtility.CountNumberOfWordInString(firstLineText) == CommanUtility.CountNumberOfWordInString(RfpsummarySynonym.Synonym))
                {
                    return false;
                }
                summaryFieldValueFromDoc = firstLineText;
            }

            bool ExtractHeadingEndPointResult = Utility.ExtractHeadingEndPoint(summaryFieldValueFromDoc, RfpsummarySynonym,
                out summaryFieldFromDoc, out summaryFieldValueEndPoint);
            if (ExtractHeadingEndPointResult)
            {
                return true;
            }
            //Match summaryFieldValueEndPointResult = Regex.Match(summaryFieldValueFromDoc, RfpsummarySynonym.Synonym + @"[\s]*[:]", RegexOptions.IgnoreCase);

            //if (summaryFieldValueEndPointResult.Success == true)
            //{
            //    summaryFieldFromDoc = summaryFieldValueEndPointResult.Value;
            //    summaryFieldValueEndPoint = ":";
            //    return true;
            //}

            //summaryFieldValueEndPointResult = Regex.Match(summaryFieldValueFromDoc, RfpsummarySynonym.Synonym + @"[\s]*[:-]", RegexOptions.IgnoreCase);

            //if (summaryFieldValueEndPointResult.Success == true)
            //{
            //    summaryFieldFromDoc = summaryFieldValueEndPointResult.Value;
            //    summaryFieldValueEndPoint = ":-";
            //    return true;
            //}

            //summaryFieldValueEndPointResult = Regex.Match(summaryFieldValueFromDoc, RfpsummarySynonym.Synonym + @"[\s]*[.]", RegexOptions.IgnoreCase);

            //if (summaryFieldValueEndPointResult.Success == true)
            //{
            //    summaryFieldFromDoc = summaryFieldValueEndPointResult.Value;
            //    summaryFieldValueEndPoint = ":-";
            //    return true;
            //}

            //summaryFieldValueEndPointResult = Regex.Match(summaryFieldValueFromDoc, RfpsummarySynonym.Synonym, RegexOptions.IgnoreCase);

            //if (summaryFieldValueEndPointResult.Success == true)
            //{
            //    summaryFieldFromDoc = summaryFieldValueEndPointResult.Value;

            //    return true;
            //}

            //string extratedValueFormDoc = "";
            //string synonymFirstWord;
            //Match synonymFirstWordResult = Regex.Match(RfpsummarySynonym.Synonym, @"[a-zA-Z]*\s?");

            //if (synonymFirstWordResult.Success == false)
            //{
            //    return false;
            //}
            //if(synonymFirstWordResult.Success == true)
            //{
            //    synonymFirstWord =  synonymFirstWordResult.Value.Trim();
            //}
            //if (synonymFirstWordResult.Success == true)
            //{
            //    Match extratedValueFormDocResult = Regex.Match(value, synonymFirstWordResult.Value.Trim() + @"[a-zA-Z\s]*[:]");
            //    //Match extratedValueFormDocResult = Regex.Match(value, synonymFirstWordResult.Value.Trim() + @"[a-zA-Z\s]*(#?)[:-]");

            //    if (extratedValueFormDocResult.Success == false)
            //    {
            //        return false;
            //    }
            //    extratedValueFormDoc = extratedValueFormDocResult.Value;
            //}

            //var result = Regex.Match(extratedValueFormDoc, @"[a-zA-Z\s]*");

            //if (result.Success == true)
            //{
            //    if (result.Value.Trim() == RfpsummarySynonym.Synonym)
            //    {
            //        summaryFieldFromDoc = extratedValueFormDoc;
            //        return true;
            //    }
            //}

            return false;
        }



        private bool SummaryfieldInTwoLines(LineDetailModel lineDetailModel, RfpSummarySynonymEntity RfpsummarySynonym,
            out string summaryFieldNameFromDoc, out string summaryFieldValueFromDoc)
        {
            summaryFieldNameFromDoc = "";
            summaryFieldValueFromDoc = "";

            if (lineDetailModel.Text.Contains("Pre-Proposal") && RfpsummarySynonym.Synonym.Contains("Pre-Proposal Conference".ToLower()))
            {
                var t = "";
            }
            if (_lineDetailModels.Count() <= lineDetailModel.ListIndex + 1)
            {
                return false;
            }

            string firstLineText = Zdaas.RFPCommon.Utility.GetHeadingRemoveExtraSpaces(lineDetailModel.Text);


            // Match synonymFirstWordResult = Regex.Match(RfpsummarySynonym.Synonym, @"[\w/&()-]*\s?");

            //Match firstWordMatch = Regex.Match(value, "^" + synonymFirstWordResult.Value.Trim());

            // if (firstWordMatch.Success == false)
            // {
            //     return false;
            // }

            string secondLineText = _lineDetailModels[lineDetailModel.ListIndex + 1].Text;
            secondLineText = Zdaas.RFPCommon.Utility.GetHeadingRemoveExtraSpaces(secondLineText);
            // var splitSynonymInArray = RfpsummarySynonym.Synonym.Split(" ");

            // string synonymWords = "";
            // foreach (var singleSynonymWord in splitSynonymInArray)
            // {

            //     synonymWords = (synonymWords + " " + singleSynonymWord).Trim();

            //     var result = Regex.Match(value, synonymWords);
            //     if(result.Success == false)
            //     {
            //         synonymWords = synonymWords.Replace(singleSynonymWord, "");
            //         break;
            //     }
            // }

            string findSynonymWordsInFirstLine;
            if (RfpsummarySynonym.Synonym.Contains("oral presentations (if necessary)") == true)
            {
                var temp = "";
            }
            SynonymSearchTwolines(firstLineText, RfpsummarySynonym.Synonym, out findSynonymWordsInFirstLine);

           
            if (findSynonymWordsInFirstLine == "")
            {
                return false;

            }

            string remainingSynonymWords = Regex.Replace(RfpsummarySynonym.Synonym, findSynonymWordsInFirstLine, string.Empty).Trim();

            string findSynonymWordsInSecondLine;
            SynonymSearchTwolines(secondLineText, remainingSynonymWords, out findSynonymWordsInSecondLine);

            //string finalSummaryFieldNameFromDoc = "";
            //string finalSummaryFieldValueFromDoc = "";
            if ((findSynonymWordsInFirstLine + " " + findSynonymWordsInSecondLine) == RfpsummarySynonym.Synonym)
            {
                ManageAndPululateFieldTwolines(firstLineText, secondLineText, findSynonymWordsInFirstLine, findSynonymWordsInSecondLine,
                   out summaryFieldNameFromDoc, out summaryFieldValueFromDoc);

                return true;
            }
            //Match remainingSynonymFirstWordResult = Regex.Match(remainingSynonymWords, @"[\w/&()-]*\s?");

            //Match remainingFirstWordMatch = Regex.Match(valueNextLine, "^" + remainingSynonymFirstWordResult.Value.Trim());

            //if(remainingFirstWordMatch.Success == false)
            //{
            //    return false;
            //}

            //var remainingSplitSynonymInArray = remainingSynonymWords.Split(" ");

            //string remSynonymWords = "";
            //foreach (var singleSynonymWord in remainingSplitSynonymInArray)
            //{

            //    remSynonymWords = (remSynonymWords + " " + singleSynonymWord).Trim();

            //    var result = Regex.Match(valueNextLine, remSynonymWords);
            //    if (result.Success == false)
            //    {             
            //        return false;
            //    }


            //}

            return false;
        }

        private void SynonymSearchTwolines(string value, string synonym, out string findSynonymWords)
        {
            findSynonymWords = "";
            Match synonymFirstWordResult = Regex.Match(synonym, @"[\w/&()#-]*\s?");

            Match firstWordMatch = Regex.Match(value, "^" + synonymFirstWordResult.Value.Trim(), RegexOptions.IgnoreCase);

            if (firstWordMatch.Success == false)
            {
                return;
            }

            var splitSynonymInArray = synonym.Split(" ");

            string synonymWords = "";
            foreach (var singleSynonymWord in splitSynonymInArray)
            {
                synonymWords = (synonymWords + " " + singleSynonymWord).Trim();
                //must delete
                if (synonymWords == "oral presentations (if"){
                    var temp = "";
                }
                //_logger.LogInfo(" value = " + value + ": synonymWords = " + synonymWords);


                bool result = false; // = Regex.Match(value, synonymWords, RegexOptions.IgnoreCase);
                if(value.ToLower() == synonymWords.ToLower())
                {
                    result = true;
                }
                if (result == false)
                {
                    synonymWords = synonymWords.Replace(singleSynonymWord, "").Trim();
                    findSynonymWords = synonymWords.Trim();
                    return;
                }

            }
            findSynonymWords = synonymWords;
        }

        private void ManageAndPululateFieldTwolines(string firstLineText, string secondLineText,
            string findSynonymWordsInFirstLine, string findSynonymWordsInSecondLine,
            out string finalSammaryFieldNameFromDoc, out string finalSammaryFieldValueFromDoc)
        {
            finalSammaryFieldNameFromDoc = "";
            finalSammaryFieldValueFromDoc = "";

            var SynonymWordsInSecondLine = Regex.Match(secondLineText, findSynonymWordsInSecondLine + @"[\s]*[:]?[:-]?[.]?", RegexOptions.IgnoreCase);


            string secondLinetextWithoutSynonym;

            if (SynonymWordsInSecondLine.Success == true)
            {
                secondLinetextWithoutSynonym = Regex.Replace(secondLineText, "^" + SynonymWordsInSecondLine.Value, string.Empty, RegexOptions.IgnoreCase).Trim();
                finalSammaryFieldNameFromDoc = findSynonymWordsInFirstLine + " " + SynonymWordsInSecondLine.Value;
            }
            else
            {
                secondLinetextWithoutSynonym = Regex.Replace(secondLineText, "^" + findSynonymWordsInSecondLine, string.Empty, RegexOptions.IgnoreCase).Trim();
                finalSammaryFieldNameFromDoc = findSynonymWordsInFirstLine + " " + findSynonymWordsInSecondLine;
            }

            string firstLinetextWithoutSynonym = Regex.Replace(firstLineText, "^" + findSynonymWordsInFirstLine, string.Empty, RegexOptions.IgnoreCase).Trim();

            finalSammaryFieldValueFromDoc = (firstLinetextWithoutSynonym + " " + secondLinetextWithoutSynonym).Trim();
        }


        //private bool SynonymExist(string value, RfpSummarySynonymEntity RfpsummarySynonym, out string summaryFieldFromDoc)
        //{
        //if (RfpsummarySynonym.Synonym == "Date of Issue".ToLower())
        //{
        //    var t = "";
        //}
        //summaryFieldFromDoc = "";
        //value = Zdaas.RFPCommon.Utility.GetHeading(value);
        //bool synonymExist = value.StartsWith(RfpsummarySynonym.Synonym);

        //if (synonymExist == false)
        //{
        //    return false;
        //}

        //string extratedValueFormDoc = "";

        //Match synonymFirstWordResult = Regex.Match(RfpsummarySynonym.Synonym, @"[a-zA-Z]*\s?");

        //if (synonymFirstWordResult.Success == true)
        //{
        //    Match extratedValueFormDocResult = Regex.Match(value, synonymFirstWordResult.Value.Trim() + @"[a-zA-Z\s]*(#?)[:-]");

        //    if (extratedValueFormDocResult.Success == false)
        //    {
        //        return false;
        //    }
        //    extratedValueFormDoc = extratedValueFormDocResult.Value;
        //}

        //var result = Regex.Match(extratedValueFormDoc, @"[a-zA-Z\s]*");

        //if (result.Success == true)
        //{
        //    if (result.Value.Trim() == RfpsummarySynonym.Synonym)
        //    {
        //        summaryFieldFromDoc = extratedValueFormDoc;
        //        return true;
        //    }
        //}

        //    return false;
        //}

        private bool SynonymExistInTable(string value, RfpSummarySynonymEntity RfpsummarySynonym)
        {

            if (value.Contains("Send Questions") && RfpsummarySynonym.Synonym == ("Send Question").ToLower())
            {
                var t = "";
            }
            value = Zdaas.RFPCommon.Utility.GetHeadingRemoveExtraSpaces(value);
            bool synonymExist = value.StartsWith(RfpsummarySynonym.Synonym, StringComparison.InvariantCultureIgnoreCase);

            if (synonymExist == true)
            {
                return true;
            }
            //logic number one start.
            //bool synonymExist = value.StartsWith(RfpsummarySynonym.Synonym, StringComparison.InvariantCultureIgnoreCase);

            //if (synonymExist == true)
            //{
            //    value = Regex.Replace(value, @"[^a-zA-Z-[ ]]", string.Empty);
            //    string[] valueArray = value.Split(" ");

            //    for (int i = 0; i < RfpsummarySynonym.SynonymNumberOfWord; i++)
            //    {
            //        _synonymValueFromTD.Append(valueArray[i].Trim() + " ");
            //    }

            //    string valueFromStringbuilder = _synonymValueFromTD.ToString().Trim();
            //    _synonymValueFromTD.Clear();

            //    if (valueFromStringbuilder.ToLower() == RfpsummarySynonym.Synonym)
            //    {
            //        return true;
            //    }

            //}
            //logic number one end.
            return false;
        }
        private void PopulateSummaryModel(DocSummaryModel field)
        {
            SummaryModel summary = new SummaryModel();
            //summary.FieldDisplayName = field.RfpSummaryFieldEntity.FieldName;
            summary.FieldDisplayName = field.FieldDisplayName;
            summary.Mandatory = field.Mandatory;
            summary.RFPSummaryFieldId = field.RFPSummaryFieldId;
            if (summary.FieldDisplayName.Contains("Closing Date"))
            {
                var t = "";
            }

            if (field != null)
            {

                summary.Index = field.Index;

                if (summary.FieldDisplayName.Contains("Date"))
                {
                    summary.FieldText = field.FieldContent;
                    //summary.FieldText = RFPCommon.Utility.GetDateFromString(field.FieldContent);
                    //if (summary.FieldText != "")
                    //{
                    summary.ControlType = "date";
                    summary.FiledTypeId = 3;
                    //}
                    //else
                    //{
                    //    summary.FieldText = field.FieldContent;
                    //    summary.ControlType = "text";
                    //    summary.FiledTypeId = 1;
                    //}

                }
                else
                {
                    if (field.FieldContent.Trim().Length > 200)
                    {
                        summary.FieldText = field.FieldContent;
                        summary.ControlType = "textarea";
                        summary.FiledTypeId = 2;
                    }
                    else
                    {
                        summary.FieldText = field.FieldContent;
                        summary.ControlType = "text";
                        summary.FiledTypeId = 1;
                    }
                }
            }
            else
            {
                summary.FieldText = "";

                summary.Index = -1;
                if (summary.FieldDisplayName.Contains("Date"))
                {
                    summary.ControlType = "date";
                    summary.FiledTypeId = 3;
                }
                else
                {
                    summary.ControlType = "text";
                    summary.FiledTypeId = 1;
                }

            }

            summary.DisplayOrder = field.DisplayOrder;
            summary.Synonym = field.Synonym;


            _summaryList.Add(summary);
        }

        private void FielterCurrectSummaryFields()
        {
            List<IGrouping<string, DocSummaryModel>> result = _fieldsFromDoc.GroupBy(line => line.FieldDisplayName).Where(line => line.Count() > 1).ToList();

        }

        private void CheckMandatorySummaryField()
        {
            //_summaryList

            List<RfpSummaryFieldEntity> mandatorySummaryFields = _rfpSummaryFieldList.Where(field => field.Mandatory == true).ToList();

            foreach (var mandatorySummaryField in mandatorySummaryFields)
            {
                SummaryModel summaryModel = _summaryList.FirstOrDefault(summary => summary.RFPSummaryFieldId == mandatorySummaryField.RfpsummaryFieldId &&
                summary.Mandatory == true);

                if (summaryModel == null)
                {
                    DocSummaryModel docSummaryModel = new DocSummaryModel();
                    docSummaryModel.FieldDisplayName = mandatorySummaryField.FieldName;
                    docSummaryModel.DisplayOrder = mandatorySummaryField.DisplayOrder;
                    docSummaryModel.RFPSummaryFieldId = mandatorySummaryField.RfpsummaryFieldId;
                    if (mandatorySummaryField.Mandatory == null)
                    {
                        mandatorySummaryField.Mandatory = false;
                    }
                    docSummaryModel.Mandatory = bool.Parse(mandatorySummaryField.Mandatory.ToString());
                    docSummaryModel.FieldContent = "";
                    PopulateSummaryModel(docSummaryModel);
                }
            }
        }

        public List<LineDetailModel> GetMaxLineNumberForSummarySearching(List<LineDetailModel> lineDetailModels)
        {


            int TotalLineNumber = lineDetailModels.Count;

            if (TotalLineNumber < 100)
            {
                return lineDetailModels;
            }
            int maxLineNumber = TotalLineNumber / 4;

            if (maxLineNumber > 100)
            {
                return lineDetailModels.Take(maxLineNumber).ToList();
            }

            maxLineNumber = TotalLineNumber / 3;

            if (maxLineNumber > 100)
            {
                return lineDetailModels.Take(maxLineNumber).ToList();
            }

            maxLineNumber = TotalLineNumber / 2;

            if (maxLineNumber > 100)
            {
                return lineDetailModels.Take(maxLineNumber).ToList();
            }

            return lineDetailModels;

        }

        /// <summary>
        /// Extract value base on given value like Date/Pone/Email form a string.
        /// </summary>
        /// <param name="word">Date/Pone/Email. Value must be in lower case</param>
        /// <param name="Content">string, if date must be in lower case</param>
        /// <returns></returns>
        private string ExtractValue(string word, string Content)
        {
            string result = "";
            switch (word)
            {
                case "date":
                    TextInfo textInf = new CultureInfo("en-US", false).TextInfo;
                    string lineDetailInTitleCase = textInf.ToTitleCase(Content);
                    string resultDate = RFPCommon.Utility.GetDateFromString(lineDetailInTitleCase);
                    if (resultDate != "") result = resultDate;
                    break;
                case "phone":

                    string phone = RFPCommon.Utility.GetPhoneFromString(Content);
                    if (phone != "") result = phone;
                    break;
                case "email":
                    Match resultEmail = Regex.Match(Content, @"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+");
                    if (resultEmail.Success == true) result = resultEmail.Value;
                    break;
                default:
                    break;
            }

            return result;
        }
    }
}