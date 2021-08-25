
using Zbizlink.MicroCRMDataImport;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;

namespace Zbizlink.MicroCRMDataImport.WebServiceAPI
{
    public static class Configurations
    {
        public static void ConfigureAppsSetting(this IServiceCollection services, IConfiguration Configuration)
        {
            services.Configure<CrmAppSettings>(Configuration.GetSection("AppSetting"));
            var CrmAppSettings = new CrmAppSettings();
            ConfigurationBinder.Bind(Configuration.GetSection("AppSetting"), CrmAppSettings);
            services.AddSingleton<CrmAppSettings>();
            services.AddDbContext<CrmDataImport_DBContext>(options => options.UseSqlServer(CrmAppSettings.DBConnectionString));
        }
        
        public static void CRMStartup(this IServiceCollection services)
        {           
            Resolver.Resolver.CRMStartup(services);
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
    }
}
