const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = function(numbers) {
  let sum = 1;
  for (let number of numbers) {
    sum *= number;
  }
  return sum;
};

const power = function(number, power) {
  let multiple = number;
    for (let i = 1; i < power; i++) {
      number *= multiple;
    }
    return number;
};

const factorial = function(number) {
  let factorial = 1;
  console.log(`number: ${number}`);
  for (let i = 1; i <= number; i++) {
    factorial *= i;
    console.log(factorial);
  }
  return factorial;
};

console.log(factorial(3));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
