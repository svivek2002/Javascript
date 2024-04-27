const score = 400
console.log(score); // 400

const balance = new Number(400)
console.log(balance) // [Number: 400]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // fixes 2 places after decimal --> 400.00

const otherNumber = 123.8655
console.log(otherNumber.toPrecision(3)); // takes precision from msb --> 124

const hundreds = 10000000

console.log(hundreds.toLocaleString()) // changes to int. num system 
console.log(hundreds.toLocaleString('en-IN')) // changes to int. num system 


//      +++++++++++++ Maths ++++++++++++++++++++++++++++        //


console.log(Math.abs(-5));
console.log(Math.round(8.5)); // 9
console.log(Math.floor(8.3)); // 8
console.log(Math.ceil(8.3)); // 9
console.log(Math.max(4,3,6,9,18));
console.log(Math.min(4,3,6,9,18));

random = Math.random(); // between 0 and 1(excluded)
console.log(random);
console.log(random * 10); // between 0 and 10(excluded)
console.log((Math.random() * 10) + 1); // between 1 and 11(excluded)
console.log((Math.floor(Math.random() * 10) + 1));  // 1 and 10(included)
console.log((Math.ceil(Math.random() * 10) + 1));  // 1 and 11(included)

// generating numbers between range

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 and 20