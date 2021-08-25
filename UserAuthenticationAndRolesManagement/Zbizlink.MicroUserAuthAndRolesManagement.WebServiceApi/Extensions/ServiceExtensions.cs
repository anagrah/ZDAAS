using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.DependencyInjection;
using UserAuthResolver = Zbizlink.MicroUserAuthAndRolesManagement.Resolver.UserAuthAndRolesManagementResolver;
using Microsoft.Extensions.Configuration;
using MassTransit;
using Zbizlink.Micro.RabbitMessageQueueBus;
using Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi.Consumer;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Database.Context;
using Microsoft.EntityFrameworkCore;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi.Extensions
{
    public static class ServiceExtensions
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
                                 .AllowAnyMethod();
                      });
            });


        }

        public static void AuthorizationStartup(this IServiceCollection services)
        {

            UserAuthResolver.AuthorizationStartup(services);

        }
        public static void MassTransitConfiguration(this IServiceCollection services, IConfiguration Configuration)
        {
            BusConstants modelBusConstant = new BusConstants(_zdaasAppSettings.RabbitMQUri, _zdaasAppSettings.UserName, _zdaasAppSettings.Password, _zdaasAppSettings.Queue);
           
            services.AddMassTransit(cfg =>
            {
                cfg.AddConsumer<ConsumerSendEmailJobStatus>();              
                cfg.AddConsumer<ConsumerEmailJobStatusDone>();
                cfg.AddBus(provider => RabbitMessageQueueBus.ConfigureBus(provider, modelBusConstant, (cfg) =>
                {
                    cfg.ReceiveEndpoint(_zdaasAppSettings.Queue, c =>
                    {
                        c.ConfigureConsumer<ConsumerEmailJobStatusDone>(provider);
                        c.ConfigureConsumer<ConsumerSendEmailJobStatus>(provider);
                        
                    });
                }));
            });
            services.AddMassTransitHostedService();
        }
        public static void ConfigureAppsSetting(this IServiceCollection services, IConfiguration Configuration)
        {
            _zdaasAppSettings = new AppSettings();
            ConfigurationBinder.Bind(Configuration.GetSection("AppSetting"), _zdaasAppSettings);
            services.AddSingleton<AppSettings>();
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(_zdaasAppSettings.DBConnectionString));
        }
    }
}