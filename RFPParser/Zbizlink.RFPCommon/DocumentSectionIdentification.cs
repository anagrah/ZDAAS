using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPCommon
{
    public class DocumentSectionIdentification : IDocumentSectionIdentification
    {

        public void DocSectionIdentify(List<LineDetailModel> lineDetailModels)
        {

            List<LineDetailModel> sectionLineDetails = lineDetailModels.Where(line => line.Text.ToLower().Contains("section") && line.Text.Length < 80).ToList();

            if (sectionLineDetails != null && sectionLineDetails.Count > 0)
            {
                List<int> sectionHeadingLineNoList = GetSectionDictionary(sectionLineDetails);

                if (sectionHeadingLineNoList != null)
                {
                    foreach (var sectionHeadingLineNo in sectionHeadingLineNoList)
                    {
                        LineDetailModel lineDetailModel = lineDetailModels.First(line => line.LineNumber == sectionHeadingLineNo);
                        lineDetailModel.DocumentSectionHeading = true;
                        lineDetailModel.HeadingSectionText = lineDetailModel.Text;

                    }
                }
            }

        }

        private List<int> GetSectionDictionary(List<LineDetailModel> sectionLineDetails)
        {
            //Dictionary<string, int> DocumentSections;

            List<int> sectionHeadingLineNoList;

            //DocumentSections = IdentifySectionNumber(sectionLineDetails);
            sectionHeadingLineNoList = IdentifySectionNumber(sectionLineDetails);


            //if (DocumentSections != null && DocumentSections.Count > 0)
            //{
            //    return DocumentSections;
            //}


            if (sectionHeadingLineNoList != null && sectionHeadingLineNoList.Count > 0)
            {
                return sectionHeadingLineNoList;
            }
            sectionHeadingLineNoList = IdentifySectionAlphabet(sectionLineDetails);

            if (sectionHeadingLineNoList != null && sectionHeadingLineNoList.Count > 0)
            {
                return sectionHeadingLineNoList;
            }

            sectionHeadingLineNoList = IdentifyNumberSectionNumber(sectionLineDetails);

            if (sectionHeadingLineNoList != null && sectionHeadingLineNoList.Count > 0)
            {
                return sectionHeadingLineNoList;
            }

            return sectionHeadingLineNoList;
        }

        private List<int> IdentifyNumberSectionNumber(List<LineDetailModel> sectionLineDetails)
        {
            List<int> sectionHeadingLineNoList = new List<int>();

            foreach (var sectionLineDetail in sectionLineDetails)
            {
                if (Regex.IsMatch(sectionLineDetail.Text.Trim().ToLower(), @"^[0-9]\ssection\s[0-9]($|\s)"))
                {
                    sectionHeadingLineNoList.Add(sectionLineDetail.LineNumber);
                }
            }

            return sectionHeadingLineNoList;
        }

        private List<int> IdentifySectionNumber(List<LineDetailModel> sectionLineDetails)

        {
            List<int> sectionHeadingLineNoList = new List<int>();

            foreach (var sectionLineDetail in sectionLineDetails)
            {
                if (Regex.IsMatch(sectionLineDetail.Text.Trim().ToLower(), @"^section\s[0-9]($|\s)"))
                {
                    sectionHeadingLineNoList.Add(sectionLineDetail.LineNumber);
                }
            }

            return sectionHeadingLineNoList;
        }

        private List<int> IdentifySectionAlphabet(List<LineDetailModel> sectionLineDetails)
        {
            List<int> sectionHeadingLineNoList = new List<int>();

            foreach (var sectionLineDetail in sectionLineDetails)
            {
                if (Regex.IsMatch(sectionLineDetail.Text.Trim().ToLower(), @"^section\s[a-z]($|\s)"))
                {
                    sectionHeadingLineNoList.Add(sectionLineDetail.LineNumber);
                }
            }

            return sectionHeadingLineNoList;
        }
    }
}