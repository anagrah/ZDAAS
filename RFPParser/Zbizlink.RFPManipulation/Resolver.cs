using Microsoft.Extensions.DependencyInjection;
using NetCore.AutoRegisterDi;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Zdaas.RFPConversion;
using Zdaas.RFPConversion.Contracts;
using Zdaas.RFPLaborCategory;
using Zdaas.RFPLaborCategory.Contracts;
using Zdaas.RFPManipulation.Contracts;
using Zdaas.RFPNodeTree;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPManipulation
{
   public static class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddTransient<IZDDocConverterProAuthentication, ZDDocConverterProAuthentication>();
            services.AddTransient<IZDFileConverter, ZDFileConverter>();
            services.AddTransient<IZDDocxToHTMLManipulation, ZDDocxToHTMLManipulation>();
            services.AddTransient<IZDOpportunityPublish, ZDOpportunityPublish>();           
            services.AddTransient<INodeTree, NodeTree>();
            
            services.AddTransient<IFinalHtmlDoc, FinalHtmlDoc>();
            services.AddTransient<ICategoryContentIdentification, CategoryContentIdentification>();
            services.AddTransient<ILaborHeadingIdentification, LaborHeadingIdentification>();
            services.AddTransient<ICategoryHeadingIdentification, CategoryHeadingIdentification>();
            services.AddTransient<IHtmlCleanup, HtmlCleanup>();
            services.AddTransient<IPreviewDocument, PreviewDocument>();
            //services.AddTransient<IDocumentSummary, DocumentSummary>();
            //services.AddTransient<IDocumentSummaryNew, DocumentSummaryNew>();



        }
    }
}
