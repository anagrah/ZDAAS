using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;
using Zbizlink.MicroUserManagement.WebServiceAPI.ServiceExtensions;
using Microsoft.AspNetCore.Authentication;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Zbizlink.MicroUserManagement.WorkerService.Mapping;

namespace Zbizlink.MicroUserManagement.WebServiceAPI
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
            services.AddGrpc();
            var mappingConfig = new MapperConfiguration(mc => mc.AddProfile<MappingProfile>());
            IMapper Mapper = mappingConfig.CreateMapper();
            services.AddSingleton(Mapper);
            services.AddAutoMapper(typeof(Startup));
           
            services.AddControllers().AddNewtonsoftJson(options => { options.SerializerSettings.ContractResolver = new DefaultContractResolver(); });
            services.AddMvc().AddNewtonsoftJson();
            services.ConfigureCors();
            services.ZdaasStartup();
            services.ConfigureAppsSetting(Configuration);
            services.Configure<AppSettings>(Configuration.GetSection("AppSetting"));
            services.MassTransitConfiguration(Configuration);
            services.ConfigureIISIntegration();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("AllowAllHeaders");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.ConfigureCustomExceptionMiddleware();
            app.UseHttpsRedirection();
            app.UseRouting();
            
            app.UseAuthorization();
            app.UseMiddleware<AuthenticationMiddleware>();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Zbizlink UserMangement - Microservices");
                });
            });
        }
    }
}
