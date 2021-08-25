using Microsoft.Extensions.DependencyInjection;
using System;
using Zdaas.RFPOpportunityRFPNodeTree.Contracts;
using Zdaas.RFPCommon.Factory;
using Zdaas.RFPCommon.Factory.Contracts;
using Zdaas.RFPCommon.ListNumbers;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPOpportunityRFPNodeTree
{
    public static class Resolver
    {

        public static void Resolve(IServiceCollection services)
        {

            services.AddTransient<IOpportunityNodeTree, OpportunityNodeTree>();

            services.AddTransient<IListTypeRecognition, ListTypeRecognition>();
            services.AddTransient<INodeKeyCreation, NodeKeyCreation>();
            services.AddTransient<ILineSearch, LineSearch>();
         
            services.AddTransient<IHierarchyHeadingNumber, HierarchyHeadingNumber>();
            services.AddTransient<IHierarchyOnlyHeading, HierarchyOnlyHeading>();
            services.AddTransient<IHierarchyOnlyNumber, HierarchyOnlyNumber>();
           
            services.AddTransient<IHeading, Heading>();
          
            services.AddTransient<IAlphabetRomanAmbiguity, AlphabetRomanAmbiguity>();

            
        }
    }
}
