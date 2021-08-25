using System;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;
namespace Zbizlink.MicroUserManagement.DataModel.Models
{
   public class AdminAuthenticateResponse
    {
        public decimal Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }
        public bool IsActive { get; set; }
        public decimal? CreatedBy { get; set; }
        public bool? ForcePasswordChange { get; set; }
        public Int64 companyId { get; set; }
        public decimal? ClientId { get; set; }
        public AdminAuthenticateResponse(AdminUser user, Int64 companyId, decimal? clientId, string token)
        {
            Id = user.AdminUserId;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Username = user.Email;
            Token = token;
            IsActive = Convert.ToBoolean(user.IsActiveId);
            CreatedBy = user.CreatedBy;
            ForcePasswordChange = user.ForcePasswordChange != true ? false : Convert.ToBoolean(user.ForcePasswordChange);
            this.companyId = companyId;
            ClientId = clientId;
        }
    }
}
