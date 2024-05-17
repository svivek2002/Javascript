/*
    In JavaScript, almost "everything" is an object.

        *   Booleans can be objects (if defined with the new keyword)
        *   Numbers can be objects (if defined with the new keyword)
        *   Strings can be objects (if defined with the new keyword)
        *   Dates are always objects
        *   Maths are always objects
        *   Regular expressions are always objects
        *   Arrays are always objects
        *   Functions are always objects
        *   Objects are always objects
        *   All JavaScript values, except primitives, are objects.
        
    * JavaScript Objects are Mutable
    * Objects are mutable: They are addressed by reference, not by value. 

*/


/* Objects can be declared in two ways - 
    1. As literal ->  Not Singleton though this
    2. As Constructor -> Always Singleton

*/

// ************************       Singleton        ***********************
/*
        Singletons are used to create an instance of a class if it does not exist or else return the reference of the existing one. This means that singletons are created exactly once during the runtime of the application in the global scope.

        *   The value of a singleton is modified through methods.
        *   The singleton is not freed until the termination of the program.
        
        Declaration: 

        var SingletonInstance = {
            method1: function () { ... }
            method2: function () { ... }
        };
*/

//  As Constructor 
        // Object.create()

const mySym1 = Symbol("mykey1")
const mySym2 = Symbol()
//  As literals objects creation 
const JsUser = {
    // mySym : "myKey1", // symbol here is string type, so wrong way to provide
    Symbol : mySym1, // right way
    // OR
    [mySym2] : "mykey2", 
    name : "Vivek",
    "full name" : "Vivek Singh",
    "age" : "20",
    location : "Noida",
    email : "vivek123@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mondays","Saturdays"]
}

//  Accessing

console.log(JsUser.age);
console.log(JsUser["name"]) // same
console.log(JsUser["full name"]) // useful here when key has more than one words

// console.log(typeof JsUser.mySym) // string
console.log(typeof JsUser.Symbol); // Symbol
console.log(JsUser.Symbol); // Symbol(mykey1)
console.log(JsUser[mySym2]); // mykey2

// if you want to change values of object
JsUser.age = 21
console.log(JsUser.age); // 21

// // if you don't want to change values of object
// Object.freeze(JsUser) // any value can't be changed after these
// JsUser.age = 23 // can't
// // console.log(JsUser.age) // 21
// console.log(JsUser)

// Functions in objects

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log((`Hello ${this.name}`));
}

console.log(JsUser.greeting); // [Function (anonymous)] --> means function is not executed but returns its reference
console.log(JsUser.greeting()); // prints, also returns undefined --> In a function, this refers to the global object.
console.log(JsUser.greetingTwo()) // In a function, in strict mode, this is undefined.

