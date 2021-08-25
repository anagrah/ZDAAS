using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Zdaas.RFPServices.Contracts;
using System.Net.Http.Headers;
using Zdaas.RFPConversion.Contracts;
using System.Net.Http;

namespace Zdaas.RFPServices.Services
{
    public class FileConversionService : IFileConversionService
    {
        private IZDFileConverter FileConverter;

        public FileConversionService(IZDFileConverter fileConverter)
        {
            FileConverter = fileConverter;
        }

        public bool FileConvert(byte[] byteArray, string fileName,out string htmlDocument, out string errorMessage)
        {
          

            bool  result = FileConverter.FileConvert(byteArray, fileName, out htmlDocument, out errorMessage);

            return result;
        }
        public bool FileConvert(IFormFile file, string webRootPath, out string htmlDocument, out string errorMessage)
        {
            
            htmlDocument = "";
            errorMessage = "";
            bool result = false;
            string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');

            using (var memoryStream = new MemoryStream())
            {
               
                
                file.CopyTo(memoryStream);

                var array = memoryStream.ToArray();
                result = FileConverter.FileConvert(memoryStream.ToArray(), fileName, out htmlDocument, out errorMessage);
                
            }

            return result;
        }

    }
}

