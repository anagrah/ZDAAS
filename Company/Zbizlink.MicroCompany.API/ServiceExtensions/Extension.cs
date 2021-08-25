using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Zbizlink.MicroCompany.DataModel.Database.DatabaseContext;

namespace Zbizlink.MicroCompany.WebServiceAPI.ServiceExtensions
{
    public static class Extensions
    {
        private static AppSettings _zdaasAppSettings;


        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllHeaders",
                      builder =>
                      {
                          builder.AllowAnyOrigin()
                                 .AllowAnyHeader()
                                 .AllowAnyMethod()
                                 .SetIsOriginAllowed((host) => true);
                      });
            });
        }


        public static void MassTransitConfiguration(this IServiceCollection services, IConfiguration Configuration)
        {
        }

        public static void ZdaasStartup(this IServiceCollection services)
        {

        }
        public static void ConfigureAppsSetting(this IServiceCollection services, IConfiguration Configuration)
        {
            _zdaasAppSettings = new AppSettings();
            ConfigurationBinder.Bind(Configuration.GetSection("AppSetting"), _zdaasAppSettings);
            services.AddSingleton<AppSettings>();
            services.AddDbContext<CompanyManagementContext>(options => options.UseSqlServer(_zdaasAppSettings.DBConnectionString));
        }

        public static void ConfigureIISIntegration(this IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {

            });
        }

       
    }
}
