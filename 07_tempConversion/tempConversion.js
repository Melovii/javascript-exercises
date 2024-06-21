const convertToCelsius = function(num) {
  let C = (num - 32) * (5 / 9) * 10;
  // return C.toFixed(1);
  return Math.round(C)/10;
};

const convertToFahrenheit = function(num) {
  let F = ((num * 9) / 5 + 32) * 10;
  // return F.toFixed(1);
  return Math.round(F)/10;
};


let C = convertToCelsius(32);
let F = convertToFahrenheit(0);

console.log(C + ' ' + F);

// Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32
// Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
