using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPCommon.Contracts;
using Zdaas.RFPCommon.ListNumbers.Contracts;

namespace Zdaas.RFPCommon.ListNumbers
{
    public class Heading : IHeading
    {
        public string GetChild(string heading)
        {
            switch (heading)
            {
                case "h1":
                    return "h2";
                case "h2":
                    return "h3";
                case "h3":
                    return "h4";
            }
            return "";
        }

        public bool GetChild(LineDetailModel previousLineHeading, LineDetailModel currentLineDetail)
        {
            
                if(previousLineHeading.FontSize > currentLineDetail.FontSize)
                {
                    return true;
                }
            
            return false;
        }

        public bool GetSibling(LineDetailModel previousLineHeading, LineDetailModel currentLineDetail)
        {
            
            if (previousLineHeading.FontSize == currentLineDetail.FontSize)
            {
                return true;
            }

            return false;
        }
        

        public string GetSibling(string heading)
        {
            return heading;
        }
    }
}
