function wordStatistics(inputText){

    var text = inputText;
    var textLen = text.length;

    text = text.toLowerCase();
    text = text.replace(
        /[~@#$%^&\*\\\(\)\+\=\{\}\[\]\|\'\’\‘\`\?\.\,\;\:\!\_\-\/…]/g,
        ' '
        );
    text = text.replace(/\s+/g,' ');
    var words = text.split(' ');
    //text = null;

    var wordLen = words.length;
    var shortTextMsg = "Sorry, the text is too short.";
    if(wordLen < 2) return shortTextMsg;
    
    var currentCounter = 1;
    var wordsByAlphabet = [];
    var wordsByOccurrences = [];

    words = words.sort();
    for(var i = 0; i < words.length; ++i){
        if(words[i + 1] == words[i]) {
            ++currentCounter;
        } else {
            wordsByAlphabet.push(words[i] + " : " + sixDigitNumber(currentCounter));
            wordsByOccurrences.push(sixDigitNumber(currentCounter) + " : " + words[i]);
            currentCounter = 1;
        }
    }

    var uniqueWordCount = wordsByAlphabet.length;
    wordsByAlphabet = wordsByAlphabet.sort();
    wordsByOccurrences = wordsByOccurrences.sort().reverse();
    
    var textLenMsg = "Text length in symbols: "
    var wordCountMsg = "Text length in words: ";
    var uniqueMsg = "Unique words: "
    var byAlphaMsg = "Words by alphabet:";
    var occurMsg = "Words by number of occurrences:"
    var endReport = "(end of report)";
    var nl = "\n";

    var outputMessage = textLenMsg + textLen + nl +
        wordCountMsg + wordLen + nl + nl +
        uniqueMsg + uniqueWordCount + nl + nl +
        byAlphaMsg + nl + wordsByAlphabet.join(nl) + nl + nl +
        occurMsg + nl + wordsByOccurrences.join(nl) + nl + nl +
        endReport + nl;
    
    return outputMessage;
}

function sixDigitNumber(num){
    numString = "";
    for(var x = 6; x > 0; --x){
        if(num < Math.pow(10, x)) {
            numString += "" + "0";
        }
    }
    return numString + "" + num;
}
