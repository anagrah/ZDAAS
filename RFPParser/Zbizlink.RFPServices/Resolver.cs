using Microsoft.Extensions.DependencyInjection;
using Zbizlink.RFPServices.Contracts;
using Zbizlink.RFPServices.Services;
using Zdaas.RFPServices.Contracts;
using Zdaas.RFPServices.Services;
using Zdaas.RFPServices.StoreProcedure;
using Zdaas.RFPServices.StoreProcedure.Contracts;

namespace Zdaas.RFPServices
{
    public static class Resolver
    {

        public static void Resolve(IServiceCollection services)
        {
            services.AddTransient<IFileConversionService, FileConversionService>();
            services.AddTransient<IFileManipulationService, FileManipulationService>();
            services.AddTransient<IDocumentService, DocumentService>();
            services.AddTransient<IOpportunityService, OpportunityService>();
            
            services.AddTransient<ISummaryService, SummaryService>();
            services.AddTransient<ISummaryServiceNew, SummaryServiceNew>();
            services.AddTransient<ILaborCategoryService, LaborCategoryService>();
            services.AddTransient<IDBProcedure, DBProcedure>();
            services.AddTransient<IProposalSourceService, ProposalSourceService>();
            services.AddTransient<ILookupDataService, LookupDataService>();
            
        }
    }
}
