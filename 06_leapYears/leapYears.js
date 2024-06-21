const leapYears = function(input) {

    return year % 4 == 0 && (year % 100 !== 0)

    if (input%4 === 0) {
        if (input%100 === 0) {
            if (input%400 === 0)
                return true;
            return false;
        }
        return true;
    }
};


// Do not edit below this line
module.exports = leapYears;
