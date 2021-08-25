using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Zbizlink.RFPStoreProcedureModel;
using Zdaas.RFPServices.Enum;
using Zdaas.RFPServices.ViewModels;

namespace Zdaas.RFPServices
{
  internal static class Utility
    {
        internal static string StringToBinary(string data)
        {
            StringBuilder sb = new StringBuilder();

            foreach (char c in data.ToCharArray())
            {
                sb.Append(Convert.ToString(c, 2).PadLeft(8, '0'));
            }
            return sb.ToString();
        }

        internal static string BinaryToString(string data)
        {
            List<Byte> byteList = new List<Byte>();

            for (int i = 0; i < data.Length; i += 8)
            {
                byteList.Add(Convert.ToByte(data.Substring(i, 8), 2));
            }
            return Encoding.ASCII.GetString(byteList.ToArray());
        }

        //internal static byte[] EncryptStringToBytes_Aes(string plainText, byte[] Key, byte[] IV)
        //{

        //    if (plainText == null || plainText.Length <= 0)
        //        throw new ArgumentNullException("plainText");
        //    if (Key == null || Key.Length <= 0)
        //        throw new ArgumentNullException("Key");
        //    if (IV == null || IV.Length <= 0)
        //        throw new ArgumentNullException("IV");
        //    byte[] encrypted;


        //    using (Aes aesAlg = Aes.Create())
        //    {
        //        aesAlg.Key = Key;
        //        aesAlg.IV = IV;


        //        ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);


        //        using (MemoryStream msEncrypt = new MemoryStream())
        //        {
        //            using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
        //            {
        //                using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
        //                {

        //                    swEncrypt.Write(plainText);
        //                }
        //                encrypted = msEncrypt.ToArray();
        //            }
        //        }
        //    }

        //    return encrypted;

        //}

        internal static string EncryptStringToBytes_Aes(string plainText, byte[] Key, byte[] IV)
        {

            if (plainText == null || plainText.Length <= 0)
                throw new ArgumentNullException("plainText");
            if (Key == null || Key.Length <= 0)
                throw new ArgumentNullException("Key");
            if (IV == null || IV.Length <= 0)
                throw new ArgumentNullException("IV");
            byte[] encrypted;


            using (Aes aesAlg = Aes.Create())
            {
                aesAlg.Key = Key;
                aesAlg.IV = IV;


                ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);


                using (MemoryStream msEncrypt = new MemoryStream())
                {
                    using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                    {
                        using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                        {

                            swEncrypt.Write(plainText);
                        }
                        encrypted = msEncrypt.ToArray();
                    }
                }
            }

            string[] encryptedStringArray = new string[encrypted.Length];

            for (int i = 0; i < encrypted.Length; i++)
            {
                encryptedStringArray[i] = encrypted[i].ToString();
            }

            string byteDocument = String.Join(",", encryptedStringArray
                      .Select(s => s.ToString())
                      .ToArray());

            return byteDocument;

        }

        internal static string DecryptStringFromBytes_Aes(string byteDocument, byte[] Key, byte[] IV)
        {

            string[] convertedstring = byteDocument.Split(',');

            byte[] cipherText = convertedstring.Select(byte.Parse).ToArray();

            if (cipherText == null || cipherText.Length <= 0)
                throw new ArgumentNullException("cipherText");
            if (Key == null || Key.Length <= 0)
                throw new ArgumentNullException("Key");
            if (IV == null || IV.Length <= 0)
                throw new ArgumentNullException("IV");
           
            string plaintext = null;

            using (Aes aesAlg = Aes.Create())
            {
                aesAlg.Key = Key;
                aesAlg.IV = IV;

                
                ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

                
                using (MemoryStream msDecrypt = new MemoryStream(cipherText))
                {
                    using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                    {
                        using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                        {
                            plaintext = srDecrypt.ReadToEnd();
                        }
                    }
                }

            }

            return plaintext;

        }


        internal static string Encode(string str)
        {
            byte[] encbuff = System.Text.Encoding.UTF8.GetBytes(str);
            return Convert.ToBase64String(encbuff);
        }
        internal static string Decode(string str)
        {
            byte[] decbuff = Convert.FromBase64String(str);
            return System.Text.Encoding.UTF8.GetString(decbuff);
        }

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

        internal static ClientResponse MessageDeleteRecordFromDB(DeleteStatus deleteStatus)
        {
            

            if (deleteStatus.ErrorNumber == 0)
            {
                if (deleteStatus.DeletedNumberOfRow == 0)
                {
                    return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.RecordNotFound, 0);
                }
                else if (deleteStatus.DeletedNumberOfRow == 1)
                {
                    return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, "1 record is deleted");
                }
                else if (deleteStatus.DeletedNumberOfRow > 1)
                {
                    return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Success, deleteStatus.DeletedNumberOfRow + " records are deleted");
                }

            }
            else if (deleteStatus.ErrorNumber == 547)
            {
                return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.ChildRecordExist, "One or more Synonym is attached, delete first");
            }



            return Utility.GenerateResponse(Zdaas.RFPServices.Enum.WebApiResponseCode.Fail, "'Something bad happened. Please try again later.'");
        }

        
    }
}
