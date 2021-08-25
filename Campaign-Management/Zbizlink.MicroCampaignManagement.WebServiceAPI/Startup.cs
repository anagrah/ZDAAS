using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Zbizlink.MicroCampaignManagement.WebServiceAPI.Extensions;
using Zbizlink.MicroCampaignManagement.WebServiceAPI.Grpc.GrpcService;
using Zbizlink.MicroCampaignManagement.WebServiceAPI.Mapping;
using Zbizlink.MicroCampaignManagement.WorkerService.Mapping;

namespace Zbizlink.MicroCampaignManagement.WebServiceAPI
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
            services.CMStartup();
            services.AddGrpc();

            services.ConfigureAppsSetting(Configuration);
            services.AddControllers();
            services.ConfigureCors();

            var mappingConfig = new MapperConfiguration(mc => {
                mc.AddProfile(new APIMappingProfile());
                mc.AddProfile(new MappingProfile());
            });

            //var mappingConfig = new MapperConfiguration(mc => mc.AddProfile<APIMappingProfile>());
            IMapper Mapper = mappingConfig.CreateMapper();
            services.AddSingleton(Mapper);
            services.AddAutoMapper(typeof(Startup));
            services.MassTransitConfiguration(Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            //app.UseCors("AllowAllHeaders");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors("AllowAllHeaders");
            app.UseAuthorization();
            app.UseMiddleware<AuthenticationMiddleware>();
            app.UseGrpcWeb();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGrpcService<CampaignCreationService>().EnableGrpcWeb();
                endpoints.MapControllers();
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Zbizlink GRPC - Microservices");
                });
            });
        }
    }
}
