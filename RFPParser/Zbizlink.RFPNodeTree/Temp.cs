using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Zdaas.RFPCommon.Models;

namespace Zdaas.RFPNodeTree
{
   internal static class Temp
    {
        public static void TempWirtefile(List<LineDetailModel> lines)
        {
            using (StreamWriter writer = new StreamWriter("E:\\Akmal\\TreeNodeLog.txt"))
            {
                foreach (var line in lines)
                {
                    int end = 80;
                    if (line.Text.Length < end) end = line.Text.Length;
                    //writer.WriteLine("LineN= " +  line.LineNumber + ":Ele= " + line.Element + ":HeaEle= " + line.HeadingElement + ":HeaEleName= " + line.HeadingElementName + ":HeaWithCont= " + line.HeadingWithContent + " :TextA= " + line.TextAlign + " :TextI= " + line.TextIndent + " :MarginL= " + line.MarginLeft + " :PaddingL= " + line.PaddingLeft + " :LeftIndentPT= " + line.LeftIndentPT + " :FontS= " + line.FontSize + " :LineIndex= " + line.ListIndex + " :Content= " + line.Content + " :NodeK= " + line.NodeKey + " :TypeOfListNumber= " + line.TypeOfListNumber + " :Text= " + line.Text.Substring(0, end));

                    writer.WriteLine("LineN= " + line.LineNumber + ":Ele= " + line.Element + ":HeaEle= " + line.HeadingElement + ":HeaEleTemp= " + line.TemporaryHeading + ":HeaEleName= " + line.HeadingElementName + ":HeaWithCont= " + line.HeadingWithContent + " :MarginL= " + line.MarginLeft + " :PaddingL= " + line.PaddingLeft + " :LeftIndentPT= " + line.LeftIndentPT + " :FontS= " + line.FontSize + " :LineIndex= " + line.ListIndex + " :Content= " + line.Content + " :NodeK= " + line.NodeKey + " :TypeOfListNumber= " + line.TypeOfListNumber + " :Text= " + line.Text.Substring(0, end));
                }
                
               
            }
        }
    }
}
