module.exports = function toReadable (number) {
   
    const getNumberString = (theNumber) => {

        const numbers1To20 = Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty');
        const tens1To9 = Array ('', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
        const stringNumber = theNumber.toString();
    
        if (theNumber === 0) {
            return 'zero';
        }
        if (theNumber < 20) {
            return numbers1To20[theNumber];
        }
        if (theNumber < 100) {
            return `${tens1To9[stringNumber[0]]} ${numbers1To20[stringNumber[1]]}`.trim(); 
        }
        if (theNumber < 1000) {
            let tens = getNumberString(theNumber % 100);
            return `${numbers1To20[stringNumber[0]]} hundred ${tens === 'zero' ? '' : tens}`.trim(); 
        }
    }

    return getNumberString(number);

}
