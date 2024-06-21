const fibonacci = function(numbers) {
    numbers = Number(numbers)
    if (numbers < 0) return 'OOPS';
    if (numbers === 0) return 0;
    if (numbers === 1) return 1;
    if (numbers === 2) return 1;

    let fibo = [1, 1];

    for (let i = 2; i < numbers; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo[numbers-1];
};

// Do not edit below this line
module.exports = fibonacci;

// A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.