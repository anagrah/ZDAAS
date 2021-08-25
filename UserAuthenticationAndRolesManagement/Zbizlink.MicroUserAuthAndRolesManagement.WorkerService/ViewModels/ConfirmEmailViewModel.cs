using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.MicroUserAuthAndRolesManagement.WorkerService.ViewModels
{
    public class ConfirmEmailViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Token { get; set; }
    }
}
