using AutoMapper;
using HtmlAgilityPack;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using Zdaas.RFPBusinessModel;
using Zdaas.LoggerService;
using Zdaas.RFPDataModel.Contracts;
using Zdaas.RFPDataModel.UnitOfWork;
using Zdaas.RFPManipulation.Models;

namespace Zdaas.RFPManipulation.Contracts
{
    public abstract class BaseRFPManipulation
    {
        //private readonly UnitOfWork _unitOfWork;
        private readonly IUnitOfWork _unitOfWork;
        public List<CategoryEntity> Categories = new List<CategoryEntity>();
        public string PageSize { get; set; } = "700";
        public HtmlNode HeadNode { get; set; }

        public HtmlNode BodyNode { get; set; }
        private IMapper _mapper;
        //public List<CategoryModel> Categories { get; private set; }
       

        public HtmlDocument _htmlDocument;

        
        public BaseRFPManipulation(IUnitOfWork unitOfWork, IMapper mapper)
        {
           
            //_unitOfWork = new UnitOfWork();
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            //LoadCategories();



        }
        private List<CategoryEntity> LoadCategories()
        {
            Categories.Clear();

           
               
                var category = _unitOfWork.CategoryRepository.GetSelectedColumn(
                    cat => new CategoryEntity()
                    {
                        CategoryId = cat.CategoryId,
                        Name = cat.Name,
                        CategorySynonym = (ICollection<CategorySynonymEntity>)cat.CategorySynonym.Select
                        (syn => new CategorySynonymEntity() { Synonym = syn.Synonym }).ToList()
                    });
               
                foreach (var cat in category)
                {
                    Categories.Add(_mapper.Map<CategoryEntity>(cat));

                }
            
           
            


            return Categories;



        }


        public void SetHeadAndBodyNode(HtmlDocument htmlDocument)
        {

            HeadNode = htmlDocument.DocumentNode.SelectSingleNode("//head");
            BodyNode = htmlDocument.DocumentNode.SelectSingleNode("//body");
        }



    }
}
