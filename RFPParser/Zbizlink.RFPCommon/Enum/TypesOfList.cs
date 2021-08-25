using System;
using System.Collections.Generic;
using System.Text;

namespace Zdaas.RFPCommon.Enum
{
    public enum TypesOfList
    {
        Error = 1,
        None,
        Number,
        NumberDot,
        NumberDotNumber,
        NumberRBracket,
        NumberBBracket,
        NumberDotZero,

        Table,

        Alphabet,

        AlphabetUpper,
        AlphabetUpperDot,
        AlphabetUpperDesh,
        AlphabetUpperRBracket,
        AlphabetUpperBBracket,

        AlphabetLower,
        AlphabetLowerDot,
        AlphabetLowerDesh,
        AlphabetLowerRBracket,
        AlphabetLowerBBracket,

        RomanUpper,
        RomanUpperDot,
        RomanLower,
        RomanLowerDot,
        AmbiguousRomanUpperDot,
        AmbiguousRomanLowerDot,
        AmbiguousRomanLowerRBracket,
        AmbiguousRomanUpperRBracket,
        TableOfContents

    }
}
