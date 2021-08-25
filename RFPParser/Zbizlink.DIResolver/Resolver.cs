using System;
using Microsoft.Extensions.DependencyInjection;
using RFPManipulation = Zdaas.RFPManipulation;
using RFPServices = Zdaas.RFPServices;
using RFPDataModel = Zdaas.RFPDataModel;
using LoggerService = Zdaas.LoggerService;
using NodeTree = Zdaas.RFPNodeTree;
using RFPLaborCategory = Zdaas.RFPLaborCategory;
using RFPCommon = Zdaas.RFPCommon;
using RFPSummary = Zdaas.RFPSummary;
using OpportunityNodeTree = Zdaas.RFPOpportunityRFPNodeTree;
namespace Zdass.DIResolver
{
    public static class Resolver
    {
       
        public static void ZdaasParserStartup(IServiceCollection services)
        {
            RFPManipulation.Resolver.Resolve(services);
            RFPServices.Resolver.Resolve(services);
            RFPDataModel.Resolver.Resolve(services);
            LoggerService.Resolver.Resolve(services);
            NodeTree.Resolver.Resolve(services);
            RFPLaborCategory.Resolver.Resolve(services);
            RFPCommon.Resolver.Resolve(services);
            RFPSummary.Resolver.Resolve(services);
            OpportunityNodeTree.Resolver.Resolve(services);
        }

    }
}
