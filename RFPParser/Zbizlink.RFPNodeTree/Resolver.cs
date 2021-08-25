using Microsoft.Extensions.DependencyInjection;
using System;
using Zdaas.RFPNodeTree.Contracts;
using Zdaas.RFPCommon.Factory;
using Zdaas.RFPCommon.Factory.Contracts;
using Zdaas.RFPCommon.ListNumbers;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPNodeTree
{
    public static class Resolver
    {

        public static void Resolve(IServiceCollection services)
        {
            
            services.AddTransient<IListTypeRecognition, ListTypeRecognition>();
            services.AddTransient<INodeKeyCreation, NodeKeyCreation>();
            services.AddTransient<ILineSearch, LineSearch>();
         
            services.AddTransient<IHierarchyHeadingNumber, HierarchyHeadingNumber>();
            services.AddTransient<IHierarchyOnlyHeading, HierarchyOnlyHeading>();
            services.AddTransient<IHierarchyOnlyNumber, HierarchyOnlyNumber>();

           
           
           
            services.AddTransient<IHeading, Heading>();
          
            services.AddTransient<IAlphabetRomanAmbiguity, AlphabetRomanAmbiguity>();

            //services.AddScoped<IListNumberCreationFactory, ListNumberCreationFactory>();

            //services.AddSingleton<AlphabetLowerDot>();
            //services.AddSingleton<AlphabetUpperDot>();

            //services.AddSingleton<Number>();
            //services.AddSingleton<NumberDot>();
            //services.AddSingleton<NumberDotNumber>();
            //services.AddSingleton<NumberDotZero>();
            //services.AddSingleton<NumberRBracket>();
            //services.AddSingleton<RomanUpperDot>();
            //services.AddSingleton<AlphabetLowerBBracket>();
            //services.AddSingleton<NumberBBracket>();
            //services.AddSingleton<RomanLowerDot>();


            //services.AddTransient<Func<string, IListNumberCreation>>(serviceProvider => key =>
            //{
            //    switch (key)
            //    {
            //        case "AlphabetLowerDot":
            //            return serviceProvider.GetService<AlphabetLowerDot>();
            //        case "AlphabetUpperDot":
            //            return serviceProvider.GetService<AlphabetUpperDot>();
            //        case "Number":
            //            return serviceProvider.GetService<Number>();
            //        case "NumberDot":
            //            return serviceProvider.GetService<NumberDot>();                    
            //        case "NumberDotNumber":
            //            return serviceProvider.GetService<NumberDotNumber>();
            //        case "NumberDotZero":
            //            return serviceProvider.GetService<NumberDotZero>();
            //        case "NumberRBracket":
            //            return serviceProvider.GetService<NumberRBracket>();
            //        case "RomanUpperDot":
            //            return serviceProvider.GetService<RomanUpperDot>();
            //        case "AlphabetLowerBBracket":
            //            return serviceProvider.GetService<AlphabetLowerBBracket>();
            //        case "NumberBBracket":
            //            return serviceProvider.GetService<NumberBBracket>();
            //        case "RomanLowerDot":
            //            return serviceProvider.GetService<RomanLowerDot>();
            //        default:
            //            return null;
            //    }
            //});
        }
    }
}
