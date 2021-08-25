using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.Initializers.Contracts
{
    public interface IDatabaseInitializer
    {
        Task SeedAsync();
    }
}
