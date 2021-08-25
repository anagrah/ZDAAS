using System;
using System.Collections.Generic;
using System.Text;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree.Contracts;

namespace Zdaas.RFPManipulation.Contracts
{
  public  interface IPreviewDocument
    {
        string Get(string htmlFileContent);
        public bool Get(string htmlFileContent, out string finalHtmlDocument, out List<HTMLLineModel> htmlLineCollection, out List<LineDetailModel> _lineDetailCollection);
        public INodeTree NodeTree { get; }
    }
}
