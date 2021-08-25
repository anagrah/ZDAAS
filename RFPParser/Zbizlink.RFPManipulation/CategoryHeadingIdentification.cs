using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPLaborCategory.Contracts;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPManipulation.Models;

namespace Zdaas.RFPManipulation
{
    public class CategoryHeadingIdentification : ICategoryHeadingIdentification
    {

        private List<CategoryHeadingModel> _categoryHeadingCollection;
        private List<LineDetailModel> _lineDetailCollection;
        private List<LineDetailModel> _categoryLineDetailCollection;
        private ILaborHeadingIdentification _laborHeadingIdentification;
        private List<LineDetailModel> _itemNoLineDetailCollection;
        public CategoryHeadingIdentification(ILaborHeadingIdentification laborHeadingIdentification)
        {
            _laborHeadingIdentification = laborHeadingIdentification;
        }


        public List<CategoryHeadingModel> CategoryHeadingIdentify(List<CategoryEntity> categoryCollection,
                                                                        List<LineDetailModel> lineDetailCollection,
                                                                        List<JobTitleWordEntity> jobTitleWordList,
                                                                        List<LaborHeadingEntity> LaborHeadingList,
                                                                        JobTitleNewModel jobTitleNewModel)
        {
            _lineDetailCollection = lineDetailCollection;
            _categoryHeadingCollection = new List<CategoryHeadingModel>();
            _itemNoLineDetailCollection = new List<LineDetailModel>();
            //Search all categories except Labor category
            SearchByCategory(categoryCollection);


            SearchLaborCategoryData(_categoryHeadingCollection, categoryCollection, lineDetailCollection,
                jobTitleWordList, LaborHeadingList, jobTitleNewModel);

            
            foreach (var categoryHeadings in _categoryHeadingCollection)
            {
                var orderByLineDetails = categoryHeadings.LineDetails.OrderBy(line => line.LineNumber).ToList();

                categoryHeadings.LineDetails = orderByLineDetails;
            }

            return _categoryHeadingCollection;
        }

        private void ExtractItemNoHeading(List<LineDetailModel> lineDetailCollection)
        {
            List<LineDetailModel> itemNoLineDetails = null;

            if (_itemNoLineDetailCollection.Count > 1)
            {
                itemNoLineDetails = _itemNoLineDetailCollection.OrderBy(line => line.LineNumber).ToList();
            }

            List<LineDetailModel> beforeItemNoCollection = _lineDetailCollection.Where(line => line.LineNumber < itemNoLineDetails[0].LineNumber).ToList();

            for (int index = beforeItemNoCollection.Count - 1; index >= 0; index--)
            {
              LineDetailModel  beforeItemNo =  beforeItemNoCollection[index];

                if(beforeItemNo.HeadingElement == true || beforeItemNo.HeadingInSubLine == true || beforeItemNo.DocumentSectionHeading == true)
                {
                  if(lineDetailCollection == null)
                    {
                        lineDetailCollection = new List<LineDetailModel>();
                        lineDetailCollection.Add(beforeItemNo);
                    }
                    else
                    {
                        lineDetailCollection.Add(beforeItemNo);
                    }
                    return;
                }
            }
        }

        private void SearchLaborCategoryData(List<CategoryHeadingModel> categoryHeadingCollection, List<CategoryEntity> categoryCollection,
            List<LineDetailModel> lineDetailCollection, List<JobTitleWordEntity> jobTitleWordList, List<LaborHeadingEntity> LaborHeadingList,
            JobTitleNewModel jobTitleNewModel)
        {

            CategoryEntity categoryEntity = categoryCollection.FirstOrDefault(cat => cat.Name == "Labor");
            if (categoryEntity != null)
            {

                CategoryHeadingModel categoryHeading = _laborHeadingIdentification.Get(lineDetailCollection, jobTitleWordList,
                    LaborHeadingList, categoryEntity.CategoryId, jobTitleNewModel);

                if (categoryHeading != null)
                {
                    _categoryHeadingCollection.Add(categoryHeading);
                }
            }
        }

        private void SearchByCategory(List<CategoryEntity> categoryCollection)
        {
            foreach (var category in categoryCollection)
            {
                if(category.Name == "Scope")
                {
                    var temp = "";
                }
                //new
                if (category.Name == "Labor")
                {
                    continue;
                }

                var lineDetailCollection = SearchBySynonyms(category);

                if(category.Name == "Technical Requirements")
                {
                    if(_itemNoLineDetailCollection != null && _itemNoLineDetailCollection.Count > 0)
                    {
                        ExtractItemNoHeading(lineDetailCollection);
                    }
                    
                }

                if (lineDetailCollection != null && lineDetailCollection.Count > 0)
                {
                    CategoryHeadingModel categoryHeading = new CategoryHeadingModel();
                    categoryHeading.CategoryId = category.CategoryId;
                    categoryHeading.CategoryName = category.Name;
                    categoryHeading.Color = category.Color;
                    categoryHeading.LineDetails = lineDetailCollection;

                    _categoryHeadingCollection.Add(categoryHeading);
                }
                else
                {

                }


            }
        }

        private List<LineDetailModel> SearchBySynonyms(CategoryEntity category)
        {
            bool InstanceExist = true;
            List<LineDetailModel> lineDetailCollection = null;
            _categoryLineDetailCollection = null;

            if(category.Name == "Background")
            {
                var temp1 = "";
            }
            foreach (var synonym in category.CategorySynonym)
            {
                if (synonym.Synonym == "Background")
                {
                    var temp1 = "";
                }

                List<LineDetailModel> nodes = null;


                foreach (var lineDetail in _lineDetailCollection)
                {
                    if (lineDetail.Text.Contains("Background"))
                    {
                        var temp1 = "";
                    }
                    
                    if (synonym.Synonym == "ITEM NO" &&
                        category.Name == "Technical Requirements" &&
                        lineDetail.Text.ToLower().Contains("item no") &&
                        lineDetail.Element == "table")
                    {

                        _itemNoLineDetailCollection.Add(lineDetail);
                        
                    }

                    if ((lineDetail.HeadingElement == false && lineDetail.TemporaryHeading == false && lineDetail.HeadingInSubLine == false))
                    {
                        continue;
                    }

                    string lineHeading = "";

                    if (lineDetail.Text.Length > 100)
                    {
                        lineHeading = lineDetail.Text.Substring(0, 100);
                    }
                    else
                    {
                        lineHeading = lineDetail.Text;
                    }

                    if (lineHeading.ToLower().Contains(synonym.Synonym.ToLower()))
                    {
                        if (nodes == null)
                        {
                            nodes = new List<LineDetailModel>();
                        }

                        nodes.Add(lineDetail);
                    }
                }

                //var nodes = _lineDetailCollection.Where(line => line.Text.ToLower().Contains(synonym.Synonym.ToLower()) &&
                //																		 (line.HeadingElement == true || line.TemporaryHeading == true ||
                //																		 line.HeadingInSubLine == true)).ToList();

                if (nodes == null) continue;
                lineDetailCollection = PopulateLineCollection(nodes, synonym.Synonym);

                if (lineDetailCollection != null && lineDetailCollection.Count > 0)
                {

                    foreach (var item in lineDetailCollection)
                    {
                        if (InstanceExist)
                        {
                            _categoryLineDetailCollection = new List<LineDetailModel>();
                            InstanceExist = false;
                        }

                        var nodeText = _categoryLineDetailCollection.FirstOrDefault(v => v.Text == item.Text);

                        if (nodeText == null)
                        {
                            item.Synonym = synonym.Synonym;
                            _categoryLineDetailCollection.Add(item);
                        }
                    }

                }
            }

            if (_categoryLineDetailCollection != null && _categoryLineDetailCollection.Count > 0)
            {
                _categoryLineDetailCollection = ExtractHeadingNode(_categoryLineDetailCollection);
                //_categoryLineDetailCollection = _categoryLineDetailCollection.Where(node => node.Text.Length < 101).ToList();

            }

            return _categoryLineDetailCollection;

        }

        private List<LineDetailModel> ExtractHeadingNode(List<LineDetailModel> _categoryLineDetailCollection)
        {
            List<LineDetailModel> lineDetailModelsTemp = new List<LineDetailModel>();
            foreach (var categoryLineDetail in _categoryLineDetailCollection)
            {
                if (categoryLineDetail.HeadingInSubLine == false)
                {
                    if (categoryLineDetail.Text.Length < 101)
                    {
                        lineDetailModelsTemp.Add(categoryLineDetail);
                    }
                }
                else
                {
                    if (categoryLineDetail.SubLineDetailCollection[0].Text.Length < 101)
                    {
                        lineDetailModelsTemp.Add(categoryLineDetail);
                    }
                }
            }

            return lineDetailModelsTemp;

        }

        private List<LineDetailModel> PopulateLineCollection(IEnumerable<LineDetailModel> nodes, string synonymName)
        {
            List<LineDetailModel> lineDetailCollection = new List<LineDetailModel>();


            foreach (var node in nodes)
            {
                if (node.Text.Contains("Have a clean background check"))
                {
                    var t = "";
                }

                if (node.HeadingElement == false && node.HeadingInSubLine == true)
                {
                    bool headingInSubline =  extractHeadingFromSublineCollection(node, synonymName);
                    if (headingInSubline == false) continue;
                }

                lineDetailCollection.Add(node);

            }

            return lineDetailCollection;
        }

        private bool extractHeadingFromSublineCollection(LineDetailModel node, string synonymName)
        {
            string headingInSubline = "";
            foreach (var item in node.SubLineDetailCollection)
            {
                if (item.HeadingElement == true)
                {
                    headingInSubline = headingInSubline + item.Text;
                }
                else
                {
                    break;
                }
            }

            if (headingInSubline.ToLower().Contains(synonymName.ToLower()) == true)
            {
                return true;
            }
            return false;
        }
    }
}
