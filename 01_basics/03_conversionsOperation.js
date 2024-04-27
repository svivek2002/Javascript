let score = 33
let score2 = "33"
let score3 = "33abc"
let score4 = null
let score5 = true

// const {score} = req.body

console.log(typeof score); // number
console.log(typeof score2); // string

// let valueInNumber = parseInt(score2)
// or
let newScore2 = Number (score2) // coverts into number
console.log(typeof newScore2); // number

let newScore3 = Number(score3)
console.log(newScore3); // give NaN -> not a number

let newScore4 = Number(score4)
console.log(newScore4); // gives 0

let newScore5 = Number(score5)
console.log(newScore5); // 1

let isLoggedIn = 1
console.log(Boolean (isLoggedIn)); // true

let str = "vivek"
console.log(Boolean (str)); // true

let str2 = ""
console.log(Boolean (str2)); // false

let num = 356
console.log(typeof(String (num))); //string

// Operations

console.log(2*2);
console.log(2**2); // 2^2
console.log(2**3); // 2^3
console.log(2**3**2*2); // 2*(2^3^2) -> 2^10 = 1024

let str1 = "vivek"
let str3 = " singh"

console.log(str1 + str3)

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32


