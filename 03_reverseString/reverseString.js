const reverseString = function(string) {
    let array = string.split("");
    let msg = '';
    for (let i = array.length-1; i >= 0; i--) {
        msg += array[i];
    }
return msg;
}

// Do not edit below this line
module.exports = reverseString;
