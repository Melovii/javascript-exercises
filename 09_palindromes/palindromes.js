const palindromes = function (string) {
    let reversedString = string.toLowerCase().split('').reverse().join('').replace(/[^a-z0-9]/g, '');
    let cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(`Original: ${string}, Reversed: ${reversedString}`);
    if (reversedString === cleanedString) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
};

palindromes("racecar!");

// Do not edit below this line
module.exports = palindromes;
