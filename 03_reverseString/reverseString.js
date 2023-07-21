const reverseString = function(strings) {
    let string = strings;
    let stringLength = string.length
    let newString = "";

    for (let i = 1; i <= strings.length; i++){

        newString += string[stringLength-i];
        
    }
   
        return newString;
};

// Do not edit below this line
module.exports = reverseString;
