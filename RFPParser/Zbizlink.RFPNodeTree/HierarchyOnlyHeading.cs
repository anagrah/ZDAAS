using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree.Contracts;
using Zdaas.RFPCommon.Enum;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPNodeTree
{
    internal class HierarchyOnlyHeading : IHierarchyOnlyHeading
    {
        IHeading _heading;
        public HierarchyOnlyHeading(IHeading heading)
        {
            _heading = heading;
        }
        public void SetNodeKey(List<LineDetailModel> lineDetailList, LineDetailModel currentLineDetail, List<LineDetailModel> previousLineHeadingList, List<LineDetailModel> _previousLineContentList)
        {
            List<LineDetailModel> previousHeadingList = previousLineHeadingList.Where(line => line.HeadingElement == true).ToList();

            LineDetailModel parentDetailModel;

            TreeHierarchyStatus treeHierarchyStatus = SetNodeKey(currentLineDetail, previousHeadingList, out parentDetailModel);


            if (currentLineDetail.NodeKey != null)
            {
                int index = previousLineHeadingList.FindIndex(line => line == parentDetailModel);
                if (treeHierarchyStatus == TreeHierarchyStatus.Sibling && index == 0)
                {
                    previousLineHeadingList.Clear();
                }
            }

        }

        private TreeHierarchyStatus SetNodeKey(LineDetailModel currentLineDetail, List<LineDetailModel> previousHeadingList, out LineDetailModel parentDetailModel)
        {
            
            TreeHierarchyStatus treeHierarchyStatus = TreeHierarchyStatus.None;

            bool isheading = false;

            if (currentLineDetail.Text.Contains("Qualifications - Attachment A"))
            {
                var temp = "";
            }
            if (currentLineDetail.HeadingElementName.Substring(0, 1) == "h")
            {
                treeHierarchyStatus = HHeading(currentLineDetail, previousHeadingList, out parentDetailModel);
                if (treeHierarchyStatus != TreeHierarchyStatus.None)
                {
                    return treeHierarchyStatus;
                }
            }

            if (currentLineDetail.HeadingElementName == "strong")
            {
                treeHierarchyStatus = StrongHeading(currentLineDetail, previousHeadingList, out parentDetailModel);
                if (treeHierarchyStatus != TreeHierarchyStatus.None)
                {
                    return treeHierarchyStatus;
                }
            }

            treeHierarchyStatus = AllHeading(currentLineDetail, previousHeadingList, out parentDetailModel);

            if(treeHierarchyStatus != TreeHierarchyStatus.None)
            { 
                return treeHierarchyStatus;
            }


            return TreeHierarchyStatus.None;
        }

        private TreeHierarchyStatus HHeading(LineDetailModel currentLineDetail, List<LineDetailModel> previousHeadingList, out LineDetailModel parentDetailModel)
        {
            string heading = "";
            parentDetailModel = null;


            List<LineDetailModel> previousHHeadingList = previousHeadingList.Where(line => line.HeadingElementName != null && line.HeadingElementName.Contains("h")).ToList();
            
            if (previousHHeadingList == null) return TreeHierarchyStatus.None;

            for (int index = previousHHeadingList.Count() - 1; index >= 0; index--)
            {
                LineDetailModel previousLineHeading = previousHHeadingList[index];

                heading = _heading.GetChild(previousLineHeading.HeadingElementName);
                if (Child(currentLineDetail, previousLineHeading, heading))
                {
                    parentDetailModel = previousLineHeading;
                    return TreeHierarchyStatus.Child;
                }
                heading = _heading.GetSibling(previousLineHeading.HeadingElementName);
                if (Sibling(currentLineDetail, previousLineHeading, heading))
                {
                    parentDetailModel = previousLineHeading;
                    return TreeHierarchyStatus.Sibling;
                }
            }

            return TreeHierarchyStatus.None;
        }

        private TreeHierarchyStatus StrongHeading(LineDetailModel currentLineDetail, List<LineDetailModel> previousHeadingList, out LineDetailModel parentDetailModel)
        {
            bool isheading = false;
            parentDetailModel = null;

            //List<LineDetailModel> previousStrongHeadingList = previousHeadingList.Where(line => line.HeadingElementName.Contains("strong")).ToList();

            for (int index = previousHeadingList.Count() - 1; index >= 0; index--)
            {
                LineDetailModel previousLineHeading = previousHeadingList[index];

                isheading = _heading.GetChild(previousLineHeading, currentLineDetail);

                if (isheading)
                {
                    if (Child(currentLineDetail, previousLineHeading, isheading))
                    {
                        parentDetailModel = previousLineHeading;
                        return TreeHierarchyStatus.Child;
                    }
                }

                if (!isheading)
                {
                    isheading = _heading.GetSibling(previousLineHeading, currentLineDetail);
                    if (Sibling(currentLineDetail, previousLineHeading, isheading))
                    {
                        parentDetailModel = previousLineHeading;
                        return TreeHierarchyStatus.Sibling;
                    }
                }
            }


            //List<LineDetailModel> previousStrongHeadingList = previousHeadingList.Where(line => line.HeadingElementName.Contains("strong")).ToList();

            //for (int index = previousStrongHeadingList.Count() - 1; index >= 0; index--)
            //{
            //    LineDetailModel previousLineHeading = previousStrongHeadingList[index];

            //    isheading = _heading.GetChild(previousLineHeading, currentLineDetail);

            //    if (isheading)
            //    {
            //        if (Child(currentLineDetail, previousLineHeading, isheading))
            //        {
            //            parentDetailModel = previousLineHeading;
            //            return TreeHierarchyStatus.Child;
            //        }
            //    }

            //    if (!isheading)
            //    {
            //        isheading = _heading.GetSibling(previousLineHeading, currentLineDetail);
            //        if (Sibling(currentLineDetail, previousLineHeading, true))
            //        {
            //            parentDetailModel = previousLineHeading;
            //            return TreeHierarchyStatus.Sibling;
            //        }
            //    }
            //}

            return TreeHierarchyStatus.None;
        }

        private TreeHierarchyStatus AllHeading(LineDetailModel currentLineDetail, List<LineDetailModel> previousHeadingList, out LineDetailModel parentDetailModel)
        {
            bool isheading = false;
            parentDetailModel = null;

            for (int index = previousHeadingList.Count() - 1; index >= 0; index--)
            {
                LineDetailModel previousLineHeading = previousHeadingList[index];

                isheading = _heading.GetChild(previousLineHeading, currentLineDetail);

                if (isheading)
                {
                    if (Child(currentLineDetail, previousLineHeading, isheading))
                    {
                        parentDetailModel = previousLineHeading;
                        return TreeHierarchyStatus.Child;
                    }
                }

                if (!isheading)
                {
                    isheading = _heading.GetSibling(previousLineHeading, currentLineDetail);
                    if (Sibling(currentLineDetail, previousLineHeading, true))
                    {
                        parentDetailModel = previousLineHeading;
                        return TreeHierarchyStatus.Sibling;
                    }
                }
            }

            return TreeHierarchyStatus.None;
        }
        private bool Child(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail, string heading)
        {
            if (currentLineDetail.HeadingElementName == heading &&
                (previousLineDetail.TextAlign == currentLineDetail.TextAlign || previousLineDetail.FontSize == currentLineDetail.FontSize))
            {
                string key = previousLineDetail.NodeKey + "/" + currentLineDetail.LineNumber;

                currentLineDetail.NodeKey = key;

                return true;
            }

            return false;
        }

        private bool Sibling(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail, string heading)
        {
            if (currentLineDetail.HeadingElementName == heading)
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

        private bool Child(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail, bool isHeading)
        {
            if (isHeading)
            {
                string key = previousLineDetail.NodeKey + "/" + currentLineDetail.LineNumber;

                currentLineDetail.NodeKey = key;

                return true;
            }

            return false;
        }



        private bool Sibling(LineDetailModel currentLineDetail, LineDetailModel previousLineDetail, bool isHeading)
        {
            if (isHeading)
            {

                if (previousLineDetail.NodeKey.Contains("/"))
                {
                    currentLineDetail.NodeKey = previousLineDetail.NodeKey.Substring(0, previousLineDetail.NodeKey.LastIndexOf('/')) + "/" + currentLineDetail.LineNumber;
                }
                else
                {
                    currentLineDetail.NodeKey = Convert.ToString(currentLineDetail.LineNumber);
                }


                return true;
            }

            return false;
        }
    }
}
