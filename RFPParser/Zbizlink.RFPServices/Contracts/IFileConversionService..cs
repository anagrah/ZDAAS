using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace Zdaas.RFPServices.Contracts
{
   public interface IFileConversionService
    {
        bool FileConvert(byte[] byteArray, string fileName, out string htmlDocument, out string errorMessage);
        bool FileConvert(IFormFile file, string webRootPath, out string htmlDocument, out string errorMessage);
    }
}
