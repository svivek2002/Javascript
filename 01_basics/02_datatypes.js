"use strict"; //treat all JS code as newer version

// alert(3+2) // will not run here, it needs JS engine, and we are using node js not browser

let name = "vivek"
let age = 18
let isLoggedIn = false


// number => 2 ^ 53
// BigInt
// String => ""
// Boolean 
// null => standalone value
// undefined =>
// Symbol => unique

// object

console.log(typeof age);
console.log(typeof "vivek")
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// JavaScript is primarily a dynamically typed language means it assign datatypes on the run time 

// Types 

//  On the basis of how they are stored in the memory and how they are accessed they are categorized into two categories 

// Primitives

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123') // used for uniqueness
const anotherId = Symbol('123')
console.log(id === anotherId) // false

// Non-Primitives or Reference type

// Array, objects, Functions
const castes = ["yadav", "rajput", "gupta"] // array of strings
console.log(castes)
console.log(typeof castes); // function object
let myObj = { // objects  
    name : "vivek",
    age : 18
}
console.log(myObj)
console.log(typeof myObj); // function object

const myFunction = function(){
    console.log("Hello World");
}
myFunction()
console.log(typeof myFunction); // object function