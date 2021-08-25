using MassTransit;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zbizlink.CMCommon.Models;
using Zbizlink.MicroCampaignManagement.DataModel.DBContext;
using CMResolver = Zbizlink.MicroCampaignManagement.Resolver;
using Zbizlink.Micro.RabbitMessageQueueBus;
using Zbizlink.Micro.RabbitMessageQueueBus.Model;
using Zbizlink.MicroCampaignManagement.WebServiceAPI.Consumer;

namespace Zbizlink.MicroCampaignManagement.WebServiceAPI.Extensions
{
    public static class ServiceExtensions
    {
        internal static AppSettings appSettings;

        

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

        public static void CMStartup(this IServiceCollection services)
        {

            CMResolver.Resolver.CMStartup(services);
            
        }

        public static void ConfigureAppsSetting(this IServiceCollection services, IConfiguration Configuration)
        {
            appSettings = new AppSettings();
            ConfigurationBinder.Bind(Configuration.GetSection("AppSetting"), appSettings);
            services.AddSingleton<AppSettings>();
            services.AddDbContext<CampaignManagementContext>(options => options.UseSqlServer(appSettings.DBConnectionString));
        }

        public static void MassTransitConfiguration(this IServiceCollection services, IConfiguration Configuration)
        {
            BusConstants modelBusConstant = new BusConstants(appSettings.RabbitMqUri, appSettings.UserName, appSettings.Password, appSettings.Queue);
            
            services.AddMassTransit(cfg =>
            {
                cfg.AddConsumer<ConsumerEmailSendStatus>();
                cfg.AddBus(provider => RabbitMessageQueueBus.ConfigureBus(provider, modelBusConstant, (cfg) =>
                {
                    cfg.ReceiveEndpoint(appSettings.Queue, c =>
                    {
                        c.ConfigureConsumer<ConsumerEmailSendStatus>(provider);
                    });

                }));
            });
            services.AddMassTransitHostedService();
        }

        public static void ConfigureIISIntegration(this IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {

            });
        }

        
    }
}
