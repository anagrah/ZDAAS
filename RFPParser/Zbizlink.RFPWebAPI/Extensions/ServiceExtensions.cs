using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Zbizlink.RFPCommon.Models;
using Zbizlink.RFPDataModel.DBContext;
using Zbizlink.RFPDataModel.Models;
using Zdass.DIResolver;

namespace Zdaas.RFPWebAPI.Extensions
{
    public static class ServiceExtensions
    {
        
        private static ZdaasAppSettings _zdaasAppSettings;
        internal static ZdaasAppSettings ZdaasAppSettings
        {
            get { return _zdaasAppSettings; }

        }

        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllHeaders",
                      builder =>
                      {
                          builder.AllowAnyOrigin()
                                 .AllowAnyHeader()
                                 .AllowAnyMethod();
                      });
            });


        }

        //public static void ConfigureCors(this IServiceCollection services)
        //{
        //    services.AddCors(options =>
        //    {
        //        options.AddPolicy("AllowSpecificOrigins",
        //              builder =>
        //              {
        //                  builder.WithOrigins(_zdaasAppSettings.SpecificCorsOriginsUrls)
        //                  .AllowAnyHeader()
        //                  .AllowAnyMethod();
        //              });
        //    });


        //}

        public static void ConfigureLoggerService(this IServiceCollection services)
        {
            //services.AddSingleton<ILoggerManager, LoggerManager>();
        }

        public static void ConfigureRFPManipulation(this IServiceCollection services)
        {

            //services.AddTransient<IZDDocConverterProAuthentication, ZDDocConverterProAuthentication>();
            //services.AddTransient<IZDFileConverter, ZDFileConverter>();
            //services.AddTransient<IZDDocxToHTMLManipulation, ZDDocxToHTMLManipulation>();
            //services.AddTransient<IZDOpportunityPublish, ZDOpportunityPublish>();

            //services.AddTransient<IFileManipulationService, FileManipulationService>();
            //services.AddTransient<IDocumentService, DocumentService>();
            //services.AddTransient<ISummaryService, SummaryService>();
            //services.AddTransient<IFileConversionService, FileConversionService>();
            //services.AddTransient<ICategoryService, CategoryService>();  
        }


        public static void ConfigureServices(this IServiceCollection services)
        {


            //Zdaas.RFPServices.Contracts
            //services.AddTransient<IFileConversionService, FileConversionService>();
            //services.AddTransient<IFileManipulationService, FileManipulationService>();
            //services.AddTransient<IDocumentService, DocumentService>();
            //services.AddTransient<IOpportunityService, OpportunityService>();
            //services.AddTransient<ICategoryService, CategoryService>();
            //services.AddTransient<ISummaryService, SummaryService>();

        }

        public static void ConfigureRFPDataModel(this IServiceCollection services)
        {
            //services.AddTransient<IUnitOfWork, UnitOfWork>();

        }


        public static void ZdaasParserStartup(this IServiceCollection services)
        {
            //Resolver resolver = new Resolver();
            Resolver.ZdaasParserStartup(services);
            //Resolver resolver = new Resolver();
            //resolver.Resolve(services);
            //var assemblyLoggerService = Assembly.Load("Zdaas.LoggerService");
            //services.RegisterAssemblyPublicNonGenericClasses(assemblyLoggerService)
            //    .AsPublicImplementedInterfaces();



            //var assemblyRFPServices = Assembly.Load("Zdaas.RFPServices");
            //services.RegisterAssemblyPublicNonGenericClasses(assemblyRFPServices)
            //    .Where(x => x.Name.EndsWith("Service"))
            //    .AsPublicImplementedInterfaces();

            //var assemblyRFPManipulation = Assembly.Load("Zdaas.RFPManipulation");
            //var assemblyRFPManipulation1 = Assembly.GetAssembly(typeof(ZDDocxToHTMLManipulation));
            //services.RegisterAssemblyPublicNonGenericClasses(assemblyRFPManipulation1)
            //    .Where(x => x.Name.StartsWith("ZD"))
            //    .AsPublicImplementedInterfaces();

            //var assemblyRFPDataModel = Assembly.Load("Zdaas.RFPDataModel");
            //services.RegisterAssemblyPublicNonGenericClasses(assemblyRFPDataModel)
            //    .AsPublicImplementedInterfaces();


        }
        public static void ConfigureAppsSetting(this IServiceCollection services, IConfiguration Configuration)
        {
            services.Configure<ZdaasAppSettings>(Configuration.GetSection("AppSetting"));
            _zdaasAppSettings = new ZdaasAppSettings();
            ConfigurationBinder.Bind(Configuration.GetSection("AppSetting"), _zdaasAppSettings);
            services.AddSingleton<ZdaasAppSettings>();
            services.AddDbContext<ZRFPParserContext>(options => options.UseSqlServer(_zdaasAppSettings.DBConnectionString));
        }
        public static void ConfigureIISIntegration(this IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {

            });
        }
    }
}
