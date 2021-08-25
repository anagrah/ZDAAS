using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MassTransit;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;
using Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Grpc.GrpcService;
using Zbizlink.MicroEmailBroadCaster.WebServiceAPI.Mapping;
using Zbizlink.MicroEmailBroadCaster.WebServiceAPI.ServiceExtensions;
namespace Zbizlink.MicroEmailBroadCaster.WebServiceAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddGrpc(options =>
            {
                options.EnableDetailedErrors = true;
            });
            services.Configure<IISServerOptions>(options =>
            {
                options.AutomaticAuthentication = false;
                options.AllowSynchronousIO = true;
            });
            object p = services.AddControllers().AddNewtonsoftJson(options => { options.SerializerSettings.ContractResolver = new DefaultContractResolver(); });
            services.AddMvc().AddNewtonsoftJson();

            var mappingConfig = new MapperConfiguration(mc => {
                mc.AddProfile(new APIMappingProfile());               
            });

            IMapper Mapper = mappingConfig.CreateMapper();
            services.AddSingleton(Mapper);
            services.AddAutoMapper(typeof(Startup));

            services.ConfigureCors();
            services.ZdaasStartup();
            services.ConfigureAppsSetting(Configuration);
            services.Configure<AppSettings>(Configuration.GetSection("AppSetting"));
            services.ConfigureIISIntegration();
            services.MassTransitConfiguration(Configuration);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(x => x
             .AllowAnyOrigin()
             .AllowAnyMethod()
             .AllowAnyHeader());
            app.UseCors("AllowAllHeaders");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseGrpcWeb();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGrpcService<UserRegistrationSuccessEmailService>().EnableGrpcWeb();

                endpoints.MapControllers();
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Zbizlink Email BroadCaster GRPC - Microservices");
                });
            });
           
        }
    }
}
