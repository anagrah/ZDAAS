using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPLaborCategory.Contracts;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPLaborCategory
{
   public class LaborContentIdentification : ILaborContentIdentification
    {

        private List<TreeNodeModel> _treeNodeCollection;
        private List<HTMLLineModel> _htmlLineCollection;
        private List<TreeNodeModel> _finalCategorycontentsList;
        //private List<LaborPositionEntity> _laborPositionEntityList;
        private List<HTMLLineModel> _laborHtmlLineCollection = new List<HTMLLineModel>();
        private List<LineDetailModel> _lineDetailCollection = new List<LineDetailModel>();

        public IEnumerable<TreeNodeModel> GetCategoryContents(CategoryHeadingModel categoryHeadings,
            List<HTMLLineModel> htmlLineCollection, INodeTree nodeTree, List<CategoryEntity> categories, List<LineDetailModel> lineDetailCollection)
        {
            _treeNodeCollection = nodeTree.Tree;
            _htmlLineCollection = htmlLineCollection;
            _lineDetailCollection = lineDetailCollection;
            _finalCategorycontentsList = new List<TreeNodeModel>();
            //_laborPositionEntityList = categories.FirstOrDefault(c => c.Name == "Labor").LaborPosition.ToList();

            var LaborCategory = categories.FirstOrDefault(p => p.Name == "Labor");
            if(LaborCategory != null)
            {
                var t = "";
            }
            if (LaborCategory == null) return _finalCategorycontentsList;

            foreach (var categoryHeading in categoryHeadings.LineDetails)
            {
               
                if (categoryHeading.Text.Length < 80)
                {
                    GetCategoryContents(categoryHeading.LineNumber);
                }
            }

            return _finalCategorycontentsList;
        }

        private void GetCategoryContents(int lineNumber)
        {

            TreeNodeModel categoryHeadingFromTree = _treeNodeCollection.FirstOrDefault(line => line.LineNumber == lineNumber);

            var categoryContentLinesFromTree = _treeNodeCollection.Where(lines => (lines.NodeKey == categoryHeadingFromTree.NodeKey || lines.NodeKey.StartsWith(categoryHeadingFromTree.NodeKey + "/"))
                                                                            && lines.LineNumber >= categoryHeadingFromTree.LineNumber).ToList();

            foreach (var item in categoryContentLinesFromTree)
            {
                var categoryContentLine = _finalCategorycontentsList.FirstOrDefault(line => line.LineNumber == item.LineNumber);
                if (categoryContentLine == null)
                {
                    _finalCategorycontentsList.Add(item);
                }
               // _finalCategorycontentsList.Add(item);
            }           
        }

        private bool IsRequiredElement(TreeNodeModel categoryContentLineFromTree, LaborPositionEntity laborPositionEntity)
        {
            if (categoryContentLineFromTree.Text.Length < 80)
            {
                if (categoryContentLineFromTree.Text.Contains(laborPositionEntity.Position))
                {
                    var contentDetail = _lineDetailCollection.FirstOrDefault(line => line.LineNumber == categoryContentLineFromTree.LineNumber);

                    if (contentDetail.HeadingElementName != "")
                    {
                        return true;
                    }
                }
            }

            return false;
        }
    }
}

  