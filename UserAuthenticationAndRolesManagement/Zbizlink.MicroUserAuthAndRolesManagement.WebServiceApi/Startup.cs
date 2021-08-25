using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Reflection;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Database.Context;
using Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi.Identity;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Authorization;
using Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi.Extensions;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.ViewModels;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Initializers.Contracts;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Models;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Services;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Authorization.Policies;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Constants;
using AppPermissions = Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Permissions.ApplicationPermissions;
using Newtonsoft.Json.Serialization;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi
{
    public class Startup
    {
        private IWebHostEnvironment _env { get; }
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            _env = env;
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            
            string connectionString = Configuration["AppSetting:DBConnectionString"];
            var migrationsAssembly = typeof(ApplicationDbContext).GetTypeInfo().Assembly.GetName().Name;
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString, b => b.MigrationsAssembly(migrationsAssembly)));

            services.AddControllers().AddNewtonsoftJson(options => { options.SerializerSettings.ContractResolver = new DefaultContractResolver(); });

            // add identity
            services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
            {
                options.SignIn.RequireConfirmedEmail = true;
            }).AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                options.User.RequireUniqueEmail = false;
               // options.SignIn.RequireConfirmedEmail = true;
            });

            // Adds IdentityServer.
            services.AddIdentityServer()
              .AddDeveloperSigningCredential()
              .AddConfigurationStore(options =>
              {
                  options.ConfigureDbContext = builder => builder.UseSqlServer(connectionString, b => b.MigrationsAssembly(migrationsAssembly));
              })
              .AddOperationalStore(options =>
              {
                  options.ConfigureDbContext = builder => builder.UseSqlServer(connectionString, b => b.MigrationsAssembly(migrationsAssembly));

                  // this enables automatic token cleanup. this is optional. 
                  options.EnableTokenCleanup = true;
                  options.TokenCleanupInterval = 30;
              })
              .AddAspNetIdentity<ApplicationUser>()
              .AddProfileService<ProfileService>();

            var applicationUrl = Configuration["ApplicationUrl"].TrimEnd('/');

            services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = applicationUrl;
                    options.SupportedTokens = SupportedTokens.Jwt;
                    options.RequireHttpsMetadata = false; // Note: Set to true in production
                    options.ApiName = IdentityServerConfig.ApiName;
                });

            services.AddAuthorization(options =>
            {
                options.AddPolicy(Policies.ViewAllUsersPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ViewUsers));
                options.AddPolicy(Policies.ManageAllUsersPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ManageUsers));

                options.AddPolicy(Policies.ViewAllRolesPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ViewRoles));
                options.AddPolicy(Policies.ViewRoleByRoleNamePolicy, policy => policy.Requirements.Add(new ViewRoleAuthorizationRequirement()));
                options.AddPolicy(Policies.ManageAllRolesPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ManageRoles));

                options.AddPolicy(Policies.AssignAllowedRolesPolicy, policy => policy.Requirements.Add(new AssignRolesAuthorizationRequirement()));
            });


            // Add cors
            services.AddCors();

            services.AddAutoMapper(typeof(AutoMapperProfile));
            services.AuthorizationStartup();           

            services.AddMvc().AddNewtonsoftJson();
            services.ConfigureCors();           
            services.ConfigureAppsSetting(Configuration);
            services.Configure<AppSettings>(Configuration.GetSection("AppSetting"));
            services.MassTransitConfiguration(Configuration);
           

            // DB Creation and Seeding           

            services.AddTransient<IDatabaseInitializer, IdentityServerDbInitializer>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = IdentityServerConfig.ApiFriendlyName, Version = "v1" });
                c.OperationFilter<AuthorizeCheckOperationFilter>();
                c.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    Type = SecuritySchemeType.OAuth2,
                    Flows = new OpenApiOAuthFlows
                    {
                        Password = new OpenApiOAuthFlow
                        {
                            TokenUrl = new Uri("/connect/token", UriKind.Relative),
                            Scopes = new Dictionary<string, string>()
                            {
                                { IdentityServerConfig.ApiName, IdentityServerConfig.ApiFriendlyName }
                            }
                        }
                    }
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }           
            app.ConfigureCustomExceptionMiddleware();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.DocumentTitle = "Swagger UI - Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi";
                c.SwaggerEndpoint("/swagger/v1/swagger.json", $"{IdentityServerConfig.ApiFriendlyName} V1");
                c.OAuthClientId(IdentityServerConfig.SwaggerClientID);
                c.OAuthClientSecret("no_password");
            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod());

            app.UseIdentityServer();         
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });
        }
    }

}
