using System;
using Xunit;
using Zdaas.RFPCommon;
using Zdaas.RFPCommon.Models;
using Zdaas.RFPNodeTree;
namespace Zdaas.RFPNodeTree.UnitTest
{
    public class ListTypeRecognitionTest
    {

        ListTypeRecognition _listTypeRecognition;
        public ListTypeRecognitionTest()
        {
            _listTypeRecognition = new ListTypeRecognition();
        }

        [Fact]
        public void IsMustNumber()
        {
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = "7 this is test";


            bool result =  _listTypeRecognition.RecognizeListType(lineDetailModel);

            Assert.True(result);
        }

        [Fact]
        public void IsMustNumberDotZero()
        {
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = "7.0 this is test";


            bool result = _listTypeRecognition.RecognizeListType(lineDetailModel);

            Assert.True(result);
        }

        [Fact]
        public void IsMustNumberBothSideBracket()
        {
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = "(7) this is test";


            bool result = _listTypeRecognition.RecognizeListType(lineDetailModel);

            Assert.True(result);
        }

        [Fact]
        public void IsMustNumberRightSideBracket()
        {
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = "34) this is test";


            bool result = _listTypeRecognition.RecognizeListType(lineDetailModel);

            Assert.True(result);
        }

        [Fact]
        public void IsMustNumberDotNumber()
        {
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = "12.34 this is test";


            bool result = _listTypeRecognition.RecognizeListType(lineDetailModel);

            Assert.True(result);
        }

        [Fact]
        public void IsMustNumberDot()
        {
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = "2. this is test";


            bool result = _listTypeRecognition.RecognizeListType(lineDetailModel);

            Assert.True(result);
        }


        [Fact]
        public void IsMustAlphabet()
        {
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = "A this is test";
            lineDetailModel.HeadingElement = true;


            bool result = _listTypeRecognition.RecognizeListType(lineDetailModel);

            Assert.True(result);
        }


        [Fact]
        public void IsMustAlphabetLowerDot()
        {
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = "a. this is test";


            bool result = _listTypeRecognition.RecognizeListType(lineDetailModel);

            Assert.True(result);
        }

        [Fact]
        public void IsMustAlphabetUpperDot()
        {
            LineDetailModel lineDetailModel = new LineDetailModel();
            lineDetailModel.Text = "B. this is test";


            bool result = _listTypeRecognition.RecognizeListType(lineDetailModel);

            Assert.True(result);
        }

        



    }
}
