using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPSummary.Contracts;

namespace Zdaas.RFPSummary
{
    public static class Resolver
    {
        public static void Resolve(IServiceCollection services)
        {

            services.AddTransient<IDocumentSummary, DocumentSummary>();
            services.AddTransient<IDocumentSummaryNew, DocumentSummaryNew>();

        }
    }
}
