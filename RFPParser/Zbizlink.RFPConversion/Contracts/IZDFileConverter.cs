using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace Zdaas.RFPConversion.Contracts
{
    public interface IZDFileConverter
    {

        bool FileConvert(byte[] byteStream, string inputDocFileName,  out string convertedHtmlDocument, out string errorMessage);
    }
}
