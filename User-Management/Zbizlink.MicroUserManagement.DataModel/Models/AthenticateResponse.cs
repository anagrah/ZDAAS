using System;
using System.Collections.Generic;
using System.Text;
using Zbizlink.MicroUserManagement.DataModel.Bizlink;

namespace Zbizlink.MicroUserManagement.DataModel.Models
{
    public class AuthenticateResponse
    {
        public decimal? Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }
        public Guid ActivationCode { get; set; }
        public Int64 companyId { get; set; }
        public string Source { get; set; }
        public decimal? ClientId { get; set; }
        public AuthenticateResponse(User user, Int64 companyId, decimal? clientId, string token)
        {
            Id = user.UserId;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Username = user.Email;
            Token = token;
            ActivationCode = (Guid)user.ActivationCode;
            this.companyId = companyId;
            Source = user.Source;
            ClientId = clientId;
        }
    }
}
