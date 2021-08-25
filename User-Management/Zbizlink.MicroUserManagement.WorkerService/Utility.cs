using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Zbizlink.MicroUserManagement.Enum;
using Zbizlink.MicroUserManagement.WorkerService.Enum;
using Zbizlink.MicroUserManagement.WorkerService.ViewModels;

namespace Zbizlink.MicroUserManagement.WorkerService
{
   internal static class Utility
    {
        internal static ClientResponse GenerateResponse(WebApiResponseCode webApiResponseCode, string message = "")
        {

            ClientResponse clientResponse = new ClientResponse();
            clientResponse.code = webApiResponseCode;
            clientResponse.message = message;
            return clientResponse;
        }

        internal static ClientResponse GenerateResponse<T>(WebApiResponseCode webApiResponseCode, T response, string message = "")
        {

            ClientResponse<T> clientResponse = new ClientResponse<T>();
            clientResponse.code = webApiResponseCode;
            clientResponse.message = message;
            clientResponse.response = response;
            return clientResponse;
        }


        public static string Encrypt(string ClearText)
        {
            string EncryptionKey = "ZDAASPMAPS";
            byte[] clearBytes = Encoding.Unicode.GetBytes(ClearText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    ClearText = Convert.ToBase64String(ms.ToArray());
                }
            }
            return ClearText;
        }

        public static string Decrypt(string CipherText)
        {
            try
            {
                string EncryptionKey = "ZDAASPMAPS";
                byte[] cipherBytes = Convert.FromBase64String(CipherText);
                using (Aes encryptor = Aes.Create())
                {
                    Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                    encryptor.Key = pdb.GetBytes(32);
                    encryptor.IV = pdb.GetBytes(16);
                    using (MemoryStream ms = new MemoryStream())
                    {
                        using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                        {
                            cs.Write(cipherBytes, 0, cipherBytes.Length);
                            cs.Close();
                        }
                        CipherText = Encoding.Unicode.GetString(ms.ToArray());
                    }
                }
                return CipherText;
            }
            catch { return ""; }
        }
    }
}
