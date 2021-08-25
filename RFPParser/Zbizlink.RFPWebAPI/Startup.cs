using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zdaas.RFPServices.Mapping;
using Zdaas.RFPWebAPI.Extensions;

namespace Zbizlink.RFPWebAPI
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

            var mappingConfig = new MapperConfiguration(mc => mc.AddProfile<MappingProfile>());
            IMapper Mapper = mappingConfig.CreateMapper();
            services.AddSingleton(Mapper);
            services.AddAutoMapper(typeof(Startup));

            services.AddControllers().AddNewtonsoftJson(options => { options.SerializerSettings.ContractResolver = new DefaultContractResolver(); });
            services.AddMvc().AddNewtonsoftJson();

            services.ConfigureAppsSetting(Configuration);

            services.ConfigureCors();

            services.ConfigureIISIntegration();

            services.ZdaasParserStartup();

            //services.ConfigureLoggerService();
            //services.ConfigureServices();
            //services.ConfigureRFPManipulation();
            //services.ConfigureRFPDataModel();



            //Mapper.Initialize(cfg => cfg.AddProfile<MappingProfile>());
            //services.AddAutoMapper();



            // services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
            //.AddJsonOptions(options =>
            //{
            //    options.SerializerSettings.Formatting = Formatting.Indented;
            //    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            //    options.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.Objects;
            //    options.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();

            //    //options.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();
            //    //options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;//.Serialize;
            //    //options.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.Objects;

            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("AllowAllHeaders");
            //app.UseCors("AllowSpecificOrigins");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.ConfigureCustomExceptionMiddleware();
            app.UseHttpsRedirection();

            app.UseRouting();

            //app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
