const sumAll = function(n1, n2) {
    let sum = 0;
    if (typeof n1 != "number" || typeof n2 != "number" || n1 < 0 || n2 < 0) return 'ERROR';
    if (n1 < n2) {
        for (let i = n1; i <= n2; i++) {
            sum += i;
        }
    } else {
        for (let i = n1; i >= n2 ; i--) {
            sum += i;
        }
    }
    return sum;
};

let text = sumAll(123, 1);
console.log(text);

// Do not edit below this line
module.exports = sumAll;