using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using Zbizlink.MicroUserManagement.WorkerService.Contracters;

namespace Zbizlink.MicroUserManagement.WebServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenerateTokenController : ControllerBase
    {
        // GET: api/GenerateToken
        private readonly AppSettings _appSettings;
        private readonly IGenerateToken _igt;
        public GenerateTokenController(IOptions<AppSettings> appSettings,IGenerateToken igt)
        {
            _appSettings = appSettings.Value;
            _igt = igt;
        }
        
        [HttpPost]
        public string Post(string username,string password)
        {
            return null;
        }

    }
}
