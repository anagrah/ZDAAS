using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPSummary.Contracts;

namespace Zdaas.RFPSummary
{
    public class DocumentSummary : IDocumentSummary
    {
        List<SummaryModel> _summaryList;
        HtmlNodeCollection _trNodeCollection;
        List<SummaryModel> _fieldFromDoc;
        public DocumentSummary()
        {
            _summaryList = new List<SummaryModel>();
            _fieldFromDoc = new List<SummaryModel>();
        }

        public List<SummaryModel> Get(HtmlDocument htmlDocument, List<RfpSummaryFieldEntity> rfpSummaryFieldList)
        {

            LoadFieldFormDoc(htmlDocument);

            LoadSummaryField(rfpSummaryFieldList);

            return _summaryList;
        }

        private void LoadFieldFormDoc(HtmlDocument htmlDocument)
        {
            if (!PopulateSummaryTablesRows(htmlDocument))
            {
                return;
            }

            //_trNodeCollection = htmlDocument.DocumentNode.SelectNodes("//body//div//table//tr");

            if (_trNodeCollection == null)
            {
                return;
            }

            int Index = 0;

            foreach (var trNode in _trNodeCollection)
            {

                var trChildren = trNode.ChildNodes;
                SummaryModel summaryModel = new SummaryModel();
                bool FieldDisplayName = true;
                foreach (var node in trChildren)
                {
                    if (node.Name == "td")
                    {
                        if (FieldDisplayName == true)
                        {
                            string displayName = RFPCommon.Utility.LineCleanup(node.InnerText);
                            displayName = Regex.Replace(displayName, "[^a-zA-Z-[ ]]", ":").Trim();
                            displayName = displayName.Replace(":", "");

                            summaryModel.FieldDisplayName = displayName;
                            summaryModel.Index = Index;
                            FieldDisplayName = false;
                            Index = Index + 1;
                        }
                        else
                        {
                            summaryModel.FieldText = RFPCommon.Utility.LineCleanup(node.InnerText);
                            _fieldFromDoc.Add(summaryModel);
                            break;
                        }

                    }
                }
            }

        }

        private void LoadSummaryField(List<RfpSummaryFieldEntity> rfpSummaryFieldList)
        {

            foreach (var rfpSummaryField in rfpSummaryFieldList)
            {
                bool fieldInDoc = false;

                foreach (var rfpsummarySynonym in rfpSummaryField.RfpsummarySynonym)
                {
                    var field = _fieldFromDoc.FirstOrDefault(v => v.FieldDisplayName.ToLower().Contains(rfpsummarySynonym.Synonym.ToLower()));

                    if (field != null)
                    {

                        if (field.Extracted == true)
                        {
                            if (CorrectField(field, rfpsummarySynonym.Synonym.ToLower()))
                            {
                                break;
                            }
                        }

                        field.Extracted = true;
                        PopulateSummaryModel(rfpSummaryField, field, rfpsummarySynonym.Synonym);
                        fieldInDoc = true;
                        break;
                    }

                }
                if (rfpSummaryField.Mandatory == true && fieldInDoc == false)
                {
                    PopulateSummaryModel(rfpSummaryField, null, "");
                }
            }

        }

        private void PopulateSummaryModel(RfpSummaryFieldEntity rfpSummaryField, SummaryModel field, string synonym)
        {
            SummaryModel summary = new SummaryModel();
            summary.FieldDisplayName = rfpSummaryField.FieldName;

            if (field != null)
            {
                summary.Synonym = synonym;
                field.Synonym = synonym;
                summary.Index = field.Index;

                if (summary.FieldDisplayName.Contains("Date"))
                {
                    summary.FieldText = RFPCommon.Utility.GetDateFromString(field.FieldText);

                    if (summary.FieldText != "")
                    {
                        summary.ControlType = "date";
                        summary.FiledTypeId = 3;
                    }
                    else
                    {

                        summary.FieldText = field.FieldText;
                        summary.ControlType = "text";
                        summary.FiledTypeId = 1;
                    }

                }
                else
                {
                    if (field.FieldText.Trim().Length > 200)
                    {
                        summary.FieldText = field.FieldText;
                        summary.ControlType = "textarea";
                        summary.FiledTypeId = 2;
                    }
                    else
                    {
                        summary.FieldText = field.FieldText;
                        summary.ControlType = "text";
                        summary.FiledTypeId = 1;
                    }
                }
            }
            else
            {
                summary.FieldText = "";
                summary.Synonym = synonym;

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

            summary.DisplayOrder = rfpSummaryField.DisplayOrder;



            _summaryList.Add(summary);
        }

        private bool PopulateSummaryTablesRows(HtmlDocument htmlDocument)
        {

            HtmlNodeCollection docTables = htmlDocument.DocumentNode.SelectNodes("//body//div//table");

            if (docTables == null)
            {
                return false;
            }
            foreach (var docTable in docTables)
            {
                HtmlNode previousNode = docTable.PreviousSibling;


                for (int i = 0; i < 2; i++)
                {
                    if (previousNode != null)
                    {
                        string previousLineText = RFPCommon.Utility.LineCleanup(previousNode.InnerHtml).Trim();

                        if (previousLineText != "")
                        {
                            if (previousLineText.ToLower().Contains("summary") == true)
                            {
                                _trNodeCollection = docTable.SelectNodes("tr");

                                return true;
                            }
                        }
                        previousNode = previousNode.PreviousSibling;
                    }

                }
            }

            return false;
        }

        private bool CorrectField(SummaryModel field, string synonym)
        {

            if (field.Synonym.Split(" ").Length > synonym.Split(" ").Length)
            {
                return true;
            }

            return false;
        }

    }
}