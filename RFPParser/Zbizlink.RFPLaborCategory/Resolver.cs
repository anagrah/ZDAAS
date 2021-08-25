using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPLaborCategory.Contracts;

namespace Zdaas.RFPLaborCategory
{
    public class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {
            services.AddTransient<ILaborContentIdentification, LaborContentIdentification>();
            services.AddTransient<ILaborContentIdentificationNew, LaborContentIdentificationNew>();

            services.AddTransient<ILaborOpportunity, LaborOpportunity>();
            services.AddTransient<ILaborOpportunityNew, LaborOpportunityNew>();

            //services.AddTransient<ILaborHeadingIdentification, LaborHeadingIdentification>();
            services.AddTransient<ILaborHeadingIdentification, LaborHeadingIdentificationNew>();
        }
    }
}
