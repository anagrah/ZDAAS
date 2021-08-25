using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace Zbizlink.MicroEmailBroadCaster.WorkerService.Helper
{
    public static class EncryptionOrDecryption
    {
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
        public static string EncryptParameter(string ClearText)
        {
            string EncryptionKey = "ZDAASPMAPSP@RAM";
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
            ClearText = System.Web.HttpUtility.UrlEncode(ClearText);
            return ClearText;
        }
        public static string DecryptParameter(string CipherText)
        {
            CipherText = System.Web.HttpUtility.UrlDecode(CipherText);
            string EncryptionKey = "ZDAASPMAPSP@RAM";
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
    }
}
