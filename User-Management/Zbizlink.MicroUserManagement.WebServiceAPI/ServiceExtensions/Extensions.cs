
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;
using Zbizlink.MicroUserManagement.Resolver;
using MassTransit;
using Zbizlink.Micro.RabbitMessageQueueBus;
using System.Net.Http;
using System.Net;
using Grpc.Core;
using Zbizlink.MicroUserManagement.WebServiceAPI.Consumer;
/*
using MassTransit.Saga;
using Zbizlink.Micro.SagaOrchestration;
using Zbizlink.Micro.SagaOrchestration.StateMachines;*/
using MassTransit.Definition;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Zbizlink.Micro.SagaOrchestration.StateMachines;
using MassTransit.Saga;
using Zbizlink.Micro.SagaOrchestration;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.ServiceExtensions
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
                                 .SetIsOriginAllowed((host)=>true);
                      });
            });
        }


        public static void MassTransitConfiguration(this IServiceCollection services, IConfiguration Configuration)
        {
            BusConstants modelBusConstant = new BusConstants(_zdaasAppSettings.RabbitMQUri, _zdaasAppSettings.UserName, _zdaasAppSettings.Password, _zdaasAppSettings.Queue);
            var saga = new SendEmailJobStateMachine();
            var repo = new InMemorySagaRepository<SendEmailJobState>();
            services.TryAddSingleton(KebabCaseEndpointNameFormatter.Instance);
            services.AddMassTransit(cfg =>
            {
                cfg.AddConsumer<ConsumerSendEmailJobStatus>();
                //cfg.AddConsumer<ConsumerEmailJobStartEvent>();
                cfg.AddConsumer<ConsumerEmailJobStatusDone>();
                cfg.AddBus(provider => RabbitMessageQueueBus.ConfigureBus(provider, modelBusConstant, (cfg) =>
                     {
                         cfg.ReceiveEndpoint(_zdaasAppSettings.Queue, c =>
                         {
                             c.ConfigureConsumer<ConsumerEmailJobStatusDone>(provider);
                             c.ConfigureConsumer<ConsumerSendEmailJobStatus>(provider);
                             //c.ConfigureConsumer<ConsumerEmailJobStartEvent>(provider);
                             // c.StateMachineSaga
                             c.StateMachineSaga(saga, repo);
                         });
                     }));
            });
            services.AddMassTransitHostedService();
        }

        public static void ZdaasStartup(this IServiceCollection services)
        {
            UserManagementResolver.AuthorizationStartup(services);
        }
        public static void ConfigureAppsSetting(this IServiceCollection services, IConfiguration Configuration)
        {
            _zdaasAppSettings = new AppSettings();
            ConfigurationBinder.Bind(Configuration.GetSection("AppSetting"), _zdaasAppSettings);
            services.AddSingleton<AppSettings>();
            services.AddDbContext<Bizlink_TestContext>(options => options.UseSqlServer(_zdaasAppSettings.DBConnectionString));
        }

        public static void ConfigureIISIntegration(this IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {

            });
        }

        public static StatusCode? GetStatusCode(HttpResponseMessage response)
        {
            var headers = response.Headers;

            if (!headers.Contains("grpc-status") && response.StatusCode == HttpStatusCode.OK)
                return StatusCode.OK;

            if (headers.Contains("grpc-status"))
                return (StatusCode)int.Parse(headers.GetValues("grpc-status").First());

            return null;
        }
    }
}
