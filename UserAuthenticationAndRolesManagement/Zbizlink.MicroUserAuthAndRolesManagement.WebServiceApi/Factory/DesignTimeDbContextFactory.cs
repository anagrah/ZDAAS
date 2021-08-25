using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Zbizlink.MicroUserAuthAndRolesManagement.DataModel.Database.Context;
using System.IO;
using System.Reflection;
using Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Initializers.Contracts;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WebServiceApi.Factory
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApplicationDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.Development.json", optional: true)
                .Build();

            var builder = new DbContextOptionsBuilder<ApplicationDbContext>();
            builder.UseSqlServer(configuration["AppSetting:DBConnectionString"], b => b.MigrationsAssembly(typeof(ApplicationDbContext).GetTypeInfo().Assembly.GetName().Name));

            return new ApplicationDbContext(builder.Options);
        }

    }
}
