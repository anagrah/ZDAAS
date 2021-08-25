using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MassTransit;
using Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Consumer;
using Zbizlink.Micro.RabbitMessageQueueBus;
using Zbizlink.MicroEmailBroadCaster.Resolver;
using System;
using RMQService =Zbizlink.MicroEmailBroadCaster.WorkerService.RMQ;
using Zbizlink.MicroEmailBroadCaster.DataModel.DBContext;

namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI.ServiceExtensions
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
                                 .AllowAnyMethod();
                      });
            });


        }
        public static void MassTransitConfiguration(this IServiceCollection services, IConfiguration Configuration)
        {
            _zdaasAppSettings = new AppSettings();
            ConfigurationBinder.Bind(Configuration.GetSection("AppSetting"), _zdaasAppSettings);

            BusConstants modelBusConstant = new BusConstants(_zdaasAppSettings.RabbitMQUri, _zdaasAppSettings.UserName, _zdaasAppSettings.Password, _zdaasAppSettings.Queue);

          //BusConstants modelCMBusConstant = new BusConstants(_zdaasAppSettings.RabbitMQUri, _zdaasAppSettings.UserName, _zdaasAppSettings.Password, _zdaasAppSettings.CMQueue);

            services.AddMassTransit(cfg =>
            {
               cfg.AddConsumer<ConsumerReceiver>();
               cfg.AddConsumer<EmailSendConsumerReceiver>();
                cfg.AddBus(ctx => RabbitMessageQueueBus.ConfigureBus(ctx, modelBusConstant, (cfg) =>
                {
                    cfg.ReceiveEndpoint(_zdaasAppSettings.Queue, c =>
                    {
                        c.ConfigureConsumer<ConsumerReceiver>(ctx);
                       c.ConfigureConsumer<EmailSendConsumerReceiver>(ctx);
                    });
                }));
            });

            
            services.AddMassTransitHostedService();
        }
        public static void ConfigureLoggerService(this IServiceCollection services)
        {

        }
        public static void ConfigureRFPManipulation(this IServiceCollection services)
        {

        }
        public static void ConfigureServices(this IServiceCollection services)
        {

        }
        public static void ZdaasStartup(this IServiceCollection services)
        {
            EmailBroadCasterResolver.EmailServiceStartup(services);
        }
        public static void ConfigureAppsSetting(this IServiceCollection services, IConfiguration Configuration)
        {
            _zdaasAppSettings = new AppSettings();
            ConfigurationBinder.Bind(Configuration.GetSection("AppSetting"), _zdaasAppSettings);
            services.AddSingleton<AppSettings>();
            services.AddDbContext<EmailBroadCasterContext>(options => options.UseSqlServer(_zdaasAppSettings.DBConnectionString));
        }

        public static void ConfigureIISIntegration(this IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {

            });
        }
    }
}
